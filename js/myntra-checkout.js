/**
 * Myntra 3-Step Checkout Controller (Shopping Bag Dynamic Engine)
 * Powered by SableCart for real-time item management, price calculations, and checkout.
 */

let appliedCouponCode = null;

document.addEventListener('DOMContentLoaded', () => {
    initDonationChips();
    initCouponHandler();
    initGlobalCartListeners();
    renderCartPage();

    // Listen for external cart changes
    window.addEventListener('cartUpdated', () => {
        renderCartPage();
    });
});

/* Initialize Donation Chips */
function initDonationChips() {
    const chips = document.querySelectorAll('.chip-btn');
    chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            e.preventDefault();
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            updateCartTotals();
        });
    });

    const chkDonate = document.getElementById('chkDonate');
    if (chkDonate) {
        chkDonate.addEventListener('change', () => {
            updateCartTotals();
        });
    }
}

/* Initialize Coupon Code Handling */
function initCouponHandler() {
    const applyCouponBtn = document.getElementById('btnApplyCoupon');
    const msgBox = document.getElementById('couponMsg');

    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (appliedCouponCode) {
                // Remove coupon
                appliedCouponCode = null;
                applyCouponBtn.textContent = 'APPLY';
                applyCouponBtn.style.color = '#ff3f6c';
                if (msgBox) {
                    msgBox.style.display = 'none';
                    msgBox.innerHTML = '';
                }
            } else {
                // Apply coupon
                const entered = prompt('Enter Discount Coupon Code (Try: TECHVOLTMART10, LUXE50, SABLE10, SABLEFIRST):', 'TECHVOLTMART10');
                if (!entered) return;

                const code = entered.trim().toUpperCase();
                if (code === 'TECHVOLTMART10' || code === 'TECHVOLT10' || code === 'SABLE10' || code === 'LUXE50' || code === 'SABLEFIRST') {
                    appliedCouponCode = code;
                    applyCouponBtn.textContent = 'REMOVE';
                    applyCouponBtn.style.color = '#dc3545';
                    if (msgBox) {
                        msgBox.style.display = 'block';
                        let desc = '10% OFF';
                        if (code === 'LUXE50') desc = '₹500 OFF';
                        if (code === 'SABLEFIRST') desc = '15% OFF';
                        msgBox.innerHTML = `<span class="text-success fw-bold"><i class="bi bi-check-circle-fill me-1"></i> Coupon '${code}' (${desc}) Applied!</span>`;
                    }
                } else {
                    alert('Invalid coupon code. Available codes: TECHVOLTMART10, LUXE50, SABLE10, SABLEFIRST');
                }
            }
            updateCartTotals();
        });
    }
}

/* Initialize Global Cart Header Actions */
function initGlobalCartListeners() {
    // Select All Checkbox
    const selectAllChk = document.getElementById('selectAllChk');
    if (selectAllChk) {
        selectAllChk.addEventListener('change', (e) => {
            if (typeof SableCart !== 'undefined') {
                SableCart.selectAll(e.target.checked);
                renderCartPage();
            }
        });
    }

    // Remove All Selected link
    const removeAllBtn = document.getElementById('btnRemoveAll');
    if (removeAllBtn) {
        removeAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof SableCart === 'undefined') return;

            const cart = SableCart.getCart();
            const selected = cart.filter(i => i.selected !== false);
            if (selected.length === 0) {
                alert('No items currently selected to remove.');
                return;
            }

            if (confirm(`Remove ${selected.length} selected item${selected.length > 1 ? 's' : ''} from your Shopping Bag?`)) {
                selected.forEach(item => {
                    SableCart.removeFromCart(SableCart.getItemKey(item));
                });
                renderCartPage();
            }
        });
    }

    // Move Selected to Wishlist
    const moveWishlistBtn = document.getElementById('btnMoveToWishlist');
    if (moveWishlistBtn) {
        moveWishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof SableCart === 'undefined' || typeof SableWishlist === 'undefined') return;

            const cart = SableCart.getCart();
            const selected = cart.filter(i => i.selected !== false);
            if (selected.length === 0) {
                alert('No items currently selected to move to Wishlist.');
                return;
            }

            selected.forEach(item => {
                SableWishlist.addToWishlist(item);
                SableCart.removeFromCart(SableCart.getItemKey(item));
            });

            if (typeof SableWishlist.showToast === 'function') {
                SableWishlist.showToast(`Moved ${selected.length} item${selected.length > 1 ? 's' : ''} to Wishlist ❤️`);
            }
            renderCartPage();
        });
    }
}

/* Render Shopping Bag Page */
function renderCartPage() {
    const listContainer = document.getElementById('cartItemsList');
    const headerRow = document.getElementById('itemsSelectHeader');
    if (!listContainer) return;

    if (typeof SableCart === 'undefined') return;

    const cart = SableCart.getCart();
    const totalItemsCount = cart.length;
    const selectedCount = cart.filter(i => i.selected !== false).length;

    // Update Header Select All state
    const selectAllChk = document.getElementById('selectAllChk');
    const selectedText = document.getElementById('selectedItemsText');

    if (selectAllChk) {
        selectAllChk.checked = (totalItemsCount > 0 && selectedCount === totalItemsCount);
    }
    if (selectedText) {
        selectedText.textContent = `${selectedCount}/${totalItemsCount} ITEMS SELECTED`;
    }

    // If Cart is empty: show empty state
    if (totalItemsCount === 0) {
        if (headerRow) headerRow.style.display = 'none';
        listContainer.innerHTML = `
            <div class="cart-card text-center py-5" style="background:#ffffff; border-radius:4px; padding: 48px 20px; border: 1px solid #eaeaec; margin-bottom: 20px;">
                <i class="bi bi-bag-x" style="font-size: 64px; color: #ff3f6c; display: block; margin-bottom: 12px;"></i>
                <h3 class="font-weight-bold" style="color: #282c3f; font-size: 20px; margin-bottom: 8px;">Hey, your shopping bag is empty!</h3>
                <p class="text-muted" style="font-size: 14px; margin-bottom: 24px;">There is nothing in your bag. Explore our collections and add your favourite styles.</p>
                <a href="index.html" class="btn btn-outline-danger px-4 py-2" style="font-weight: 700; border-color: #ff3f6c; color: #ff3f6c; text-decoration: none; border-radius: 4px;">START SHOPPING NOW</a>
            </div>
        `;
        updateCartTotals();
        return;
    }

    if (headerRow) headerRow.style.display = 'flex';

    // Render cart items
    listContainer.innerHTML = cart.map(item => {
        const key = SableCart.getItemKey(item);
        const encodedKey = encodeURIComponent(key);
        const isSelected = item.selected !== false;
        const qty = parseInt(item.quantity, 10) || 1;
        const subtotal = item.price * qty;
        const origSubtotal = (item.originalPrice || (item.price * 2)) * qty;
        const diff = origSubtotal - subtotal;
        const discountText = item.discount || (diff > 0 ? `₹${diff.toLocaleString('en-IN')} OFF` : '');

        const isStandardSize = ['S', 'M', 'L', 'XL', 'XXL'].includes(item.size);

        return `
            <div class="myntra-item-card" data-key="${encodedKey}" style="opacity: 1; transition: all 0.3s ease;">
                <input type="checkbox" class="item-chk card-chk" ${isSelected ? 'checked' : ''} onchange="onItemChkChange('${encodedKey}', this.checked)">
                <a href="${item.link || 'index.html'}">
                    <img src="${item.image}" alt="${item.title}" class="item-thumb" onerror="this.onerror=null; this.src='assets/images/techvolt-web-host-mobile-1.png';">
                </a>
                <div class="flex-grow-1">
                    <div class="item-brand-name">${item.brand || 'SABLE'}</div>
                    <div class="item-prod-title">
                        <a href="${item.link || 'index.html'}" style="text-decoration: none; color: inherit;">${item.title}</a>
                    </div>
                    <div class="item-seller">Sold by: SABLE INDIA</div>
                    
                    <div class="item-selects-row">
                        <select class="mini-dropdown" onchange="onItemSizeChange('${encodedKey}', this.value)">
                            ${isStandardSize ? `
                                <option value="S" ${item.size === 'S' ? 'selected' : ''}>Size: S</option>
                                <option value="M" ${item.size === 'M' || !item.size ? 'selected' : ''}>Size: M</option>
                                <option value="L" ${item.size === 'L' ? 'selected' : ''}>Size: L</option>
                                <option value="XL" ${item.size === 'XL' ? 'selected' : ''}>Size: XL</option>
                                <option value="XXL" ${item.size === 'XXL' ? 'selected' : ''}>Size: XXL</option>
                            ` : `
                                <option value="${item.size || 'Free Size'}" selected>Size: ${item.size || 'Free Size'}</option>
                            `}
                        </select>

                        <div class="qty-stepper-wrap ms-1 me-1">
                            <button type="button" class="qty-stepper-btn qty-btn-minus" onclick="onItemQtyChange('${encodedKey}', -1)" aria-label="Decrease Quantity" ${qty <= 1 ? 'disabled' : ''}><i class="bi bi-dash-lg"></i></button>
                            <span class="qty-stepper-val">${qty}</span>
                            <button type="button" class="qty-stepper-btn qty-btn-plus" onclick="onItemQtyChange('${encodedKey}', 1)" aria-label="Increase Quantity" ${qty >= 10 ? 'disabled' : ''}><i class="bi bi-plus-lg"></i></button>
                        </div>

                        <span class="stock-left-badge">In Stock</span>
                    </div>

                    <div class="item-price-flex">
                        <span class="price-main">₹${subtotal.toLocaleString('en-IN')}</span>
                        ${origSubtotal > subtotal ? `<span class="price-strike">₹${origSubtotal.toLocaleString('en-IN')}</span>` : ''}
                        ${discountText ? `<span class="price-off">${discountText}</span>` : ''}
                    </div>

                    <div class="return-info"><i class="bi bi-arrow-counterclockwise me-1"></i> <strong>7 days</strong> return available</div>
                    <div class="delivery-estimate"><i class="bi bi-truck me-1"></i> Delivery between <strong>16 Sep - 18 Sep</strong></div>
                </div>
                <i class="bi bi-x-lg item-close-btn" onclick="onRemoveItem('${encodedKey}', this)" title="Remove item"></i>
            </div>
        `;
    }).join('');

    updateCartTotals();
}

/* Item Handlers */
window.onItemChkChange = function(encodedKey, isChecked) {
    const key = decodeURIComponent(encodedKey);
    if (typeof SableCart !== 'undefined') {
        SableCart.toggleSelection(key, isChecked);
        renderCartPage();
    }
};

window.onItemSizeChange = function(encodedKey, newSize) {
    const key = decodeURIComponent(encodedKey);
    if (typeof SableCart !== 'undefined') {
        SableCart.updateSize(key, newSize);
        renderCartPage();
    }
};

window.onItemQtyChange = function(encodedKey, delta) {
    const key = decodeURIComponent(encodedKey);
    if (typeof SableCart !== 'undefined') {
        const cart = SableCart.getCart();
        const item = cart.find(i => SableCart.getItemKey(i) === key);
        if (item) {
            const newQty = (parseInt(item.quantity, 10) || 1) + delta;
            SableCart.updateQuantity(key, newQty);
            renderCartPage();
        }
    }
};

window.onRemoveItem = function(encodedKey, btn) {
    const key = decodeURIComponent(encodedKey);
    let card = null;
    if (btn) {
        card = btn.closest('.myntra-item-card');
    }
    if (!card) {
        const cards = document.querySelectorAll('.myntra-item-card');
        for (const c of cards) {
            if (c.getAttribute('data-key') === encodedKey) {
                card = c;
                break;
            }
        }
    }
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
    }

    setTimeout(() => {
        if (typeof SableCart !== 'undefined') {
            SableCart.removeFromCart(key);
            renderCartPage();
        }
    }, 250);
};

/* Recalculate Totals for Selected Items */
function updateCartTotals() {
    if (typeof SableCart === 'undefined') return;

    const cart = SableCart.getCart();
    const selectedItems = cart.filter(item => item.selected !== false);
    const selectedCount = selectedItems.reduce((sum, i) => sum + (parseInt(i.quantity, 10) || 1), 0);

    let totalMRP = 0;
    let sellingPrice = 0;

    selectedItems.forEach(item => {
        const q = parseInt(item.quantity, 10) || 1;
        const mrp = item.originalPrice || (item.price * 2);
        totalMRP += mrp * q;
        sellingPrice += item.price * q;
    });

    let discountMRP = totalMRP - sellingPrice;
    let platformFee = selectedItems.length > 0 ? 10 : 0;

    // Donation
    let donationAmount = 0;
    const chkDonate = document.getElementById('chkDonate');
    if (chkDonate && chkDonate.checked && selectedItems.length > 0) {
        const activeChip = document.querySelector('.chip-btn.active');
        donationAmount = activeChip ? (parseInt(activeChip.getAttribute('data-amount'), 10) || 50) : 50;
    }

    // Coupon discount
    let couponDiscount = 0;
    if (appliedCouponCode && selectedItems.length > 0) {
        if (appliedCouponCode === 'LUXE50') {
            couponDiscount = Math.min(500, sellingPrice);
        } else if (appliedCouponCode === 'SABLEFIRST') {
            couponDiscount = Math.round(sellingPrice * 0.15);
        } else {
            couponDiscount = Math.round(sellingPrice * 0.10);
        }
    }

    let finalTotal = Math.max(0, sellingPrice + platformFee + donationAmount - couponDiscount);

    // Save for any checkout reference
    try {
        localStorage.setItem('sable_cart_qty', selectedCount);
        localStorage.setItem('sable_cart_total', finalTotal);
    } catch(e) {}

    // Update DOM
    const summaryHeader = document.getElementById('summaryHeader');
    const summaryTotalMRP = document.getElementById('summaryTotalMRP');
    const summaryDiscountMRP = document.getElementById('summaryDiscountMRP');
    const summaryCouponDiscount = document.getElementById('summaryCouponDiscount');
    const summaryPlatformFee = document.getElementById('summaryPlatformFee');
    const summaryTotalAmount = document.getElementById('summaryTotalAmount');
    const btnPlaceOrder = document.getElementById('btnPlaceOrder') || document.querySelector('.btn-pink-place-order');

    if (summaryHeader) {
        summaryHeader.textContent = `PRICE DETAILS (${selectedCount} Item${selectedCount !== 1 ? 's' : ''})`;
    }
    if (summaryTotalMRP) {
        summaryTotalMRP.textContent = `₹${totalMRP.toLocaleString('en-IN')}`;
    }
    if (summaryDiscountMRP) {
        summaryDiscountMRP.textContent = `- ₹${discountMRP.toLocaleString('en-IN')}`;
    }
    if (summaryCouponDiscount) {
        if (couponDiscount > 0) {
            summaryCouponDiscount.textContent = `- ₹${couponDiscount.toLocaleString('en-IN')}`;
            summaryCouponDiscount.style.fontWeight = '700';
        } else {
            summaryCouponDiscount.textContent = 'Apply Coupon';
            summaryCouponDiscount.style.fontWeight = 'normal';
        }
    }
    if (summaryPlatformFee) {
        summaryPlatformFee.innerHTML = platformFee > 0 ? `₹10 <span class="price-strike ms-1">₹23</span>` : `₹0`;
    }
    if (summaryTotalAmount) {
        summaryTotalAmount.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
    }

    if (btnPlaceOrder) {
        if (selectedCount === 0) {
            btnPlaceOrder.disabled = true;
            btnPlaceOrder.style.opacity = '0.6';
            btnPlaceOrder.style.cursor = 'not-allowed';
        } else {
            btnPlaceOrder.disabled = false;
            btnPlaceOrder.style.opacity = '1';
            btnPlaceOrder.style.cursor = 'pointer';
        }
    }
}

/* Place Order Handler */
function placeFinalOrder() {
    if (typeof SableCart === 'undefined') return;

    const cart = SableCart.getCart();
    const selected = cart.filter(i => i.selected !== false);
    if (selected.length === 0) {
        alert('Please select at least one item in your bag to proceed with checkout.');
        return;
    }

    const btn = document.getElementById('btnPlaceOrder') || document.querySelector('.btn-pink-place-order');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> CONFIRMING ORDER...`;

        setTimeout(() => {
            const orderId = `TVM-${Math.floor(100000 + Math.random() * 900000)}`;
            const total = document.getElementById('summaryTotalAmount').textContent;

            alert(`🎉 ORDER CONFIRMED!\n\nOrder ID: #${orderId}\nTotal Amount Paid: ${total}\nItems: ${selected.length}\n\nThank you for shopping with TechVoltMart!`);

            // Clear ordered items from cart
            const remaining = cart.filter(i => i.selected === false);
            SableCart.saveCart(remaining);

            window.location.href = 'index.html';
        }, 1200);
    }
}
