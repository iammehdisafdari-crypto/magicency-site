import fs from 'node:fs';

const content = fs.readFileSync('dist/assets/index-EHcMEvnM.js', 'utf8');
const lines = content.split('\n');
console.log('Total lines in main bundle:', lines.length);

lines.forEach((l, i) => {
  let idx = 0;
  while ((idx = l.indexOf('.set(', idx)) !== -1) {
    const snippet = l.slice(Math.max(0, idx - 80), Math.min(l.length, idx + 120));
    console.log(`Line ${i + 1}, col ${idx}:`);
    console.log(`   ...${snippet}...`);
    idx += 5;
  }
});
