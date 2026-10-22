/**
 * Shopping Cart Interactive Logic & Price Calculator (SABLE E-Commerce)
 */

let appliedCoupon = null;
let giftWrapAdded = false;

document.addEventListener('DOMContentLoaded', () => {
    initCartQuantityHandlers();
    initRemoveHandlers();
    recalculateCartTotals();
});

/* Recalculate Cart Totals */
function recalculateCartTotals() {
    const items = document.querySelectorAll('.cart-item-card');
    let totalMRP = 0;
    let currentTotal = 0;
    let itemCount = 0;

    items.forEach(item => {
        const qtyVal = parseInt(item.querySelector('.cart-qty-val').textContent) || 1;
        const currPriceText = item.querySelector('.item-curr-price').textContent.replace(/[^0-9]/g, '');
        const origPriceText = item.querySelector('.item-orig-price').textContent.replace(/[^0-9]/g, '');

        const currPrice = parseInt(currPriceText) || 0;
        const origPrice = parseInt(origPriceText) || 0;

        const subtotal = currPrice * qtyVal;
        item.querySelector('.item-subtotal-price').textContent = `₹${subtotal.toLocaleString('en-IN')}`;

        totalMRP += origPrice * qtyVal;
        currentTotal += subtotal;
        itemCount += qtyVal;
    });

    // Update Item Count Headers
    const headerCount = document.getElementById('headerCartCount');
    const mainCount = document.getElementById('cartTotalItemsCount');
    if (headerCount) headerCount.textContent = itemCount;
    if (mainCount) mainCount.textContent = itemCount;

    let discountMRP = totalMRP - currentTotal;
    let couponDiscount = 0;

    if (appliedCoupon === 'LUXE50') {
        couponDiscount = 500;
    } else if (appliedCoupon === 'SABLEFIRST') {
        couponDiscount = Math.round(currentTotal * 0.15);
    } else if (appliedCoupon === 'TECHVOLTMART10' || appliedCoupon === 'TECHVOLT10' || appliedCoupon === 'SABLE10') {
        couponDiscount = Math.round(currentTotal * 0.10);
    }

    let finalPrice = currentTotal - couponDiscount;
    if (giftWrapAdded) finalPrice += 49;

    let totalSavings = discountMRP + couponDiscount;

    // DOM Updates
    document.getElementById('summaryTotalMRP').textContent = `₹${totalMRP.toLocaleString('en-IN')}`;
    document.getElementById('summaryDiscountMRP').textContent = `- ₹${discountMRP.toLocaleString('en-IN')}`;
    
    if (couponDiscount > 0) {
        document.getElementById('couponDiscountRow').style.display = 'flex';
        document.getElementById('summaryCouponDiscount').textContent = `- ₹${couponDiscount.toLocaleString('en-IN')}`;
        document.getElementById('appliedCouponName').textContent = appliedCoupon;
    } else {
        document.getElementById('couponDiscountRow').style.display = 'none';
    }

    document.getElementById('summaryFinalPrice').textContent = `₹${finalPrice.toLocaleString('en-IN')}`;
    document.getElementById('summarySavingsAmount').textContent = `₹${totalSavings.toLocaleString('en-IN')}`;
}

/* Quantity Handlers */
function initCartQuantityHandlers() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-plus')) {
            const qtySpan = e.target.previousElementSibling;
            let val = parseInt(qtySpan.textContent) || 1;
            if (val < 10) {
                qtySpan.textContent = val + 1;
                recalculateCartTotals();
            }
        }
        if (e.target.classList.contains('btn-minus')) {
            const qtySpan = e.target.nextElementSibling;
            let val = parseInt(qtySpan.textContent) || 1;
            if (val > 1) {
                qtySpan.textContent = val - 1;
                recalculateCartTotals();
            }
        }
    });
}

/* Item Removal Handler */
function initRemoveHandlers() {
    document.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.btn-remove-item');
        if (removeBtn) {
            const itemCard = removeBtn.closest('.cart-item-card');
            if (itemCard) {
                itemCard.style.transition = 'all 0.3s ease';
                itemCard.style.opacity = '0';
                itemCard.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    itemCard.remove();
                    recalculateCartTotals();
                    checkEmptyCart();
                }, 300);
            }
        }
    });
}

/* Check Empty Cart */
function checkEmptyCart() {
    const list = document.getElementById('cartItemsList');
    if (!list || list.children.length === 0) {
        list.innerHTML = `
            <div class="cart-card text-center py-5">
                <i class="bi bi-bag-x text-muted" style="font-size: 64px;"></i>
                <h3 class="mt-3 font-weight-bold">Your Shopping Bag is Empty</h3>
                <p class="text-muted">Explore our luxury collections and add your favorite items!</p>
                <a href="index.html" class="btn btn-primary px-4 py-2 mt-2" style="background: #9c27b0; border: none;">Start Shopping Now</a>
            </div>
        `;
    }
}

/* Coupon Select & Apply */
function selectCoupon(code) {
    document.getElementById('couponInput').value = code;
    applyCouponCode();
}

function applyCouponCode() {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    const msgBox = document.getElementById('couponMsg');

    if (code === 'LUXE50' || code === 'SABLEFIRST' || code === 'TECHVOLTMART10' || code === 'TECHVOLT10' || code === 'SABLE10') {
        appliedCoupon = code;
        msgBox.innerHTML = `<span class="text-success fw-bold"><i class="bi bi-check-circle-fill me-1"></i> Coupon '${code}' Applied Successfully!</span>`;
        recalculateCartTotals();
    } else if (code === '') {
        msgBox.innerHTML = `<span class="text-danger"><i class="bi bi-exclamation-triangle-fill me-1"></i> Please enter a promo code.</span>`;
    } else {
        msgBox.innerHTML = `<span class="text-danger"><i class="bi bi-x-circle-fill me-1"></i> Invalid Coupon Code. Try TECHVOLTMART10 or LUXE50.</span>`;
    }
}

/* Toggle Gift Wrap */
function toggleGiftWrap() {
    const check = document.getElementById('giftWrapCheck');
    giftWrapAdded = check.checked;
    recalculateCartTotals();
}

/* Change Delivery Pincode */
function changeDeliveryPin() {
    const pin = prompt('Enter your 6-digit Pincode:', '110001');
    if (pin && /^\d{6}$/.test(pin)) {
        document.getElementById('deliveryPinText').textContent = `Pincode ${pin}`;
        alert(`Delivery location updated to ${pin}. Express delivery active.`);
    } else if (pin) {
        alert('Invalid 6-digit Pincode entered.');
    }
}

/* Move Saved item to Bag */
function moveToBag(itemName) {
    alert(`'${itemName}' has been moved to your Shopping Bag!`);
}

/* Proceed To Checkout */
function proceedToCheckout() {
    const total = document.getElementById('summaryFinalPrice').textContent;
    alert(`Redirecting to Secure SSL Checkout Portal.\nTotal Amount Payable: ${total}\nThank you for shopping with SABLE Luxury Fashion!`);
}
