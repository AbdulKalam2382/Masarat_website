const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\hamee\\.gemini\\antigravity\\scratch\\masarat-website';
const foldersToSearch = ['app', 'components', 'lib'];
const fileExts = ['.ts', '.tsx', '.css'];

const replacements = [
  { from: /#00B4D8/gi, to: '#3B82F6' },
  { from: /#C8963E/gi, to: '#1A56DB' },
  { from: /#0A0A0A/gi, to: '#0D1B2A' },
  { from: /#111111/gi, to: '#0D1B2A' },
  { from: /#1A1A1A/gi, to: '#0D1B2A' },
  { from: /#162236/gi, to: '#0D1B2A' },
  { from: /#1A2744/gi, to: '#122040' },
  { from: /\bbg-black\b/g, to: 'bg-[#0D1B2A]' },
  { from: /rgba\(\s*0\s*,\s*180\s*,\s*216\s*,([^)]+)\)/g, to: 'rgba(59,130,246,$1)' },
  { from: /brand-cyan/g, to: 'brand-blue-soft' },
  { from: /brand-blue-2/g, to: 'brand-blue-soft' }
];

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(file));
      } else {
        if (fileExts.includes(path.extname(file))) {
          results.push(file);
        }
      }
    });
  } catch(e) {
    // Ignore errors for missing directories
  }
  return results;
}

let allFiles = [];
foldersToSearch.forEach(folder => {
  allFiles = allFiles.concat(walk(path.join(dir, folder)));
});

let changedFiles = 0;
allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  replacements.forEach(r => {
    if (content.match(r.from)) {
      content = content.replace(r.from, r.to);
      changed = true;
    }
  });
  if (changed) {
    fs.writeFileSync(file, content);
    changedFiles++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Done. Updated ${changedFiles} files.`);
