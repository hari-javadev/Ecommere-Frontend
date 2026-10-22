const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\22cy0\\Desktop\\Ecommerece';

const listingFiles = [
    'men.html', 'women-western.html', 'kids.html', 'bags.html', 
    'beauty.html', 'electronics.html', 'ethnic.html', 'home-kitchen.html', 
    'jewellery.html', 'watches.html', 'popular.html', 'index.html'
];

listingFiles.forEach(file => {
    const filePath = path.join(baseDir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Restore .myntra-ad-badge styling in CSS / HTML if needed
    // Transform product cards to match exact screenshot layout:
    // Image wrapper with AD badge and rating pill, followed by product-info (Brand, Title, Price with Rs., Stock tag)
    content = content.replace(/<div class="product-card">[\s\S]*?<div class="product-info">[\s\S]*?<\/div>\s*<\/div>/g, (match) => {
        let ratingRating = (4.0 + Math.random() * 0.9).toFixed(1);
        let ratingCount = (Math.random() > 0.5 ? (1 + Math.random() * 3).toFixed(1) + 'k' : Math.floor(50 + Math.random() * 500));
        
        const rMatch = match.match(/<span>([\d\.]+)<\/span>[\s\S]*?<span class="rating-num-count">([^<]+)<\/span>/);
        if (rMatch) {
            ratingRating = rMatch[1];
            ratingCount = rMatch[2];
        }

        let linkHref = "#";
        const lMatch = match.match(/<a href="([^"]+)"/);
        if (lMatch) linkHref = lMatch[1];

        let imgSrc = "";
        let imgAlt = "";
        const iMatch = match.match(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/);
        if (iMatch) {
            imgSrc = iMatch[1];
            imgAlt = iMatch[2];
        }

        let brand = "CAHOOT";
        const bMatch = match.match(/<span class="product-brand">([^<]+)<\/span>/);
        if (bMatch) brand = bMatch[1];

        let title = "Men Solid Cotton Casual Shirt";
        const tMatch = match.match(/<h3 class="product-name"><a[^>]*>([^<]+)<\/a><\/h3>/);
        if (tMatch) title = tMatch[1];

        let currentPrice = "Rs. 799";
        const cpMatch = match.match(/<span class="current-price">([^<]+)<\/span>/);
        if (cpMatch) {
            currentPrice = cpMatch[1].replace('₹', 'Rs. ');
            if (!currentPrice.startsWith('Rs.')) currentPrice = 'Rs. ' + currentPrice;
        }

        let originalPrice = "Rs. 1999";
        const opMatch = match.match(/<span class="original-price">([^<]+)<\/span>/);
        if (opMatch) {
            originalPrice = opMatch[1].replace('₹', 'Rs. ');
            if (!originalPrice.startsWith('Rs.')) originalPrice = 'Rs. ' + originalPrice;
        }

        let discountBadge = "(60% OFF)";
        const dbMatch = match.match(/<span class="discount-badge">([^<]+)<\/span>/);
        if (dbMatch) {
            let val = dbMatch[1].replace(/[\(\)]/g, '').trim();
            discountBadge = `(${val})`;
        }

        const showAd = Math.random() > 0.4;
        const showStock = Math.random() > 0.7;

        if (!imgSrc) return match;

        return `<div class="product-card">
                        <div class="product-image-wrapper">
                            ${showAd ? '<span class="myntra-ad-badge">AD</span>' : ''}
                            <div class="myntra-rating-pill">
                                <span>${ratingRating}</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">${ratingCount}</span>
                            </div>
                            <a href="${linkHref}">
                                <img src="${imgSrc}" class="product-img" alt="${imgAlt}">
                            </a>
                        </div>
                        <div class="product-info">
                            <span class="product-brand">${brand}</span>
                            <h3 class="product-name"><a href="${linkHref}">${title}</a></h3>
                            <div class="product-price">
                                <span class="current-price">${currentPrice}</span>
                                <span class="original-price">${originalPrice}</span>
                                <span class="discount-badge">${discountBadge}</span>
                            </div>
                            ${showStock ? '<div class="myntra-only-few-left">Only Few Left!</div>' : ''}
                        </div>
                    </div>`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated cards matching exact screenshot in ${file}`);
});

console.log("All pages updated to match exact screenshot!");
