const fs = require('fs');
const path = require('path');

const directory = './';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(directory);

const replacements = [
    { from: /bg-\[\#0A0A0A\]/g, to: 'bg-[#0F1C2E]' },
    { from: /dark:bg-\[\#0A0A0A\]/g, to: 'dark:bg-[#0F1C2E]' },
    { from: /\#0A0A0A/g, to: '#0F1C2E' },
    
    { from: /bg-\[\#111111\]/g, to: 'bg-[#162236]' },
    { from: /dark:bg-\[\#111111\]/g, to: 'dark:bg-[#162236]' },
    { from: /\#111111/g, to: '#162236' },
    
    { from: /bg-\[\#1A1A1A\]/g, to: 'bg-[#1A2744]' },
    { from: /dark:bg-\[\#1A1A1A\]/g, to: 'dark:bg-[#1A2744]' },
    { from: /\#1A1A1A/g, to: '#1A2744' },
    
    { from: /border-\[\#2A2A2A\]/g, to: 'border-[#1E3150]' },
    { from: /dark:border-\[\#2A2A2A\]/g, to: 'dark:border-[#1E3150]' },
    { from: /\#2A2A2A/g, to: '#1E3150' },
    
    { from: /bg-\[\#F7F7F5\]/g, to: 'bg-[#F8FAFC]' },
    { from: /dark:bg-\[\#F7F7F5\]/g, to: 'dark:bg-[#F8FAFC]' },
    { from: /\#F7F7F5/g, to: '#F8FAFC' },
    
    { from: /rgba\(\s*0\s*,\s*0\s*,\s*0\s*,/g, to: 'rgba(15,28,46,' },
    { from: /rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.45\s*\)/g, to: 'rgba(220,235,255,0.55)' },
    { from: /rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.25\s*\)/g, to: 'rgba(200,220,255,0.35)' },
    { from: /rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.06\s*\)/g, to: 'rgba(100,160,255,0.08)' },
    
    { from: /dark:bg-black/g, to: 'dark:bg-[#0F1C2E]' },
    { from: /bg-black/g, to: 'bg-[#0F1C2E]' }, // Specifically for preloader if any
    
    // Some specific requested changes:
    { from: /dark:bg-\[\#0A0A0A\]\/90/g, to: 'dark:bg-[#0F1C2E]/92' }
];

let changedCount = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
        content = content.replace(r.from, r.to);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
        changedCount++;
    }
});

console.log(`Done. Updated ${changedCount} files.`);
