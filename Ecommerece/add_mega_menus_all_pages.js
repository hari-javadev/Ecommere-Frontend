const fs = require('fs');
const path = require('path');

const megaMenusHTML = {
    'popular.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Trending Now</h4>
                <a href="popular.html">Best Sellers</a>
                <a href="popular.html">New Arrivals</a>
                <a href="popular.html">Celebrity Style</a>
                <a href="popular.html">Sustainable Luxe</a>
                <a href="popular.html">Viral Favourites</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Special Offers</h4>
                <a href="popular.html">Clearance Sale</a>
                <a href="popular.html">Flat 50% Off</a>
                <a href="popular.html">Buy 1 Get 1 Free</a>
                <a href="popular.html">Deals of the Day</a>
                <a href="popular.html">Under Rs. 999</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Featured Brands</h4>
                <a href="popular.html">Sable Heritage</a>
                <a href="popular.html">Verve Luxe</a>
                <a href="popular.html">Sable Jewels</a>
                <a href="popular.html">Chrono Luxe</a>
                <a href="popular.html">Audio Tech</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Seasonal Highlights</h4>
                <a href="popular.html">Festival Collection</a>
                <a href="popular.html">Summer Essentials</a>
                <a href="popular.html">Partywear Glam</a>
                <a href="popular.html">Vacation Outfits</a>
                <a href="popular.html">Express Shipping</a>
            </div>
        </div>`,

    'ethnic.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Sarees</h4>
                <a href="ethnic.html">All Sarees</a>
                <a href="ethnic.html">Banarasi Silk Sarees</a>
                <a href="ethnic.html">Georgette Sarees</a>
                <a href="ethnic.html">Chiffon Sarees</a>
                <a href="ethnic.html">Cotton Sarees</a>
                <a href="ethnic.html">Bridal Sarees</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Kurtis & Suits</h4>
                <a href="ethnic.html">All Kurtis</a>
                <a href="ethnic.html">Anarkali Kurtis</a>
                <a href="ethnic.html">Rayon Kurtis</a>
                <a href="ethnic.html">Cotton Kurtis</a>
                <a href="ethnic.html">Straight Kurtis</a>
                <a href="ethnic.html">Printed Kurtis</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Kurta Sets</h4>
                <a href="ethnic.html">All Kurta Sets</a>
                <a href="ethnic.html">Kurta Palazzo Sets</a>
                <a href="ethnic.html">Kurta Pant Sets</a>
                <a href="ethnic.html">Sharara Sets</a>
                <a href="ethnic.html">Anarkali Kurta Sets</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Lehengas & Gowns</h4>
                <a href="ethnic.html">All Lehengas</a>
                <a href="ethnic.html">Bridal Lehengas</a>
                <a href="ethnic.html">Partywear Lehengas</a>
                <a href="ethnic.html">Silk Lehengas</a>
                <a href="ethnic.html">Readymade Blouses</a>
            </div>
        </div>`,

    'women-western.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Innerwear</h4>
                <a href="women-western.html">Women Bra</a>
                <a href="women-western.html">Women Panties</a>
                <a href="women-western.html">Other Innerwear</a>
                <a href="women-western.html">Shapewear & Camisoles</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Sleepwear</h4>
                <a href="women-western.html">Women Nightsuits</a>
                <a href="women-western.html">Women Nightdress</a>
                <a href="women-western.html">Other Sleepwear</a>
                <a href="women-western.html">Robes & Satin Sets</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Sports Wear</h4>
                <a href="women-western.html">Sports Bottomwear</a>
                <a href="women-western.html">Sports Bra</a>
                <a href="women-western.html">Top & Bottom Sets</a>
                <a href="women-western.html">Activewear Jackets</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Maternity Wear</h4>
                <a href="women-western.html">Kurti & Topwear</a>
                <a href="women-western.html">Feeding Bras</a>
                <a href="women-western.html">Briefs & Bottomwear</a>
                <a href="women-western.html">Maternity Dresses</a>
            </div>
        </div>`,

    'men.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Topwear</h4>
                <a href="men.html">T-Shirts & Polos</a>
                <a href="men.html">Casual Shirts</a>
                <a href="men.html">Formal Shirts</a>
                <a href="men.html">Sweatshirts & Hoodies</a>
                <a href="men.html">Jackets & Coats</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Bottomwear</h4>
                <a href="men.html">Jeans</a>
                <a href="men.html">Casual Trousers</a>
                <a href="men.html">Formal Trousers</a>
                <a href="men.html">Track Pants & Joggers</a>
                <a href="men.html">Shorts</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Suits & Tailoring</h4>
                <a href="men.html">Tuxedos & Suits</a>
                <a href="men.html">Blazers</a>
                <a href="men.html">Nehru Jackets</a>
                <a href="men.html">Waistcoats</a>
                <a href="men.html">Ethno-Western Sets</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Innerwear & Lounge</h4>
                <a href="men.html">Boxers & Briefs</a>
                <a href="men.html">Vests</a>
                <a href="men.html">Nightwear & Pyjamas</a>
                <a href="men.html">Thermal Wear</a>
                <a href="men.html">Lounge Sets</a>
            </div>
        </div>`,

    'kids.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Boys Clothing</h4>
                <a href="kids.html">T-Shirts & Shirts</a>
                <a href="kids.html">Jeans & Trousers</a>
                <a href="kids.html">Ethnic Wear</a>
                <a href="kids.html">Jackets & Sweaters</a>
                <a href="kids.html">Nightwear</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Girls Clothing</h4>
                <a href="kids.html">Dresses & Frocks</a>
                <a href="kids.html">Tops & Tees</a>
                <a href="kids.html">Skirts & Shorts</a>
                <a href="kids.html">Ethnic Lehenga Choli</a>
                <a href="kids.html">Party Gowns</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Baby Care & Apparel</h4>
                <a href="kids.html">Onesies & Rompers</a>
                <a href="kids.html">Baby Sleepsuits</a>
                <a href="kids.html">Baby Care Gift Sets</a>
                <a href="kids.html">Soft Blankets</a>
                <a href="kids.html">Bibs & Accessories</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Toys & Games</h4>
                <a href="kids.html">Educational Toys</a>
                <a href="kids.html">Soft Toys & Teddy Bears</a>
                <a href="kids.html">Action Figures</a>
                <a href="kids.html">Board Games & Puzzles</a>
                <a href="kids.html">Remote Control Toys</a>
            </div>
        </div>`,

    'home-kitchen.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Bedding & Linen</h4>
                <a href="home-kitchen.html">Bedsheets & Pillow Covers</a>
                <a href="home-kitchen.html">Duvet Covers & Quilts</a>
                <a href="home-kitchen.html">Bed Covers & Blankets</a>
                <a href="home-kitchen.html">Pillows & Protectors</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Living Room Decor</h4>
                <a href="home-kitchen.html">Door & Window Curtains</a>
                <a href="home-kitchen.html">Cushion Covers</a>
                <a href="home-kitchen.html">Wall Art & Paintings</a>
                <a href="home-kitchen.html">Rugs & Carpets</a>
                <a href="home-kitchen.html">Decorative Showpieces</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Kitchen & Dining</h4>
                <a href="home-kitchen.html">Cookware Sets</a>
                <a href="home-kitchen.html">Dinnerware & Plates</a>
                <a href="home-kitchen.html">Storage Containers</a>
                <a href="home-kitchen.html">Glasses & Drinkware</a>
                <a href="home-kitchen.html">Cutlery & Utensils</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Bath & Utility</h4>
                <a href="home-kitchen.html">Bath Towels & Hand Towels</a>
                <a href="home-kitchen.html">Bath Mats & Accessories</a>
                <a href="home-kitchen.html">Home Organizers</a>
                <a href="home-kitchen.html">Laundry Baskets</a>
                <a href="home-kitchen.html">Aroma Diffusers & Candles</a>
            </div>
        </div>`,

    'beauty.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Makeup</h4>
                <a href="beauty.html">Lipstick & Lip Gloss</a>
                <a href="beauty.html">Foundations & Concealers</a>
                <a href="beauty.html">Mascaras & Eyeliners</a>
                <a href="beauty.html">Blush & Highlighters</a>
                <a href="beauty.html">Nail Polish</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Skincare</h4>
                <a href="beauty.html">Face Moisturizers</a>
                <a href="beauty.html">Face Serums & Oils</a>
                <a href="beauty.html">Sunscreen & Sun Protection</a>
                <a href="beauty.html">Cleansers & Face Wash</a>
                <a href="beauty.html">Sheet Masks & Scrubs</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Haircare</h4>
                <a href="beauty.html">Shampoos & Conditioners</a>
                <a href="beauty.html">Hair Oils & Treatments</a>
                <a href="beauty.html">Hair Serums</a>
                <a href="beauty.html">Hair Color</a>
                <a href="beauty.html">Hair Styling Appliances</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Fragrances & Grooming</h4>
                <a href="beauty.html">Perfumes & EDP</a>
                <a href="beauty.html">Deodorants & Body Mists</a>
                <a href="beauty.html">Men's Grooming & Trimmers</a>
                <a href="beauty.html">Beard Care Oils</a>
                <a href="beauty.html">Bath & Body Wash</a>
            </div>
        </div>`,

    'jewellery.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Fashion Jewellery</h4>
                <a href="jewellery.html">Earrings & Studs</a>
                <a href="jewellery.html">Necklace Sets & Chokers</a>
                <a href="jewellery.html">Bangles & Bracelets</a>
                <a href="jewellery.html">Rings & Statement Pieces</a>
                <a href="jewellery.html">Anklets & Toe Rings</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Silver & Fine Jewellery</h4>
                <a href="jewellery.html">925 Sterling Silver</a>
                <a href="jewellery.html">Gold Plated Jewellery</a>
                <a href="jewellery.html">Kundan & Pearl Sets</a>
                <a href="jewellery.html">Zircon & Crystal Collections</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Sunglasses & Belts</h4>
                <a href="jewellery.html">Aviator & Wayfarer Sunglasses</a>
                <a href="jewellery.html">Cat Eye & Oversized Frames</a>
                <a href="jewellery.html">Leather Belts</a>
                <a href="jewellery.html">Scarves & Stoles</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Men's Accessories</h4>
                <a href="jewellery.html">Leather Wallets</a>
                <a href="jewellery.html">Cufflinks & Tie Pins</a>
                <a href="jewellery.html">Men's Chains & Bracelets</a>
                <a href="jewellery.html">Caps & Hats</a>
                <a href="jewellery.html">Keychains & Card Holders</a>
            </div>
        </div>`,

    'bags.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Women Footwear</h4>
                <a href="bags.html">Heels & Stilettos</a>
                <a href="bags.html">Flat Sandals & Slides</a>
                <a href="bags.html">Wedges & Platforms</a>
                <a href="bags.html">Casual Sneakers</a>
                <a href="bags.html">Ethnic Juttis & Mojaris</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Men Footwear</h4>
                <a href="bags.html">Formal Leather Shoes</a>
                <a href="bags.html">Casual Sneakers</a>
                <a href="bags.html">Loafers & Slip-Ons</a>
                <a href="bags.html">Sports & Running Shoes</a>
                <a href="bags.html">Sandals & Floaters</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Handbags & Clutches</h4>
                <a href="bags.html">Tote Bags</a>
                <a href="bags.html">Sling & Crossbody Bags</a>
                <a href="bags.html">Shoulder Handbags</a>
                <a href="bags.html">Party Clutches & Potlis</a>
                <a href="bags.html">Wallets & Wristlets</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Travel & Luggage</h4>
                <a href="bags.html">Trolley Bags & Suitcases</a>
                <a href="bags.html">Backpacks & Rucksacks</a>
                <a href="bags.html">Duffle Bags</a>
                <a href="bags.html">Laptop Bags & Sleeves</a>
                <a href="bags.html">Travel Accessories</a>
            </div>
        </div>`,

    'electronics.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Mobiles & Accessories</h4>
                <a href="electronics.html">Smartphones</a>
                <a href="electronics.html">Mobile Cases & Covers</a>
                <a href="electronics.html">Screen Protectors</a>
                <a href="electronics.html">Fast Power Banks</a>
                <a href="electronics.html">Wireless Chargers</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Audio & Wearables</h4>
                <a href="electronics.html">True Wireless Earbuds (TWS)</a>
                <a href="electronics.html">Over-Ear Headphones</a>
                <a href="electronics.html">Bluetooth Speakers</a>
                <a href="electronics.html">Smart Fitness Bands</a>
                <a href="electronics.html">Calling Smartwatches</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Laptops & Computing</h4>
                <a href="electronics.html">Laptops & Ultrabooks</a>
                <a href="electronics.html">Wireless Keyboards & Mice</a>
                <a href="electronics.html">Laptop Sleeves & Backpacks</a>
                <a href="electronics.html">External Hard Drives & SSDs</a>
                <a href="electronics.html">USB Hubs & Adapters</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Smart Home & Gadgets</h4>
                <a href="electronics.html">Smart Security Cameras</a>
                <a href="electronics.html">Smart LED Bulbs & Plugs</a>
                <a href="electronics.html">Streaming Media Players</a>
                <a href="electronics.html">Gaming Accessories</a>
                <a href="electronics.html">Cable Organizers</a>
            </div>
        </div>`,

    'watches.html': `
        <div class="mega-menu">
            <div class="mega-column">
                <h4 class="mega-title">Men Watches</h4>
                <a href="watches.html">Analog Wristwatches</a>
                <a href="watches.html">Chronograph Watches</a>
                <a href="watches.html">Automatic Mechanical</a>
                <a href="watches.html">Digital & Sports Watches</a>
                <a href="watches.html">Genuine Leather Strap</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Women Watches</h4>
                <a href="watches.html">Dress & Party Watches</a>
                <a href="watches.html">Rose Gold Watches</a>
                <a href="watches.html">Bracelet Style Watches</a>
                <a href="watches.html">Minimalist Dials</a>
                <a href="watches.html">Diamond & Crystal Accent</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Smartwatches</h4>
                <a href="watches.html">Full Touch Smartwatches</a>
                <a href="watches.html">Fitness & Health Trackers</a>
                <a href="watches.html">Bluetooth Calling Watches</a>
                <a href="watches.html">AMOLED Display Watches</a>
                <a href="watches.html">Hybrid Watches</a>
            </div>
            <div class="mega-column">
                <h4 class="mega-title">Luxury & Care</h4>
                <a href="watches.html">Swiss Made Luxury</a>
                <a href="watches.html">Limited Edition Timepieces</a>
                <a href="watches.html">Designer Collections</a>
                <a href="watches.html">Watch Organizers & Boxes</a>
                <a href="watches.html">Stainless Steel Straps</a>
            </div>
        </div>`
};

const categoryNavConfig = [
    { label: 'Popular', href: 'popular.html' },
    { label: 'Kurti, Saree & Lehenga', href: 'ethnic.html' },
    { label: 'Women Western', href: 'women-western.html' },
    { label: 'Men', href: 'men.html' },
    { label: 'Kids & Toys', href: 'kids.html' },
    { label: 'Home & Kitchen', href: 'home-kitchen.html' },
    { label: 'Beauty & Health', href: 'beauty.html' },
    { label: 'Jewellery & Accessories', href: 'jewellery.html' },
    { label: 'Bags & Footwear', href: 'bags.html' },
    { label: 'Electronics & Mobiles', href: 'electronics.html' },
    { label: 'Watches', href: 'watches.html' }
];

function generateHeader(currentFilename) {
    const navItemsHTML = categoryNavConfig.map(cat => {
        const isActive = currentFilename === cat.href ? ' active' : '';
        const megaMenu = megaMenusHTML[cat.href] || '';
        return `                    <li class="nav-cat-item has-megamenu">
                        <a href="${cat.href}" class="nav-cat-link${isActive}">${cat.label}</a>
${megaMenu}
                    </li>`;
    }).join('\n');

    return `    <!-- Header -->
    <header class="site-header">
        <div class="top-header-bar">
            <div class="header-container">
                <a href="index.html" class="brand-logo"><span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>ABLE</a>
                <div class="header-search">
                    <i class="bi bi-search search-icon"></i>
                    <input type="text" placeholder="Search for products, brands and more" class="search-input">
                </div>
                <div class="header-actions">
                    <a href="#" class="header-action-btn"><i class="bi bi-person"></i><span>Profile</span></a>
                    <a href="#" class="header-action-btn"><i class="bi bi-heart"></i><span>Wishlist</span></a>
                    <a href="cart.html" class="header-action-btn cart-btn"><i class="bi bi-bag"></i><span>Bag</span><span class="cart-count">1</span></a>
                </div>
            </div>
        </div>

        <nav class="category-navbar">
            <div class="category-nav-container">
                <ul class="nav-categories">
${navItemsHTML}
                </ul>
            </div>
        </nav>
    </header>`;
}

const targetFiles = [
    'index.html', 'men.html', 'women-western.html', 'kids.html', 'bags.html', 
    'beauty.html', 'electronics.html', 'ethnic.html', 'home-kitchen.html', 
    'jewellery.html', 'watches.html', 'popular.html', 'wishlist.html',
    'product-bag.html', 'product-beauty.html', 'product-electronics.html',
    'product-ethnic.html', 'product-home-kitchen.html', 'product-jewellery.html',
    'product-kids.html', 'product-men.html', 'product-popular.html',
    'product-watches.html', 'product-women-western.html'
];

targetFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    const headerRegex = /<header\s+class="site-header">[\s\S]*?<\/header>/i;
    
    if (headerRegex.test(content)) {
        const newHeader = generateHeader(file);
        content = content.replace(headerRegex, newHeader);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated mega menu content in ${file}`);
    }
});
