/**
 * TechVoltMart / Sable Reusable Component Loader
 * Loads Navbar and Footer components dynamically across all pages.
 * Supports standard HTTP/HTTPS fetch as well as seamless local file:// protocol fallback.
 */
(function () {
    'use strict';

    const NAVBAR_HTML = "<header class=\"site-header\">\n        <div class=\"top-header-bar\">\n            <div class=\"header-container\">\n                <a href=\"index.html\" class=\"brand-logo\" style=\"text-decoration: none;\"><img src=\"assets/images/techvolt-software-development-brand-logo.png\" alt=\"TechVoltMart Logo\" class=\"brand-logo-img\"><span class=\"brand-logo-text\" style=\"display: inline-flex; flex-direction: column; justify-content: center; line-height: 1.1;\"><span class=\"brand-name\" style=\"font-size: 22px; font-weight: 800; letter-spacing: 0.4px;\"><span class=\"brand-text-tech\" style=\"color: #282c3f;\">TechVolt</span><span class=\"brand-text-mart\" style=\"color: #ff3f6c; margin-left: 1px;\">Mart</span></span><span class=\"brand-sample-tag\" style=\"font-size: 9px; font-weight: 700; color: #8c8d94; letter-spacing: 2px; text-transform: uppercase; font-family: 'DM Sans', sans-serif; margin-top: 1px;\">SAMPLE WEBSITE</span></span></a>\n                <div class=\"header-search\">\n                    <i class=\"bi bi-search search-icon\"></i>\n                    <input type=\"text\" placeholder=\"Search for products, brands and more\" class=\"search-input\">\n                </div>\n                <div class=\"header-actions\">\n                    <a href=\"#\" class=\"header-action-btn\" id=\"btnHeaderNotification\" title=\"Notifications\"><i class=\"bi bi-bell\"></i><span>Offers</span></a>\n                    <a href=\"login.html\" class=\"header-action-btn\"><i class=\"bi bi-box-arrow-in-right\"></i><span>Login</span></a>\n                    <a href=\"wishlist.html\" class=\"header-action-btn wishlist-btn\"><i class=\"bi bi-heart\"></i><span>Wishlist</span><span class=\"wishlist-count\" style=\"display: none;\">0</span></a>\n                    <a href=\"cart.html\" class=\"header-action-btn cart-btn\"><i class=\"bi bi-bag\"></i><span>Bag</span><span class=\"cart-count\" style=\"display: none;\">0</span></a>\n                </div>\n            </div>\n        </div>\n\n        <nav class=\"category-navbar\">\n            <div class=\"category-nav-container\">\n                <ul class=\"nav-categories\">\n                    <li class=\"nav-cat-item\"><a href=\"index.html\" class=\"nav-cat-link\" style=\"font-weight: 800; color: #ff3f6c;\">Home</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"popular.html\" class=\"nav-cat-link\">Popular</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"men.html\" class=\"nav-cat-link\">Men</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"ethnic.html\" class=\"nav-cat-link\">Women</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"kids.html\" class=\"nav-cat-link\">Kids & Toys</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"home-kitchen.html\" class=\"nav-cat-link\">Home & Kitchen</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"beauty.html\" class=\"nav-cat-link\">Beauty & Health</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"jewellery.html\" class=\"nav-cat-link\">Jewellery & Accessories</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"bags.html\" class=\"nav-cat-link\">Bags & Footwear</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"electronics.html\" class=\"nav-cat-link\">Electronics & Mobiles</a></li>\n                    <li class=\"nav-cat-item\"><a href=\"watches.html\" class=\"nav-cat-link\">Watches</a></li>\n                </ul>\n            </div>\n        </nav>\n    </header>";
    const FOOTER_HTML = "<footer class=\"site-footer\">\n        <div class=\"footer-container\">\n            <div class=\"footer-columns-grid\">\n                <!-- Column 1: Online Shopping (Part 1) -->\n                <div class=\"footer-col\">\n                    <h4 class=\"footer-col-title\">ONLINE SHOPPING</h4>\n                    <ul class=\"footer-links-list\">\n                        <li><a href=\"index.html\" style=\"font-weight: 700; color: #ff3f6c;\">Home Page</a></li>\n                        <li><a href=\"men.html\">Men Fashion</a></li>\n                        <li><a href=\"ethnic.html\">Women</a></li>\n                        <li><a href=\"kids.html\">Kids & Toys</a></li>\n                        <li><a href=\"home-kitchen.html\">Home & Living</a></li>\n                    </ul>\n                </div>\n\n                <!-- Column 2: Online Shopping (Part 2) -->\n                <div class=\"footer-col\">\n                    <h4 class=\"footer-col-title empty-col-title d-none d-sm-block\">&nbsp;</h4>\n                    <ul class=\"footer-links-list\">\n                        <li><a href=\"beauty.html\">Beauty & Health</a></li>\n                        <li><a href=\"jewellery.html\">Jewellery & Accessories</a></li>\n                        <li><a href=\"bags.html\">Bags & Footwear</a></li>\n                        <li><a href=\"electronics.html\">Electronics & Mobiles</a></li>\n                        <li><a href=\"watches.html\">Watches & Wearables</a></li>\n                    </ul>\n                </div>\n\n                <!-- Column 3: App & Connect -->\n                <div class=\"footer-col\">\n                    <h4 class=\"footer-col-title\">EXPERIENCE SABLE APP</h4>\n                    <div class=\"footer-app-badges\">\n                        <a href=\"#\" class=\"app-badge-btn\"><i class=\"bi bi-google-play\"></i> <span>Google Play</span></a>\n                        <a href=\"#\" class=\"app-badge-btn\"><i class=\"bi bi-apple\"></i> <span>App Store</span></a>\n                    </div>\n                    \n                    <h4 class=\"footer-col-title mt-4\">KEEP IN TOUCH</h4>\n                    <div class=\"footer-social-links\">\n                        <a href=\"#\"><i class=\"bi bi-facebook\"></i></a>\n                        <a href=\"#\"><i class=\"bi bi-instagram\"></i></a>\n                        <a href=\"#\"><i class=\"bi bi-twitter-x\"></i></a>\n                        <a href=\"#\"><i class=\"bi bi-youtube\"></i></a>\n                        <a href=\"#\"><i class=\"bi bi-pinterest\"></i></a>\n                    </div>\n                </div>\n\n                <!-- Column 4: Quality Promises -->\n                <div class=\"footer-col footer-trust-col\">\n                    <div class=\"trust-badge-item\">\n                        <div class=\"trust-icon\"><i class=\"bi bi-patch-check-fill\"></i></div>\n                        <div class=\"trust-text\">\n                            <strong>100% ORIGINAL</strong>\n                            <span>guarantee for all products at sable.com</span>\n                        </div>\n                    </div>\n                    <div class=\"trust-badge-item\">\n                        <div class=\"trust-icon\"><i class=\"bi bi-arrow-counterclockwise\"></i></div>\n                        <div class=\"trust-text\">\n                            <strong>Return within 14days</strong>\n                            <span>of receiving your order</span>\n                        </div>\n                    </div>\n                    <div class=\"trust-badge-item\">\n                        <div class=\"trust-icon\"><i class=\"bi bi-truck\"></i></div>\n                        <div class=\"trust-text\">\n                            <strong>Free Delivery</strong>\n                            <span>on all orders above ₹999</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <hr class=\"footer-divider\">\n\n            <!-- Popular Searches -->\n            <div class=\"footer-popular-searches\">\n                <h5 class=\"popular-searches-title\">POPULAR SEARCHES</h5>\n                <p class=\"popular-searches-links\">\n                    <a href=\"men.html\">Men Shirts</a> | <a href=\"men.html\">T-Shirts</a> | <a href=\"ethnic.html\">Anarkali Suits</a> | <a href=\"ethnic.html\">Banarasi Sarees</a> | <a href=\"ethnic.html\">Bridal Lehengas</a> | <a href=\"ethnic.html\">Maxi Dresses</a> | <a href=\"ethnic.html\">Crop Tops</a> | <a href=\"bags.html\">Tote Bags</a> | <a href=\"bags.html\">Heels</a> | <a href=\"watches.html\">Smartwatches</a> | <a href=\"watches.html\">Chronograph Watches</a> | <a href=\"jewellery.html\">Kundan Sets</a> | <a href=\"beauty.html\">Lipsticks</a> | <a href=\"beauty.html\">Face Serums</a> | <a href=\"home-kitchen.html\">Bedsheets</a> | <a href=\"electronics.html\">Bluetooth Speakers</a> | <a href=\"kids.html\">Frocks & Dresses</a>\n                </p>\n            </div>\n\n            <!-- Footer Bottom Section -->\n            <div class=\"footer-bottom-flex\">\n                <div class=\"office-address\">\n                    <strong>Registered Office Address:</strong> 1st Floor, Sri Sairam Tower, 7, NSR Rd, Nesavaalar Colony, Saibaba Koil, Coimbatore, Tamil Nadu 641011.\n                </div>\n                <div class=\"payment-methods\">\n                    <span>100% Secure Payments:</span>\n                    <i class=\"bi bi-credit-card-2-front-fill\" title=\"Credit / Debit Card\"></i>\n                    <i class=\"bi bi-wallet2\" title=\"UPI & Wallet\"></i>\n                    <i class=\"bi bi-bank\" title=\"Net Banking\"></i>\n                    <i class=\"bi bi-cash-stack\" title=\"Cash On Delivery\"></i>\n                </div>\n            </div>\n\n            <!-- Techvolt Branding & Sample Tag -->\n            <div class=\"footer-brand-badge\" style=\"text-align: center; margin: 25px 0 10px; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n                <div class=\"footer-brand-title\" style=\"display: inline-flex; align-items: center; gap: 10px; justify-content: center;\">\n                    <img src=\"assets/images/techvolt-software-development-brand-logo.png\" alt=\"Techvolt Logo\" class=\"footer-brand-logo-img\" style=\"height: 38px; width: 38px; border-radius: 50%; object-fit: contain;\">\n                    <span class=\"brand-name\" style=\"font-size: 24px; font-weight: 900; letter-spacing: 0.5px;\"><span class=\"brand-text-tech\" style=\"color: #282c3f;\">TechVolt</span><span class=\"brand-text-mart\" style=\"color: #ff3f6c; margin-left: 1px;\">Mart</span></span>\n                </div>\n                <div class=\"footer-sample-text\" style=\"font-size: 11px; font-weight: 700; color: #8c8d94; letter-spacing: 3px; margin-top: 4px; text-transform: uppercase;\">SAMPLE WEBSITE</div>\n            </div>\n\n            <div class=\"footer-copyright-line\">\n                <p>&copy; 2026 <strong>TechVoltMart.</strong> All Rights Reserved.</p>\n            </div>\n        </div>\n    </footer>";

    /**
     * Determine root-relative path to components
     */
    function getBasePath() {
        return '';
    }

    /**
     * Load HTML snippet via fetch or fallback
     */
    async function fetchComponent(fileName, fallbackHtml) {
        if (window.location.protocol === 'file:') {
            return fallbackHtml;
        }

        try {
            const basePath = getBasePath();
            const res = await fetch(basePath + fileName, { cache: 'no-cache' });
            if (res.ok) {
                const text = await res.text();
                return text.trim() ? text : fallbackHtml;
            }
        } catch (err) {
            console.warn('[SiteComponents] Fetch failed for ' + fileName + ', using fallback:', err.message);
        }
        return fallbackHtml;
    }

    /**
     * Convert HTML string into DOM nodes and replace target element
     */
    function replaceElementWithHtml(targetEl, htmlString) {
        const temp = document.createElement('div');
        temp.innerHTML = htmlString.trim();
        const elementToInsert = temp.firstElementChild;
        if (elementToInsert && targetEl && targetEl.parentNode) {
            targetEl.parentNode.replaceChild(elementToInsert, targetEl);
            return elementToInsert;
        }
        return null;
    }

    /**
     * Highlight the active nav link according to current page
     */
    function highlightActiveLinks(headerEl) {
        if (!headerEl) return;
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const pageName = currentPath.toLowerCase();

        // 1. Reset existing active styles in category nav
        const navLinks = headerEl.querySelectorAll('.nav-cat-link');
        navLinks.forEach(link => {
            link.style.removeProperty('font-weight');
            link.style.removeProperty('color');
        });

        // 2. Mapping for category & product pages
        const categoryMap = {
            'index.html': 'index.html',
            '': 'index.html',
            'popular.html': 'popular.html',
            'product-popular.html': 'popular.html',
            'men.html': 'men.html',
            'product-men.html': 'men.html',
            'ethnic.html': 'ethnic.html',
            'product-ethnic.html': 'ethnic.html',
            'kids.html': 'kids.html',
            'product-kids.html': 'kids.html',
            'home-kitchen.html': 'home-kitchen.html',
            'product-home-kitchen.html': 'home-kitchen.html',
            'beauty.html': 'beauty.html',
            'product-beauty.html': 'beauty.html',
            'jewellery.html': 'jewellery.html',
            'product-jewellery.html': 'jewellery.html',
            'bags.html': 'bags.html',
            'product-bag.html': 'bags.html',
            'electronics.html': 'electronics.html',
            'product-electronics.html': 'electronics.html',
            'watches.html': 'watches.html',
            'product-watches.html': 'watches.html'
        };

        const targetHref = categoryMap[pageName] || (pageName === '' ? 'index.html' : null);

        if (targetHref) {
            navLinks.forEach(link => {
                const href = (link.getAttribute('href') || '').toLowerCase();
                if (href === targetHref) {
                    link.style.fontWeight = '800';
                    link.style.color = '#ff3f6c';
                }
            });
        }

        // Highlight header actions if applicable (e.g. wishlist, login, cart)
        if (pageName === 'wishlist.html') {
            const wishlistBtn = headerEl.querySelector('.header-action-btn[href*="wishlist.html"]');
            if (wishlistBtn) wishlistBtn.style.color = '#ff3f6c';
        } else if (pageName === 'login.html') {
            const loginBtn = headerEl.querySelector('.header-action-btn[href*="login.html"]');
            if (loginBtn) loginBtn.style.color = '#ff3f6c';
        } else if (pageName === 'cart.html') {
            const cartBtn = headerEl.querySelector('.header-action-btn[href*="cart.html"]');
            if (cartBtn) cartBtn.style.color = '#ff3f6c';
        }
    }

    /**
     * Load Navbar Component
     */
    async function loadNavbar() {
        const placeholders = document.querySelectorAll(
            '#navbar-placeholder, #header-placeholder, #navbar, header#navbar, [data-include*="navbar"], [data-component="navbar"], site-navbar, custom-navbar'
        );
        if (!placeholders || placeholders.length === 0) return null;

        const html = await fetchComponent('navbar.html', NAVBAR_HTML);
        let firstHeader = null;
        placeholders.forEach(placeholder => {
            const headerEl = replaceElementWithHtml(placeholder, html);
            if (!firstHeader && headerEl) firstHeader = headerEl;
        });

        if (firstHeader) {
            highlightActiveLinks(firstHeader);

            // Re-sync header wishlist & cart count if engines are present
            if (window.SableWishlist && typeof window.SableWishlist.updateHeaderWishlistCount === 'function') {
                window.SableWishlist.updateHeaderWishlistCount();
            }
            if (window.SableCart && typeof window.SableCart.updateHeaderCartCount === 'function') {
                window.SableCart.updateHeaderCartCount();
            }

            // Re-initialize responsive navbar dropdowns
            if (typeof window.initResponsiveNavbarDropdowns === 'function') {
                window.initResponsiveNavbarDropdowns();
            }
        }
        return firstHeader;
    }

    /**
     * Load Footer Component
     */
    async function loadFooter() {
        const placeholders = document.querySelectorAll(
            '#footer-placeholder, #footer, footer#footer, [data-include*="footer"], [data-component="footer"], site-footer, custom-footer'
        );
        if (!placeholders || placeholders.length === 0) return null;

        const html = await fetchComponent('footer.html', FOOTER_HTML);
        let firstFooter = null;
        placeholders.forEach(placeholder => {
            const footerEl = replaceElementWithHtml(placeholder, html);
            if (!firstFooter && footerEl) firstFooter = footerEl;
        });
        return firstFooter;
    }

    /**
     * Load all components on current page
     */
    async function loadAllComponents() {
        const [navbar, footer] = await Promise.all([loadNavbar(), loadFooter()]);

        if (typeof CustomEvent !== 'undefined') {
            document.dispatchEvent(new CustomEvent('componentsLoaded', {
                detail: { navbar, footer }
            }));
        } else if (typeof document !== 'undefined' && typeof document.createEvent === 'function') {
            try {
                const evt = document.createEvent('CustomEvent');
                evt.initCustomEvent('componentsLoaded', true, true, { navbar, footer });
                document.dispatchEvent(evt);
            } catch (e) {}
        }
    }

    // Auto-run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllComponents);
    } else {
        loadAllComponents();
    }

    // Define Custom Web Components for modern custom-tag inclusion
    if (typeof customElements !== 'undefined' && typeof HTMLElement !== 'undefined') {
        if (!customElements.get('site-navbar')) {
            customElements.define('site-navbar', class extends HTMLElement {
                connectedCallback() {
                    if (!this.dataset.rendered) {
                        this.dataset.rendered = 'true';
                        loadNavbar();
                    }
                }
            });
        }

        if (!customElements.get('site-footer')) {
            customElements.define('site-footer', class extends HTMLElement {
                connectedCallback() {
                    if (!this.dataset.rendered) {
                        this.dataset.rendered = 'true';
                        loadFooter();
                    }
                }
            });
        }
    }

    // Expose public API
    window.SiteComponents = {
        loadNavbar,
        loadFooter,
        loadAll: loadAllComponents,
        NAVBAR_HTML,
        FOOTER_HTML
    };
})();
