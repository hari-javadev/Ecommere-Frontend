const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\22cy0\\Desktop\\Ecommerece\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

const cardsData = [
    {
        brand: 'SABLE HERITAGE',
        title: 'Royal Zari Velvet Lehenga Choli',
        img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
        link: 'product-ethnic.html',
        curr: 'Rs. 4,999',
        orig: 'Rs. 9,999',
        disc: '(50% OFF)',
        rating: '4.9',
        count: '1.4k',
        hasAd: true,
        hasStock: true
    },
    {
        brand: 'SABLE TAILORED',
        title: 'Italian Super 120s Slim-Fit Tuxedo',
        img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
        link: 'product-men.html',
        curr: 'Rs. 6,499',
        orig: 'Rs. 12,999',
        disc: '(50% OFF)',
        rating: '4.5',
        count: '3.2k',
        hasAd: false,
        hasStock: false
    },
    {
        brand: 'ROYAL WEAVES',
        title: 'Pure Silk Kanjeevaram Banarasi Saree',
        img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
        link: 'product-ethnic.html',
        curr: 'Rs. 3,799',
        orig: 'Rs. 7,599',
        disc: '(50% OFF)',
        rating: '4.8',
        count: '2.1k',
        hasAd: false,
        hasStock: false
    },
    {
        brand: 'SABLE JEWELS',
        title: '24K Gold Plated Kundan Choker Set',
        img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        link: 'product-jewellery.html',
        curr: 'Rs. 1,899',
        orig: 'Rs. 3,999',
        disc: '(52% OFF)',
        rating: '4.6',
        count: '890',
        hasAd: true,
        hasStock: false
    },
    {
        brand: 'MAISON SABLE',
        title: 'Structured Calfskin Monogram Tote Bag',
        img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
        link: 'product-bag.html',
        curr: 'Rs. 2,999',
        orig: 'Rs. 5,999',
        disc: '(50% OFF)',
        rating: '4.7',
        count: '4.5k',
        hasAd: false,
        hasStock: false
    },
    {
        brand: 'CHRONO LUXE',
        title: 'Automatic Skeleton Chronograph Watch',
        img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        link: 'product-watches.html',
        curr: 'Rs. 8,999',
        orig: 'Rs. 17,999',
        disc: '(50% OFF)',
        rating: '4.8',
        count: '1.9k',
        hasAd: true,
        hasStock: false
    },
    {
        brand: 'VERVE LUXE',
        title: 'Satin Midi Evening Gown & Dress',
        img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
        link: 'product-women-western.html',
        curr: 'Rs. 3,299',
        orig: 'Rs. 6,999',
        disc: '(52% OFF)',
        rating: '4.4',
        count: '2.8k',
        hasAd: false,
        hasStock: false
    },
    {
        brand: 'GLOW BOTANICALS',
        title: 'Vitamin C Radiance Face Serum 30ml',
        img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
        link: 'product-beauty.html',
        curr: 'Rs. 699',
        orig: 'Rs. 1,399',
        disc: '(50% OFF)',
        rating: '4.3',
        count: '950',
        hasAd: false,
        hasStock: false
    },
    {
        brand: 'TECH SABLE',
        title: '5G Flagship Smartphone 256GB ROM',
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
        link: 'product-electronics.html',
        curr: 'Rs. 24,999',
        orig: 'Rs. 34,999',
        disc: '(28% OFF)',
        rating: '4.7',
        count: '6.1k',
        hasAd: true,
        hasStock: true
    },
    {
        brand: 'SABLE URBAN',
        title: 'Heavyweight Cotton Oversized Sweatshirt',
        img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
        link: 'product-men.html',
        curr: 'Rs. 1,499',
        orig: 'Rs. 2,999',
        disc: '(50% OFF)',
        rating: '4.5',
        count: '3.8k',
        hasAd: false,
        hasStock: false
    }
];

let newSectionHTML = `<section class="products-section">
            <div class="container-fluid products-container">
                
                <div class="section-header text-center mb-5">
                    <span class="section-badge">CURATED FASHION SELECTION</span>
                    <h2 class="section-title">Trending Luxury Collections</h2>
                    <p class="section-subtitle">Handpicked premium styles with express delivery & free returns</p>
                </div>

                <div class="products-grid">\n`;

cardsData.forEach((item, index) => {
    newSectionHTML += `                    <!-- Card ${index + 1} -->
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            ${item.hasAd ? '<span class="myntra-ad-badge">AD</span>' : ''}
                            <div class="myntra-rating-pill">
                                <span>${item.rating}</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">${item.count}</span>
                            </div>
                            <a href="${item.link}">
                                <img src="${item.img}" class="product-img" alt="${item.title}">
                            </a>
                            <div class="myntra-image-hover-overlay">
                                <div class="myntra-dots-line">
                                    <span class="dot active"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                </div>
                                <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)">
                                    <i class="bi bi-heart me-1"></i> <span>WISHLIST</span>
                                </button>
                            </div>
                        </div>
                        <div class="product-info">
                            <span class="product-brand">${item.brand}</span>
                            <h3 class="product-name"><a href="${item.link}">${item.title}</a></h3>
                            <div class="product-price">
                                <span class="current-price">${item.curr}</span>
                                <span class="original-price">${item.orig}</span>
                                <span class="discount-badge">${item.disc}</span>
                            </div>
                            ${item.hasStock ? '<div class="myntra-only-few-left">Only Few Left!</div>' : ''}
                        </div>
                    </div>\n`;
});

newSectionHTML += `                </div>
            </div>
        </section>`;

// Replace entire products-section block
content = content.replace(/<section class="products-section">[\s\S]*?<\/section>/m, newSectionHTML);

const stickyBannerHTML = `
    <!-- Floating Sticky Elements -->

    <button class="myntra-floating-bell-btn" title="Notifications">
        <i class="bi bi-bell-fill"></i>
    </button>
`;

const toggleWishlistScript = `
    <script>
        function toggleCardWishlist(btn) {
            btn.classList.toggle('wished');
            const span = btn.querySelector('span');
            if (span) {
                if (btn.classList.contains('wished')) {
                    span.textContent = 'WISHLISTED';
                    if (btn.querySelector('i')) btn.querySelector('i').className = 'bi bi-heart-fill me-1';
                } else {
                    span.textContent = 'WISHLIST';
                    if (btn.querySelector('i')) btn.querySelector('i').className = 'bi bi-heart me-1';
                }
            }
        }
    </script>
`;

if (!content.includes('myntra-right-sticky-banner')) {
    content = content.replace('</body>', `${stickyBannerHTML}\n</body>`);
}

if (!content.includes('toggleCardWishlist')) {
    content = content.replace('</body>', `${toggleWishlistScript}\n</body>`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('INDEX.HTML PRODUCTS SECTION CLEANLY REBUILT WITH PERFECT 5-COLUMN GRID!');
