const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let modifiedCount = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Add "Home" to header <ul class="nav-categories"> if not already present
    if (content.includes('<ul class="nav-categories">')) {
        if (!content.includes('href="index.html" class="nav-cat-link"')) {
            content = content.replace(
                '<ul class="nav-categories">',
                '<ul class="nav-categories">\n                    <li class="nav-cat-item"><a href="index.html" class="nav-cat-link" style="font-weight: 800; color: #ff3f6c;">Home</a></li>'
            );
            changed = true;
            console.log(`Added Home navigation link to ${file}`);
        }
    }

    // 2. Add "Home Page" to footer ONLINE SHOPPING list if not already present
    if (content.includes('<h4 class="footer-col-title">ONLINE SHOPPING</h4>')) {
        if (!content.includes('<li><a href="index.html">Home Page</a></li>')) {
            content = content.replace(
                '<h4 class="footer-col-title">ONLINE SHOPPING</h4>\n                    <ul class="footer-links-list">',
                '<h4 class="footer-col-title">ONLINE SHOPPING</h4>\n                    <ul class="footer-links-list">\n                        <li><a href="index.html" style="font-weight: 700; color: #ff3f6c;">Home Page</a></li>'
            );
            changed = true;
            console.log(`Added Home Page footer link to ${file}`);
        }
    }

    // 3. Ensure all brand logos link to index.html
    const logoRegex = /<a\s+href="[^"]*"\s+class="(brand-logo|brand-logo-myntra|header-logo)"/gi;
    if (logoRegex.test(content)) {
        content = content.replace(logoRegex, (match, p1) => {
            return `<a href="index.html" class="${p1}"`;
        });
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        modifiedCount++;
    }
});

console.log(`Successfully updated Home links across ${modifiedCount} files.`);
