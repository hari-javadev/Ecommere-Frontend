const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\22cy0\\Desktop\\Ecommerece';

const files = fs.readdirSync(baseDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    let modified = false;

    // Pattern matching product-card where dots line & wishlist button exist after image wrapper
    const cardRegex = /(<div class="product-image-wrapper">[\s\S]*?<\/a>\s*)(?:<div class="myntra-dots-line">[\s\S]*?<\/button>)/g;

    if (cardRegex.test(content)) {
        content = content.replace(cardRegex, (match, p1) => {
            const overlayContent = `    <div class="myntra-image-hover-overlay">
                        <div class="myntra-dots-line">
                            <span class="dot"></span>
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)">
                            <i class="bi bi-heart me-1"></i> <span>WISHLIST</span>
                        </button>
                    </div>\n                `;
            // Insert overlay inside product-image-wrapper before </div>
            const updatedImageWrapper = p1.replace(/<\/div>\s*$/, overlayContent + '</div>');
            return updatedImageWrapper;
        });
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated Wishlist image overlay in ${file}`);
    }
});

console.log("All cards updated to Wishlist overlay on image!");
