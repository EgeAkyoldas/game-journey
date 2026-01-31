import fs from 'fs';
const lines = fs.readFileSync('data-review.csv', 'utf8').split('\n');
console.log('Total items:', lines.length - 1);
console.log('\nBreakdown by section:');
const sections = {};
lines.slice(1).forEach(l => {
  const match = l.match(/^"[^"]+","([^"]+)"/);
  if (match) sections[match[1]] = (sections[match[1]] || 0) + 1;
});
Object.entries(sections)
  .sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => console.log(`  ${v.toString().padStart(4)} ${k}`));
