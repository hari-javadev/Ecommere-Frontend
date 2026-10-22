/**
 * Bags & Footwear Product Filter Engine
 * Single Source of Truth for Product Dataset and Rendering.
 */

const BAG_PRODUCTS_DATA = [
    {
        id: 1,
        brand: "MAISON SABLE",
        name: "Structured Leather Handbag Tote",
        price: 2999,
        originalPrice: "Rs. 5999",
        discount: "(50% OFF)",
        badge: "AD",
        rating: "4.8",
        reviewsCount: "1.2k",
        category: "Bags & Footwear",
        subcategory: "Bags",
        images: [
            "assets/images/techvolt-web-host-bag-1.png",
            "assets/images/techvolt-crm-bag-2.png",
            "assets/images/techvolt-software-dev-bag-3.png",
            "assets/images/techvolt-web-dev-bag-4.png"
        ]
    },
    {
        id: 2,
        brand: "ALDO",
        name: "Premium Crossbody Shoulder Bag",
        price: 2499,
        originalPrice: "Rs. 4999",
        discount: "(50% OFF)",
        badge: "AD",
        rating: "4.7",
        reviewsCount: "850",
        category: "Bags & Footwear",
        subcategory: "Bags",
        images: [
            "assets/images/techvolt-full-dev-bag-5.png",
            "assets/images/techvolt-mern-dev-bag-6.png",
            "assets/images/techvolt-php-dev-bag-7.png",
            "assets/images/techvolt-python-dev-bag-8.png"
        ]
    },
    {
        id: 3,
        brand: "STEVE MADDEN",
        name: "Classic Quilted Sling Bag",
        price: 3499,
        originalPrice: "Rs. 6999",
        discount: "(50% OFF)",
        badge: "",
        onlyFewLeft: true,
        rating: "4.6",
        reviewsCount: "620",
        category: "Bags & Footwear",
        subcategory: "Bags",
        images: [
            "assets/images/techvolt-front-dev-bag-9.png",
            "assets/images/techvolt-back-dev-bag-10.png",
            "assets/images/techvolt-digital-marketing-bag-11.png",
            "assets/images/techvolt-crm-dev-bag-12.png"
        ]
    },
    {
        id: 4,
        brand: "MICHAEL KORS",
        name: "Designer Leather Clutch Bag",
        price: 1999,
        originalPrice: "Rs. 3999",
        discount: "(50% OFF)",
        badge: "",
        rating: "4.8",
        reviewsCount: "410",
        category: "Bags & Footwear",
        subcategory: "Bags",
        images: [
            "assets/images/techvolt-web-host-bag-13.png",
            "assets/images/techvolt-crm-bag-14.png",
            "assets/images/techvolt-software-dev-bag-15.png",
            "assets/images/techvolt-web-dev-bag-16.png"
        ]
    },
    {
        id: 5,
        brand: "COACH",
        name: "Executive Monogram Duffle Bag",
        price: 4499,
        originalPrice: "Rs. 8999",
        discount: "(50% OFF)",
        badge: "AD",
        rating: "4.9",
        reviewsCount: "980",
        category: "Bags & Footwear",
        subcategory: "Bags",
        images: [
            "assets/images/techvolt-full-dev-bag-17.png",
            "assets/images/techvolt-mern-dev-bag-18.png",
            "assets/images/techvolt-php-dev-bag-19.png",
            "assets/images/techvolt-python-dev-bag-20.png"
        ]
    },
    {
        id: 6,
        brand: "PUMA",
        name: "Casual Leather Sneakers",
        price: 2799,
        originalPrice: "Rs. 5599",
        discount: "(50% OFF)",
        badge: "",
        rating: "4.8",
        reviewsCount: "1.4k",
        category: "Bags & Footwear",
        subcategory: "Footwear",
        images: [
            "assets/images/techvolt-front-dev-footwear-21.png",
            "assets/images/techvolt-back-dev-footwear-22.png",
            "assets/images/techvolt-digital-marketing-footwear-23.png",
            "assets/images/techvolt-crm-dev-footwear-24.png"
        ]
    },
    {
        id: 7,
        brand: "NIKE",
        name: "Pointed Stiletto Heel Sandals",
        price: 3299,
        originalPrice: "Rs. 6599",
        discount: "(50% OFF)",
        badge: "",
        rating: "4.9",
        reviewsCount: "730",
        category: "Bags & Footwear",
        subcategory: "Footwear",
        images: [
            "assets/images/techvolt-web-host-footwear-25.png",
            "assets/images/techvolt-crm-footwear-26.png",
            "assets/images/techvolt-software-dev-footwear-27.png",
            "assets/images/techvolt-web-dev-footwear-28.png"
        ]
    }
];

function renderProductCardHTML(p) {
    const imagesJson = JSON.stringify(p.images);
    const adBadge = p.badge ? `<span class="myntra-ad-badge">${p.badge}</span>` : '';
    const fewLeft = p.onlyFewLeft ? `<div class="myntra-only-few-left">Only Few Left!</div>` : '';

    return `
        <div class="product-card" data-images='${imagesJson}' data-category="${p.category}" data-subcategory="${p.subcategory}" data-brand="${p.brand}" data-price="${p.price}">
            <div class="product-image-wrapper">
                ${adBadge}
                <div class="myntra-rating-pill">
                    <span>${p.rating}</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">${p.reviewsCount}</span>
                </div>
                <a href="product-bag.html?id=${p.id}">
                    <img src="${p.images[0]}" class="product-img" alt="${p.name}">
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
                <span class="product-brand">${p.brand}</span>
                <h3 class="product-name"><a href="product-bag.html?id=${p.id}">${p.name}</a></h3>
                <div class="product-price">
                    <span class="current-price">Rs. ${p.price}</span>
                    <span class="original-price">${p.originalPrice}</span>
                    <span class="discount-badge">${p.discount}</span>
                </div>
                ${fewLeft}
            </div>
        </div>
    `;
}

function renderProducts(productList) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    // Single source rendering: clear grid completely and render ONLY matching cards
    productsGrid.innerHTML = '';

    if (productList.length === 0) {
        productsGrid.innerHTML = `
            <div id="noProductsFoundState" class="no-products-found-state text-center py-5 w-100" style="grid-column: 1 / -1; padding: 60px 20px; background: #ffffff; border-radius: 8px; border: 1px dashed #d4d5d9;">
                <i class="bi bi-search" style="font-size: 38px; color: #ff3f6c; margin-bottom: 12px; display: block;"></i>
                <h4 style="font-weight: 700; color: #282c3f; margin-bottom: 6px;">No products found</h4>
                <p class="text-muted mb-3" style="font-size: 14px;">We couldn't find any products matching your selected filters.</p>
                <button class="btn btn-outline-danger btn-sm px-4 py-2" id="btnEmptyClearFilters" style="font-weight: 700; border-radius: 4px;" onclick="resetAllFilters()">CLEAR ALL FILTERS</button>
            </div>
        `;
    } else {
        productsGrid.innerHTML = productList.map(renderProductCardHTML).join('');
        if (typeof initProductHoverSlider === 'function') {
            initProductHoverSlider();
        }
    }

    const headerCountEl = document.querySelector('.category-showing-count, .title-count-myntra, .header-count');
    if (headerCountEl) {
        headerCountEl.textContent = `- ${productList.length} items`;
    }
}

function initBagsFilterEngine() {
    const sidebar = document.getElementById('categorySidebar') || document.querySelector('.category-sidebar');
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    const clearAllBtns = document.querySelectorAll('#btnClearAllFilters, .btn-clear-all-filters, .btn-clear-filter');
    const backdrop = document.getElementById('filterBackdrop');
    const btnFilterToggle = document.getElementById('btnFilterToggle');
    const btnCloseSidebar = document.getElementById('btnCloseSidebar');

    const btnTopCategory = document.getElementById('btnTopCategory');
    const btnTopBrand = document.getElementById('btnTopBrand');
    const btnTopPrice = document.getElementById('btnTopPrice');

    const menuTopCategory = document.getElementById('menuTopCategory');
    const menuTopBrand = document.getElementById('menuTopBrand');
    const menuTopPrice = document.getElementById('menuTopPrice');

    const topMenus = [menuTopCategory, menuTopBrand, menuTopPrice].filter(Boolean);

    function closeAllOverlays() {
        topMenus.forEach(m => { if (m) m.style.display = 'none'; });
        if (sidebar && window.innerWidth <= 991) {
            sidebar.classList.remove('show');
        }
        if (backdrop) {
            backdrop.classList.remove('show');
        }
    }

    if (btnTopCategory && menuTopCategory) {
        btnTopCategory.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = menuTopCategory.style.display === 'block';
            closeAllOverlays();
            menuTopCategory.style.display = isOpen ? 'none' : 'block';
        });
    }

    if (btnTopBrand && menuTopBrand) {
        btnTopBrand.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = menuTopBrand.style.display === 'block';
            closeAllOverlays();
            menuTopBrand.style.display = isOpen ? 'none' : 'block';
        });
    }

    if (btnTopPrice && menuTopPrice) {
        btnTopPrice.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = menuTopPrice.style.display === 'block';
            closeAllOverlays();
            menuTopPrice.style.display = isOpen ? 'none' : 'block';
        });
    }

    if (btnFilterToggle && sidebar) {
        btnFilterToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = sidebar.classList.contains('show');
            closeAllOverlays();
            if (!isOpen) {
                sidebar.classList.add('show');
                if (backdrop && window.innerWidth <= 991) {
                    backdrop.classList.add('show');
                }
            }
        });
    }

    if (btnCloseSidebar) {
        btnCloseSidebar.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeAllOverlays();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeAllOverlays();
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.myntra-top-filter-bar') && !e.target.closest('.category-sidebar')) {
            closeAllOverlays();
        }
    });

    function getAllCheckboxes(groupType) {
        return Array.from(document.querySelectorAll(`input[data-group="${groupType}"]`));
    }

    function setCategoryState(activeVal) {
        const catCbs = getAllCheckboxes('category');
        catCbs.forEach(cb => {
            cb.checked = (cb.value.toLowerCase() === activeVal.toLowerCase());
        });
    }

    function syncBrandOrPriceCheckboxes(changedCb, groupType) {
        const val = changedCb.value;
        const isChecked = changedCb.checked;
        const allInGroup = getAllCheckboxes(groupType);
        allInGroup.forEach(cb => {
            if (cb.value === val) {
                cb.checked = isChecked;
            }
        });
    }

    function isPriceInRange(price, text) {
        const cleanText = (text || '').toLowerCase();
        if (cleanText.includes('under')) {
            const maxMatch = cleanText.match(/\d[\d,]*/);
            if (maxMatch) return price < parseInt(maxMatch[0].replace(/,/g, ''), 10);
        } else if (cleanText.includes('+') || cleanText.includes('above')) {
            const minMatch = cleanText.match(/\d[\d,]*/);
            if (minMatch) return price >= parseInt(minMatch[0].replace(/,/g, ''), 10);
        } else if (cleanText.includes('–') || cleanText.includes('-') || cleanText.includes('to')) {
            const nums = cleanText.match(/\d[\d,]*/g);
            if (nums && nums.length >= 2) {
                const minPrice = parseInt(nums[0].replace(/,/g, ''), 10);
                const maxPrice = parseInt(nums[1].replace(/,/g, ''), 10);
                return price >= minPrice && price <= maxPrice;
            }
        }
        return false;
    }

    function applyFilters() {
        const catCbs = getAllCheckboxes('category');
        const brandCbs = getAllCheckboxes('brand');
        const priceCbs = getAllCheckboxes('price');

        const checkedCatVal = catCbs.find(cb => cb.checked)?.value || 'all';
        let selectedCategory = 'all';
        if (checkedCatVal.toLowerCase() === 'bags') {
            selectedCategory = 'Bags';
        } else if (checkedCatVal.toLowerCase() === 'footwear') {
            selectedCategory = 'Footwear';
        } else {
            selectedCategory = 'all';
        }

        const checkedBrands = Array.from(new Set(brandCbs.filter(cb => cb.checked).map(cb => cb.value.toLowerCase())));
        const checkedPriceTexts = Array.from(new Set(priceCbs.filter(cb => cb.checked).map(cb => {
            return (cb.closest('label')?.textContent || '').toLowerCase().replace(/\(\d+\)/g, '').trim();
        })));

        // Filter product dataset (Single Source of Truth)
        let filteredProducts = [];
        if (selectedCategory === "Bags") {
            filteredProducts = BAG_PRODUCTS_DATA.filter(p => p.subcategory === "Bags");
        } else if (selectedCategory === "Footwear") {
            filteredProducts = BAG_PRODUCTS_DATA.filter(p => p.subcategory === "Footwear");
        } else {
            filteredProducts = [...BAG_PRODUCTS_DATA];
        }

        if (checkedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(p => {
                return checkedBrands.some(b => p.brand.toLowerCase().includes(b) || b.includes(p.brand.toLowerCase()));
            });
        }

        if (checkedPriceTexts.length > 0) {
            filteredProducts = filteredProducts.filter(p => {
                return checkedPriceTexts.some(pText => isPriceInRange(p.price, pText));
            });
        }

        // Render EXACTLY filtered products in DOM grid
        renderProducts(filteredProducts);
    }

    window.resetAllFilters = function() {
        setCategoryState('all');
        ['brand', 'price'].forEach(groupType => {
            const cbs = getAllCheckboxes(groupType);
            cbs.forEach(cb => { cb.checked = false; });
        });

        closeAllOverlays();
        applyFilters();
    };

    ['category', 'brand', 'price'].forEach(groupType => {
        const cbs = getAllCheckboxes(groupType);
        cbs.forEach(cb => {
            const container = cb.closest('li') || cb.closest('label');

            const activate = (e) => {
                if (e) e.stopPropagation();

                if (groupType === 'category') {
                    setCategoryState(cb.value);
                    closeAllOverlays();
                } else {
                    syncBrandOrPriceCheckboxes(cb, groupType);
                }

                applyFilters();
            };

            cb.addEventListener('change', activate);

            if (container) {
                container.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (e.target !== cb) {
                        e.preventDefault();
                        if (groupType === 'category') {
                            setCategoryState(cb.value);
                            closeAllOverlays();
                        } else {
                            cb.checked = !cb.checked;
                            syncBrandOrPriceCheckboxes(cb, groupType);
                        }
                        applyFilters();
                    }
                });
            }
        });
    });

    clearAllBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            resetAllFilters();
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const urlCat = urlParams.get('category') || urlParams.get('cat') || urlParams.get('subcategory');
    if (urlCat) {
        const cleanUrlCat = urlCat.toLowerCase();
        if (cleanUrlCat.includes('bag')) {
            setCategoryState('bags');
        } else if (cleanUrlCat.includes('footwear') || cleanUrlCat.includes('shoe') || cleanUrlCat.includes('heel')) {
            setCategoryState('footwear');
        }
    }

    applyFilters();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBagsFilterEngine);
} else {
    initBagsFilterEngine();
}