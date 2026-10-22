const fs = require('fs');
const path = require('path');

const relatedProductsData = {
    'product-bag.html': {
        title: 'You May Also Like — Related Handbags & Totes',
        items: [
            { brand: 'GUCCI', name: 'GG Marmont Matelassé Shoulder Bag', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80', price: 'Rs. 4,999', orig: 'Rs. 9,999', disc: '50% OFF', link: 'product-bag.html' },
            { brand: 'COACH', name: 'Signature Leather Tote Handbag', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80', price: 'Rs. 3,499', orig: 'Rs. 6,999', disc: '50% OFF', link: 'product-bag.html' },
            { brand: 'MICHAEL KORS', name: 'Saffiano Leather Crossbody Sling', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80', price: 'Rs. 2,899', orig: 'Rs. 5,799', disc: '50% OFF', link: 'product-bag.html' },
            { brand: 'PRADA LUXE', name: 'Quilted Chain Shoulder Handbag', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80', price: 'Rs. 5,199', orig: 'Rs. 10,399', disc: '50% OFF', link: 'product-bag.html' },
            { brand: 'SABLE CRAFT', name: 'Vintage Tan Saddle Leather Bag', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80', price: 'Rs. 3,299', orig: 'Rs. 6,599', disc: '50% OFF', link: 'product-bag.html' }
        ]
    },
    'product-beauty.html': {
        title: 'You May Also Like — Related Beauty & Skincare',
        items: [
            { brand: 'PLUM', name: 'Vitamin C Brightening Face Serum', img: 'https://images.unsplash.com/photo-1608248597261-833258657b45?auto=format&fit=crop&w=800&q=80', price: 'Rs. 699', orig: 'Rs. 1,399', disc: '50% OFF', link: 'product-beauty.html' },
            { brand: 'NIVEA', name: 'Hydrating Night Moisture Cream', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80', price: 'Rs. 499', orig: 'Rs. 999', disc: '50% OFF', link: 'product-beauty.html' },
            { brand: 'WOW SKIN', name: 'Apple Cider Vinegar Face Wash', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80', price: 'Rs. 399', orig: 'Rs. 799', disc: '50% OFF', link: 'product-beauty.html' },
            { brand: 'MAC COSMETICS', name: 'Matte Crimson Velvet Lipstick', img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,299', orig: 'Rs. 2,599', disc: '50% OFF', link: 'product-beauty.html' },
            { brand: 'HIMALAYA', name: 'Purifying Neem Face Pack', img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80', price: 'Rs. 299', orig: 'Rs. 599', disc: '50% OFF', link: 'product-beauty.html' }
        ]
    },
    'product-electronics.html': {
        title: 'You May Also Like — Related Mobiles & Gadgets',
        items: [
            { brand: 'TECH SABLE', name: '5G Flagship Smartphone 256GB', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', price: 'Rs. 24,999', orig: 'Rs. 49,999', disc: '50% OFF', link: 'product-electronics.html' },
            { brand: 'AUDIO TECH', name: 'True Wireless Noise Cancelling Earbuds', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80', price: 'Rs. 2,499', orig: 'Rs. 4,999', disc: '50% OFF', link: 'product-electronics.html' },
            { brand: 'XIAOMI', name: 'Ultra Fast 20000mAh Power Bank', img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,299', orig: 'Rs. 2,599', disc: '50% OFF', link: 'product-electronics.html' },
            { brand: 'SABLE SOUND', name: '360 Heavy Bass Bluetooth Speaker', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,999', orig: 'Rs. 3,999', disc: '50% OFF', link: 'product-electronics.html' },
            { brand: 'CHRONO TECH', name: 'AMOLED Full Display Smartwatch', img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80', price: 'Rs. 3,499', orig: 'Rs. 6,999', disc: '50% OFF', link: 'product-electronics.html' }
        ]
    },
    'product-ethnic.html': {
        title: 'You May Also Like — Related Sarees & Lehengas',
        items: [
            { brand: 'SABLE HERITAGE', name: 'Royal Zari Velvet Lehenga Choli', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80', price: 'Rs. 4,999', orig: 'Rs. 9,999', disc: '50% OFF', link: 'product-ethnic.html' },
            { brand: 'BANARASI LUXE', name: 'Gold Zari Woven Silk Saree', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80', price: 'Rs. 3,999', orig: 'Rs. 7,999', disc: '50% OFF', link: 'product-ethnic.html' },
            { brand: 'VERVE ETHNIC', name: 'Embroidered Anarkali Kurta Set', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80', price: 'Rs. 2,499', orig: 'Rs. 4,999', disc: '50% OFF', link: 'product-ethnic.html' },
            { brand: 'ROYAL HERITAGE', name: 'Bridal Heavily Sequined Gown', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80', price: 'Rs. 5,499', orig: 'Rs. 10,999', disc: '50% OFF', link: 'product-ethnic.html' },
            { brand: 'SABLE ETHNIC', name: 'Designer Printed Silk Chiffon Saree', img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,899', orig: 'Rs. 3,799', disc: '50% OFF', link: 'product-ethnic.html' }
        ]
    },
    'product-home-kitchen.html': {
        title: 'You May Also Like — Related Home & Living',
        items: [
            { brand: 'PRESTIGE', name: 'Non-Stick 3-Piece Cookware Set', img: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,599', orig: 'Rs. 3,199', disc: '50% OFF', link: 'product-home-kitchen.html' },
            { brand: 'SABLE HOME', name: '100% Pure Cotton King Bedsheet', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80', price: 'Rs. 999', orig: 'Rs. 1,999', disc: '50% OFF', link: 'product-home-kitchen.html' },
            { brand: 'LIVING SPACES', name: 'Velvet Cushion Covers Set of 5', img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80', price: 'Rs. 699', orig: 'Rs. 1,399', disc: '50% OFF', link: 'product-home-kitchen.html' },
            { brand: 'PIGEON', name: 'Stainless Steel Induction Kadai', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', price: 'Rs. 899', orig: 'Rs. 1,799', disc: '50% OFF', link: 'product-home-kitchen.html' },
            { brand: 'SABLE CRAFT', name: 'Handcrafted Ceramic Dinner Set', img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80', price: 'Rs. 2,299', orig: 'Rs. 4,599', disc: '50% OFF', link: 'product-home-kitchen.html' }
        ]
    },
    'product-jewellery.html': {
        title: 'You May Also Like — Related Fine Jewellery',
        items: [
            { brand: 'SABLE JEWELS', name: 'Royal Gold Plated Kundan Choker Set', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,999', orig: 'Rs. 3,999', disc: '50% OFF', link: 'product-jewellery.html' },
            { brand: 'TEMPLE CRAFT', name: 'Traditional South Indian Jhumka Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,499', orig: 'Rs. 2,999', disc: '50% OFF', link: 'product-jewellery.html' },
            { brand: 'STERLING 925', name: 'Zircon Crystal Adjustable Solitaire Ring', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80', price: 'Rs. 899', orig: 'Rs. 1,799', disc: '50% OFF', link: 'product-jewellery.html' },
            { brand: 'IMPERIAL JEWELS', name: 'Gold Bangle Set with Meenakari Work', img: 'https://images.unsplash.com/photo-1611591475281-8d9954a2d7c5?auto=format&fit=crop&w=800&q=80', price: 'Rs. 2,199', orig: 'Rs. 4,399', disc: '50% OFF', link: 'product-jewellery.html' },
            { brand: 'SABLE LUXE', name: 'Aviator UV Protected Sunglasses', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,199', orig: 'Rs. 2,399', disc: '50% OFF', link: 'product-jewellery.html' }
        ]
    },
    'product-kids.html': {
        title: 'You May Also Like — Related Kids Apparel',
        items: [
            { brand: 'PUMA KIDS', name: 'Li\'l Champ Printed T-Shirt & Shorts', img: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80', price: 'Rs. 899', orig: 'Rs. 1,799', disc: '50% OFF', link: 'product-kids.html' },
            { brand: 'ADIDAS BOYS', name: 'Boys Active Tracksuit & Hoodie Set', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,499', orig: 'Rs. 2,999', disc: '50% OFF', link: 'product-kids.html' },
            { brand: 'VERVE KIDS', name: 'Girls Floral Party Frock Dress', img: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,199', orig: 'Rs. 2,399', disc: '50% OFF', link: 'product-kids.html' },
            { brand: 'BABY SABLE', name: 'Soft Organic Cotton Romper Set of 3', img: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80', price: 'Rs. 799', orig: 'Rs. 1,599', disc: '50% OFF', link: 'product-kids.html' },
            { brand: 'TOY SABLE', name: 'Educational Building Blocks Toy Set', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80', price: 'Rs. 999', orig: 'Rs. 1,999', disc: '50% OFF', link: 'product-kids.html' }
        ]
    },
    'product-men.html': {
        title: 'You May Also Like — Related Men Apparel',
        items: [
            { brand: 'SABLE TAILORING', name: 'Italian Slim Fit Tuxedo Suit', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', price: 'Rs. 5,999', orig: 'Rs. 11,999', disc: '50% OFF', link: 'product-men.html' },
            { brand: 'RARE RABBIT', name: 'Casual Linen Full Sleeve Shirt', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,899', orig: 'Rs. 3,799', disc: '50% OFF', link: 'product-men.html' },
            { brand: 'U.S. POLO ASSN', name: 'Heavyweight Oversized Cotton T-Shirt', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,299', orig: 'Rs. 2,599', disc: '50% OFF', link: 'product-men.html' },
            { brand: 'SABLE URBAN', name: 'Vintage Washed Slim Fit Denim Jeans', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,999', orig: 'Rs. 3,999', disc: '50% OFF', link: 'product-men.html' },
            { brand: 'ETHNO SABLE', name: 'Silk Nehru Jacket with Kurta Set', img: 'https://images.unsplash.com/photo-1597983073493-88cd35cf0e10?auto=format&fit=crop&w=800&q=80', price: 'Rs. 3,499', orig: 'Rs. 6,999', disc: '50% OFF', link: 'product-men.html' }
        ]
    },
    'product-popular.html': {
        title: 'You May Also Like — Related Best Sellers',
        items: [
            { brand: 'SABLE LUXE', name: 'Viral Celebrity Choice Gown', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80', price: 'Rs. 3,999', orig: 'Rs. 7,999', disc: '50% OFF', link: 'product-popular.html' },
            { brand: 'CHRONO LUXE', name: 'Rose Gold Women Dial Bracelet Watch', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', price: 'Rs. 4,499', orig: 'Rs. 8,999', disc: '50% OFF', link: 'product-popular.html' },
            { brand: 'VERVE LUXE', name: 'Casual Printed Western Shirt Dress', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,999', orig: 'Rs. 3,999', disc: '50% OFF', link: 'product-popular.html' },
            { brand: 'COACH', name: 'Monogram Canvas Crossbody Purse', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80', price: 'Rs. 4,999', orig: 'Rs. 9,999', disc: '50% OFF', link: 'product-popular.html' },
            { brand: 'SABLE JEWELS', name: 'Emerald Cut Diamond Crystal Necklace', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80', price: 'Rs. 2,799', orig: 'Rs. 5,599', disc: '50% OFF', link: 'product-popular.html' }
        ]
    },
    'product-watches.html': {
        title: 'You May Also Like — Related Watches & Wearables',
        items: [
            { brand: 'CASIO', name: 'Edifice Chronograph Stainless Steel Watch', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80', price: 'Rs. 5,499', orig: 'Rs. 10,999', disc: '50% OFF', link: 'product-watches.html' },
            { brand: 'TITAN', name: 'Precision Crafted Emerald Dial Watch', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', price: 'Rs. 6,499', orig: 'Rs. 12,999', disc: '50% OFF', link: 'product-watches.html' },
            { brand: 'CHRONO LUXE', name: 'Rose Gold Women Dial Bracelet Watch', img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80', price: 'Rs. 3,899', orig: 'Rs. 7,799', disc: '50% OFF', link: 'product-watches.html' },
            { brand: 'SABLE TECH', name: 'AMOLED Bluetooth Calling Smartwatch', img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80', price: 'Rs. 2,999', orig: 'Rs. 5,999', disc: '50% OFF', link: 'product-watches.html' },
            { brand: 'SWISS SABLE', name: 'Automatic Skeleton Mechanical Watch', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80', price: 'Rs. 8,999', orig: 'Rs. 17,999', disc: '50% OFF', link: 'product-watches.html' }
        ]
    },
    'product-women-western.html': {
        title: 'You May Also Like — Related Western Dresses & Tops',
        items: [
            { brand: 'VERVE LUXE', name: 'Floral Silk Tiered Maxi Dress', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', price: 'Rs. 2,199', orig: 'Rs. 4,399', disc: '50% OFF', link: 'product-women-western.html' },
            { brand: 'SABLE WESTERN', name: 'Bodycon Evening Party Dress', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,899', orig: 'Rs. 3,799', disc: '50% OFF', link: 'product-women-western.html' },
            { brand: 'STYLECAST', name: 'High Waist Wide Leg Trousers', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,499', orig: 'Rs. 2,999', disc: '50% OFF', link: 'product-women-western.html' },
            { brand: 'VERVE URBAN', name: 'Oversized Crop Top & Denim Shirt', img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80', price: 'Rs. 1,199', orig: 'Rs. 2,399', disc: '50% OFF', link: 'product-women-western.html' },
            { brand: 'SABLE CHIC', name: 'Formal Tailored Blazer & Pants Set', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80', price: 'Rs. 3,299', orig: 'Rs. 6,599', disc: '50% OFF', link: 'product-women-western.html' }
        ]
    }
};

function generateRelatedSection(fileData) {
    const cardsHTML = fileData.items.map(item => `
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <div class="myntra-rating-pill"><span>4.8</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">850</span></div>
                        <a href="${item.link}"><img src="${item.img}" class="product-img" alt="${item.name}"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">${item.brand}</span>
                        <h3 class="product-name"><a href="${item.link}">${item.name}</a></h3>
                        <div class="product-price"><span class="current-price">${item.price}</span> <span class="original-price">${item.orig}</span> <span class="discount-badge">(${item.disc})</span></div>
                    </div>
                </div>`).join('\n');

    return `    <!-- Related Products Section (5 Column Clean Grid) -->
    <section class="related-products-section" style="padding: 40px 4% 80px 4%; background: #ffffff; border-top: 1px solid #eaeaec;">
        <div class="section-header text-center mb-4">
            <h2 class="section-title" style="font-weight: 800; font-size: 24px; color: #282c3f;">${fileData.title}</h2>
        </div>
        <div class="products-grid">
${cardsHTML}
        </div>
    </section>`;
}

Object.keys(relatedProductsData).forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    const relatedRegex = /<section\s+class="related-products-section"[\s\S]*?<\/section>/i;

    const newSection = generateRelatedSection(relatedProductsData[file]);

    if (relatedRegex.test(content)) {
        content = content.replace(relatedRegex, newSection);
        console.log(`Replaced related products section in ${file}`);
    } else if (content.includes('<footer class="site-footer">')) {
        content = content.replace('<footer class="site-footer">', `${newSection}\n\n    <footer class="site-footer">`);
        console.log(`Inserted related products section before footer in ${file}`);
    } else if (content.includes('<!-- Footer -->')) {
        content = content.replace('<!-- Footer -->', `${newSection}\n\n    <!-- Footer -->`);
        console.log(`Inserted related products section before <!-- Footer --> in ${file}`);
    } else {
        console.log(`Could not find location to insert related section in ${file}`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
});
