const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\22cy0\\Desktop\\Ecommerece';
const files = fs.readdirSync(baseDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix class names that got corrupted by global MYNTRA replace
    content = content.replace(/sable-top-filter-bar/g, 'myntra-top-filter-bar');
    content = content.replace(/sable-ad-badge/g, 'myntra-ad-badge');
    content = content.replace(/sable-rating-pill/g, 'myntra-rating-pill');
    content = content.replace(/sable-only-few-left/g, 'myntra-only-few-left');
    content = content.replace(/sable-image-hover-overlay/g, 'myntra-image-hover-overlay');
    content = content.replace(/sable-card-wishlist-btn/g, 'myntra-card-wishlist-btn');
    content = content.replace(/sable-right-sticky-banner/g, 'myntra-right-sticky-banner');
    content = content.replace(/sable-floating-bell-btn/g, 'myntra-floating-bell-btn');
    content = content.replace(/sable-dots-line/g, 'myntra-dots-line');
    content = content.replace(/sable-promo/g, 'myntra-promo');

    // Set clean brand logo to SABLE
    content = content.replace(/<a href="index\.html" class="brand-logo">[\s\S]*?<\/a>/gi, '<a href="index.html" class="brand-logo"><span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>SABLE</a>');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned brand logo SABLE in ${file}`);
});

console.log('ALL HTML FILES CLEANLY UPDATED WITH SABLE NAVBAR BRAND LOGO!');
