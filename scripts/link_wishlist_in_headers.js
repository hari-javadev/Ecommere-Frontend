const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace href="#" on Wishlist header button
    const oldWishlistRegex = /<a\s+href="#"\s+class="header-action-btn"><i\s+class="bi\s+bi-heart"><\/i><span>Wishlist<\/span><\/a>/gi;
    if (oldWishlistRegex.test(content)) {
        content = content.replace(oldWishlistRegex, '<a href="wishlist.html" class="header-action-btn"><i class="bi bi-heart"></i><span>Wishlist</span></a>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Linked Wishlist button in ${file}`);
    }
});
