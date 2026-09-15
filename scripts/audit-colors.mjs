import fs from 'fs';
import path from 'path';

const officialHexes = new Set([
  '#050505', '#07101C', '#FFFFFF', '#8B93A7', '#DD0060',
  '#FFF', '#000', '#000000'
]);

function getFiles(dir, files = []) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') getFiles(full, files);
    } else if (/\.(css|jsx?)$/.test(file)) {
      files.push(full);
    }
  }
  return files;
}

const files = getFiles('./src');
let violations = 0;

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
  for (const m of matches) {
    const hex = m.toUpperCase();
    if (!officialHexes.has(hex)) {
      console.error(`Violation in ${f}: ${hex}`);
      violations++;
    }
  }
}

if (violations === 0) {
  console.log('AUDIT PASSED: 0 unauthorized hex colors found in src/ across all files!');
} else {
  console.error(`AUDIT FAILED: ${violations} violations found.`);
  process.exit(1);
}
