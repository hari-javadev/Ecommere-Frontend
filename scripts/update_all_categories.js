const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\22cy0\\Desktop\\Ecommerece';
const cssDir = path.join(baseDir, 'css');

// 1. Update all CSS files in css/ directory to enforce 5-column grid
const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

cssFiles.forEach(file => {
    const filePath = path.join(cssDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace 4 columns grid with 5 columns grid
    content = content.replace(/grid-template-columns:\s*repeat\(4,\s*1fr\)/g, 'grid-template-columns: repeat(5, 1fr)');
    content = content.replace(/gap:\s*24px;/g, 'gap: 24px 18px;');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated 5 columns grid in CSS file: ${file}`);
});

// 2. Update HTML files for all categories
const htmlFiles = [
    'men.html', 'women-western.html', 'kids.html', 'bags.html', 
    'beauty.html', 'electronics.html', 'ethnic.html', 'home-kitchen.html', 
    'jewellery.html', 'watches.html', 'popular.html'
];

const stickyBannerHTML = `
    <!-- Floating Sticky Elements -->

    <button class="myntra-floating-bell-btn" title="Notifications">
        <i class="bi bi-bell-fill"></i>
    </button>
`;

const toggleWishlistScript = `
    <script>
        function toggleCardWishlist(btn) {
            btn.classList.toggle('wished');
            const span = btn.querySelector('span');
            if (span) {
                if (btn.classList.contains('wished')) {
                    span.textContent = 'WISHLISTED';
                    if (btn.querySelector('i')) btn.querySelector('i').className = 'bi bi-heart-fill me-1';
                } else {
                    span.textContent = 'WISHLIST';
                    if (btn.querySelector('i')) btn.querySelector('i').className = 'bi bi-heart me-1';
                }
            }
        }
    </script>
`;

htmlFiles.forEach(file => {
    const filePath = path.join(baseDir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Ensure image-wrapper overlay exists in all cards
    content = content.replace(/(<div class="product-card">[\s\S]*?<div class="product-image-wrapper">[\s\S]*?<\/a>)([\s\S]*?)(<\/div>\s*<div class="product-info">)/g, (match, p1, p2, p3) => {
        if (!p2.includes('myntra-image-hover-overlay')) {
            const overlay = `
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
                        </div>`;
            return p1 + overlay + p3;
        }
        return match;
    });

    // Add sticky banner if missing
    if (!content.includes('myntra-right-sticky-banner')) {
        content = content.replace('</body>', `${stickyBannerHTML}\n</body>`);
    }

    // Add toggle wishlist script if missing
    if (!content.includes('toggleCardWishlist')) {
        content = content.replace('</body>', `${toggleWishlistScript}\n</body>`);
    }

    // Clean up any stray closing div artifacts if present
    content = content.replace(/(<\/div>\s*){3,}(<div class="product-card">)/g, '</div>\n\n$2');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated category HTML file: ${file}`);
});

console.log('All category pages updated successfully to 5 cards per row Myntra layout!');
