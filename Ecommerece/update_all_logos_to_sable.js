const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\22cy0\\Desktop\\Ecommerece';
const files = fs.readdirSync(baseDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace navbar brand logo text to SABLE
    content = content.replace(/<a href="index\.html" class="brand-logo">[\s\S]*?<\/a>/gi, '<a href="index.html" class="brand-logo"><span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>SABLE</a>');
    content = content.replace(/MMYNTRA/g, 'SABLE');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated brand logo SABLE in ${file}`);
});

console.log('ALL HTML FILES UPDATED TO SABLE BRAND LOGO!');
