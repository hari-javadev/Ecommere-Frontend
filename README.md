# TechVoltMart - Modern E-Commerce Web Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](#)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap&logoColor=white)](#)

A feature-rich, high-performance, and responsive multi-category e-commerce web platform inspired by modern fashion and lifestyle marketplaces. Built with clean semantic HTML5, modern CSS3 styling, vanilla JavaScript (ES6+), and Bootstrap 5 components.

---

## 🌟 Key Features

- **🛍️ Multi-Category Catalog**: Extensive shopping sections including:
  - Men's Apparel & Loungewear
  - Women's Ethnic & Festive Wear
  - Kids & Toys
  - Home & Kitchen Essentials
  - Beauty & Health
  - Jewellery & Luxury Accessories
  - Bags & Footwear
  - Electronics & Mobiles
  - Watches & Wearables
- **🔍 Smart Navigation & Search**: Dynamic responsive header with active link highlights, multi-category mega menus, sticky navigation, and real-time product search.
- **🖼️ Interactive Product Detail Pages**: High-resolution image galleries with multi-angle previews, thumbnail selectors, zoom capabilities, size selectors, customer reviews, and related product recommendations.
- **❤️ Persistent Wishlist System**: Add and remove items seamlessly with real-time wishlist counter badge synchronization and one-click "Move to Bag" capability.
- **🛒 Interactive Shopping Bag & Fly-to-Cart Animation**: Smooth visual fly-to-cart particle animations, real-time quantity adjustments, price recalculations, coupon code discounts (`LUXE50`, `TECHVOLTMART10`), and gift wrapping options.
- **💳 Complete 3-Step Checkout Flow**:
  1. **Shopping Bag**: Order review and price summary
  2. **Delivery Address**: Delivery address selection and form validation
  3. **Payment**: Multi-option payment gateway interface (UPI, Cards, Net Banking, COD) with instant order confirmation modal
- **🔐 User Authentication**: Sleek Login and Registration pages featuring password visibility toggles, client-side validation, and feedback modals.
- **🧩 Reusable Component Architecture**: Modular navbar and footer components dynamically loaded via `js/components.js` with seamless local `file://` protocol fallback and Web Components support.
- **📱 Fully Responsive Design**: Mobile-first architecture optimized for smartphones, tablets, and high-resolution desktop displays.

---

## 📁 Repository Structure

```text
├── assets/
│   └── images/              # Optimized product photography, banners, and icons
├── components/
│   ├── navbar.html          # Reusable header navigation snippet
│   └── footer.html          # Reusable site footer snippet
├── css/
│   ├── style.css            # Global styling, theme variables, and shared rules
│   ├── cart-fly-animation.css # Fly-to-cart floating animation effects
│   ├── myntra-checkout.css  # Checkout funnel layout & stepper styling
│   └── product-*.css        # Dedicated styles for individual product & category views
├── js/
│   ├── main.js              # Global interactions, shortcuts, and component init
│   ├── components.js        # Dynamic Navbar & Footer component loader
│   ├── cart.js              # Shopping cart arithmetic, quantity handlers & coupons
│   ├── myntra-checkout.js   # Stepper progress, address selection & payment simulation
│   ├── cart-fly-animation.js # Particle trajectory animation engine
│   └── [category].js        # Category-specific filtering, sorting, and grid data
├── scripts/                 # Utility scripts for batch updates and maintenance
├── index.html               # Main landing / home page
├── [category].html          # Category catalog pages (men, ethnic, beauty, etc.)
├── product-[category].html  # Single product detail pages
├── cart.html                # Shopping cart page
├── checkout-address.html    # Checkout address selection step
├── checkout-payment.html    # Checkout payment method step
├── checkout.html            # Combined single-page checkout
├── wishlist.html            # Saved wishlist items page
├── login.html               # Account login portal
├── register.html            # Account creation portal
├── account.html             # Profile & user management
├── sitemap.xml              # Search engine sitemap
├── robots.txt               # SEO indexing directives
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/hari-javadev/Ecommere-Frontend.git
cd Ecommere-Frontend
```

### 2. Run Locally
You can open `index.html` directly in any modern browser:
```bash
# Using Python's built-in HTTP server:
python -m http.server 8000

# Or using Node.js:
npx serve .

# Or open directly in your default browser:
start index.html
```
Then navigate to `http://localhost:8000/` in your web browser.

---

## 🌐 Deploy to GitHub Pages

1. Go to your repository on GitHub: `https://github.com/hari-javadev/Ecommere-Frontend`.
2. Click on **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select Branch: `main` and Folder: `/(root)`, then click **Save**.
5. Your website will be live in minutes at: `https://hari-javadev.github.io/Ecommere-Frontend/`

---

## 🛠️ Built With

- **HTML5 & CSS3**
- **JavaScript (Vanilla ES6+)**
- **Bootstrap 5.3.3**
- **Bootstrap Icons 1.11.3**
- **Google Fonts (DM Sans & Assistant)**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
