/**
 * Kids & Toys Product Filter Engine
 * Single Source of Truth for Product Dataset and Dynamic DOM Rendering.
 */

const KIDS_PRODUCTS_DATA = [
    {
        id: "rb1-1",
        brand: "ROBOTICS KIDS",
        name: "Remote Control Convertible Robot Toy Set",
        price: 1499,
        originalPrice: "Rs. 2999",
        discount: "(50% OFF)",
        badge: "AD",
        rating: "4.8",
        reviewsCount: "1.2k",
        category: "Kids & Toys",
        subcategory: "Toys",
        images: ["assets/images/techvolt-web-host-kids-1.png", "assets/images/techvolt-crm-kids-2.png", "assets/images/techvolt-software-dev-kids-3.png", "assets/images/techvolt-web-dev-kids-4.png"]
    },
    {
        id: "rb2-1",
        brand: "ROBOTICS KIDS",
        name: "RC High Speed Off-Road Stunt Car",
        price: 1299,
        originalPrice: "Rs. 2599",
        discount: "(50% OFF)",
        badge: "",
        rating: "4.7",
        reviewsCount: "890",
        category: "Kids & Toys",
        subcategory: "Toys",
        images: ["assets/images/techvolt-full-dev-kids-5.png", "assets/images/techvolt-mern-dev-kids-6.png", "assets/images/techvolt-php-dev-kids-7.png", "assets/images/techvolt-python-dev-kids-8.png"]
    },
    {
        id: "rb3-1",
        brand: "ROBOTICS KIDS",
        name: "Educational DIY STEM Building Robot Kit",
        price: 1899,
        originalPrice: "Rs. 3799",
        discount: "(50% OFF)",
        badge: "TOP RATED",
        rating: "4.9",
        reviewsCount: "1.5k",
        category: "Kids & Toys",
        subcategory: "Toys",
        images: ["assets/images/techvolt-front-dev-kids-9.png", "assets/images/techvolt-back-dev-kids-10.png", "assets/images/techvolt-digital-marketing-kids-11.png", "assets/images/techvolt-crm-dev-kids-12.png"]
    },
    {
        id: 10,
        brand: "HOT WHEELS",
        name: "Die-Cast Monster Truck Play Set",
        price: 899,
        originalPrice: "Rs. 1799",
        discount: "(50% OFF)",
        badge: "",
        rating: "4.7",
        reviewsCount: "840",
        category: "Kids & Toys",
        subcategory: "Toys",
        images: ["assets/images/techvolt-web-host-toy-13.png", "assets/images/techvolt-crm-toy-14.png", "assets/images/techvolt-software-dev-toy-15.png", "assets/images/techvolt-web-dev-toy-16.png"]
    },
    {
        id: 12,
        brand: "NERF",
        name: "High-Speed Soft Foam Dart Blaster",
        price: 1299,
        originalPrice: "Rs. 2599",
        discount: "(50% OFF)",
        badge: "",
        rating: "4.6",
        reviewsCount: "950",
        category: "Kids & Toys",
        subcategory: "Toys",
        images: ["assets/images/techvolt-full-dev-toy-17.png", "assets/images/techvolt-mern-dev-toy-18.png", "assets/images/techvolt-php-dev-toy-19.png", "assets/images/techvolt-python-dev-toy-20.png"]
    },
    {
        id: 13,
        brand: "FISHER-PRICE",
        name: "Multi-Color Musical Activity Walker & Gym",
        price: 1799,
        originalPrice: "Rs. 3599",
        discount: "(50% OFF)",
        badge: "",
        rating: "4.9",
        reviewsCount: "2.1k",
        category: "Kids & Toys",
        subcategory: "Toys",
        images: ["assets/images/techvolt-front-dev-toy-21.png", "assets/images/techvolt-back-dev-toy-22.png", "assets/images/techvolt-digital-marketing-toy-23.png", "assets/images/techvolt-crm-dev-toy-24.png"]
    },
    {
        id: 14,
        brand: "FUNSKOOL",
        name: "Remote Control Racing Speed Boat",
        price: 1599,
        originalPrice: "Rs. 3199",
        discount: "(50% OFF)",
        badge: "",
        rating: "4.8",
        reviewsCount: "1.4k",
        category: "Kids & Toys",
        subcategory: "Toys",
        images: ["assets/images/techvolt-web-host-toy-25.png", "assets/images/techvolt-crm-toy-26.png", "assets/images/techvolt-software-dev-toy-27.png", "assets/images/techvolt-web-dev-toy-28.png"]
    }
];

function renderKidsProductCardHTML(p) {
    const imagesJson = JSON.stringify(p.images);
    const adBadge = p.badge ? `<span class="myntra-ad-badge">${p.badge}</span>` : '';
    const dotsHtml = p.images.map((_, idx) => `<span class="dot ${idx === 0 ? 'active' : ''}"></span>`).join('');

    return `
        <div class="product-card" data-images='${imagesJson}' data-category="${p.category}" data-subcategory="${p.subcategory}" data-brand="${p.brand}" data-price="${p.price}">
            <div class="product-image-wrapper">
                ${adBadge}
                <div class="myntra-rating-pill">
                    <span>${p.rating}</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">${p.reviewsCount}</span>
                </div>
                <a href="product-kids.html?id=${p.id}">
                    <img src="${p.images[0]}" class="product-img" alt="${p.name}" onerror="this.onerror=null; this.style.opacity='0';">
                </a>
                <div class="myntra-image-hover-overlay">
                    <div class="myntra-dots-line">
                        ${dotsHtml}
                    </div>
                    <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)">
                        <i class="bi bi-heart me-1"></i> <span>WISHLIST</span>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-brand">${p.brand}</span>
                <h3 class="product-name"><a href="product-kids.html?id=${p.id}">${p.name}</a></h3>
                <div class="product-price">
                    <span class="current-price">Rs. ${p.price}</span>
                    <span class="original-price">${p.originalPrice}</span>
                    <span class="discount-badge">${p.discount}</span>
                </div>
            </div>
        </div>
    `;
}

function renderKidsProducts(productList) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    // Clear grid completely before rendering matching cards
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
        productsGrid.innerHTML = productList.map(renderKidsProductCardHTML).join('');
        if (typeof initProductHoverSlider === 'function') {
            initProductHoverSlider();
        }
    }

    const headerCountEl = document.querySelector('.category-showing-count, .title-count-myntra, .header-count');
    if (headerCountEl) {
        headerCountEl.textContent = `- ${productList.length} items`;
    }
}

function initKidsFilterEngine() {
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
            if (cb.value.toLowerCase() === val.toLowerCase()) {
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
        const lowerCat = checkedCatVal.toLowerCase();

        if (lowerCat === 'toys' || lowerCat.includes('toy')) {
            selectedCategory = 'Toys';
        } else if (lowerCat === 'kids' || lowerCat.includes('kids apparel') || lowerCat.includes('clothing') || lowerCat === 'apparel') {
            selectedCategory = 'Kids Apparel';
        } else {
            selectedCategory = 'all';
        }

        const checkedBrands = Array.from(new Set(brandCbs.filter(cb => cb.checked).map(cb => cb.value.toLowerCase())));
        const checkedPriceTexts = Array.from(new Set(priceCbs.filter(cb => cb.checked).map(cb => {
            return (cb.closest('label')?.textContent || '').toLowerCase().replace(/\(\d+\)/g, '').trim();
        })));

        // Filter product dataset (Single Source of Truth)
        let filteredProducts = [];
        if (selectedCategory === "Kids Apparel") {
            filteredProducts = KIDS_PRODUCTS_DATA.filter(p => p.subcategory === "Kids Apparel");
        } else if (selectedCategory === "Toys") {
            filteredProducts = KIDS_PRODUCTS_DATA.filter(p => p.subcategory === "Toys");
        } else {
            filteredProducts = [...KIDS_PRODUCTS_DATA];
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
        renderKidsProducts(filteredProducts);
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

    // Check URL parameters (e.g., kids.html?category=kids or ?category=toys)
    const urlParams = new URLSearchParams(window.location.search);
    const urlCat = urlParams.get('category') || urlParams.get('cat') || urlParams.get('subcategory');
    if (urlCat) {
        const cleanUrlCat = urlCat.toLowerCase();
        if (cleanUrlCat.includes('toy')) {
            setCategoryState('toys');
        } else if (cleanUrlCat.includes('kid')) {
            setCategoryState('kids');
        }
    }

    clearAllBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            resetAllFilters();
        });
    });

    applyFilters();
}

document.addEventListener('DOMContentLoaded', () => {
    initKidsFilterEngine();
});