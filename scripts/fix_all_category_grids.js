const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\22cy0\\Desktop\\Ecommerece';

const categories = [
    {
        file: 'men.html',
        crumb: 'Loungewear Men',
        title: 'Loungewear Men',
        count: '6921 items',
        activeNav: 'Men',
        brands: ['Pepe Jeans', 'Van Heusen Innerwear', 'Levis', 'XYXX', 'U.S. Polo Assn.', 'MACK JONNEY', 'Lux Cozi', 'Sweet Dreams', 'Trendyol', 'TRIPR'],
        titles: [
            'Drawstring Lounge Shorts', 'Men Mid-Rise Lounge Shorts', 'Men Swiftdry Lounge Shorts',
            'Solid Lounge T-shirt', 'Relaxed Fit Lounge Pants', 'Men Striped Cotton Lounge Shorts',
            'Men Printed Cotton Lounge Pants', 'Solid Cotton Lounge Shorts', 'Men Knit Lounge Track Pants', 'Men Straight Lounge Pants'
        ],
        images: [
            'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 799', orig: '', disc: '' },
            { curr: 'Rs. 599', orig: 'Rs. 1199', disc: '(50% OFF)' },
            { curr: 'Rs. 755', orig: 'Rs. 1199', disc: '(37% OFF)' },
            { curr: 'Rs. 395', orig: 'Rs. 649', disc: '(39% OFF)' },
            { curr: 'Rs. 973', orig: 'Rs. 1299', disc: '(25% OFF)' },
            { curr: 'Rs. 699', orig: 'Rs. 1399', disc: '(50% OFF)' },
            { curr: 'Rs. 606', orig: 'Rs. 1599', disc: '(62% OFF)' },
            { curr: 'Rs. 405', orig: 'Rs. 810', disc: '(50% OFF)' },
            { curr: 'Rs. 333', orig: 'Rs. 999', disc: '(66% OFF)' },
            { curr: 'Rs. 327', orig: 'Rs. 1090', disc: '(70% OFF)' }
        ]
    },
    {
        file: 'women-western.html',
        crumb: 'Women Western Wear',
        title: 'Women Western Wear',
        count: '8420 items',
        activeNav: 'Women Western',
        brands: ['VERVE LUXE', 'URBAN CHIC', 'MAISON LUXE', 'MANGO', 'ZARA', 'ONLY', 'VERO MODA', 'H&M', 'FOREVER 21', 'LEVIS'],
        titles: [
            'Floral Tiered Midi Sundress', 'High-Waist Wide-Leg Denim Jeans', 'Satin Asymmetric Slip Midi Dress',
            'Oversized Structured Blazer', 'Cropped Ribbed Knit Top', 'Pleated A-Line Mini Skirt',
            'Ruched Bodycon Party Dress', 'Linen Blend Casual Trousers', 'Denim Trucker Jacket', 'Printed Co-ord Set'
        ],
        images: [
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 1899', orig: 'Rs. 3799', disc: '(50% OFF)' },
            { curr: 'Rs. 2199', orig: 'Rs. 4399', disc: '(50% OFF)' },
            { curr: 'Rs. 1499', orig: 'Rs. 2999', disc: '(50% OFF)' },
            { curr: 'Rs. 3299', orig: 'Rs. 6599', disc: '(50% OFF)' },
            { curr: 'Rs. 799', orig: 'Rs. 1599', disc: '(50% OFF)' },
            { curr: 'Rs. 1199', orig: 'Rs. 2399', disc: '(50% OFF)' },
            { curr: 'Rs. 2499', orig: 'Rs. 4999', disc: '(50% OFF)' },
            { curr: 'Rs. 1699', orig: 'Rs. 3399', disc: '(50% OFF)' },
            { curr: 'Rs. 2799', orig: 'Rs. 5599', disc: '(50% OFF)' },
            { curr: 'Rs. 1999', orig: 'Rs. 3999', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'kids.html',
        crumb: 'Kids & Toys',
        title: 'Kids & Toys Collection',
        count: '5120 items',
        activeNav: 'Kids & Toys',
        brands: ['MOTHERCARE', 'HOPSCOTCH', 'LEGO', 'BARBIE', 'MAX KIDS', 'ALLEN SOLLY KIDS', 'US POLO KIDS', 'MARVEL', 'DISNEY'],
        titles: [
            'Boys Cotton Printed T-Shirt & Shorts Set', 'Girls Party Wear Frock Dress', 'Infant Soft Organic Cotton Romper',
            'Remote Control High Speed Stunt Car', 'Educational Wooden Building Blocks', 'Girls Denim Dungaree Set',
            'Boys Casual Checkered Shirt', 'Soft Plush Bear Toy', 'Kids Superhero Printed Hoodie', 'Kids Smart Learning Tablet'
        ],
        images: [
            'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1558060370-d644479be6f7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1566454544259-f4b94c96758f?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 699', orig: 'Rs. 1399', disc: '(50% OFF)' },
            { curr: 'Rs. 999', orig: 'Rs. 1999', disc: '(50% OFF)' },
            { curr: 'Rs. 499', orig: 'Rs. 999', disc: '(50% OFF)' },
            { curr: 'Rs. 1299', orig: 'Rs. 2599', disc: '(50% OFF)' },
            { curr: 'Rs. 899', orig: 'Rs. 1799', disc: '(50% OFF)' },
            { curr: 'Rs. 1199', orig: 'Rs. 2399', disc: '(50% OFF)' },
            { curr: 'Rs. 799', orig: 'Rs. 1599', disc: '(50% OFF)' },
            { curr: 'Rs. 399', orig: 'Rs. 799', disc: '(50% OFF)' },
            { curr: 'Rs. 899', orig: 'Rs. 1799', disc: '(50% OFF)' },
            { curr: 'Rs. 1499', orig: 'Rs. 2999', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'bags.html',
        crumb: 'Bags & Footwear',
        title: 'Bags & Footwear Collection',
        count: '6340 items',
        activeNav: 'Bags & Footwear',
        brands: ['MAISON SABLE', 'ALDO', 'CHARLES & KEITH', 'STEVE MADDEN', 'MICHAEL KORS', 'COACH', 'NINE WEST', 'PUMA', 'NIKE', 'ADIDAS'],
        titles: [
            'Structured Calfskin Tote Bag', 'Saffiano Leather Crossbody Sling', 'Handcrafted Penny Loafers',
            'Quilted Chain Shoulder Bag', 'Pointed Toe Stiletto Heels', 'Monogram Travel Duffle Bag',
            'Vegan Leather Minimalist Backpack', 'Ankle Strap Block Heel Sandals', 'Casual Leather Sneakers', 'Crocodile Embossed Evening Clutch'
        ],
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 4999', orig: 'Rs. 9999', disc: '(50% OFF)' },
            { curr: 'Rs. 2499', orig: 'Rs. 4999', disc: '(50% OFF)' },
            { curr: 'Rs. 3999', orig: 'Rs. 7999', disc: '(50% OFF)' },
            { curr: 'Rs. 2999', orig: 'Rs. 5999', disc: '(50% OFF)' },
            { curr: 'Rs. 3499', orig: 'Rs. 6999', disc: '(50% OFF)' },
            { curr: 'Rs. 5999', orig: 'Rs. 11999', disc: '(50% OFF)' },
            { curr: 'Rs. 1999', orig: 'Rs. 3999', disc: '(50% OFF)' },
            { curr: 'Rs. 2299', orig: 'Rs. 4599', disc: '(50% OFF)' },
            { curr: 'Rs. 2799', orig: 'Rs. 5599', disc: '(50% OFF)' },
            { curr: 'Rs. 1799', orig: 'Rs. 3599', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'beauty.html',
        crumb: 'Beauty & Health',
        title: 'Beauty & Skincare Collection',
        count: '4890 items',
        activeNav: 'Beauty & Health',
        brands: ['MAC', 'CLINIQUE', 'ESTEE LAUDER', 'LOREAL', 'MAYBELLINE', 'THE BODY SHOP', 'FOREST ESSENTIALS', 'KAMA AYURVEDA', 'NYKAA', 'LAKME'],
        titles: [
            'French Rose Eau De Parfum 100ml', 'Velvet Matte Liquid Lipstick', 'Vitamin C Brightening Face Serum',
            'Cold-Pressed Argan Hair Mask', 'Jade Facial Massage Roller', 'Hydrating Hyaluronic Acid Cream',
            'Volumizing Waterproof Mascara', 'Organic Herbal Shampoo 500ml', 'Glow Hydrating Facial Mist', 'Full Coverage Matte Foundation'
        ],
        images: [
            'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1608248597261-83325805435b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 2499', orig: 'Rs. 4999', disc: '(50% OFF)' },
            { curr: 'Rs. 899', orig: 'Rs. 1799', disc: '(50% OFF)' },
            { curr: 'Rs. 1299', orig: 'Rs. 2599', disc: '(50% OFF)' },
            { curr: 'Rs. 799', orig: 'Rs. 1599', disc: '(50% OFF)' },
            { curr: 'Rs. 599', orig: 'Rs. 1199', disc: '(50% OFF)' },
            { curr: 'Rs. 999', orig: 'Rs. 1999', disc: '(50% OFF)' },
            { curr: 'Rs. 699', orig: 'Rs. 1399', disc: '(50% OFF)' },
            { curr: 'Rs. 499', orig: 'Rs. 999', disc: '(50% OFF)' },
            { curr: 'Rs. 399', orig: 'Rs. 799', disc: '(50% OFF)' },
            { curr: 'Rs. 1199', orig: 'Rs. 2399', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'electronics.html',
        crumb: 'Electronics & Mobiles',
        title: 'Electronics & Mobiles Store',
        count: '7250 items',
        activeNav: 'Electronics & Mobiles',
        brands: ['APPLE', 'SAMSUNG', 'SONY', 'BOSE', 'ONEPLUS', 'JBL', 'REALME', 'BOAT', 'NOISE', 'AMAZFIT'],
        titles: [
            'Noise Cancelling Wireless Headphones', '5G Flagship Smartphone 256GB', 'Portable Waterproof Bluetooth Speaker',
            'AMOLED Display Smartwatch with GPS', 'True Wireless Earbuds with ANC', '4K Ultra HD TV Streaming Stick',
            'Fast 65W GaN Charger Adapter', 'RGB Mechanical Gaming Keyboard', 'Ergonomic Wireless Optical Mouse', '10000mAh Dual USB Powerbank'
        ],
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1609592424074-1296c0989f66?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 4999', orig: 'Rs. 9999', disc: '(50% OFF)' },
            { curr: 'Rs. 24999', orig: 'Rs. 34999', disc: '(28% OFF)' },
            { curr: 'Rs. 1999', orig: 'Rs. 3999', disc: '(50% OFF)' },
            { curr: 'Rs. 3499', orig: 'Rs. 6999', disc: '(50% OFF)' },
            { curr: 'Rs. 2299', orig: 'Rs. 4599', disc: '(50% OFF)' },
            { curr: 'Rs. 2999', orig: 'Rs. 4999', disc: '(40% OFF)' },
            { curr: 'Rs. 1299', orig: 'Rs. 2599', disc: '(50% OFF)' },
            { curr: 'Rs. 2499', orig: 'Rs. 4999', disc: '(50% OFF)' },
            { curr: 'Rs. 899', orig: 'Rs. 1799', disc: '(50% OFF)' },
            { curr: 'Rs. 999', orig: 'Rs. 1999', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'ethnic.html',
        crumb: 'Kurti, Saree & Lehenga',
        title: 'Ethnic Wear Collection',
        count: '9150 items',
        activeNav: 'Kurti, Saree & Lehenga',
        brands: ['BIBA', 'W', 'AURELIA', 'LIBAS', 'MANYAVAR', 'ANOUK', 'FABINDIA', 'SANGRIA', 'KALINI', 'MITERA'],
        titles: [
            'Banarasi Silk Heavy Woven Saree', 'Anarkali Printed Cotton Kurta Set', 'Embroidered Silk Bridal Lehenga Choli',
            'Straight Fit Rayon Kurti', 'Sharara Suit Set with Dupatta', 'Readymade Designer Blouse',
            'Cotton Silk Dress Material', 'Chiffon Partywear Saree', 'Ethnic Printed Skirt & Top Set', 'Pakistani Style Lawn Suit'
        ],
        images: [
            'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1597983073493-88cd35cf03b0?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 2999', orig: 'Rs. 5999', disc: '(50% OFF)' },
            { curr: 'Rs. 1499', orig: 'Rs. 2999', disc: '(50% OFF)' },
            { curr: 'Rs. 7999', orig: 'Rs. 15999', disc: '(50% OFF)' },
            { curr: 'Rs. 799', orig: 'Rs. 1599', disc: '(50% OFF)' },
            { curr: 'Rs. 2199', orig: 'Rs. 4399', disc: '(50% OFF)' },
            { curr: 'Rs. 899', orig: 'Rs. 1799', disc: '(50% OFF)' },
            { curr: 'Rs. 1199', orig: 'Rs. 2399', disc: '(50% OFF)' },
            { curr: 'Rs. 1899', orig: 'Rs. 3799', disc: '(50% OFF)' },
            { curr: 'Rs. 1399', orig: 'Rs. 2799', disc: '(50% OFF)' },
            { curr: 'Rs. 1699', orig: 'Rs. 3399', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'home-kitchen.html',
        crumb: 'Home & Kitchen',
        title: 'Home & Kitchen Collection',
        count: '3890 items',
        activeNav: 'Home & Kitchen',
        brands: ['HOME CENTRE', 'PURE HOME', 'URBAN LADDER', 'PRESTIGE', 'HAWKINS', 'MILTON', 'BOMBAY DYEING', 'SPACES', 'PHILIPS', 'WONDERCHEF'],
        titles: [
            'Enameled Cast Iron Dutch Oven Cookware', 'Wall Art Framed Canvas Print Set', 'Ceramic Handcrafted Flower Vase',
            '400 TC Pure Egyptian Cotton Sheet Set', 'All-Season Quilted Comforter Blanket', 'Stainless Steel Multi-Chef Cookware',
            'Aroma Essential Oil Diffuser', 'Airtight Borosilicate Glass Storage Jars', 'Handmade Woolen Area Rug', 'Smart App Controlled Air Purifier'
        ],
        images: [
            'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 3499', orig: 'Rs. 6999', disc: '(50% OFF)' },
            { curr: 'Rs. 1299', orig: 'Rs. 2599', disc: '(50% OFF)' },
            { curr: 'Rs. 799', orig: 'Rs. 1599', disc: '(50% OFF)' },
            { curr: 'Rs. 2499', orig: 'Rs. 4999', disc: '(50% OFF)' },
            { curr: 'Rs. 1999', orig: 'Rs. 3999', disc: '(50% OFF)' },
            { curr: 'Rs. 2799', orig: 'Rs. 5599', disc: '(50% OFF)' },
            { curr: 'Rs. 899', orig: 'Rs. 1799', disc: '(50% OFF)' },
            { curr: 'Rs. 699', orig: 'Rs. 1399', disc: '(50% OFF)' },
            { curr: 'Rs. 4599', orig: 'Rs. 9199', disc: '(50% OFF)' },
            { curr: 'Rs. 6999', orig: 'Rs. 13999', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'jewellery.html',
        crumb: 'Jewellery & Accessories',
        title: 'Jewellery & Accessories Collection',
        count: '4120 items',
        activeNav: 'Jewellery & Accessories',
        brands: ['SABLE JEWELS', 'Tanishq', 'Zaveri Pearls', 'Voylla', 'Shining Diva', 'Giva', 'Melorra', 'Ray-Ban', 'Oakley', 'Gucci Accessories'],
        titles: [
            '24K Gold Kundan Bridal Choker Set', 'Sterling Silver Solitaire Pendant Chain', 'Pearl Drop Meenakari Jhumka Earrings',
            'Polarized UV Protection Aviator Sunglasses', 'Crystal Tennis Bracelet', 'Pure Silk Printed Wrap Scarf',
            'Emerald Cut Statement Ring', 'Reversible Genuine Leather Belt', 'Gold Plated Traditional Kada Bangles', 'Bridal Matha Patti Headband'
        ],
        images: [
            'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1611591475140-42f4943f6630?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 4999', orig: 'Rs. 9999', disc: '(50% OFF)' },
            { curr: 'Rs. 1499', orig: 'Rs. 2999', disc: '(50% OFF)' },
            { curr: 'Rs. 899', orig: 'Rs. 1799', disc: '(50% OFF)' },
            { curr: 'Rs. 2999', orig: 'Rs. 5999', disc: '(50% OFF)' },
            { curr: 'Rs. 1299', orig: 'Rs. 2599', disc: '(50% OFF)' },
            { curr: 'Rs. 999', orig: 'Rs. 1999', disc: '(50% OFF)' },
            { curr: 'Rs. 799', orig: 'Rs. 1599', disc: '(50% OFF)' },
            { curr: 'Rs. 1199', orig: 'Rs. 2399', disc: '(50% OFF)' },
            { curr: 'Rs. 1699', orig: 'Rs. 3399', disc: '(50% OFF)' },
            { curr: 'Rs. 1899', orig: 'Rs. 3799', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'watches.html',
        crumb: 'Watches',
        title: 'Timepieces & Watches Collection',
        count: '3450 items',
        activeNav: 'Watches',
        brands: ['CHRONO LUXE', 'SEIKO', 'FOSSIL', 'CASIO', 'TISSOT', 'TITAN', 'TIMEX', 'EMPORIO ARMANI', 'TOMMY HILFIGER', 'DANIEL WELLINGTON'],
        titles: [
            'Automatic Stainless Steel Chronograph Watch', 'Vintage Hand-Winding Skeleton Mechanical Watch', 'Minimalist Leather Strap Slim Quartz Watch',
            'Diver 300M Automatic Sapphire Watch', 'Rose Gold Ladies Diamond Bezel Watch', 'Solar Powered Tactical Outdoor Sports Watch',
            'Moonphase Automatic Leather Watch', 'All-Black Digital Shock Resistant Sports Watch', 'Ultra Thin Stainless Steel Mesh Watch', 'Curved Case Sapphire Dress Watch'
        ],
        images: [
            'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 8999', orig: 'Rs. 17999', disc: '(50% OFF)' },
            { curr: 'Rs. 6499', orig: 'Rs. 12999', disc: '(50% OFF)' },
            { curr: 'Rs. 3999', orig: 'Rs. 7999', disc: '(50% OFF)' },
            { curr: 'Rs. 12999', orig: 'Rs. 25999', disc: '(50% OFF)' },
            { curr: 'Rs. 4999', orig: 'Rs. 9999', disc: '(50% OFF)' },
            { curr: 'Rs. 3499', orig: 'Rs. 6999', disc: '(50% OFF)' },
            { curr: 'Rs. 9999', orig: 'Rs. 19999', disc: '(50% OFF)' },
            { curr: 'Rs. 2499', orig: 'Rs. 4999', disc: '(50% OFF)' },
            { curr: 'Rs. 2999', orig: 'Rs. 5999', disc: '(50% OFF)' },
            { curr: 'Rs. 7499', orig: 'Rs. 14999', disc: '(50% OFF)' }
        ]
    },
    {
        file: 'popular.html',
        crumb: 'Popular Deals',
        title: 'Popular Best Sellers & Deals',
        count: '10240 items',
        activeNav: 'Popular',
        brands: ['ROADSTER', 'HRX', 'ANOUK', 'HIGHLANDER', 'MAST & HARBOUR', 'HERE & NOW', 'DRESSBERRY', 'MANIAC', 'KOTTY', 'TAZO'],
        titles: [
            'Oversized Pure Cotton Heavyweight Tee', 'Casual Slim Fit Denim Shirt', 'Floral Print Satin Midi Gown',
            'Automatic Stainless Chronograph Watch', '24K Kundan Choker Necklace Set', 'Structured Calfskin Leather Tote Bag',
            'Noise Cancelling Wireless Earbuds', 'Banarasi Heavy Woven Silk Saree', 'Running Sports Sneakers', 'Vintage Wash Denim Trucker Jacket'
        ],
        images: [
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'
        ],
        prices: [
            { curr: 'Rs. 499', orig: 'Rs. 1499', disc: '(66% OFF)' },
            { curr: 'Rs. 699', orig: 'Rs. 1999', disc: '(65% OFF)' },
            { curr: 'Rs. 1299', orig: 'Rs. 3599', disc: '(64% OFF)' },
            { curr: 'Rs. 4999', orig: 'Rs. 9999', disc: '(50% OFF)' },
            { curr: 'Rs. 1499', orig: 'Rs. 3999', disc: '(62% OFF)' },
            { curr: 'Rs. 2499', orig: 'Rs. 5999', disc: '(58% OFF)' },
            { curr: 'Rs. 1999', orig: 'Rs. 4999', disc: '(60% OFF)' },
            { curr: 'Rs. 1899', orig: 'Rs. 4999', disc: '(62% OFF)' },
            { curr: 'Rs. 1299', orig: 'Rs. 3299', disc: '(60% OFF)' },
            { curr: 'Rs. 899', orig: 'Rs. 2999', disc: '(70% OFF)' }
        ]
    }
];

function generateCategoryPage(cat) {
    const navItems = [
        { name: 'Popular', href: 'popular.html' },
        { name: 'Kurti, Saree & Lehenga', href: 'ethnic.html' },
        { name: 'Women Western', href: 'women-western.html' },
        { name: 'Men', href: 'men.html' },
        { name: 'Kids & Toys', href: 'kids.html' },
        { name: 'Home & Kitchen', href: 'home-kitchen.html' },
        { name: 'Beauty & Health', href: 'beauty.html' },
        { name: 'Jewellery & Accessories', href: 'jewellery.html' },
        { name: 'Bags & Footwear', href: 'bags.html' },
        { name: 'Electronics & Mobiles', href: 'electronics.html' },
        { name: 'Watches', href: 'watches.html' }
    ];

    let navListHTML = navItems.map(item => {
        const isActive = item.name === cat.activeNav ? 'active' : '';
        return `                    <li class="nav-cat-item has-megamenu">
                        <a href="${item.href}" class="nav-cat-link ${isActive}">${item.name}</a>
                    </li>`;
    }).join('\n');

    let cardsHTML = '';
    for (let i = 0; i < 10; i++) {
        const id = i + 1;
        const brand = cat.brands[i % cat.brands.length];
        const title = cat.titles[i % cat.titles.length];
        const img = cat.images[i % cat.images.length];
        const price = cat.prices[i % cat.prices.length];
        const ratingVal = (4.0 + (i % 7) * 0.1).toFixed(1);
        const ratingCount = i % 2 === 0 ? `${(1.2 + i * 2.5).toFixed(1)}k` : `${150 + i * 80}`;
        const hasAd = (i === 0 || i === 1 || i === 4 || i === 5 || i === 8);
        const hasStock = (i === 2 || i === 8);
        const prodDetailFile = `product-${cat.file.replace('.html', '')}.html?id=${id}`;

        let sizesLine = (cat.file === 'men.html' && i === 0) ? '<div class="product-sizes-text" style="font-size: 13px; color: #535766; font-weight: 600; margin-bottom: 2px;">Sizes: XL</div>\n' : '';

        cardsHTML += `                <!-- Card ${id} -->
                <div class="product-card">
                    <div class="product-image-wrapper">
                        ${hasAd ? '<span class="myntra-ad-badge">AD</span>' : ''}
                        ${!(cat.file === 'men.html' && i === 0) ? `<div class="myntra-rating-pill">
                            <span>${ratingVal}</span> <i class="bi bi-star-fill star-icon"></i> <span class="rating-pipe">|</span> <span class="rating-num-count">${ratingCount}</span>
                        </div>` : ''}
                        <a href="${prodDetailFile}">
                            <img src="${img}" class="product-img" alt="${title}">
                        </a>
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
                        </div>
                    </div>
                    <div class="product-info">
                        ${sizesLine}
                        ${!(cat.file === 'men.html' && i === 0) ? `<span class="product-brand">${brand}</span>
                        <h3 class="product-name"><a href="${prodDetailFile}">${title}</a></h3>` : ''}
                        <div class="product-price">
                            <span class="current-price">${price.curr}</span>
                            ${price.orig ? `<span class="original-price">${price.orig}</span>` : ''}
                            ${price.disc ? `<span class="discount-badge">${price.disc}</span>` : ''}
                        </div>
                        ${hasStock ? '<div class="myntra-only-few-left">Only Few Left!</div>' : ''}
                    </div>
                </div>\n`;
    }

    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <title>${cat.title} - Buy Online in India | SABLE</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/${cat.file.replace('.html', '.css')}">
    <link rel="stylesheet" href="css/cart-fly-animation.css">
</head>
<body>

    <!-- Header matching exact Myntra Navbar style with SABLE logo -->
    <header class="site-header">
        <div class="top-header-bar">
            <div class="header-container">
                <a href="index.html" class="brand-logo"><span style="color: #ff3f6c; font-weight: 900; margin-right: 3px;">S</span>SABLE</a>
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
${navListHTML}
                </ul>
            </div>
        </nav>
    </header>

    <!-- Header Section / Breadcrumb & Title -->
    <section class="category-banner-section">
        <div class="category-breadcrumb">
            <a href="index.html">Home</a>
            <span class="sep">/</span>
            <a href="${cat.file}">Clothing</a>
            <span class="sep">/</span>
            <span class="active-crumb">${cat.crumb}</span>
        </div>
        <div class="category-header-title-row">
            <h1 class="category-page-title">${cat.title}</h1>
            <span class="category-showing-count">- ${cat.count}</span>
        </div>
    </section>

    <!-- Main Layout -->
    <section class="category-page-layout">
        <aside class="category-sidebar">
            <div class="filter-group">
                <h4 class="sidebar-section-title">CATEGORIES</h4>
                <ul class="filter-options-list">
                    <li><label class="filter-checkbox-label"><span><input type="checkbox" checked> ${cat.crumb}</span><span class="filter-count-myntra">(3420)</span></label></li>
                    <li><label class="filter-checkbox-label"><span><input type="checkbox"> Premium Edit</span><span class="filter-count-myntra">(2150)</span></label></li>
                    <li><label class="filter-checkbox-label"><span><input type="checkbox"> Bestsellers</span><span class="filter-count-myntra">(1890)</span></label></li>
                    <li><label class="filter-checkbox-label"><span><input type="checkbox"> New Arrivals</span><span class="filter-count-myntra">(1420)</span></label></li>
                </ul>
            </div>

            <div class="filter-group">
                <h4 class="sidebar-section-title">BRAND <i class="bi bi-search sidebar-search-icon"></i></h4>
                <ul class="filter-options-list">
                    ${cat.brands.slice(0, 8).map(b => `<li><label class="filter-checkbox-label"><span><input type="checkbox"> ${b}</span><span class="filter-count-myntra">(${Math.floor(200 + Math.random() * 800)})</span></label></li>`).join('\n                    ')}
                </ul>
                <div style="margin-top: 10px;"><a href="#" style="color: #ff3f6c; font-size: 13px; font-weight: 700; text-decoration: none;">+ 192 more</a></div>
            </div>

            <div class="filter-group">
                <h4 class="sidebar-section-title">PRICE</h4>
                <ul class="filter-options-list">
                    <li><label class="filter-checkbox-label"><span><input type="checkbox"> Rs. 149 to Rs. 2062</span></label></li>
                    <li><label class="filter-checkbox-label"><span><input type="checkbox"> Rs. 2062 to Rs. 3975</span></label></li>
                    <li><label class="filter-checkbox-label"><span><input type="checkbox"> Rs. 3975 to Rs. 5888</span></label></li>
                </ul>
            </div>
        </aside>

        <main class="category-main-content">
            <!-- 5 Columns Product Grid matching exact screenshot -->
            <div class="products-grid">
${cardsHTML}
            </div>

            <div class="pagination-wrapper">
                <a href="#" class="page-btn active">1</a>
                <a href="#" class="page-btn">2</a>
                <a href="#" class="page-btn">3</a>
                <a href="#" class="page-btn next-btn">Next <i class="bi bi-chevron-right"></i></a>
            </div>
        </main>
    </section>

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

    return fullHTML;
}

categories.forEach(cat => {
    const filePath = path.join(baseDir, cat.file);
    const pageHTML = generateCategoryPage(cat);
    fs.writeFileSync(filePath, pageHTML, 'utf8');
    console.log(`Rebuilt clean category page with SABLE logo: ${cat.file}`);
});

console.log('ALL CATEGORY PAGES REBUILT WITH PERFECT SABLE NAVBAR LOGO & 5-COLUMN GRID!');
