/**
 * Comprehensive Data Export - Version 3
 * Includes tip_short and tip_detailed columns
 * Run with: node scripts/extract-all-data.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Process a single section file and extract items
async function extractFromFile(filePath, sectionId) {
  const content = fs.readFileSync(filePath, 'utf8');
  const items = [];
  
  // Find all item objects using a robust regex
  const itemRegex = /{\s*id:\s*['"]([^'"]+)['"]/g;
  let match;
  
  while ((match = itemRegex.exec(content)) !== null) {
    const startIdx = match.index;
    
    // Find the complete object by matching braces
    let braceCount = 0;
    let endIdx = startIdx;
    let inString = false;
    let stringChar = null;
    let escaped = false;
    
    for (let i = startIdx; i < content.length; i++) {
      const char = content[i];
      
      if (escaped) {
        escaped = false;
        continue;
      }
      
      if (char === '\\') {
        escaped = true;
        continue;
      }
      
      if (inString) {
        if (char === stringChar) {
          inString = false;
        }
        continue;
      }
      
      if (char === '"' || char === "'") {
        inString = true;
        stringChar = char;
        continue;
      }
      
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
      
      if (braceCount === 0) {
        endIdx = i + 1;
        break;
      }
    }
    
    const itemStr = content.substring(startIdx, endIdx);
    
    // Parse fields manually
    const id = extractField(itemStr, 'id');
    const text = extractField(itemStr, 'text');
    const tip = extractField(itemStr, 'tip');
    const chapter = extractField(itemStr, 'chapter');
    const reward = extractField(itemStr, 'reward');
    const region = extractField(itemStr, 'region');
    const missable = itemStr.includes('missable: true') || itemStr.includes('priority: true');
    
    if (id && text) {
      items.push({
        id,
        section: sectionId,
        text,
        tip_short: '', // To be filled by user/AI
        tip_detailed: tip || '', // Current tip as starting point
        chapter: chapter || '',
        region: region || '',
        reward: reward || '',
        missable: missable ? 'YES' : '',
        notes: ''
      });
    }
  }
  
  return items;
}

// Extract a quoted field value
function extractField(str, fieldName) {
  const patterns = [
    new RegExp(`${fieldName}:\\s*'([^']*(?:\\\\.[^']*)*)'`),
    new RegExp(`${fieldName}:\\s*"([^"]*(?:\\\\.[^"]*)*)"`),
    new RegExp(`${fieldName}:\\s*\`([^\`]*)\``),
    new RegExp(`${fieldName}:\\s*([a-zA-Z0-9]+)\\s*[,}]`)
  ];
  
  for (const pattern of patterns) {
    const match = str.match(pattern);
    if (match) {
      return match[1].replace(/\\'/g, "'").replace(/\\"/g, '"');
    }
  }
  return null;
}

// Main function
async function main() {
  const sectionsDir = path.join(__dirname, '../src/data/sections');
  const allItems = [];
  
  const filesToProcess = [];
  
  // Add main section files
  const files = fs.readdirSync(sectionsDir);
  for (const file of files) {
    if (file.endsWith('.js') && file !== 'index.js') {
      filesToProcess.push({
        path: path.join(sectionsDir, file),
        section: file.replace('.js', '')
      });
    }
  }
  
  // Add challenge files
  const challengesDir = path.join(sectionsDir, 'challenges');
  if (fs.existsSync(challengesDir)) {
    const challengeFiles = fs.readdirSync(challengesDir);
    for (const file of challengeFiles) {
      if (file.endsWith('.js') && file !== 'index.js') {
        filesToProcess.push({
          path: path.join(challengesDir, file),
          section: 'challenge-' + file.replace('.js', '')
        });
      }
    }
  }
  
  // Process all files
  for (const { path: filePath, section } of filesToProcess) {
    console.log(`Processing ${section}...`);
    const items = await extractFromFile(filePath, section);
    console.log(`  → ${items.length} items found`);
    allItems.push(...items);
  }
  
  // Sort by section then by id
  allItems.sort((a, b) => {
    if (a.section !== b.section) return a.section.localeCompare(b.section);
    return a.id.localeCompare(b.id);
  });
  
  // Generate CSV with dual tip columns
  const header = 'id,section,text,tip_short,tip_detailed,chapter,region,reward,missable,notes';
  const rows = allItems.map(item => {
    const escapeCsv = (str) => `"${(str || '').replace(/"/g, '""')}"`;
    return [
      escapeCsv(item.id),
      escapeCsv(item.section),
      escapeCsv(item.text),
      escapeCsv(item.tip_short),
      escapeCsv(item.tip_detailed),
      escapeCsv(item.chapter),
      escapeCsv(item.region),
      escapeCsv(item.reward),
      escapeCsv(item.missable),
      escapeCsv(item.notes)
    ].join(',');
  });
  
  const csv = [header, ...rows].join('\n');
  
  const outputPath = path.join(__dirname, '../data-review.csv');
  fs.writeFileSync(outputPath, '\ufeff' + csv, 'utf8');
  
  console.log(`\n✅ Total: ${allItems.length} items extracted`);
  console.log(`📁 Saved to: ${outputPath}`);
  console.log('\n📋 Columns:');
  console.log('  tip_short    → Concise, goal-oriented tip (1 line max)');
  console.log('  tip_detailed → Narrative Western-style description');
  console.log('  region       → ambarino, new-hanover, lemoyne, west-elizabeth, new-austin');
  console.log('  reward       → What player receives');
  console.log('  missable     → YES if can be permanently missed');
}

main().catch(console.error);
