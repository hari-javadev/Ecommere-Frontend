const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\22cy0\\Desktop\\Ecommerece';
const files = fs.readdirSync(baseDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace navbar brand logo text MYNTRA with SABLE
    let modified = false;

    // Pattern 1: <span style="...">M</span>MYNTRA -> <span style="...">S</span>SABLE or <span style="...">M</span>SABLE
    if (content.includes('MYNTRA')) {
        content = content.replace(/<span style="color:\s*#ff3f6c;\s*font-weight:\s*900;\s*margin-right:\s*3px;">M<\/span>\s*MYNTRA/gi, '<span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>SABLE');
        content = content.replace(/class="brand-logo"[^>]*>[\s\S]*?MYNTRA/gi, 'class="brand-logo"><span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>SABLE');
        content = content.replace(/MYNTRA/g, 'SABLE');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated navbar brand name to SABLE in ${file}`);
    }
});

console.log('ALL HTML FILES SUCCESSFULLY UPDATED TO SABLE BRAND NAME IN NAVBAR!');
