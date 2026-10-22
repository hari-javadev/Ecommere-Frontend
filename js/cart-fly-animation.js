/**
 * FLY TO CART ANIMATION & POPUP TOAST NOTIFICATION
 * Handles "Added to Bag" -> "GO TO BAG", size selection, & persistent cart integration
 */

let toastTimeout = null;

document.addEventListener('DOMContentLoaded', () => {
    injectToastElement();
    initAddToCartListeners();
    initBuyNowListeners();
    initSizeSelectionListeners();
    restoreAddedButtonStates();
});

/* Size Selection Listener */
function initSizeSelectionListeners() {
    document.addEventListener('click', (e) => {
        const sizeBtn = e.target.closest('.myntra-size-btn');
        if (!sizeBtn) return;

        e.preventDefault();
        const parent = sizeBtn.closest('.myntra-size-pills, .size-selection-box');
        if (parent) {
            parent.querySelectorAll('.myntra-size-btn').forEach(b => b.classList.remove('active'));
            sizeBtn.classList.add('active');
        }
        restoreAddedButtonStates();
    });
}

/* Restore Added States from Cart on Page Load */
function restoreAddedButtonStates() {
    if (typeof SableCart === 'undefined') return;

    const cart = SableCart.getCart();
    const currentTitleElem = document.querySelector('.product-detail-title, .myntra-title-subheading');
    const currentTitle = currentTitleElem ? currentTitleElem.textContent.trim() : '';

    // Check currently selected size
    let currentSize = 'M';
    const activeSizeBtn = document.querySelector('.myntra-size-btn.active');
    if (activeSizeBtn) {
        const clone = activeSizeBtn.cloneNode(true);
        const tag = clone.querySelector('.myntra-left-tag');
        if (tag) tag.remove();
        currentSize = clone.textContent.trim();
    }

    const mainAddBtn = document.getElementById('btnAddToBag');
    if (mainAddBtn && currentTitle) {
        const isInCart = cart.some(item => {
            const titleMatch = (item.title || item.name || '').trim().toLowerCase() === currentTitle.toLowerCase();
            return titleMatch && (item.size === currentSize || item.size === 'Free Size');
        });

        if (isInCart) {
            setButtonAsAdded(mainAddBtn);
        } else {
            resetButtonToAddState(mainAddBtn);
        }
    }

    // Check product cards on category pages
    document.querySelectorAll('.product-card').forEach(card => {
        const cardTitleElem = card.querySelector('.product-name, h3');
        if (cardTitleElem) {
            const cardTitle = cardTitleElem.textContent.trim().toLowerCase();
            const isInCart = cart.some(item => (item.title || item.name || '').trim().toLowerCase() === cardTitle);
            const addBtn = card.querySelector('.btn-quick-add, .btn-add-cart');
            if (addBtn) {
                if (isInCart) {
                    setButtonAsAdded(addBtn);
                } else {
                    resetButtonToAddState(addBtn);
                }
            }
        }
    });
}

function setButtonAsAdded(btn) {
    if (!btn) return;
    btn.classList.add('added', 'btn-added-state');
    btn.removeAttribute('disabled');
    btn.disabled = false;
    btn.style.backgroundColor = '#2e7d32';
    btn.style.color = '#ffffff';
    btn.style.borderColor = '#2e7d32';
    btn.style.cursor = 'pointer';
    btn.innerHTML = `<i class="bi bi-bag-check-fill me-1"></i> GO TO BAG &rarr;`;
}

function resetButtonToAddState(btn) {
    if (!btn) return;
    btn.classList.remove('added', 'btn-added-state');
    btn.removeAttribute('disabled');
    btn.disabled = false;
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.style.borderColor = '';
    btn.style.cursor = 'pointer';
    if (btn.id === 'btnAddToBag' || btn.classList.contains('btn-add-to-bag')) {
        btn.innerHTML = `<i class="bi bi-bag-fill"></i> ADD TO BAG`;
    } else if (btn.classList.contains('btn-quick-add')) {
        btn.innerHTML = `<i class="bi bi-bag-plus"></i> Add to Bag`;
    }
}

/* Inject Toast DOM Container */
function injectToastElement() {
    if (document.getElementById('cartFlyToast')) return;

    const toastHTML = `
        <div class="cart-fly-toast" id="cartFlyToast">
            <div class="toast-header-row">
                <span class="toast-title"><i class="bi bi-bag-check-fill me-2" style="color: #9c27b0;"></i> Added to Shopping Bag!</span>
                <button class="toast-close-btn" onclick="closeCartToast()">&times;</button>
            </div>
            <div class="toast-body-row">
                <img id="toastImg" src="assets/images/techvolt-web-host-mobile-1.png" alt="Product Image" class="toast-thumb">
                <div class="toast-info">
                    <div class="toast-item-title" id="toastTitle">Product Title</div>
                    <div class="toast-item-price" id="toastPrice">₹2,999</div>
                </div>
            </div>
            <div class="toast-footer-btns">
                <a href="cart.html" class="btn-toast-view">View Bag</a>
                <a href="cart.html" class="btn-toast-checkout">Checkout Now</a>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', toastHTML);
}

/* Add To Bag Listeners */
function initAddToCartListeners() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('#btnAddToBag, .btn-add-bag, .btn-add-to-bag, .myntra-btn-add-bag, .btn-quick-add, .btn-mini-buy, .btn-add-cart, .btn-add-to-cart, [data-action="add-to-cart"]');
        if (!btn) return;

        // If button is already in "GO TO BAG" state, navigate directly to cart
        if (btn.classList.contains('btn-added-state') || btn.textContent.includes('GO TO BAG')) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = 'cart.html';
            return;
        }

        e.preventDefault();

        // 1. Extract Full Product Details
        let prodData = null;
        if (typeof SableCart !== 'undefined' && typeof SableCart.extractProductData === 'function') {
            prodData = SableCart.extractProductData(btn);
        }

        if (!prodData) {
            let imgSrc = 'assets/images/techvolt-web-host-mobile-1.png';
            let prodTitle = 'Product Item';
            let prodPrice = 999;

            const pageImg = document.querySelector('#productImageGrid img, .main-product-img, .product-img');
            if (pageImg && pageImg.src) imgSrc = pageImg.src;

            const titleElem = document.querySelector('.product-detail-title, .myntra-title-subheading, .product-name, h3');
            if (titleElem) prodTitle = titleElem.textContent.trim();

            const priceElem = document.querySelector('.myntra-price-current, .price-current, .current-price');
            if (priceElem) prodPrice = parseInt(priceElem.textContent.replace(/[^0-9]/g, ''), 10) || 999;

            prodData = {
                id: String(Date.now()),
                title: prodTitle,
                brand: 'SABLE',
                price: prodPrice,
                priceFormatted: `₹${prodPrice.toLocaleString('en-IN')}`,
                originalPrice: prodPrice * 2,
                originalPriceFormatted: `₹${(prodPrice * 2).toLocaleString('en-IN')}`,
                discount: '(50% OFF)',
                image: imgSrc,
                size: 'M',
                quantity: 1,
                link: window.location.pathname.split('/').pop() + window.location.search,
                selected: true
            };
        }

        // 2. Persist Product to Cart
        if (typeof SableCart !== 'undefined') {
            SableCart.addToCart(prodData, 1);
        }

        // 3. Mark button as Added -> GO TO BAG
        btn.classList.add('added', 'btn-added-state');
        btn.style.backgroundColor = '#2e7d32';
        btn.style.color = '#ffffff';
        btn.style.borderColor = '#2e7d32';
        btn.style.cursor = 'pointer';
        btn.innerHTML = `<i class="bi bi-check2 me-1"></i> Added to Bag!`;

        setTimeout(() => {
            setButtonAsAdded(btn);
        }, 900);

        // 4. Trigger Fly Animation from clicked button to Cart icon
        triggerFlyAnimation(btn, prodData.image, () => {
            if (typeof SableCart !== 'undefined') {
                SableCart.updateHeaderCartCount();
            }
            showCartToast(prodData.image, prodData.title, prodData.priceFormatted);
        });
    });
}

/* Fly to Cart Flying Image Animation */
function triggerFlyAnimation(startElem, imgSrc, callback) {
    const cartIcon = document.querySelector('.cart-btn, .header-action-btn.cart-btn, a[href*="cart.html"]');
    if (!cartIcon || !startElem) {
        if (callback) callback();
        return;
    }

    const startRect = startElem.getBoundingClientRect();
    const targetRect = cartIcon.getBoundingClientRect();

    const clone = document.createElement('img');
    clone.src = imgSrc || 'assets/images/techvolt-web-host-mobile-1.png';
    clone.className = 'fly-item-clone';
    clone.style.top = `${startRect.top + startRect.height / 2 - 30}px`;
    clone.style.left = `${startRect.left + startRect.width / 2 - 30}px`;
    clone.style.width = '60px';
    clone.style.height = '60px';
    clone.style.borderRadius = '4px';
    clone.style.objectFit = 'cover';

    document.body.appendChild(clone);
    clone.getBoundingClientRect();

    clone.style.top = `${targetRect.top + targetRect.height / 2 - 15}px`;
    clone.style.left = `${targetRect.left + targetRect.width / 2 - 15}px`;
    clone.style.width = '30px';
    clone.style.height = '30px';
    clone.style.opacity = '0.3';
    clone.style.transform = 'scale(0.2) rotate(45deg)';

    setTimeout(() => {
        clone.remove();
        if (callback) callback();
    }, 750);
}

/* Show Popup Toast Notification */
function showCartToast(imgSrc, title, price) {
    const toast = document.getElementById('cartFlyToast');
    const toastImg = document.getElementById('toastImg');
    const toastTitle = document.getElementById('toastTitle');
    const toastPrice = document.getElementById('toastPrice');

    if (!toast) return;

    if (toastImg) toastImg.src = imgSrc || 'assets/images/techvolt-web-host-mobile-1.png';
    if (toastTitle) toastTitle.textContent = title || 'Product Item';
    if (toastPrice) toastPrice.textContent = price || '₹2,999';

    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        closeCartToast();
    }, 4500);
}

/* Close Toast */
function closeCartToast() {
    const toast = document.getElementById('cartFlyToast');
    if (toast) toast.classList.remove('show');
}

/* Buy Now Button Handler — Adds Product & Opens Cart Page */
function initBuyNowListeners() {
    document.addEventListener('click', (e) => {
        const buyBtn = e.target.closest('.btn-buy-now, .btn-buynow, .myntra-btn-buy-now, [data-action="buy-now"]');
        if (!buyBtn) return;

        e.preventDefault();

        let prodData = null;
        if (typeof SableCart !== 'undefined' && typeof SableCart.extractProductData === 'function') {
            prodData = SableCart.extractProductData(buyBtn);
        }

        if (prodData && typeof SableCart !== 'undefined') {
            SableCart.addToCart(prodData, 1);
        }

        // Visual feedback
        buyBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span> Redirecting to Bag...`;
        buyBtn.style.backgroundColor = '#2e7d32';

        setTimeout(() => {
            window.location.href = 'cart.html';
        }, 400);
    });
}
