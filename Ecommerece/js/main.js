// Disable browser right-click context menu globally across the website
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
}, true);

// Prevent Developer Tools & Inspection shortcuts globally (Ctrl+Shift+C, F12, Ctrl+Shift+I, Ctrl+Shift+J)
window.addEventListener('keydown', (event) => {
    const key = (event.key || '').toLowerCase();
    const keyCode = event.keyCode || event.which;

    const isCtrl = event.ctrlKey;
    const isMeta = event.metaKey; // Command key on macOS
    const isShift = event.shiftKey;
    const isAlt = event.altKey;   // Option key on macOS

    let block = false;

    // 1. Block F12
    if (key === 'f12' || keyCode === 123) {
        block = true;
    }
    // 2. Block Inspect Element: Ctrl + Shift + C (Windows/Linux) or Cmd + Option + C (macOS)
    // Explicitly preserves regular Ctrl+C / Cmd+C (Copy)
    else if (key === 'c' || keyCode === 67) {
        if ((isCtrl && isShift && !isAlt) || (isMeta && isAlt && !isShift)) {
            block = true;
        }
    }
    // 3. Block DevTools: Ctrl + Shift + I (Windows/Linux) or Cmd + Option + I (macOS)
    else if (key === 'i' || keyCode === 73) {
        if ((isCtrl && isShift) || (isMeta && isAlt)) {
            block = true;
        }
    }
    // 4. Block Console: Ctrl + Shift + J (Windows/Linux) or Cmd + Option + J (macOS)
    else if (key === 'j' || keyCode === 74) {
        if ((isCtrl && isShift) || (isMeta && isAlt)) {
            block = true;
        }
    }
    // 5. Block View Source: Ctrl + U / Cmd + Option + U
    else if (key === 'u' || keyCode === 85) {
        if (isCtrl || isMeta) {
            block = true;
        }
    }

    if (block) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
}, true);

// Auto-load reusable component loader if not already present
if (typeof SiteComponents === 'undefined' && !document.querySelector('script[src*="components.js"]')) {
    const compScript = document.createElement('script');
    compScript.src = 'js/components.js';
    document.head.appendChild(compScript);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("E-Commerce Website Loaded");

    // Initialize Hero Carousel with Bootstrap API
    const heroCarouselEl = document.getElementById('heroCarousel');
    if (heroCarouselEl) {
        const carousel = new bootstrap.Carousel(heroCarouselEl, {
            interval: 5000,
            ride: 'carousel',
            pause: 'hover',
            touch: true
        });

        heroCarouselEl.addEventListener('slide.bs.carousel', (e) => {
            const currentItems = heroCarouselEl.querySelectorAll('.carousel-item');
            currentItems.forEach(item => {
                const elements = item.querySelectorAll('.hero-badge, .hero-title, .hero-description, .hero-btn-group, .hero-bg-img');
                elements.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; // Trigger reflow
                    el.style.animation = '';
                });
            });
        });
    }

    // Mobile Brand Filter Tabs Logic
    const filterTabs = document.querySelectorAll('.mobile-filter-tabs .filter-tab');
    const mobileCards = document.querySelectorAll('.mobile-card');

    if (filterTabs.length > 0 && mobileCards.length > 0) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const selectedFilter = tab.getAttribute('data-filter');

                mobileCards.forEach(card => {
                    const cardBrand = card.getAttribute('data-brand');
                    if (selectedFilter === 'all' || selectedFilter === cardBrand) {
                        card.style.display = 'flex';
                        card.style.animation = 'heroFadeInUp 0.4s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Initialize & Sync Wishlist & Cart State across UI
    if (typeof SableWishlist !== 'undefined') {
        SableWishlist.updateHeaderWishlistCount();
        SableWishlist.syncWishlistButtons();

        // Auto-observe DOM changes to sync buttons on dynamic grid re-renders
        if (typeof MutationObserver !== 'undefined') {
            let syncTimeout = null;
            const observer = new MutationObserver((mutations) => {
                let shouldSync = false;
                for (const m of mutations) {
                    if (m.type === 'childList' && m.addedNodes.length > 0) {
                        shouldSync = true;
                        break;
                    }
                }
                if (shouldSync) {
                    if (syncTimeout) clearTimeout(syncTimeout);
                    syncTimeout = setTimeout(() => {
                        SableWishlist.syncWishlistButtons();
                    }, 50);
                }
            });
            const gridEl = document.querySelector('.products-grid') || document.body;
            observer.observe(gridEl, { childList: true, subtree: true });
        }
    }

    if (typeof SableCart !== 'undefined') {
        SableCart.updateHeaderCartCount();
    }

    // Initialize 4-Image Hover Slider for Product Cards
    initProductHoverSlider();

    // Initialize Latest Offers Notification Modal
    initLatestOffersModal();

    // Initialize Mobile & Tablet Responsive Navbar Dropdowns
    initResponsiveNavbarDropdowns();

    // Listen for dynamically loaded components (Navbar & Footer)
    document.addEventListener('componentsLoaded', () => {
        initResponsiveNavbarDropdowns();
        if (typeof SableWishlist !== 'undefined') {
            SableWishlist.updateHeaderWishlistCount();
        }
        if (typeof SableCart !== 'undefined') {
            SableCart.updateHeaderCartCount();
        }
    });
});

// Latest Offers Notification Modal Controller
function initLatestOffersModal() {
    function getOrInjectOffersModal() {
        let modalBackdrop = document.getElementById('offersModalBackdrop');
        if (!modalBackdrop) {
            modalBackdrop = document.createElement('div');
            modalBackdrop.className = 'latest-offers-modal-backdrop';
            modalBackdrop.id = 'offersModalBackdrop';
            modalBackdrop.innerHTML = `
        <div class="latest-offers-modal-dialog">
            <div class="latest-offers-modal-header">
                <div class="header-title-wrap">
                    <i class="bi bi-bell-fill me-2"></i>
                    <h5 class="m-0 fw-bold">Latest Offers</h5>
                </div>
                <button class="offers-modal-close-btn" id="offersModalCloseBtn" aria-label="Close">&times;</button>
            </div>
            <div class="latest-offers-modal-body">
                <a href="popular.html" class="offer-card-item">
                    <img src="assets/images/techvolt-web-host-mobile-1.png" alt="Big Brands, Big Savings!" class="offer-card-img">
                    <div class="offer-card-content">
                        <h6 class="offer-title">Big Brands, Big Savings! 🛍️</h6>
                        <p class="offer-desc">Shop your favorite products at exciting prices.</p>
                        <span class="offer-time">2 days ago</span>
                    </div>
                </a>
                <a href="electronics.html" class="offer-card-item">
                    <img src="assets/images/techvolt-software-shirt1.png" alt="Special Deals Are Live!" class="offer-card-img">
                    <div class="offer-card-content">
                        <h6 class="offer-title">Special Deals Are Live! 🔥</h6>
                        <p class="offer-desc">Discover amazing offers across multiple categories.</p>
                        <span class="offer-time">3 days ago</span>
                    </div>
                </a>
                <a href="watches.html" class="offer-card-item">
                    <img src="assets/images/techvolt-software-development-watches-limited-offer.png" alt="Limited Time Offers!" class="offer-card-img">
                    <div class="offer-card-content">
                        <h6 class="offer-title">Limited Time Offers! 🎁</h6>
                        <p class="offer-desc">Grab your favorite products before the deals end.</p>
                        <span class="offer-time">5 days ago</span>
                    </div>
                </a>
            </div>
        </div>`;
            document.body.appendChild(modalBackdrop);
        }
        return modalBackdrop;
    }

    function openOffersModal(modalBackdrop) {
        modalBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeOffersModal(modalBackdrop) {
        modalBackdrop.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Delegated click handler on document to avoid double-binding
    document.addEventListener('click', (e) => {
        const bellBtn = e.target.closest('#btnFloatingBell, #btnHeaderNotification, .myntra-floating-bell-btn, a.header-action-btn:has(.bi-bell)');
        if (bellBtn) {
            e.preventDefault();
            e.stopPropagation();
            const modalBackdrop = getOrInjectOffersModal();
            if (modalBackdrop.classList.contains('show')) {
                closeOffersModal(modalBackdrop);
            } else {
                openOffersModal(modalBackdrop);
            }
            return;
        }

        const closeBtn = e.target.closest('#offersModalCloseBtn, .offers-modal-close-btn');
        if (closeBtn) {
            e.preventDefault();
            e.stopPropagation();
            const modalBackdrop = document.getElementById('offersModalBackdrop');
            if (modalBackdrop) closeOffersModal(modalBackdrop);
            return;
        }

        const modalBackdrop = document.getElementById('offersModalBackdrop');
        if (modalBackdrop && modalBackdrop.classList.contains('show') && e.target === modalBackdrop) {
            closeOffersModal(modalBackdrop);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modalBackdrop = document.getElementById('offersModalBackdrop');
            if (modalBackdrop && modalBackdrop.classList.contains('show')) {
                closeOffersModal(modalBackdrop);
            }
        }
    });
}

/* =========================
   SABLE WISHLIST ENGINE
========================= */
const SableWishlist = {
    STORAGE_KEY: 'sable_wishlist',

    getWishlist() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading wishlist from localStorage:', e);
            return [];
        }
    },

    saveWishlist(list) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
            this.updateHeaderWishlistCount();
            this.syncWishlistButtons();
            window.dispatchEvent(new CustomEvent('wishlistUpdated', { detail: list }));
        } catch (e) {
            console.error('Error saving wishlist to localStorage:', e);
        }
    },

    getItemKey(item) {
        if (!item) return '';
        if (typeof item === 'string') return item.trim().toLowerCase();
        const title = (item.title || item.name || '').trim().toLowerCase();
        if (title) return title;
        if (item.id) return String(item.id).trim().toLowerCase();
        const link = (item.link || '').trim().toLowerCase();
        return link;
    },

    isInWishlist(itemKeyOrObject) {
        const key = this.getItemKey(itemKeyOrObject);
        if (!key) return false;
        const list = this.getWishlist();
        return list.some(item => {
            const itemK = this.getItemKey(item);
            return itemK === key || itemK.startsWith(key + '|') || key.startsWith(itemK + '|');
        });
    },

    addToWishlist(product) {
        if (!product) return;
        const list = this.getWishlist();
        const key = this.getItemKey(product);
        const exists = list.some(item => {
            const itemK = this.getItemKey(item);
            return itemK === key || itemK.startsWith(key + '|') || key.startsWith(itemK + '|');
        });
        if (!exists) {
            list.push(product);
            this.saveWishlist(list);
        }
    },

    removeFromWishlist(itemKeyOrObject) {
        const key = this.getItemKey(itemKeyOrObject);
        if (!key) return;
        let list = this.getWishlist();
        list = list.filter(item => {
            const itemK = this.getItemKey(item);
            return !(itemK === key || itemK.startsWith(key + '|') || key.startsWith(itemK + '|'));
        });
        this.saveWishlist(list);
    },

    toggleWishlist(product) {
        if (!product) return false;
        const key = this.getItemKey(product);
        if (this.isInWishlist(key)) {
            this.removeFromWishlist(key);
            return false;
        } else {
            this.addToWishlist(product);
            return true;
        }
    },

    extractProductData(element) {
        if (!element) return null;

        const card = element.closest('.product-card, .mobile-card, .wishlist-card, .myntra-product-container, .myntra-product-info-sticky, .product-detail-container, .product-container, .product-right-details, .product-info, main');
        if (!card) return null;

        // Title / Name
        let title = '';
        const titleEl = card.querySelector('.product-detail-title, .myntra-title-subheading, .product-name a, .product-name, .product-title-main, .product-title, .wishlist-item-title') || document.querySelector('.product-detail-title, .myntra-title-subheading');
        if (titleEl) {
            title = titleEl.textContent.trim();
        }

        if (!title) {
            const headings = card.querySelectorAll('h1, h2, h3, h4');
            for (const h of headings) {
                const txt = h.textContent.trim();
                if (txt && !h.classList.contains('site-title') && !h.classList.contains('page-title') && !h.classList.contains('footer-col-title') && !h.classList.contains('popular-searches-title')) {
                    title = txt;
                    break;
                }
            }
        }

        if (!title) {
            title = document.title.split('|')[0].trim() || 'Luxury Product';
        }

        // Brand
        const brandEl = card.querySelector('.product-brand-tag, .myntra-brand-heading, .product-brand, .product-brand-main, .wishlist-item-brand') || document.querySelector('.product-brand-tag, .myntra-brand-heading');
        const brand = brandEl ? brandEl.textContent.trim() : 'SABLE';

        // Link
        const linkEl = card.querySelector('.product-name a, a[href*="product-"]') || card.querySelector('a[href*=".html"]');
        let link = linkEl ? linkEl.getAttribute('href') : '';
        if (!link || link === '#') {
            link = window.location.pathname.split('/').pop() + window.location.search;
        }

        // Image
        let image = '';
        const imgEl = card.querySelector('.product-img, .wishlist-img, .main-product-img, img');
        if (imgEl) {
            image = imgEl.getAttribute('src') || imgEl.src;
        }
        if (!image) {
            const container = card.closest('.myntra-product-container, main, section') || document;
            const globalImg = container.querySelector('#productImageGrid img, .myntra-4-image-grid img, .main-product-img, .product-img');
            if (globalImg) image = globalImg.getAttribute('src') || globalImg.src;
        }
        if (!image) {
            image = 'assets/images/techvolt-web-host-mobile-1.png';
        }

        // Price
        const priceEl = card.querySelector('.myntra-price-current, .price-current, .current-price, .wishlist-price-current, .product-price-current, .price') || document.querySelector('.myntra-price-current, .price-current');
        const price = priceEl ? priceEl.textContent.trim() : '₹999';

        // Original Price
        const origPriceEl = card.querySelector('.myntra-price-mrp, .price-original, .original-price, .wishlist-price-original, .product-price-original') || document.querySelector('.myntra-price-mrp, .price-original');
        const originalPrice = origPriceEl ? origPriceEl.textContent.trim() : '';

        // Discount
        const discEl = card.querySelector('.myntra-price-discount, .price-discount-badge, .discount-badge, .wishlist-discount-badge, .discount') || document.querySelector('.myntra-price-discount, .price-discount-badge');
        const discount = discEl ? discEl.textContent.trim() : '';

        return {
            title: title,
            brand: brand || 'SABLE',
            link: link || 'index.html',
            image: image,
            price: price,
            originalPrice: originalPrice,
            discount: discount
        };
    },

    updateHeaderWishlistCount() {
        const count = this.getWishlist().length;
        const wishlistBadges = document.querySelectorAll(
            '.wishlist-count, a.wishlist-btn .wishlist-count, a[href*="wishlist.html"] .wishlist-count'
        );
        wishlistBadges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });

        // Ensure header wishlist links have relative position and count badge
        const wishlistBtns = document.querySelectorAll('a.header-action-btn[href*="wishlist.html"], a[href="wishlist.html"]');
        wishlistBtns.forEach(btn => {
            btn.classList.add('wishlist-btn');
            btn.style.position = 'relative';
            let badge = btn.querySelector('.wishlist-count');
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'wishlist-count';
                btn.appendChild(badge);
            }
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    },

    syncWishlistButtons() {
        const buttons = document.querySelectorAll('.myntra-card-wishlist-btn, .btn-wishlist, .myntra-btn-wishlist');
        buttons.forEach(btn => {
            const productData = this.extractProductData(btn);
            if (!productData) return;

            const isWished = this.isInWishlist(productData);

            if (btn.classList.contains('myntra-btn-wishlist') || btn.closest('.myntra-actions-row')) {
                if (isWished) {
                    btn.classList.add('wished', 'active');
                    btn.innerHTML = `<i class="bi bi-heart-fill me-2" style="color: #ff3f6c;"></i> <span>WISHLISTED</span>`;
                } else {
                    btn.classList.remove('wished', 'active');
                    btn.innerHTML = `<i class="bi bi-heart me-2"></i> <span>WISHLIST</span>`;
                }
            } else {
                if (isWished) {
                    btn.classList.add('wished', 'active');
                    btn.innerHTML = `<i class="bi bi-heart-fill me-1" style="color: #ff3f6c;"></i> <span>WISHLISTED</span>`;
                } else {
                    btn.classList.remove('wished', 'active');
                    btn.innerHTML = `<i class="bi bi-heart me-1"></i> <span>WISHLIST</span>`;
                }
            }
        });
    },

    showToast(message) {
        let toastContainer = document.getElementById('sableToastContainer');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'sableToastContainer';
            toastContainer.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;gap:8px;pointer-events:none;';
            document.body.appendChild(toastContainer);
        }
        const toast = document.createElement('div');
        toast.style.cssText = 'background:#282c3f;color:#fff;padding:12px 20px;border-radius:4px;font-size:14px;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,0.15);opacity:0;transform:translateY(20px);transition:all 0.3s ease;pointer-events:auto;';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 2500);
    }
};

if (typeof window !== 'undefined') {
    window.SableWishlist = SableWishlist;
}

/* =========================
   SABLE CART ENGINE
========================= */
const SableCart = {
    STORAGE_KEY: 'sable_cart',

    getCart() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (data) {
                const parsed = JSON.parse(data);
                if (Array.isArray(parsed)) return parsed;
            }
            return [];
        } catch (e) {
            console.error('Error reading cart from localStorage:', e);
            return [];
        }
    },

    saveCart(list) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
            this.updateHeaderCartCount();
            window.dispatchEvent(new CustomEvent('cartUpdated', { detail: list }));
        } catch (e) {
            console.error('Error saving cart to localStorage:', e);
        }
    },

    getItemKey(item) {
        if (!item) return '';
        if (typeof item === 'string') return item.trim().toLowerCase();
        const title = (item.title || item.name || '').trim().toLowerCase();
        const size = (item.size || 'm').trim().toLowerCase();
        return `${title}|${size}`;
    },

    isInCart(itemOrKey) {
        const key = typeof itemOrKey === 'string' ? itemOrKey.trim().toLowerCase() : this.getItemKey(itemOrKey);
        if (!key) return false;
        const list = this.getCart();
        return list.some(item => this.getItemKey(item) === key);
    },

    addToCart(product, quantity = 1) {
        if (!product) return null;
        let list = this.getCart();
        const key = this.getItemKey(product);
        const existing = list.find(item => this.getItemKey(item) === key);

        if (existing) {
            existing.quantity = Math.min(10, (existing.quantity || 1) + (quantity || 1));
            existing.selected = true;
        } else {
            const numPrice = typeof product.price === 'number' ? product.price : (parseInt(String(product.price).replace(/[^0-9]/g, ''), 10) || 0);
            const numOrigPrice = typeof product.originalPrice === 'number' ? product.originalPrice : (parseInt(String(product.originalPrice).replace(/[^0-9]/g, ''), 10) || (numPrice * 2));
            let discount = product.discount || '';
            if (!discount && numOrigPrice > numPrice) {
                discount = `(${Math.round(((numOrigPrice - numPrice) / numOrigPrice) * 100)}% OFF)`;
            }

            const newItem = {
                id: product.id ? String(product.id) : String(Date.now()),
                title: (product.title || product.name || 'Product').trim(),
                brand: (product.brand || 'SABLE').trim(),
                price: numPrice,
                priceFormatted: product.priceFormatted || `₹${numPrice.toLocaleString('en-IN')}`,
                originalPrice: numOrigPrice,
                originalPriceFormatted: product.originalPriceFormatted || `₹${numOrigPrice.toLocaleString('en-IN')}`,
                discount: discount,
                image: product.image || 'assets/images/techvolt-web-host-mobile-1.png',
                size: product.size || 'M',
                quantity: quantity || 1,
                link: product.link || 'index.html',
                selected: true
            };
            list.push(newItem);
        }

        this.saveCart(list);
        return list;
    },

    removeFromCart(itemOrKey) {
        const key = typeof itemOrKey === 'string' ? itemOrKey.trim().toLowerCase() : this.getItemKey(itemOrKey);
        if (!key) return;
        let list = this.getCart();
        list = list.filter(item => this.getItemKey(item) !== key);
        this.saveCart(list);
    },

    updateQuantity(itemOrKey, qty) {
        const key = typeof itemOrKey === 'string' ? itemOrKey.trim().toLowerCase() : this.getItemKey(itemOrKey);
        if (!key) return;
        let list = this.getCart();
        const item = list.find(i => this.getItemKey(i) === key);
        if (item) {
            const newQty = parseInt(qty, 10);
            if (newQty <= 0) {
                this.removeFromCart(key);
                return;
            } else {
                item.quantity = Math.min(10, Math.max(1, newQty));
                this.saveCart(list);
            }
        }
    },

    updateSize(oldKey, newSize) {
        const normKey = typeof oldKey === 'string' ? oldKey.trim().toLowerCase() : this.getItemKey(oldKey);
        let list = this.getCart();
        const item = list.find(i => this.getItemKey(i) === normKey);
        if (item) {
            item.size = newSize;
            this.saveCart(list);
        }
    },

    toggleSelection(itemOrKey, isSelected) {
        const key = typeof itemOrKey === 'string' ? itemOrKey.trim().toLowerCase() : this.getItemKey(itemOrKey);
        let list = this.getCart();
        const item = list.find(i => this.getItemKey(i) === key);
        if (item) {
            item.selected = !!isSelected;
            this.saveCart(list);
        }
    },

    selectAll(isSelected) {
        let list = this.getCart();
        list.forEach(item => { item.selected = !!isSelected; });
        this.saveCart(list);
    },

    clearCart() {
        this.saveCart([]);
    },

    getTotalCount() {
        const list = this.getCart();
        return list.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 1), 0);
    },

    getSelectedCount() {
        const list = this.getCart();
        return list.filter(item => item.selected !== false).reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 1), 0);
    },

    updateHeaderCartCount() {
        const count = this.getTotalCount();
        const badges = document.querySelectorAll(
            '.cart-count:not(.wishlist-count), #headerCartCount, a.cart-btn .cart-count, a[href*="cart.html"] .cart-count'
        );
        badges.forEach(b => {
            b.textContent = count;
            b.style.display = count > 0 ? 'inline-flex' : 'none';
        });

        // Ensure header cart links have relative position and count badge
        const cartBtns = document.querySelectorAll('a.header-action-btn[href*="cart.html"], a[href="cart.html"]');
        cartBtns.forEach(btn => {
            btn.classList.add('cart-btn');
            btn.style.position = 'relative';
            let badge = btn.querySelector('.cart-count');
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'cart-count';
                btn.appendChild(badge);
            }
            badge.textContent = count;
            badge.style.display = count > 0 ? 'inline-flex' : 'none';
        });
    },

    extractProductData(element) {
        if (!element) return null;

        const card = element.closest('.product-card, .mobile-card, .wishlist-card, .myntra-product-container, .myntra-product-info-sticky, .product-detail-container, .product-container, .product-right-details, .product-info, main');
        
        // 1. Title
        let title = '';
        const titleEl = (card ? card.querySelector('.product-detail-title, .myntra-title-subheading, .product-name a, .product-name, .product-title-main, .product-title, .wishlist-item-title') : null) || document.querySelector('.product-detail-title, .myntra-title-subheading');
        if (titleEl) title = titleEl.textContent.trim();

        if (!title && card) {
            const headings = card.querySelectorAll('h1, h2, h3, h4');
            for (const h of headings) {
                const txt = h.textContent.trim();
                if (txt && !h.classList.contains('site-title') && !h.classList.contains('page-title') && !h.classList.contains('footer-col-title') && !h.classList.contains('popular-searches-title')) {
                    title = txt;
                    break;
                }
            }
        }
        if (!title) title = document.title.split('|')[0].trim() || 'Luxury Fashion Item';

        // 2. Brand
        const brandEl = (card ? card.querySelector('.product-brand-tag, .myntra-brand-heading, .product-brand, .product-brand-main, .wishlist-item-brand') : null) || document.querySelector('.product-brand-tag, .myntra-brand-heading');
        let brand = brandEl ? brandEl.textContent.trim() : 'MAISON SABLE';

        // 3. Image
        let image = '';
        if (card) {
            const imgEl = card.querySelector('.product-img, .wishlist-img, .main-product-img, .item-thumb, img');
            if (imgEl && imgEl.src) image = imgEl.src;
        }
        if (!image) {
            const pageImg = document.querySelector('#productImageGrid img, .myntra-4-image-grid img, .main-product-img, .product-img');
            if (pageImg && pageImg.src) image = pageImg.src;
        }
        if (!image) {
            image = 'assets/images/techvolt-web-host-mobile-1.png';
        }

        // 4. Price & Original Price & Discount
        const priceEl = (card ? card.querySelector('.myntra-price-current, .price-current, .current-price, .wishlist-price-current, .product-price-current, .price') : null) || document.querySelector('.myntra-price-current, .price-current');
        const priceText = priceEl ? priceEl.textContent.trim() : '₹2,999';
        const numPrice = parseInt(priceText.replace(/[^0-9]/g, ''), 10) || 2999;

        const origPriceEl = (card ? card.querySelector('.myntra-price-mrp, .price-original, .original-price, .wishlist-price-original, .product-price-original') : null) || document.querySelector('.myntra-price-mrp, .price-original');
        const origPriceText = origPriceEl ? origPriceEl.textContent.trim() : '';
        const numOrigPrice = parseInt(origPriceText.replace(/[^0-9]/g, ''), 10) || (numPrice * 2);

        const discEl = (card ? card.querySelector('.myntra-price-discount, .price-discount-badge, .discount-badge, .wishlist-discount-badge, .discount') : null) || document.querySelector('.myntra-price-discount, .price-discount-badge');
        let discount = discEl ? discEl.textContent.trim() : '';
        if (!discount && numOrigPrice > numPrice) {
            const pct = Math.round(((numOrigPrice - numPrice) / numOrigPrice) * 100);
            discount = `(${pct}% OFF)`;
        }

        // 5. Size
        let size = 'M';
        const activeSizeBtn = document.querySelector('.myntra-size-btn.active');
        if (activeSizeBtn) {
            const clone = activeSizeBtn.cloneNode(true);
            const tag = clone.querySelector('.myntra-left-tag');
            if (tag) tag.remove();
            size = clone.textContent.trim() || 'M';
        } else {
            const sizeSelect = document.querySelector('.size-selection-box select, select.mini-dropdown');
            if (sizeSelect && sizeSelect.value) size = sizeSelect.value.replace(/Size:\s*|Size\s*:\s*/i, '').trim();
            else {
                const sizeBox = document.querySelector('.size-selection-box');
                if (sizeBox && sizeBox.style.display === 'none') {
                    size = 'Free Size';
                }
            }
        }

        // 6. Link
        let link = '';
        if (card) {
            const linkEl = card.querySelector('.product-name a, a[href*="product-"]') || card.querySelector('a[href*=".html"]');
            if (linkEl) link = linkEl.getAttribute('href');
        }
        if (!link || link === '#') {
            link = window.location.pathname.split('/').pop() + window.location.search;
        }

        return {
            id: String(Date.now()),
            title: title,
            brand: brand,
            price: numPrice,
            priceFormatted: `₹${numPrice.toLocaleString('en-IN')}`,
            originalPrice: numOrigPrice,
            originalPriceFormatted: `₹${numOrigPrice.toLocaleString('en-IN')}`,
            discount: discount,
            image: image,
            size: size,
            quantity: 1,
            link: link || 'index.html',
            selected: true
        };
    }
};

if (typeof window !== 'undefined') {
    window.SableCart = SableCart;
}

// Global Myntra Wishlist Card Toggle
function toggleCardWishlist(btn, event) {
    if (!btn) return;
    const evt = event || window.event;
    if (evt) {
        if (typeof evt.preventDefault === 'function') evt.preventDefault();
        if (typeof evt.stopPropagation === 'function') evt.stopPropagation();
    }

    const now = Date.now();
    if (btn._lastToggleTime && (now - btn._lastToggleTime < 200)) {
        return; // Ignore duplicate calls within same click frame
    }
    btn._lastToggleTime = now;

    const productData = SableWishlist.extractProductData(btn);
    if (!productData) {
        console.warn('Could not extract product data from card:', btn);
        return;
    }

    const added = SableWishlist.toggleWishlist(productData);
    if (typeof SableWishlist.showToast === 'function') {
        SableWishlist.showToast(added ? 'Added to Wishlist ❤️' : 'Removed from Wishlist');
    }
}

// Global click delegation for Wishlist buttons across all pages
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.myntra-card-wishlist-btn, .btn-wishlist, .myntra-btn-wishlist');
    if (btn) {
        toggleCardWishlist(btn, e);
    }
});

// 4-Image Library per Category
const product4ImageLibrary = {
    men: [
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ],
    women: [
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    ethnic: [
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1610030469668-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    bags: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80"
    ],
    watches: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-15391085441755-769473a23570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    beauty: [
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608248597263-0057e43a4524?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    electronics: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    kitchen: [
        "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    ],
    jewellery: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
    ],
    kids: [
        "assets/images/techvolt-full-dev-bag1.png",
        "assets/images/techvolt-mern-dev-bag2.png",
        "assets/images/techvolt-php-dev-bag3.png",
        "assets/images/techvolt-python-dev-bag4.png"
    ]
};

// Detect images for a product card
function get4ImagesForCard(card, mainImg) {
    if (card.dataset.images) {
        try {
            const arr = JSON.parse(card.dataset.images);
            if (Array.isArray(arr) && arr.length > 0) return arr;
        } catch (e) {}
    }

    const currentSrc = mainImg ? mainImg.src : '';
    const pageUrl = window.location.pathname.toLowerCase();

    let catKey = 'men';
    if (pageUrl.includes('women') || currentSrc.includes('women') || currentSrc.includes('566174053879')) catKey = 'women';
    else if (pageUrl.includes('ethnic') || currentSrc.includes('ethnic') || currentSrc.includes('610030469983')) catKey = 'ethnic';
    else if (pageUrl.includes('bag') || currentSrc.includes('bag') || currentSrc.includes('584917865442')) catKey = 'bags';
    else if (pageUrl.includes('watch') || currentSrc.includes('watch') || currentSrc.includes('523275335684')) catKey = 'watches';
    else if (pageUrl.includes('beauty') || currentSrc.includes('beauty') || currentSrc.includes('620916566398')) catKey = 'beauty';
    else if (pageUrl.includes('electronic') || currentSrc.includes('electronic') || currentSrc.includes('511707171634')) catKey = 'electronics';
    else if (pageUrl.includes('kitchen') || currentSrc.includes('kitchen') || currentSrc.includes('585515320310')) catKey = 'kitchen';
    else if (pageUrl.includes('jewel') || currentSrc.includes('jewel') || currentSrc.includes('599643478518')) catKey = 'jewellery';
    else if (pageUrl.includes('kid') || currentSrc.includes('kid') || currentSrc.includes('519238263530')) catKey = 'kids';

    const baseList = product4ImageLibrary[catKey] || product4ImageLibrary.men;
    const images = [...baseList];
    if (currentSrc && !images.includes(currentSrc)) {
        images[0] = currentSrc;
    }
    return images;
}

// Image Hover Slider Logic
function initProductHoverSlider() {
    // Disable hover slider on touch-only mobile devices
    if ('ontouchstart' in window && !window.matchMedia('(hover: hover)').matches) {
        return;
    }

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const img = card.querySelector('.product-img');
        if (!img) return;

        const images = get4ImagesForCard(card, img);
        const defaultSrc = img.src || images[0];
        images[0] = defaultSrc; // Ensure first image is default

        // Render matching number of dots in .myntra-dots-line if present
        let dotsWrap = card.querySelector('.myntra-dots-line');
        if (dotsWrap) {
            dotsWrap.innerHTML = images.map((_, idx) => `<span class="dot ${idx === 0 ? 'active' : ''}"></span>`).join('');
        }

        const dots = dotsWrap ? dotsWrap.querySelectorAll('.dot') : [];

        let currentIdx = 0;
        let slideTimer = null;

        function setActiveImage(index) {
            if (index < 0 || index >= images.length) return;
            if (currentIdx === index && img.src === images[index]) return;

            currentIdx = index;

            // Smooth fade transition
            img.classList.add('img-switching');
            setTimeout(() => {
                img.src = images[index];
                img.classList.remove('img-switching');
            }, 120);

            // Update dots
            if (dots.length > 0) {
                dots.forEach((d, i) => {
                    if (i === index) d.classList.add('active');
                    else d.classList.remove('active');
                });
            }
        }

        // Horizontal position based segment switching on mousemove
        const imageWrapper = card.querySelector('.product-image-wrapper') || card;

        imageWrapper.addEventListener('mousemove', (e) => {
            const rect = imageWrapper.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const percentage = Math.max(0, Math.min(0.99, mouseX / rect.width));
            const targetIndex = Math.floor(percentage * images.length); // 0, 1, 2, 3
            setActiveImage(targetIndex);
        });

        imageWrapper.addEventListener('mouseenter', () => {
            // Auto slide interval if cursor stays over image
            if (slideTimer) clearInterval(slideTimer);
            slideTimer = setInterval(() => {
                const nextIdx = (currentIdx + 1) % images.length;
                setActiveImage(nextIdx);
            }, 850);
        });

        card.addEventListener('mouseleave', () => {
            if (slideTimer) {
                clearInterval(slideTimer);
                slideTimer = null;
            }
            // Reset to default Image 1 and Dot 0
            setActiveImage(0);
        });
    });
}

/* ===================================================
   RESPONSIVE NAVBAR (DROPDOWNS REMOVED)
   =================================================== */
function initResponsiveNavbarDropdowns() {
    // Dropdowns are disabled across all categories.
    // Clean up any remaining dropdown artifacts, chevrons, and backdrops.
    document.querySelectorAll('.nav-dropdown-arrow').forEach(el => el.remove());
    document.querySelectorAll('.mega-menu').forEach(el => el.remove());
    document.querySelectorAll('.megamenu-backdrop').forEach(el => el.remove());
    document.querySelectorAll('.nav-cat-item').forEach(el => {
        el.classList.remove('has-megamenu', 'open', 'active');
    });
}
window.initResponsiveNavbarDropdowns = initResponsiveNavbarDropdowns;

