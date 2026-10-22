/**
 * Product Details Controller for Popular & Trending Styles
 * Dynamically loads product information based on ?id= query param
 */

const POPULAR_PRODUCTS_DATA = [
    {
        "id": "rb1-1",
        "brand": "ROBOTICS KIDS",
        "name": "Remote Control Convertible Robot Toy Set",
        "price": "Rs. 1499",
        "originalPrice": "Rs. 2999",
        "discount": "(50% OFF)",
        "badge": "AD",
        "rating": "4.8",
        "reviewsCount": "1.2k",
        "mainImg": "assets/images/techvolt-web-host-kids-1.png",
        "category": "Kids & Toys",
        "subcategory": "Toys",
        "description": "Interactive wireless remote control robot toy for kids with 360-degree rotation, transforming capabilities, sound effects, and LED lights.",
        "images": [
            "assets/images/techvolt-web-host-kids-1.png",
            "assets/images/techvolt-crm-kids-2.png",
            "assets/images/techvolt-software-dev-kids-3.png",
            "assets/images/techvolt-web-dev-kids-4.png"
        ]
    },
    {
        "id": "rb2-1",
        "brand": "ROBOTICS KIDS",
        "name": "RC High Speed Off-Road Stunt Car",
        "price": "Rs. 1299",
        "originalPrice": "Rs. 2599",
        "discount": "(50% OFF)",
        "badge": "",
        "rating": "4.7",
        "reviewsCount": "890",
        "mainImg": "assets/images/techvolt-full-dev-kids-5.png",
        "category": "Kids & Toys",
        "subcategory": "Toys",
        "description": "High-speed 360-degree rotating wireless remote control stunt car with LED lights and durable off-road tires.",
        "images": [
            "assets/images/techvolt-full-dev-kids-5.png",
            "assets/images/techvolt-mern-dev-kids-6.png",
            "assets/images/techvolt-php-dev-kids-7.png",
            "assets/images/techvolt-python-dev-kids-8.png"
        ]
    },
    {
        "id": "rb3-1",
        "brand": "ROBOTICS KIDS",
        "name": "Educational DIY STEM Building Robot Kit",
        "price": "Rs. 1899",
        "originalPrice": "Rs. 3799",
        "discount": "(50% OFF)",
        "badge": "TOP RATED",
        "rating": "4.9",
        "reviewsCount": "1.5k",
        "mainImg": "assets/images/techvolt-front-dev-kids-9.png",
        "category": "Kids & Toys",
        "subcategory": "Toys",
        "description": "Educational DIY STEM building block robot kit for kids with programmable remote controller and interactive sensor modules.",
        "images": [
            "assets/images/techvolt-front-dev-kids-9.png",
            "assets/images/techvolt-back-dev-kids-10.png",
            "assets/images/techvolt-digital-marketing-kids-11.png",
            "assets/images/techvolt-crm-dev-kids-12.png"
        ]
    },
    {
        "id": 1,
        "brand": "Realme",
        "name": "Realme 12 Pro+ 5G (Submarine Blue, 256 GB)",
        "price": "Rs. 29999",
        "originalPrice": "Rs. 34999",
        "discount": "(14% OFF)",
        "badge": "AD",
        "rating": "4.8",
        "reviewsCount": "850",
        "mainImg": "assets/images/techvolt-web-host-mobile-1.png",
        "category": "Electronics & Mobiles",
        "subcategory": "Mobiles",
        "description": "Realme 12 Pro+ 5G features a Sony IMX890 OIS camera, Periscope Portrait lens, Snapdragon 7s Gen 2 processor, and 120Hz Curved Vision Display.",
        "images": ["assets/images/techvolt-web-host-mobile-1.png", "assets/images/techvolt-crm-mobile-2.png", "assets/images/techvolt-software-dev-mobile-3.png", "assets/images/techvolt-web-dev-mobile-4.png"]
    },
    {
        "id": 2,
        "brand": "ROADSTER",
        "name": "Men Casual Cotton Checked Shirt",
        "price": "Rs. 999",
        "originalPrice": "Rs. 1999",
        "discount": "(50% OFF)",
        "badge": "AD",
        "rating": "4.3",
        "reviewsCount": "1.5k",
        "mainImg": "assets/images/techvolt-software-shirt1.png",
        "category": "Men",
        "subcategory": "Shirts",
        "description": "Men stylish pure cotton casual checked shirt with curved hemline and button-down collar.",
        "images": ["assets/images/techvolt-software-shirt1.png", "assets/images/techvolt-web-dev-shirt2.png", "assets/images/techvolt-full-dev-shirt3.png", "assets/images/techvolt-mern-dev-shirt4.png"]
    },
    {
        "id": 5,
        "brand": "SABLE HOME",
        "name": "Premium Microfiber Fitted Bedsheet Set with Pillow Covers",
        "price": "Rs. 1499",
        "originalPrice": "Rs. 2999",
        "discount": "(50% OFF)",
        "badge": "",
        "rating": "4.8",
        "reviewsCount": "940",
        "mainImg": "assets/images/techvolt-web-host-tawa-1.png",
        "category": "Home & Kitchen",
        "subcategory": "Bedding & Linen",
        "description": "Ultra-soft 300 TC breathable fitted bedsheet crafted with premium brushed microfiber and 2 pillow covers.",
        "images": ["assets/images/techvolt-web-host-tawa-1.png", "assets/images/techvolt-crm-tawa-2.png", "assets/images/techvolt-software-dev-tawa-3.png", "assets/images/techvolt-web-dev-tawa-4.png"]
    },
    {
        "id": 6,
        "brand": "MAC",
        "name": "Velvet Matte Liquid Lipstick - Crimson Red",
        "price": "Rs. 899",
        "originalPrice": "Rs. 1799",
        "discount": "(50% OFF)",
        "badge": "AD",
        "rating": "4.8",
        "reviewsCount": "850",
        "mainImg": "assets/images/techvolt-web-host-lipstick-1.png",
        "category": "Beauty & Health",
        "subcategory": "Lipstick",
        "description": "Long-lasting weightless velvet matte liquid lipstick with intense color payoff and hydrating vitamin E.",
        "images": ["assets/images/techvolt-web-host-lipstick-1.png", "assets/images/techvolt-crm-lipstick-2.png", "assets/images/techvolt-software-dev-lipstick-3.png", "assets/images/techvolt-web-dev-lipstick-4.png"]
    },
    {
        "id": 7,
        "brand": "LUXE ACCESSORIES",
        "name": "Polarized UV Protection Cooling Glass Sunglasses",
        "price": "Rs. 1499",
        "originalPrice": "Rs. 2999",
        "discount": "(50% OFF)",
        "badge": "AD",
        "rating": "4.8",
        "reviewsCount": "850",
        "mainImg": "assets/images/techvolt-web-host-sunglass-1.png",
        "category": "Jewellery & Accessories",
        "subcategory": "Cooling Glass",
        "description": "Premium UV400 anti-glare polarized cooling sunglasses with lightweight stainless steel frame.",
        "images": ["assets/images/techvolt-web-host-sunglass-1.png", "assets/images/techvolt-crm-sunglass-2.png", "assets/images/techvolt-software-dev-sunglass-3.png", "assets/images/techvolt-web-dev-sunglass-4.png"]
    },
    {
        "id": 8,
        "brand": "SEIKO",
        "name": "Vintage Mechanical Skeleton Watch",
        "price": "Rs. 6499",
        "originalPrice": "Rs. 12999",
        "discount": "(50% OFF)",
        "badge": "AD",
        "rating": "4.7",
        "reviewsCount": "620",
        "mainImg": "assets/images/techvolt-web-host-watch-1.png",
        "category": "Watches",
        "subcategory": "Automatic",
        "description": "Authentic automatic mechanical movement skeleton watch with exhibition case back and leather strap.",
        "images": ["assets/images/techvolt-web-host-watch-1.png", "assets/images/techvolt-crm-watch-2.png", "assets/images/techvolt-software-dev-watch-3.png", "assets/images/techvolt-web-dev-watch-4.png"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const rawId = urlParams.get('id');

    const product = POPULAR_PRODUCTS_DATA.find(p => String(p.id).toLowerCase() === String(rawId).toLowerCase()) || POPULAR_PRODUCTS_DATA[0];

    populateProductDetails(product);

    initGallery();
    initColorSelector();
    initQuantitySelector();
    initPincodeChecker();
    initAddToCart();
    initReviewVotes();
});






// Helper function to generate 4 distinct angles of the exact product image

// Universal helper to get exact available gallery image angles without assumptions or padding

// Universal helper to get exact available gallery image angles without assumptions or padding

// Universal helper to get exact available gallery image angles without assumptions or padding

// Universal helper to get exact available gallery image angles without assumptions or padding
function getProductGalleryAngles(p) {
    if (!p) return [];
    let rawImages = [];
    if (Array.isArray(p.images) && p.images.length > 0) {
        rawImages = p.images;
    } else if (Array.isArray(p.gallery) && p.gallery.length > 0) {
        rawImages = p.gallery.map(g => (typeof g === 'object' && g.url) ? g.url : g);
    } else if (p.mainImg) {
        rawImages = [p.mainImg];
    }
    const validImages = rawImages.filter(Boolean);
    const labels = ["Front View", "Side View", "Back View", "Detail View"];
    return validImages.map((imgUrl, idx) => ({
        label: labels[idx] || `Angle ${idx + 1}`,
        url: imgUrl,
        objectPosition: "center center",
        scale: "1.0"
    }));
}

// Product-Specific Default Demo Reviews System
function getDefaultReviewsForProduct(p) {
    const id = p.id || 1;
    const baseRatings = [4.4, 4.2, 4.6, 4.3, 4.5, 4.1, 4.7, 4.8];
    const baseCounts = [
        "142 Ratings & 38 Reviews",
        "98 Ratings & 24 Reviews",
        "215 Ratings & 52 Reviews",
        "128 Ratings & 32 Reviews",
        "175 Ratings & 41 Reviews",
        "86 Ratings & 19 Reviews",
        "310 Ratings & 74 Reviews"
    ];

    const ratingVal = p.rating || baseRatings[(id - 1) % baseRatings.length];
    const ratingCountStr = p.ratingCount || baseCounts[(id - 1) % baseCounts.length];

    const demoReviews = [
        {
            rating: 5,
            title: "Excellent Product",
            text: "Very good quality product. The product looks exactly like the images and the overall quality is excellent.",
            author: "Rahul M",
            date: "14 Aug 2026",
            helpfulCount: (id * 3) % 15 + 4
        },
        {
            rating: 4,
            title: "Good Quality",
            text: "Really happy with the product. The quality is good and the product was delivered safely.",
            author: "Priya S",
            date: "02 Aug 2026",
            helpfulCount: (id * 2) % 10 + 2
        },
        {
            rating: 5,
            title: "Worth the Price",
            text: "Good product for the price. The finishing and overall look are very nice.",
            author: "Anish K",
            date: "28 Jul 2026",
            helpfulCount: (id * 4) % 20 + 5
        },
        {
            rating: 4,
            title: "Satisfied",
            text: "Product quality is good and I am satisfied with the purchase.",
            author: "Neha V",
            date: "19 Jul 2026",
            helpfulCount: (id * 5) % 12 + 3
        }
    ];

    return {
        rating: ratingVal,
        ratingCount: ratingCountStr,
        reviews: demoReviews
    };
}

function populateProductDetails(p) {
    if (!p) return;
    document.title = `TechVoltMart | Ecommerce | ${p.name}`;

    const activeCrumb = document.querySelector('.active-crumb');
    if (activeCrumb) activeCrumb.textContent = p.name;

    const brandElem = document.querySelectorAll('.product-brand-tag, .myntra-brand-heading');
    brandElem.forEach(el => el.textContent = p.brand || 'TechVoltMart');

    const titleElem = document.querySelectorAll('.product-detail-title, .myntra-title-subheading');
    titleElem.forEach(el => el.textContent = p.name);

    const currPrice = document.querySelectorAll('.price-current, .myntra-price-current');
    currPrice.forEach(el => el.textContent = p.price || '');

    const origPrice = document.querySelectorAll('.price-original, .myntra-price-mrp');
    origPrice.forEach(el => el.textContent = p.originalPrice ? (p.originalPrice.startsWith('MRP') ? p.originalPrice : `MRP ${p.originalPrice}`) : '');

    const discBadge = document.querySelectorAll('.price-discount-badge, .myntra-price-discount');
    discBadge.forEach(el => el.textContent = p.discount ? `(${p.discount.replace(/[\(\)]/g, '')})` : '');

    // Get exact available images dynamically without assumptions or padding
    let rawImages = [];
    if (Array.isArray(p.images) && p.images.length > 0) {
        rawImages = p.images;
    } else if (Array.isArray(p.gallery) && p.gallery.length > 0) {
        rawImages = p.gallery.map(g => (typeof g === 'object' && g.url) ? g.url : g);
    } else if (p.mainImg) {
        rawImages = [p.mainImg];
    }
    const validImages = rawImages.filter(Boolean);

    // Populate Left 2-Column Image Grid
    const imageGrid = document.getElementById('productImageGrid') || document.querySelector('.myntra-4-image-grid');
    if (imageGrid) {
        imageGrid.innerHTML = '';
        validImages.forEach((imgUrl, idx) => {
            const wrap = document.createElement('div');
            wrap.className = 'myntra-grid-img-wrap';
            wrap.innerHTML = `
                <img src="${imgUrl}" class="myntra-grid-img" alt="${p.name} Image ${idx + 1}"
                     style="width: 100%; height: 100%; object-fit: cover;"
                     onerror="this.onerror=null; this.src='${validImages[0] || p.mainImg || ''}';">
            `;
            imageGrid.appendChild(wrap);
        });
    }

    // Populate Customer Reviews Section (Real reviews or Product-Specific Default Demo Reviews)
    const reviewsContainer = document.getElementById('productReviewsContainer');
    if (reviewsContainer) {
        let reviewsData = null;
        if (p.reviews && Array.isArray(p.reviews) && p.reviews.length > 0) {
            reviewsData = {
                rating: p.rating || '4.3',
                ratingCount: p.ratingCount || `${p.reviews.length * 15} Ratings & ${p.reviews.length} Reviews`,
                reviews: p.reviews
            };
        } else {
            reviewsData = getDefaultReviewsForProduct(p);
        }

        const avgRating = reviewsData.rating;
        const ratingCountStr = reviewsData.ratingCount;
        const reviewList = reviewsData.reviews;

        let reviewsHTML = `
            <div class="reviews-summary-wrapper row mb-4 p-4" style="background: #fafafa; border: 1px solid #eaeaec; border-radius: 8px;">
                <div class="col-md-4 text-center border-end-md pe-md-4 mb-3 mb-md-0 d-flex flex-column justify-content-center align-items-center">
                    <div style="font-size: 44px; font-weight: 800; color: #282c3f; line-height: 1;">
                        ${avgRating} <span style="font-size: 28px; color: #ff3f6c;">★</span>
                    </div>
                    <div class="text-muted mt-2" style="font-size: 14px; font-weight: 600;">
                        ${ratingCountStr}
                    </div>
                </div>
                <div class="col-md-8 ps-md-4">
                    <div class="rating-bars-wrap" style="font-size: 13px; color: #535766;">
                        <div class="d-flex align-items-center gap-2 mb-1">
                            <span style="width: 30px; font-weight: 700;">5 ★</span>
                            <div class="progress flex-grow-1" style="height: 6px; background: #eaeaec;">
                                <div class="progress-bar bg-success" style="width: 72%;"></div>
                            </div>
                            <span style="width: 35px; text-align: right;" class="text-muted">72%</span>
                        </div>
                        <div class="d-flex align-items-center gap-2 mb-1">
                            <span style="width: 30px; font-weight: 700;">4 ★</span>
                            <div class="progress flex-grow-1" style="height: 6px; background: #eaeaec;">
                                <div class="progress-bar bg-info" style="width: 18%;"></div>
                            </div>
                            <span style="width: 35px; text-align: right;" class="text-muted">18%</span>
                        </div>
                        <div class="d-flex align-items-center gap-2 mb-1">
                            <span style="width: 30px; font-weight: 700;">3 ★</span>
                            <div class="progress flex-grow-1" style="height: 6px; background: #eaeaec;">
                                <div class="progress-bar bg-warning" style="width: 6%;"></div>
                            </div>
                            <span style="width: 35px; text-align: right;" class="text-muted">6%</span>
                        </div>
                        <div class="d-flex align-items-center gap-2 mb-1">
                            <span style="width: 30px; font-weight: 700;">2 ★</span>
                            <div class="progress flex-grow-1" style="height: 6px; background: #eaeaec;">
                                <div class="progress-bar bg-danger" style="width: 2%;"></div>
                            </div>
                            <span style="width: 35px; text-align: right;" class="text-muted">2%</span>
                        </div>
                        <div class="d-flex align-items-center gap-2 mb-1">
                            <span style="width: 30px; font-weight: 700;">1 ★</span>
                            <div class="progress flex-grow-1" style="height: 6px; background: #eaeaec;">
                                <div class="progress-bar bg-secondary" style="width: 2%;"></div>
                            </div>
                            <span style="width: 35px; text-align: right;" class="text-muted">2%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="individual-reviews-list">
        `;

        reviewList.forEach(rev => {
            reviewsHTML += `
                <div class="review-card py-3 border-bottom" style="border-color: #eaeaec !important;">
                    <div class="d-flex align-items-center gap-2 mb-1">
                        <span class="badge bg-success" style="font-size: 12px;">${rev.rating} ★</span>
                        <strong style="font-size: 15px; color: #282c3f;">${rev.title}</strong>
                    </div>
                    <p class="mb-2" style="font-size: 14px; color: #535766; line-height: 1.5;">"${rev.text}"</p>
                    <div class="d-flex align-items-center justify-content-between text-muted" style="font-size: 12.5px;">
                        <div>
                            <span style="font-weight: 700; color: #282c3f;">${rev.author || 'Customer'}</span>
                            <span class="ms-2 badge bg-light text-dark border" style="font-weight: 500;"><i class="bi bi-patch-check-fill text-success me-1"></i> Verified Purchase</span>
                            <span class="ms-2">• ${rev.date || 'Recent'}</span>
                        </div>
                        <button class="btn btn-sm btn-outline-secondary py-0 px-2" style="font-size: 12px;" onclick="this.classList.toggle('btn-success'); this.classList.toggle('text-white');">
                            Helpful ♡ (${rev.helpfulCount || 5})
                        </button>
                    </div>
                </div>
            `;
        });

        reviewsHTML += `</div>`;
        reviewsContainer.innerHTML = reviewsHTML;
    }

    // Populate Related Products Grid
    const relatedContainer = document.querySelector('.related-products-grid, .related-grid');
    if (relatedContainer && typeof POPULAR_PRODUCTS_DATA !== 'undefined' && Array.isArray(POPULAR_PRODUCTS_DATA)) {
        relatedContainer.innerHTML = '';
        const otherProds = POPULAR_PRODUCTS_DATA.filter(item => item.id !== p.id);
        const relatedProds = otherProds.slice(0, 5);

        relatedProds.forEach(relProd => {
            const relImg = (relProd.images && relProd.images.length > 0) ? relProd.images[0] : (relProd.mainImg || '');
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.cursor = 'pointer';
            card.onclick = () => window.location.href = `product-popular.html?id=${relProd.id}`;
            card.innerHTML = `
                <div class="product-image-wrapper">
                    <div class="myntra-rating-pill"><span>4.8</span> <i class="bi bi-star-fill star-icon"></i></div>
                    <a href="product-popular.html?id=${relProd.id}"><img src="${relImg}" class="product-img" alt="${relProd.name}"></a>
                </div>
                <div class="product-info">
                    <span class="product-brand">${relProd.brand || 'SABLE'}</span>
                    <h3 class="product-name"><a href="product-popular.html?id=${relProd.id}">${relProd.name}</a></h3>
                    <div class="product-price">
                        <span class="current-price">${relProd.price}</span> 
                        <span class="original-price">${relProd.originalPrice || ''}</span> 
                        <span class="discount-badge">${relProd.discount || ''}</span>
                    </div>
                </div>
            `;
            relatedContainer.appendChild(card);
        });
    }
}

function initGallery() {
    const mainImg = document.getElementById('mainProductImg');
    const thumbsCol = document.querySelector('.product-thumbnails-col');
    const angleBadge = document.getElementById('currentAngleBadge');
    if (!thumbsCol || !mainImg) return;

    thumbsCol.addEventListener('click', (e) => {
        const thumb = e.target.closest('.thumb-item');
        if (!thumb) return;

        document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        const newSrc = thumb.getAttribute('data-img');
        const label = thumb.getAttribute('data-label') || 'Angle View';
        const pos = thumb.getAttribute('data-pos') || 'center center';
        const scale = thumb.getAttribute('data-scale') || '1.0';

        if (newSrc) {
            mainImg.style.opacity = '0.3';
            setTimeout(() => {
                mainImg.src = newSrc;
                mainImg.style.objectPosition = pos;
                mainImg.style.transform = `scale(${scale})`;
                mainImg.style.opacity = '1';
            }, 100);
        }

        if (angleBadge) {
            angleBadge.innerHTML = `<i class="bi bi-eye"></i> ${label}`;
        }
    });
}

function initGallery() {
    const mainImg = document.getElementById('mainProductImg');
    const thumbsCol = document.querySelector('.product-thumbnails-col');
    const angleBadge = document.getElementById('currentAngleBadge');
    if (!thumbsCol || !mainImg) return;

    thumbsCol.addEventListener('click', (e) => {
        const thumb = e.target.closest('.thumb-item');
        if (!thumb) return;

        document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        const newSrc = thumb.getAttribute('data-img');
        const label = thumb.getAttribute('data-label') || 'Angle View';
        const pos = thumb.getAttribute('data-pos') || 'center center';
        const scale = thumb.getAttribute('data-scale') || '1.0';

        if (newSrc) {
            mainImg.style.opacity = '0.3';
            setTimeout(() => {
                mainImg.src = newSrc;
                mainImg.style.objectPosition = pos;
                mainImg.style.transform = `scale(${scale})`;
                mainImg.style.opacity = '1';
            }, 100);
        }

        if (angleBadge) {
            angleBadge.innerHTML = `<i class="bi bi-eye"></i> ${label}`;
        }
        });
}

function initPincodeChecker() {
    const checkBtn = document.querySelector('.btn-check-pin');
    const pinInput = document.querySelector('.pincode-input');

    if (checkBtn && pinInput) {
        checkBtn.addEventListener('click', () => {
            const val = pinInput.value.trim();
            if (/^\d{6}$/.test(val)) {
                alert(`Delivery available to ${val}. Expected delivery within 2-3 business days.`);
            } else {
                alert('Please enter a valid 6-digit Pincode.');
            }
        });
    }
}

function initAddToCart() {
    // Add to bag handled centrally by SableCart & cart-fly-animation.js
}

function initReviewVotes() {
    const voteBtns = document.querySelectorAll('.vote-btn');
    voteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('voted')) return;
            btn.classList.add('voted');
            let text = btn.textContent;
            let match = text.match(/\d+/);
            if (match) {
                let count = parseInt(match[0]) + 1;
                btn.innerHTML = btn.innerHTML.replace(/\d+/, count);
            }
            btn.style.color = '#9c27b0';
            btn.style.fontWeight = 'bold';
        });
    });
}

function toggleAmazonCard(bodyId, iconId) {
    const body = document.getElementById(bodyId);
    const icon = document.getElementById(iconId);
    if (!body) return;

    if (body.classList.contains('show')) {
        body.classList.remove('show');
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        body.classList.add('show');
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}

function toggleAccordion(bodyId, iconId) {
    const body = document.getElementById(bodyId);
    const icon = document.getElementById(iconId);
    if (!body) return;

    if (body.classList.contains('show')) {
        body.classList.remove('show');
        if (icon) icon.className = 'bi bi-chevron-down';
    } else {
        body.classList.add('show');
        if (icon) icon.className = 'bi bi-chevron-up';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const pills = document.querySelectorAll('.pill-btn');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
});
