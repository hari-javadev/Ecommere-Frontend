/**
 * Checkout & Payment Interactive Controller (SABLE E-Commerce)
 */

document.addEventListener('DOMContentLoaded', () => {
    initPaymentAccordion();
});

function selectSavedAddr(elem, type) {
    document.querySelectorAll('.addr-pill').forEach(p => p.classList.remove('active'));
    elem.classList.add('active');

    if (type === 'home') {
        document.getElementById('addrFullName').value = 'Ananya Sharma';
        document.getElementById('addrPincode').value = '110001';
        document.getElementById('addrCity').value = 'New Delhi';
        document.getElementById('addrState').value = 'Delhi';
        document.getElementById('addrStreet').value = 'Flat 402, Royal Residency';
    } else if (type === 'office') {
        document.getElementById('addrFullName').value = 'Ananya Sharma';
        document.getElementById('addrPincode').value = '122002';
        document.getElementById('addrCity').value = 'Gurugram';
        document.getElementById('addrState').value = 'Haryana';
        document.getElementById('addrStreet').value = 'Cyber City Tower B, 6th Floor';
    }
}

function clearAddressForm() {
    document.querySelectorAll('.addr-pill').forEach(p => p.classList.remove('active'));
    document.getElementById('addrFullName').value = '';
    document.getElementById('addrPincode').value = '';
    document.getElementById('addrCity').value = '';
    document.getElementById('addrState').value = '';
    document.getElementById('addrStreet').value = '';
    document.getElementById('addrFullName').focus();
}

function selectPaymentMethod(type) {
    const cardBody = document.getElementById('cardBody');
    const upiBody = document.getElementById('upiBody');
    const netbankBody = document.getElementById('netbankBody');
    const codBody = document.getElementById('codBody');

    document.querySelectorAll('.payment-method-box').forEach(b => b.classList.remove('active'));

    cardBody.classList.remove('show');
    upiBody.classList.remove('show');
    netbankBody.classList.remove('show');
    codBody.classList.remove('show');

    if (type === 'card') {
        document.getElementById('payCard').checked = true;
        document.getElementById('payCard').closest('.payment-method-box').classList.add('active');
        cardBody.classList.add('show');
    } else if (type === 'upi') {
        document.getElementById('payUPI').checked = true;
        document.getElementById('payUPI').closest('.payment-method-box').classList.add('active');
        upiBody.classList.add('show');
    } else if (type === 'netbank') {
        document.getElementById('payNetbank').checked = true;
        document.getElementById('payNetbank').closest('.payment-method-box').classList.add('active');
        netbankBody.classList.add('show');
    } else if (type === 'cod') {
        document.getElementById('payCOD').checked = true;
        document.getElementById('payCOD').closest('.payment-method-box').classList.add('active');
        codBody.classList.add('show');
    }
}

function initPaymentAccordion() {
    // Standard initialization
}

function verifyUPI() {
    alert('UPI VPA Verified successfully! Click "Place Order" to authorize payment.');
}

function placeOrder() {
    const btn = document.getElementById('btnPlaceOrder');
    const custName = document.getElementById('addrFullName').value || 'Ananya Sharma';
    
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status"></span> Processing Payment...`;

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = `<i class="bi bi-lock-fill me-2"></i> Pay ₹10,997 & Place Order`;
        
        document.getElementById('confCustName').textContent = custName;
        document.getElementById('confOrderNo').textContent = `#SABLE-2026-${Math.floor(10000 + Math.random() * 90000)}`;
        
        const modal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
        modal.show();
    }, 1800);
}
