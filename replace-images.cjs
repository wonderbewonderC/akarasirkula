const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(srcDir);
const regex = /https:\/\/lh3\.googleusercontent\.com\/aida-public\/[a-zA-Z0-9_-]+/g;

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (regex.test(content)) {
        // We'll replace with picsum photos but add a random seed so they don't all look the same
        content = content.replace(regex, () => {
            count++;
            return `https://picsum.photos/seed/${count}/400/400`;
        });
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
console.log(`Replaced ${count} image links.`);
