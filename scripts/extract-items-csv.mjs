/**
 * Comprehensive Data Export for Review
 * Exports ALL item data for manual review and enhancement
 * Run with: node scripts/extract-items-csv.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sections that need region data (location-based content)
const LOCATION_SECTIONS = [
  'strangers',
  'treasures',
  'bounties',
  'legendary-animals',
  'gang-hideouts',
  'collectibles',
  'mysteries',
  'pamphlets',
  'missable',
  'camp-requests',
  'graves',
  'companion-activities',
  // Challenge sections
  'horseman',
  'herbalist',
  'explorer',
  'hunter',
  'survivalist'
];

// Enhanced extraction - gets all fields
function extractItems(filePath, sectionId) {
  const content = fs.readFileSync(filePath, 'utf8');
  const items = [];
  
  // More comprehensive pattern matching
  // Match item blocks: { id: 'xxx', text: 'xxx', ... }
  const lines = content.split('\n');
  let currentItem = null;
  let braceCount = 0;
  let itemBuffer = '';
  
  for (const line of lines) {
    // Detect item start
    if (line.includes('id:') && line.includes("'")) {
      braceCount = 1;
      itemBuffer = line;
      continue;
    }
    
    if (braceCount > 0) {
      itemBuffer += '\n' + line;
      braceCount += (line.match(/{/g) || []).length;
      braceCount -= (line.match(/}/g) || []).length;
      
      if (braceCount <= 0) {
        // Parse the complete item
        const item = parseItem(itemBuffer, sectionId);
        if (item) items.push(item);
        braceCount = 0;
        itemBuffer = '';
      }
    }
  }
  
  return items;
}

// Parse a single item from its text buffer
function parseItem(buffer, sectionId) {
  const extractField = (pattern) => {
    const match = buffer.match(pattern);
    return match ? match[1] : '';
  };
  
  // Extract fields with various quote styles
  const id = extractField(/id:\s*['"`]([^'"`]+)['"`]/);
  if (!id) return null;
  
  const text = extractField(/text:\s*['"`]([^'"`]+)['"`]/);
  
  // Tip can be multi-line or have quotes - get until next field or closing brace
  let tip = '';
  const tipMatch = buffer.match(/tip:\s*['"`]([\s\S]*?)['"`]\s*[,}]/);
  if (tipMatch) {
    tip = tipMatch[1].replace(/\n/g, ' ').trim();
  }
  
  // Chapter - can be number or string
  let chapter = extractField(/chapter:\s*['"`]?(\w+)['"`]?[,}\s]/);
  
  // Reward
  let reward = '';
  const rewardMatch = buffer.match(/reward:\s*['"`]([\s\S]*?)['"`]\s*[,}]/);
  if (rewardMatch) {
    reward = rewardMatch[1].replace(/\n/g, ' ').trim();
  }
  
  // Missable/Priority flags
  const isMissable = buffer.includes('missable:') && buffer.includes('true');
  const isPriority = buffer.includes('priority:') && buffer.includes('true');
  
  // Has subItems?
  const hasSubItems = buffer.includes('subItems:');
  
  return {
    id,
    section: sectionId,
    text,
    tip,
    chapter,
    region: '', // To be filled
    reward,
    missable: isMissable || isPriority ? 'YES' : '',
    notes: '' // For user corrections
  };
}

// Main function
async function main() {
  const sectionsDir = path.join(__dirname, '../src/data/sections');
  const allItems = [];
  
  // Process main section files
  const files = fs.readdirSync(sectionsDir);
  
  for (const file of files) {
    if (!file.endsWith('.js') || file === 'index.js') continue;
    
    const filePath = path.join(sectionsDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      const sectionId = file.replace('.js', '');
      
      // Only process location-based sections
      if (!LOCATION_SECTIONS.includes(sectionId)) {
        console.log(`Skipping ${sectionId} (not location-based)`);
        continue;
      }
      
      console.log(`Processing ${sectionId}...`);
      const items = extractItems(filePath, sectionId);
      allItems.push(...items);
    }
  }
  
  // Process challenges subdirectory
  const challengesDir = path.join(sectionsDir, 'challenges');
  if (fs.existsSync(challengesDir)) {
    const challengeFiles = fs.readdirSync(challengesDir);
    for (const file of challengeFiles) {
      if (!file.endsWith('.js') || file === 'index.js') continue;
      
      const sectionId = file.replace('.js', '');
      if (!LOCATION_SECTIONS.includes(sectionId)) {
        console.log(`Skipping challenge ${sectionId}`);
        continue;
      }
      
      const filePath = path.join(challengesDir, file);
      console.log(`Processing challenge ${sectionId}...`);
      const items = extractItems(filePath, `challenge-${sectionId}`);
      allItems.push(...items);
    }
  }
  
  // Generate CSV with all columns
  const header = 'id,section,text,tip,chapter,region,reward,missable,notes';
  const rows = allItems.map(item => {
    const escapeCsv = (str) => `"${(str || '').replace(/"/g, '""')}"`;
    return [
      escapeCsv(item.id),
      escapeCsv(item.section),
      escapeCsv(item.text),
      escapeCsv(item.tip),
      escapeCsv(item.chapter),
      escapeCsv(item.region),
      escapeCsv(item.reward),
      escapeCsv(item.missable),
      escapeCsv(item.notes)
    ].join(',');
  });
  
  const csv = [header, ...rows].join('\n');
  
  const outputPath = path.join(__dirname, '../data-review.csv');
  fs.writeFileSync(outputPath, '\ufeff' + csv, 'utf8'); // BOM for Excel
  
  console.log(`\n✅ Extracted ${allItems.length} items to ${outputPath}`);
  console.log('\n📋 CSV Columns:');
  console.log('  id        - Item unique ID');
  console.log('  section   - Which data file');
  console.log('  text      - Item display name');
  console.log('  tip       - Location/hint text (EDIT if needed)');
  console.log('  chapter   - Chapter requirement');
  console.log('  region    - FILL: ambarino, new-hanover, lemoyne, west-elizabeth, new-austin');
  console.log('  reward    - What you get (EDIT if needed)');
  console.log('  missable  - YES if missable/priority');
  console.log('  notes     - Your corrections/additions');
}

main().catch(console.error);
