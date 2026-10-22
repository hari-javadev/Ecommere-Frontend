/**
 * Product Details Controller for Electronics & Mobiles Category
 * Dynamically loads product information based on ?id= query param
 */

const ELECTRONICS_PRODUCTS_DATA = [
    {
        "id": 1,
        "brand": "Realme",
        "name": "Realme 12 Pro+ 5G (Submarine Blue, 256 GB)",
        "price": "Rs. 29999",
        "originalPrice": "Rs. 34999",
        "discount": "(14% OFF)",
        "badge": "BESTSELLER",
        "rating": "4.8",
        "reviewsCount": "850",
        "mainImg": "assets/images/techvolt-web-host-mobile-1.png",
        "category": "Electronics & Mobiles",
        "subcategory": "Mobiles",
        "description": "Realme 12 Pro+ 5G features a Periscope Portrait Camera, Luxury Watch Design, and Snapdragon 7s Gen 2 5G Processor.",
        "images": [
            "assets/images/techvolt-web-host-mobile-1.png",
            "assets/images/techvolt-crm-mobile-2.png",
            "assets/images/techvolt-software-dev-mobile-3.png",
            "assets/images/techvolt-web-dev-mobile-4.png"
        ]
    },
    {
        "id": 2,
        "brand": "Samsung",
        "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray)",
        "price": "Rs. 129999",
        "originalPrice": "Rs. 144999",
        "discount": "(10% OFF)",
        "badge": "POPULAR",
        "rating": "4.9",
        "reviewsCount": "1.4k",
        "mainImg": "assets/images/techvolt-full-dev-mobile-5.png",
        "category": "Electronics & Mobiles",
        "subcategory": "Mobiles",
        "description": "Samsung Galaxy S24 Ultra 5G with Galaxy AI, 200MP Quad Tele System camera, built-in S Pen, and Titanium frame.",
        "images": [
            "assets/images/techvolt-full-dev-mobile-5.png",
            "assets/images/techvolt-mern-dev-mobile-6.png",
            "assets/images/techvolt-php-dev-mobile-7.png",
            "assets/images/techvolt-python-dev-mobile-8.png"
        ]
    },
    {
        "id": 3,
        "brand": "iQOO",
        "name": "iQOO 12 5G (Legendary White, 512GB)",
        "price": "Rs. 52999",
        "originalPrice": "Rs. 59999",
        "discount": "(11% OFF)",
        "badge": "NEW",
        "rating": "4.7",
        "reviewsCount": "620",
        "mainImg": "assets/images/techvolt-front-dev-mobile-9.png",
        "category": "Electronics & Mobiles",
        "subcategory": "Mobiles",
        "description": "iQOO 12 5G powered by Snapdragon 8 Gen 3, Supercomputing Chip Q1, 144Hz AMOLED Display, and 50MP Periscope Camera.",
        "images": [
            "assets/images/techvolt-front-dev-mobile-9.png",
            "assets/images/techvolt-back-dev-mobile-10.png",
            "assets/images/techvolt-digital-marketing-mobile-11.png",
            "assets/images/techvolt-crm-dev-mobile-12.png"
        ]
    },
    {
        "id": 4,
        "brand": "OnePlus",
        "name": "OnePlus 12 5G (Flowy Emerald, 256 GB)",
        "price": "Rs. 64999",
        "originalPrice": "Rs. 69999",
        "discount": "(7% OFF)",
        "badge": "HOT DEAL",
        "rating": "4.8",
        "reviewsCount": "930",
        "mainImg": "assets/images/techvolt-web-host-mobile-13.png",
        "category": "Electronics & Mobiles",
        "subcategory": "Mobiles",
        "description": "OnePlus 12 5G with 4th Gen Hasselblad Camera System, Snapdragon 8 Gen 3, 2K 120Hz ProXDR Display, and 100W SUPERVOOC.",
        "images": [
            "assets/images/techvolt-web-host-mobile-13.png",
            "assets/images/techvolt-crm-mobile-14.png",
            "assets/images/techvolt-software-dev-mobile-15.png",
            "assets/images/techvolt-web-dev-mobile-16.png"
        ]
    },
    {
        "id": 5,
        "brand": "Redmi",
        "name": "Redmi Note 13 Pro+ 5G (Fusion Purple, 256 GB)",
        "price": "Rs. 31999",
        "originalPrice": "Rs. 35999",
        "discount": "(11% OFF)",
        "badge": "TOP RATED",
        "rating": "4.6",
        "reviewsCount": "1.1k",
        "mainImg": "assets/images/techvolt-full-dev-mobile-17.png",
        "category": "Electronics & Mobiles",
        "subcategory": "Mobiles",
        "description": "Redmi Note 13 Pro+ 5G featuring 200MP OIS Camera, 3D Curved 1.5K AMOLED Display, IP68 rating, and 120W HyperCharge.",
        "images": [
            "assets/images/techvolt-full-dev-mobile-17.png",
            "assets/images/techvolt-mern-dev-mobile-18.png",
            "assets/images/techvolt-php-dev-mobile-19.png",
            "assets/images/techvolt-python-dev-mobile-20.png"
        ]
    },
    {
        "id": 6,
        "brand": "Noise",
        "name": "Noise Buds VS102 Wireless Earbuds",
        "price": "Rs. 1299",
        "originalPrice": "Rs. 2999",
        "discount": "(56% OFF)",
        "badge": "BESTSELLER",
        "rating": "4.7",
        "reviewsCount": "2.5k",
        "mainImg": "assets/images/techvolt-front-dev-airpods-21.png",
        "category": "Electronics & Mobiles",
        "subcategory": "AirPods / Earbuds",
        "description": "Noise Buds VS102 Truly Wireless Earbuds with 50-hour playtime, Flybird design, quad mics with ENC, and Instacharge.",
        "images": [
            "assets/images/techvolt-front-dev-airpods-21.png",
            "assets/images/techvolt-back-dev-airpods-22.png",
            "assets/images/techvolt-digital-marketing-airpods-23.png",
            "assets/images/techvolt-crm-dev-airpods-24.png"
        ]
    },
    {
        "id": 7,
        "brand": "Philips",
        "name": "Philips TAT2206 Wireless TWS Earbuds",
        "price": "Rs. 1999",
        "originalPrice": "Rs. 4999",
        "discount": "(60% OFF)",
        "badge": "EXCLUSIVE",
        "rating": "4.8",
        "reviewsCount": "1.8k",
        "mainImg": "assets/images/techvolt-web-host-airpods-25.png",
        "category": "Electronics & Mobiles",
        "subcategory": "AirPods / Earbuds",
        "description": "Philips TAT2206 True Wireless Earbuds with IPX4 splash resistance, ergonomic soft ear-cap covers, and up to 18 hours playtime.",
        "images": [
            "assets/images/techvolt-web-host-airpods-25.png",
            "assets/images/techvolt-crm-airpods-26.png",
            "assets/images/techvolt-software-dev-airpods-27.png",
            "assets/images/techvolt-web-dev-airpods-28.png"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;

    const product = ELECTRONICS_PRODUCTS_DATA.find(p => p.id === productId) || ELECTRONICS_PRODUCTS_DATA[0];

    if (product) {
        populateProductDetails(product);
    }

    initGallery();
    initColorSelector();
    initQuantitySelector();
    initPincodeChecker();
    initAddToCart();
    initReviewVotes();
});

// Helper function to return gallery items for the product

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
    if (relatedContainer && typeof ELECTRONICS_PRODUCTS_DATA !== 'undefined' && Array.isArray(ELECTRONICS_PRODUCTS_DATA)) {
        relatedContainer.innerHTML = '';
        const otherProds = ELECTRONICS_PRODUCTS_DATA.filter(item => item.id !== p.id);
        const relatedProds = otherProds.slice(0, 5);

        relatedProds.forEach(relProd => {
            const relImg = (relProd.images && relProd.images.length > 0) ? relProd.images[0] : (relProd.mainImg || '');
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.cursor = 'pointer';
            card.onclick = () => window.location.href = `product-electronics.html?id=${relProd.id}`;
            card.innerHTML = `
                <div class="product-image-wrapper">
                    <div class="myntra-rating-pill"><span>4.8</span> <i class="bi bi-star-fill star-icon"></i></div>
                    <a href="product-electronics.html?id=${relProd.id}"><img src="${relImg}" class="product-img" alt="${relProd.name}"></a>
                </div>
                <div class="product-info">
                    <span class="product-brand">${relProd.brand || 'SABLE'}</span>
                    <h3 class="product-name"><a href="product-electronics.html?id=${relProd.id}">${relProd.name}</a></h3>
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

function initColorSelector() {
    const swatches = document.querySelectorAll('.color-dot');
    const colorLabel = document.getElementById('selectedColorName');

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            if (colorLabel) {
                colorLabel.textContent = swatch.getAttribute('data-color') || 'Selected';
            }
        });
    });
}

function initQuantitySelector() {
    const minusBtn = document.getElementById('qtyMinus');
    const plusBtn = document.getElementById('qtyPlus');
    const qtyVal = document.getElementById('qtyVal');

    if (minusBtn && qtyVal) {
        minusBtn.addEventListener('click', () => {
            let val = parseInt(qtyVal.textContent) || 1;
            if (val > 1) {
                qtyVal.textContent = val - 1;
            }
        });
    }

    if (plusBtn && qtyVal) {
        plusBtn.addEventListener('click', () => {
            let val = parseInt(qtyVal.textContent) || 1;
            if (val < 10) {
                qtyVal.textContent = val + 1;
            }
        });
    }
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
