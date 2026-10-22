const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\22cy0\\Desktop\\Ecommerece';

// 1. Fix all HTML files for logo text (SABLE with pink S, not SSABLE)
const files = fs.readdirSync(baseDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix double S logo
    content = content.replace(/<span style="color:\s*#ff3f6c;\s*font-weight:\s*900;\s*margin-right:\s*3px;">S<\/span>\s*SABLE/gi, '<span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>ABLE');
    content = content.replace(/<span style="color:\s*#ff3f6c;\s*font-weight:\s*900;\s*margin-right:\s*3px;">M<\/span>\s*SABLE/gi, '<span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>ABLE');
    content = content.replace(/class="brand-logo">[\s\S]*?SABLE<\/a>/gi, 'class="brand-logo"><span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>ABLE</a>');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated clean SABLE logo in ${file}`);
});

// 2. Rebuild index.html clean layout
const indexFilePath = path.join(baseDir, 'index.html');

const cleanIndexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <title>SABLE — Premium Fashion Online Store</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/cart-fly-animation.css">
</head>
<body>

    <!-- Header -->
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
                    <li class="nav-cat-item has-megamenu"><a href="popular.html" class="nav-cat-link">Popular</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="ethnic.html" class="nav-cat-link">Kurti, Saree & Lehenga</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="women-western.html" class="nav-cat-link">Women Western</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="men.html" class="nav-cat-link">Men</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="kids.html" class="nav-cat-link">Kids & Toys</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="home-kitchen.html" class="nav-cat-link">Home & Kitchen</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="beauty.html" class="nav-cat-link">Beauty & Health</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="jewellery.html" class="nav-cat-link">Jewellery & Accessories</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="bags.html" class="nav-cat-link">Bags & Footwear</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="electronics.html" class="nav-cat-link">Electronics & Mobiles</a></li>
                    <li class="nav-cat-item has-megamenu"><a href="watches.html" class="nav-cat-link">Watches</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <!-- Hero Carousel Section -->
        <section class="hero-section">
            <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="hero-slide-wrapper">
                            <img src="assets/images/techvolt-web-development-banner-fashion-women.png" class="hero-bg-img" alt="Modern Minimalist Elegance" onerror="this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=80'">
                            <div class="hero-overlay"></div>
                            <div class="hero-content-container">
                                <div class="hero-content">
                                    <span class="hero-badge">NEW SEASON ARRIVALS</span>
                                    <h1 class="hero-title">Modern Minimalist<br>Elegance</h1>
                                    <p class="hero-description">Discover timeless silhouettes crafted from premium sustainable fabrics designed for everyday luxury.</p>
                                    <div class="hero-btn-group">
                                        <a href="women-western.html" class="btn-hero-primary">Shop Collection <i class="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Categories Circle Section -->
        <section class="category-section">
            <div class="category-container">
                <a href="men.html" class="category-item"><div class="category-circle"><img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80" alt="Men"></div><span>Men</span></a>
                <a href="women-western.html" class="category-item"><div class="category-circle"><img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=300&q=80" alt="Women"></div><span>Women</span></a>
                <a href="bags.html" class="category-item"><div class="category-circle"><img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80" alt="Bags"></div><span>Bags</span></a>
                <a href="watches.html" class="category-item"><div class="category-circle"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80" alt="Watches"></div><span>Watches</span></a>
                <a href="jewellery.html" class="category-item"><div class="category-circle"><img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80" alt="Accessories"></div><span>Accessories</span></a>
                <a href="electronics.html" class="category-item"><div class="category-circle"><img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" alt="Mobiles"></div><span>Mobiles</span></a>
            </div>
        </section>

        <!-- Grand Category Festival promo section -->
        <section class="myntra-promo-section">
            <h2 class="myntra-promo-title">Grand Category Festival — Top Offers</h2>
            <div class="myntra-promo-grid">
                <a href="watches.html" class="myntra-promo-card promo-theme-coral">
                    <div class="myntra-promo-img-wrap"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" class="myntra-promo-img" alt="Watches"></div>
                    <div class="myntra-promo-info"><div class="myntra-promo-cat">Watches & Wearables</div><div class="myntra-promo-discount">UP TO 80% OFF</div><div class="myntra-promo-shop">Shop Now</div></div>
                </a>
                <a href="women-western.html" class="myntra-promo-card promo-theme-peach">
                    <div class="myntra-promo-img-wrap"><img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80" class="myntra-promo-img" alt="Dresses"></div>
                    <div class="myntra-promo-info"><div class="myntra-promo-cat">Sleepwear & Dresses</div><div class="myntra-promo-discount">30-70% OFF</div><div class="myntra-promo-shop">Shop Now</div></div>
                </a>
                <a href="men.html" class="myntra-promo-card promo-theme-purple">
                    <div class="myntra-promo-img-wrap"><img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80" class="myntra-promo-img" alt="Workwear"></div>
                    <div class="myntra-promo-info"><div class="myntra-promo-cat">Workwear & Shirts</div><div class="myntra-promo-discount">40-70% OFF</div><div class="myntra-promo-shop">Shop Now</div></div>
                </a>
                <a href="popular.html" class="myntra-promo-card promo-theme-mint">
                    <div class="myntra-promo-img-wrap"><img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" class="myntra-promo-img" alt="Accessories"></div>
                    <div class="myntra-promo-info"><div class="myntra-promo-cat">Eyewear & Accessories</div><div class="myntra-promo-discount">UP TO 80% OFF</div><div class="myntra-promo-shop">Shop Now</div></div>
                </a>
                <a href="women-western.html" class="myntra-promo-card promo-theme-gold">
                    <div class="myntra-promo-img-wrap"><img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80" class="myntra-promo-img" alt="Styles"></div>
                    <div class="myntra-promo-info"><div class="myntra-promo-cat">Casual Western Styles</div><div class="myntra-promo-discount">40-80% OFF</div><div class="myntra-promo-shop">Shop Now</div></div>
                </a>
            </div>
        </section>

        <!-- 5 Columns Product Grid Section -->
        <section class="products-section" style="padding: 40px 4%;">
            <div class="section-header text-center mb-4">
                <h2 class="section-title" style="font-weight: 800; font-size: 24px;">Trending Luxury Collections</h2>
                <p class="section-subtitle" style="color: #7e818c; font-size: 14px;">Handpicked premium styles with express delivery & free returns</p>
            </div>

            <div class="products-grid">
                <!-- Card 1 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <span class="myntra-ad-badge">AD</span>
                        <div class="myntra-rating-pill"><span>4.9</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">1.4k</span></div>
                        <a href="product-ethnic.html"><img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Lehenga Choli"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">SABLE HERITAGE</span>
                        <h3 class="product-name"><a href="product-ethnic.html">Royal Zari Velvet Lehenga Choli</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 4,999</span> <span class="original-price">Rs. 9,999</span> <span class="discount-badge">(50% OFF)</span></div>
                        <div class="myntra-only-few-left">Only Few Left!</div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <div class="myntra-rating-pill"><span>4.5</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">3.2k</span></div>
                        <a href="product-men.html"><img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Italian Tuxedo"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">SABLE TAILORED</span>
                        <h3 class="product-name"><a href="product-men.html">Italian Super 120s Slim-Fit Tuxedo</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 6,499</span> <span class="original-price">Rs. 12,999</span> <span class="discount-badge">(50% OFF)</span></div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <div class="myntra-rating-pill"><span>4.8</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">2.1k</span></div>
                        <a href="product-ethnic.html"><img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Silk Saree"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">ROYAL WEAVES</span>
                        <h3 class="product-name"><a href="product-ethnic.html">Pure Silk Kanjeevaram Banarasi Saree</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 3,799</span> <span class="original-price">Rs. 7,599</span> <span class="discount-badge">(50% OFF)</span></div>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <span class="myntra-ad-badge">AD</span>
                        <div class="myntra-rating-pill"><span>4.6</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">890</span></div>
                        <a href="product-jewellery.html"><img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Choker Set"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">SABLE JEWELS</span>
                        <h3 class="product-name"><a href="product-jewellery.html">24K Gold Plated Kundan Choker Set</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 1,899</span> <span class="original-price">Rs. 3,999</span> <span class="discount-badge">(52% OFF)</span></div>
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <div class="myntra-rating-pill"><span>4.7</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">4.5k</span></div>
                        <a href="product-bag.html"><img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Tote Bag"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">MAISON SABLE</span>
                        <h3 class="product-name"><a href="product-bag.html">Structured Calfskin Monogram Tote Bag</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 2,999</span> <span class="original-price">Rs. 5,999</span> <span class="discount-badge">(50% OFF)</span></div>
                    </div>
                </div>

                <!-- Card 6 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <span class="myntra-ad-badge">AD</span>
                        <div class="myntra-rating-pill"><span>4.8</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">1.9k</span></div>
                        <a href="product-watches.html"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Chronograph Watch"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">CHRONO LUXE</span>
                        <h3 class="product-name"><a href="product-watches.html">Automatic Skeleton Chronograph Watch</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 8,999</span> <span class="original-price">Rs. 17,999</span> <span class="discount-badge">(50% OFF)</span></div>
                    </div>
                </div>

                <!-- Card 7 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <div class="myntra-rating-pill"><span>4.4</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">2.8k</span></div>
                        <a href="product-women-western.html"><img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Satin Gown"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">VERVE LUXE</span>
                        <h3 class="product-name"><a href="product-women-western.html">Satin Midi Evening Gown & Dress</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 3,299</span> <span class="original-price">Rs. 6,999</span> <span class="discount-badge">(52% OFF)</span></div>
                    </div>
                </div>

                <!-- Card 8 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <div class="myntra-rating-pill"><span>4.3</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">950</span></div>
                        <a href="product-beauty.html"><img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Face Serum"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">GLOW BOTANICALS</span>
                        <h3 class="product-name"><a href="product-beauty.html">Vitamin C Radiance Face Serum 30ml</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 699</span> <span class="original-price">Rs. 1,399</span> <span class="discount-badge">(50% OFF)</span></div>
                    </div>
                </div>

                <!-- Card 9 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <span class="myntra-ad-badge">AD</span>
                        <div class="myntra-rating-pill"><span>4.7</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">6.1k</span></div>
                        <a href="product-electronics.html"><img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Smartphone"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">TECH SABLE</span>
                        <h3 class="product-name"><a href="product-electronics.html">5G Flagship Smartphone 256GB ROM</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 24,999</span> <span class="original-price">Rs. 34,999</span> <span class="discount-badge">(28% OFF)</span></div>
                        <div class="myntra-only-few-left">Only Few Left!</div>
                    </div>
                </div>

                <!-- Card 10 -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <div class="myntra-rating-pill"><span>4.5</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">3.8k</span></div>
                        <a href="product-men.html"><img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80" class="product-img" alt="Sweatshirt"></a>
                        <div class="myntra-image-hover-overlay">
                            <div class="myntra-dots-line"><span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                            <button class="myntra-card-wishlist-btn" onclick="toggleCardWishlist(this)"><i class="bi bi-heart me-1"></i> <span>WISHLIST</span></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">SABLE URBAN</span>
                        <h3 class="product-name"><a href="product-men.html">Heavyweight Cotton Oversized Sweatshirt</a></h3>
                        <div class="product-price"><span class="current-price">Rs. 1,499</span> <span class="original-price">Rs. 2,999</span> <span class="discount-badge">(50% OFF)</span></div>
                    </div>
                </div>

            </div>
        </section>
    </main>

    <!-- Floating Sticky Elements -->

    <button class="myntra-floating-bell-btn" title="Notifications">
        <i class="bi bi-bell-fill"></i>
    </button>

    <!-- Footer -->
    <footer class="site-footer" style="background: #FAFAFA; border-top: 1px solid #EAEAEC; padding: 30px 4%;">
        <div class="footer-bottom-bar" style="text-align: center;">
            <p class="copyright-text" style="color: #94969F; font-size: 13px; margin: 0;">&copy; 2026 <strong>SABLE Online Store.</strong> All Rights Reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/cart-fly-animation.js"></script>
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
</body>
</html>`;

fs.writeFileSync(indexFilePath, cleanIndexHTML, 'utf8');
console.log('REBUILT CLEAN INDEX.HTML WITH SABLE LOGO AND 5-COLUMN PRODUCT GRID!');
