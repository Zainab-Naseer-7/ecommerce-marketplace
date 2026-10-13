/**
 * VALENCE LUXE — MASTER APPLICATION LOGIC & REACTIVE ENGINE
 * Standalone Client-Side Architecture (No Build Tools Required)
 */

// ==========================================================================
// 01. SEED DATA: 24 CURATED LUXURY MASTERPIECES ACROSS 8 DOMAINS
// ==========================================================================

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Apex Horizon Titanium Studio Master ANC",
    category: "Audio",
    seller: "Apex Luxe Audio",
    sellerVerified: true,
    price: 649.00,
    oldPrice: 799.00,
    rating: 4.98,
    reviewsCount: 124,
    stock: 8,
    isFlashSale: true,
    isCurated: true,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Machined from aerospace-grade solid grade-5 titanium. Features dual 50mm beryllium electrodynamic drivers tuned specifically for uncompressed master recordings with adaptive 4-microphone inverse phase cancellation.",
    specs: [
      "Chassis: Solid Grade-5 Brushed Titanium",
      "Driver: 50mm Pure Beryllium Acoustic Dome",
      "Frequency Response: 4Hz – 48,000Hz (Hi-Res Certified)",
      "Battery Reserve: 54 Hours continuous playback",
      "Weight: 318 grams with magnetic lambskin cushions"
    ],
    colors: ["Space Black", "Titanium Raw", "Midnight Navy"],
    reviews: [
      { user: "Marcus V.", rating: 5, date: "2 days ago", text: "Unquestionably the cleanest soundstage I've ever experienced outside of a master mastering booth." },
      { user: "Elena Rostova", rating: 5, date: "1 week ago", text: "The tactile feel of the titanium dials and zero-pressure earcups is pure luxury." }
    ]
  },
  {
    id: 2,
    name: "BeoSculpt Architectural Monolith Speaker",
    category: "Audio",
    seller: "Kobenhavn Design Studio",
    sellerVerified: true,
    price: 3400.00,
    oldPrice: 3850.00,
    rating: 4.95,
    reviewsCount: 42,
    stock: 4,
    isFlashSale: false,
    isCurated: true,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A monumental geometric sound sculpture crafted from anodized pearl-blasted aluminum and Kvadrat acoustic wool. Calibrates to room acoustics via ultrasonic beamforming.",
    specs: [
      "Material: Pearl-Blasted Anodized Aluminum & Wool",
      "Amplification: 1,500W Class-D Tri-Amplified",
      "Connectivity: AirPlay 2, Spotify Hi-Fi, Roon Ready, Optical",
      "Origin: Handmade in Struer, Denmark"
    ],
    colors: ["Brushed Silver", "Champagne Gold", "Smoked Anthracite"],
    reviews: [
      { user: "Lord Alistair", rating: 5, date: "3 weeks ago", text: "Fills my 800 sq ft salon with effortless, crystalline clarity." }
    ]
  },
  {
    id: 3,
    name: "Vanguard Celestial Chrono Flyback",
    category: "Fashion",
    seller: "Vanguard Chrono Lab",
    sellerVerified: true,
    price: 1890.00,
    oldPrice: 2200.00,
    rating: 4.99,
    reviewsCount: 88,
    stock: 5,
    isFlashSale: true,
    isCurated: true,
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Swiss automatic column-wheel chronograph with meteorite dial slice and sapphire crystal caseback. Features instantaneous flyback reset for precision timing.",
    specs: [
      "Caliber: Cal. V-902 Automatic Chronometer (COSC Certified)",
      "Dial: Genuine Muonionalusta Iron Meteorite",
      "Case: 41mm 904L Marine-Grade Stainless Steel",
      "Power Reserve: 68 Hours",
      "Water Resistance: 100 meters / 10 ATM"
    ],
    colors: ["Meteorite Grey", "Obsidian Sunray", "Midnight Blue"],
    reviews: [
      { user: "Julian Thorne", rating: 5, date: "Yesterday", text: "The finish on the chamfered bevels rivals watches at 5x this price." }
    ]
  },
  {
    id: 4,
    name: "Leica Monochrom Heritage 47MP Rangefinder",
    category: "Electronics",
    seller: "Apex Luxe Audio",
    sellerVerified: true,
    price: 8995.00,
    oldPrice: null,
    rating: 4.97,
    reviewsCount: 31,
    stock: 3,
    isFlashSale: false,
    isCurated: true,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Dedicated pure black-and-white full-frame sensor engineered without color interpolation filters for uncompromising dynamic range and tonal gradation.",
    specs: [
      "Sensor: 47.3 Megapixel B&W Full-Frame CMOS",
      "Body: Solid Brass Top & Bottom Plates, Matte Black Chrome",
      "Viewfinder: Optical 0.73x Mechanical Split-Image Rangefinder",
      "Origin: Wetzlar, Germany"
    ],
    colors: ["Matte Black Chrome", "Raw Brass Patina"],
    reviews: [
      { user: "Henri K.", rating: 5, date: "1 month ago", text: "The tonal transition from shadow to highlight is painterly." }
    ]
  },
  {
    id: 5,
    name: "Cybernetic Obsidian Liquid-Cooled Battlestation",
    category: "Gaming",
    seller: "Atelier Cybernetic",
    sellerVerified: true,
    price: 4850.00,
    oldPrice: 5400.00,
    rating: 4.96,
    reviewsCount: 64,
    stock: 6,
    isFlashSale: true,
    isCurated: true,
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Hard-line electro-plated copper loop watercooling with flagship GPU and overclocked architecture encased in smoked tempered glass chassis.",
    specs: [
      "GPU: NVIDIA RTX 4090 24GB Liquid-Cooled Master Edition",
      "CPU: Intel Core i9-14900KS 6.2GHz Overclocked",
      "Memory: 64GB DDR5-7200MHz Titanium Heatsink",
      "Storage: 4TB Gen5 NVMe (14,000 MB/s read)"
    ],
    colors: ["Stealth Obsidian", "Cryo White"],
    reviews: [
      { user: "Devon S.", rating: 5, date: "5 days ago", text: "Zero thermal throttling even under 4K path-traced rendering." }
    ]
  },
  {
    id: 6,
    name: "Architectural Travertine Cantilever Dining Table",
    category: "Home",
    seller: "Kobenhavn Design Studio",
    sellerVerified: true,
    price: 4200.00,
    oldPrice: 4600.00,
    rating: 4.92,
    reviewsCount: 19,
    stock: 2,
    isFlashSale: false,
    isCurated: false,
    images: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Monolithic Roman Travertine honed and hand-beveled in Tuscany. The asymmetric cantilever base creates an illusion of gravitational defiance.",
    specs: [
      "Dimensions: 260cm x 110cm x 75cm (Seats 10)",
      "Stone: Italian Classico Roman Travertine (Unfilled honed)",
      "Weight: 340 kg (Includes White Glove Assembly)"
    ],
    colors: ["Warm Ivory Travertine", "Nero Marquina Marble"],
    reviews: [
      { user: "Charlotte DuPont", rating: 5, date: "2 weeks ago", text: "The centerpiece of our dining room. Truly an art installation." }
    ]
  },
  {
    id: 7,
    name: "Full-Grain Saddle Leather Weekender Duffle",
    category: "Fashion",
    seller: "Vanguard Chrono Lab",
    sellerVerified: true,
    price: 780.00,
    oldPrice: 950.00,
    rating: 4.94,
    reviewsCount: 95,
    stock: 15,
    isFlashSale: false,
    isCurated: true,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Vegetable-tanned Bavarian bridle leather with solid brass hardware. Ages into a lustrous caramel patina with each journey.",
    specs: [
      "Leather: 2.2mm Full-Grain Vegetable-Tanned Bridle",
      "Hardware: Solid Sand-Cast English Brass",
      "Capacity: 45 Liters (IATA Cabin Compliant)",
      "Warranty: Lifetime Provenance Guarantee"
    ],
    colors: ["Cognac Saddle", "Espresso Dark", "Midnight Black"],
    reviews: [
      { user: "George C.", rating: 5, date: "3 weeks ago", text: "Smells divine and fits effortlessly in the first-class overhead compartment." }
    ]
  },
  {
    id: 8,
    name: "Curved 45-Inch 240Hz Spatial OLED Canvas",
    category: "Gaming",
    seller: "Atelier Cybernetic",
    sellerVerified: true,
    price: 1699.00,
    oldPrice: 1999.00,
    rating: 4.97,
    reviewsCount: 78,
    stock: 7,
    isFlashSale: true,
    isCurated: true,
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop&q=80"
    ],
    description: "800R dramatic curvature with 0.03ms pixel response time, true 10-bit color, and anti-glare micro-texture coating for total spatial immersion.",
    specs: [
      "Panel: 45-inch 21:9 UWQHD QD-OLED (3440 x 1440)",
      "Refresh: 240Hz with G-SYNC Ultimate & FreeSync Premium Pro",
      "Peak Luminance: 1,300 nits (HDR TrueBlack 400)",
      "Ports: 2x HDMI 2.1, DisplayPort 1.4, 90W USB-C PD"
    ],
    colors: ["Space Anthracite", "Silver Frost"],
    reviews: [
      { user: "Ryan K.", rating: 5, date: "6 days ago", text: "Inky blacks and instantaneous motion clarity. Nothing else compares." }
    ]
  },
  {
    id: 9,
    name: "Pure Botanical Truffle Radiance Elixir",
    category: "Beauty",
    seller: "Apex Luxe Audio",
    sellerVerified: true,
    price: 340.00,
    oldPrice: null,
    rating: 4.89,
    reviewsCount: 56,
    stock: 22,
    isFlashSale: false,
    isCurated: false,
    images: [
      "https://images.unsplash.com/photo-1608248597359-59325983756b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Formulated with rare Alba white truffle extract, 24K colloidal gold, and marine peptide bio-ferment for cellular restructuring and luminous hydration.",
    specs: [
      "Volume: 50ml / 1.7 fl oz in UV-protective violet glass",
      "Key Bio-Actives: Alba White Truffle, 24K Bio-Gold, Squalane",
      "Free of: Silicones, Parabens, Synthetic Fragrance",
      "Formulation: Hand-batched in Grasse, France"
    ],
    colors: ["Golden Glass"],
    reviews: [
      { user: "Madeleine V.", rating: 5, date: "1 month ago", text: "Restores skin radiance in 72 hours. Worth every single penny." }
    ]
  },
  {
    id: 10,
    name: "Forged Carbon Supercar Key Fob Case",
    category: "Automotive",
    seller: "Atelier Cybernetic",
    sellerVerified: true,
    price: 295.00,
    oldPrice: 350.00,
    rating: 4.91,
    reviewsCount: 43,
    stock: 18,
    isFlashSale: false,
    isCurated: false,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80"
    ],
    description: "High-pressure autoclave forged carbon fiber with titanium micro-screws, offering indestructible protection with zero signal attenuation.",
    specs: [
      "Material: Toray Autoclave Forged Carbon Fiber",
      "Screws: Grade-5 Titanium with PVD Gold Accents",
      "Compatibility: Universal High-End Key Blades"
    ],
    colors: ["Forged Marble Carbon", "Gloss Twill Carbon"],
    reviews: [
      { user: "Liam Sterling", rating: 5, date: "2 weeks ago", text: "Matches the carbon package on my 911 GT3 RS impeccably." }
    ]
  },
  {
    id: 11,
    name: "Architectural Wabi-Sabi Ceramic Tea Set",
    category: "Home",
    seller: "Kobenhavn Design Studio",
    sellerVerified: true,
    price: 360.00,
    oldPrice: 420.00,
    rating: 4.96,
    reviewsCount: 38,
    stock: 9,
    isFlashSale: false,
    isCurated: false,
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Hand-thrown coarse stoneware with natural wood-ash glaze fired in an ascending dragon kiln for 5 continuous days in Kyoto, Japan.",
    specs: [
      "Set Includes: 1 Teapot with Brass Handle, 4 Cups, 1 Bamboo Tray",
      "Technique: Anagama wood-fired at 1,320°C",
      "Origin: Kyoto Master Artisan Kiln"
    ],
    colors: ["Charcoal Ash", "Unglazed Terracotta"],
    reviews: [
      { user: "Kenzo M.", rating: 5, date: "1 week ago", text: "Each cup has its own unique constellation of ash crystals." }
    ]
  },
  {
    id: 12,
    name: "Swiss Minimalist Ceramic Automatic Diver",
    category: "Fashion",
    seller: "Vanguard Chrono Lab",
    sellerVerified: true,
    price: 2450.00,
    oldPrice: 2800.00,
    rating: 4.98,
    reviewsCount: 61,
    stock: 4,
    isFlashSale: true,
    isCurated: true,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Monobloc zirconium oxide ceramic case impervious to scratches. Features helium escape valve and ceramic luminous dive bezel.",
    specs: [
      "Case: 42mm High-Tech Matte Black Zirconia Ceramic",
      "Movement: Automatic 28,800 vph with Silicon Balance Spring",
      "Water Resistance: 300m / 1,000 ft",
      "Strap: FKM Vulcanized Rubber with Deployant Clasp"
    ],
    colors: ["Matte Black Ceramic", "Arctic White Ceramic"],
    reviews: [
      { user: "Sébastien L.", rating: 5, date: "4 days ago", text: "Wore it diving in Corsica. Legibility underwater is astounding." }
    ]
  }
];

// 4 Verified Marketplace Sellers
const INITIAL_SELLERS = [
  {
    id: "seller-1",
    name: "Apex Luxe Audio",
    location: "Zurich, Switzerland",
    verified: true,
    rating: 4.98,
    ordersCompleted: 2480,
    onTimeDelivery: "99.9%",
    badge: "Master Acoustic Lab",
    avatar: "🛡️"
  },
  {
    id: "seller-2",
    name: "Kobenhavn Design Studio",
    location: "Copenhagen, Denmark",
    verified: true,
    rating: 4.95,
    ordersCompleted: 1840,
    onTimeDelivery: "99.6%",
    badge: "Architectural Craftsman",
    avatar: "🛋️"
  },
  {
    id: "seller-3",
    name: "Vanguard Chrono Lab",
    location: "Geneva, Switzerland",
    verified: true,
    rating: 4.99,
    ordersCompleted: 3120,
    onTimeDelivery: "100%",
    badge: "Haute Horlogerie",
    avatar: "⏱️"
  },
  {
    id: "seller-4",
    name: "Atelier Cybernetic",
    location: "Tokyo, Japan",
    verified: true,
    rating: 4.97,
    ordersCompleted: 1490,
    onTimeDelivery: "99.4%",
    badge: "Cybernetic Foundry",
    avatar: "⚡"
  }
];

// Active Platform Promo Coupons
const INITIAL_COUPONS = [
  { code: "VALENCE20", type: "percent", value: 20, minSpend: 0, desc: "20% off all marketplace acquisitions" },
  { code: "SUPER100", type: "fixed", value: 100, minSpend: 500, desc: "$100 off orders over $500" },
  { code: "VIPGOLD", type: "percent", value: 15, minSpend: 0, desc: "15% off for Patron Noir members" }
];

// ==========================================================================
// 02. CENTRAL REACTIVE STATE STORE WITH LOCALSTORAGE PERSISTENCE
// ==========================================================================

const State = {
  products: [],
  sellers: [],
  coupons: [],
  cart: [],
  wishlist: new Set(),
  compareList: new Set(),
  orders: [],
  appliedCoupon: null,
  activeShippingTier: "standard",
  currentView: "marketplace",
  activeCategory: "all",
  searchQuery: "",
  theme: "dark",
  currentCheckoutStep: 1,
  selectedProductForModal: null,

  init() {
    // Load products with fallback
    const savedProducts = localStorage.getItem("valence_products");
    this.products = savedProducts ? JSON.parse(savedProducts) : [...INITIAL_PRODUCTS];

    // Load sellers
    const savedSellers = localStorage.getItem("valence_sellers");
    this.sellers = savedSellers ? JSON.parse(savedSellers) : [...INITIAL_SELLERS];

    // Load coupons
    const savedCoupons = localStorage.getItem("valence_coupons");
    this.coupons = savedCoupons ? JSON.parse(savedCoupons) : [...INITIAL_COUPONS];

    // Load cart
    const savedCart = localStorage.getItem("valence_cart");
    this.cart = savedCart ? JSON.parse(savedCart) : [];

    // Load wishlist
    const savedWishlist = localStorage.getItem("valence_wishlist");
    this.wishlist = savedWishlist ? new Set(JSON.parse(savedWishlist)) : new Set([1, 3]);

    // Load compare
    const savedCompare = localStorage.getItem("valence_compare");
    this.compareList = savedCompare ? new Set(JSON.parse(savedCompare)) : new Set();

    // Load orders
    const savedOrders = localStorage.getItem("valence_orders");
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders);
    } else {
      // Seed 1 active order for realistic patron experience
      this.orders = [
        {
          id: "VLX-89421-US",
          date: "Today, 09:14 AM",
          status: "In Flight (Dispatched)",
          progressPct: 65,
          carrier: "DHL Express Priority",
          trackingNumber: "DHL-9842109841",
          items: [
            { id: 1, name: "Apex Horizon Titanium Studio Master ANC", price: 649.00, qty: 1, seller: "Apex Luxe Audio", image: INITIAL_PRODUCTS[0].images[0] }
          ],
          total: 704.16,
          address: "740 Park Avenue, Apt 14B, New York, NY 10021"
        }
      ];
      this.saveOrders();
    }

    // Load theme
    const savedTheme = localStorage.getItem("valence_theme") || "dark";
    this.theme = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon();

    this.saveProducts();
    this.saveSellers();
    this.saveCoupons();
  },

  saveProducts() {
    localStorage.setItem("valence_products", JSON.stringify(this.products));
  },
  saveSellers() {
    localStorage.setItem("valence_sellers", JSON.stringify(this.sellers));
  },
  saveCoupons() {
    localStorage.setItem("valence_coupons", JSON.stringify(this.coupons));
  },
  saveCart() {
    localStorage.setItem("valence_cart", JSON.stringify(this.cart));
    this.updateBadges();
  },
  saveWishlist() {
    localStorage.setItem("valence_wishlist", JSON.stringify(Array.from(this.wishlist)));
    this.updateBadges();
  },
  saveCompare() {
    localStorage.setItem("valence_compare", JSON.stringify(Array.from(this.compareList)));
    this.updateBadges();
  },
  saveOrders() {
    localStorage.setItem("valence_orders", JSON.stringify(this.orders));
  },

  updateBadges() {
    // Cart badge
    const totalCartItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCountEl = document.getElementById("cart-count-badge");
    const cartDrawerCountEl = document.getElementById("cart-drawer-items-count");
    if (cartCountEl) cartCountEl.textContent = totalCartItems;
    if (cartDrawerCountEl) cartDrawerCountEl.textContent = `(${totalCartItems} Items)`;

    // Wishlist badge
    const wishCountEl = document.getElementById("wishlist-count-badge");
    const customerWishCountEl = document.getElementById("c-wishlist-count");
    if (wishCountEl) wishCountEl.textContent = this.wishlist.size;
    if (customerWishCountEl) customerWishCountEl.textContent = this.wishlist.size;

    // Compare badge
    const compCountEl = document.getElementById("compare-count-badge");
    if (compCountEl) compCountEl.textContent = this.compareList.size;

    // Nav Subtotal
    const cartTotal = this.calculateCartFinancials().grandTotal;
    const navTotalEl = document.getElementById("cart-nav-total");
    if (navTotalEl) navTotalEl.textContent = `$${cartTotal.toFixed(2)}`;
  },

  calculateCartFinancials() {
    let subtotal = 0;
    const sellerSet = new Set();

    this.cart.forEach(cartItem => {
      const prod = this.products.find(p => p.id === cartItem.id);
      if (prod) {
        subtotal += prod.price * cartItem.qty;
        sellerSet.add(prod.seller);
      }
    });

    // Discount Calculation
    let discount = 0;
    if (this.appliedCoupon) {
      if (this.appliedCoupon.type === "percent") {
        discount = (subtotal * this.appliedCoupon.value) / 100;
      } else if (this.appliedCoupon.type === "fixed") {
        discount = Math.min(this.appliedCoupon.value, subtotal);
      }
    }

    // Shipping: $0 for standard complimentary, $45 priority, $120 white-glove
    let shippingFee = 0;
    if (this.activeShippingTier === "priority") shippingFee = 45.00;
    if (this.activeShippingTier === "white-glove") shippingFee = 120.00;

    // Tax (8.5%)
    const taxableAmount = Math.max(0, subtotal - discount);
    const tax = taxableAmount * 0.085;
    const grandTotal = taxableAmount + tax + shippingFee;

    return {
      subtotal,
      discount,
      shippingFee,
      tax,
      grandTotal,
      sellerCount: sellerSet.size
    };
  },

  updateThemeIcon() {
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
      themeIcon.textContent = this.theme === "dark" ? "🌙" : "☀️";
    }
  }
};

// ==========================================================================
// 03. INITIALIZATION & LIFECYCLE
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  State.init();
  initNavbarScrollEffect();
  initKeyboardShortcuts();
  initSearchAutocomplete();
  startFlashCountdown();

  // Render initial views
  renderCategoriesGrid();
  renderFlashSaleProducts();
  renderMainCatalog();
  renderSellersSpotlight();
  renderSellerPortal();
  renderAdminPortal();
  renderCustomerPortal();
  initAddProductDropzone();
  State.updateBadges();
});

// Sticky glass navbar shadow & height transition on scroll
function initNavbarScrollEffect() {
  const navbar = document.getElementById("main-navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

// Global keyboard shortcuts (Cmd+K for search, Esc to close modals)
function initKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const searchInput = document.getElementById("global-search-input");
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
    if (e.key === "Escape") {
      closeAllModalsAndDrawers();
    }
  });
}

function closeAllModalsAndDrawers() {
  closeProductModal();
  closeCompareModal();
  closeCheckoutModal();
  closeTrackingModal();
  closeAddProductModal();
  closeDeleteConfirmModal();
  closePromoModal();
  const searchDropdown = document.getElementById("search-dropdown");
  if (searchDropdown) searchDropdown.style.display = "none";
  const cartDrawer = document.getElementById("cart-drawer");
  const cartBackdrop = document.getElementById("cart-drawer-backdrop");
  if (cartDrawer) cartDrawer.classList.remove("active");
  if (cartBackdrop) cartBackdrop.classList.remove("active");
}

// ==========================================================================
// 04. VIEW NAVIGATION CONTROLLER (MARKETPLACE / SELLER / ADMIN / CUSTOMER)
// ==========================================================================

function switchView(viewName) {
  State.currentView = viewName;
  closeAllModalsAndDrawers();

  // Hide all panels
  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.remove("active");
  });

  // Remove active from nav buttons
  document.querySelectorAll(".nav-portal-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  const targetPanel = document.getElementById(`view-${viewName}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update navbar portal buttons
  if (viewName === "marketplace") {
    const b = document.getElementById("nav-btn-market");
    if (b) b.classList.add("active");
  } else if (viewName === "seller-center") {
    const b = document.getElementById("nav-btn-seller");
    if (b) b.classList.add("active");
    renderSellerPortal();
  } else if (viewName === "admin-center") {
    const b = document.getElementById("nav-btn-admin");
    if (b) b.classList.add("active");
    renderAdminPortal();
  } else if (viewName === "customer-dashboard") {
    renderCustomerPortal();
  }
}

// ==========================================================================
// 05. SEARCH & AUTOCOMPLETE ENGINE
// ==========================================================================

function initSearchAutocomplete() {
  const searchInput = document.getElementById("global-search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  const dropdown = document.getElementById("search-dropdown");

  if (!searchInput) return;

  let debounceTimer;

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (val.length > 0) {
      if (clearBtn) clearBtn.style.display = "block";
    } else {
      if (clearBtn) clearBtn.style.display = "none";
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      handleSearchQuery(val);
    }, 180);
  });

  searchInput.addEventListener("focus", () => {
    const val = searchInput.value.trim();
    if (val.length > 0) {
      handleSearchQuery(val);
    } else {
      // Show default suggestions
      dropdown.style.display = "block";
      renderRecentOrPopularSearches();
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const searchContainer = document.getElementById("nav-search-container");
    if (searchContainer && !searchContainer.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
}

function handleSearchQuery(query) {
  const dropdown = document.getElementById("search-dropdown");
  const resultsContainer = document.getElementById("search-results-content");

  if (!query) {
    renderRecentOrPopularSearches();
    return;
  }

  const q = query.toLowerCase();
  const matched = State.products.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.seller.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );

  dropdown.style.display = "block";

  if (matched.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
        No creations match "<strong>${escapeHtml(query)}</strong>".<br>
        <span style="font-size:0.75rem;">Try searching for Titanium, Ceramic, or Audio.</span>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matched.slice(0, 5).map(prod => `
    <div class="search-result-item" onclick="openProductModal(${prod.id}); document.getElementById('search-dropdown').style.display='none';">
      <img src="${prod.images[0]}" alt="${escapeHtml(prod.name)}" class="search-item-thumb">
      <div class="search-item-info">
        <div class="search-item-title">${highlightMatch(prod.name, query)}</div>
        <div class="search-item-meta">
          <span>${prod.category}</span> • <span>${prod.seller}</span>
        </div>
      </div>
      <div class="search-item-price">$${prod.price.toFixed(2)}</div>
    </div>
  `).join("");
}

function renderRecentOrPopularSearches() {
  const resultsContainer = document.getElementById("search-results-content");
  resultsContainer.innerHTML = `
    <div style="padding: 0.6rem 0.8rem; font-size: 0.75rem; color: var(--text-muted);">
      RECOMMENDED CURATIONS
    </div>
    ${State.products.filter(p => p.isCurated).slice(0, 3).map(prod => `
      <div class="search-result-item" onclick="openProductModal(${prod.id}); document.getElementById('search-dropdown').style.display='none';">
        <img src="${prod.images[0]}" alt="${escapeHtml(prod.name)}" class="search-item-thumb">
        <div class="search-item-info">
          <div class="search-item-title">${escapeHtml(prod.name)}</div>
          <div class="search-item-meta">${prod.category} • ★ ${prod.rating}</div>
        </div>
        <div class="search-item-price">$${prod.price.toFixed(2)}</div>
      </div>
    `).join("")}
  `;
}

function clearSearch() {
  const searchInput = document.getElementById("global-search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  const dropdown = document.getElementById("search-dropdown");
  if (searchInput) {
    searchInput.value = "";
    searchInput.focus();
  }
  if (clearBtn) clearBtn.style.display = "none";
  if (dropdown) dropdown.style.display = "none";
  resetAllFilters();
}

function applySearchQuery(tag) {
  const searchInput = document.getElementById("global-search-input");
  if (searchInput) {
    searchInput.value = tag;
    handleSearchQuery(tag);
  }
}

function submitSearch() {
  const searchInput = document.getElementById("global-search-input");
  const query = searchInput ? searchInput.value.trim() : "";
  const dropdown = document.getElementById("search-dropdown");
  if (dropdown) dropdown.style.display = "none";
  
  if (State.currentView !== "marketplace") {
    switchView("marketplace");
  }

  State.searchQuery = query;
  renderMainCatalog();
  smoothScrollTo("catalog-section");
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
  return escapeHtml(text).replace(regex, `<span style="color:var(--electric-blue); font-weight:800;">$1</span>`);
}

// ==========================================================================
// 06. FLASH SALE TICKING COUNTDOWN
// ==========================================================================

function startFlashCountdown() {
  let targetHours = 7;
  let targetMins = 42;
  let targetSecs = 19;

  setInterval(() => {
    targetSecs--;
    if (targetSecs < 0) {
      targetSecs = 59;
      targetMins--;
      if (targetMins < 0) {
        targetMins = 59;
        targetHours--;
        if (targetHours < 0) {
          targetHours = 12; // Loop for portfolio showcase
        }
      }
    }

    const hEl = document.getElementById("cd-hours");
    const mEl = document.getElementById("cd-minutes");
    const sEl = document.getElementById("cd-seconds");
    if (hEl) hEl.textContent = String(targetHours).padStart(2, "0");
    if (mEl) mEl.textContent = String(targetMins).padStart(2, "0");
    if (sEl) sEl.textContent = String(targetSecs).padStart(2, "0");
  }, 1000);
}

// ==========================================================================
// 07. CATALOG FILTERING & RENDERING (MARKETPLACE)
// ==========================================================================

function renderCategoriesGrid() {
  const grid = document.getElementById("featured-categories-grid");
  if (!grid) return;

  const categories = [
    { name: "Electronics", label: "Flagship Electronics", icon: "⚡", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80" },
    { name: "Audio", label: "Bespoke Hi-Fi Audio", icon: "🎧", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80" },
    { name: "Fashion", label: "Haute Couture & Horology", icon: "💎", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80" },
    { name: "Home", label: "Architectural Living", icon: "🛋️", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80" },
    { name: "Gaming", label: "Cybernetic Gaming", icon: "🎮", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80" },
    { name: "Automotive", label: "Supercar Concierge", icon: "🏎️", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80" },
    { name: "Beauty", label: "Alchemy & Grooming", icon: "✨", img: "https://images.unsplash.com/photo-1608248597359-59325983756b?w=600&auto=format&fit=crop&q=80" },
    { name: "Digital", label: "Digital Certificates & Provenance", icon: "📜", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80" },
    { name: "Shoes", label: "Bespoke Footwear & Sneakers", icon: "👟", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80" },
    { name: "Accessories", label: "Fine Jewelry & Accessories", icon: "💍", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80" }
  ];

  grid.innerHTML = categories.map(c => {
    const count = State.products.filter(p => p.category === c.name).length;
    return `
      <div class="category-card" onclick="filterByCategory('${c.name}')">
        <img src="${c.img}" alt="${c.label}" class="category-bg-img" loading="lazy">
        <div class="category-overlay">
          <div class="category-icon-chip">${c.icon}</div>
          <div class="category-name">${c.label}</div>
          <div class="category-count">${count > 0 ? count + ' Masterpieces' : 'Curated Atelier'}</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderFlashSaleProducts() {
  const container = document.getElementById("flash-products-grid");
  if (!container) return;

  const flashItems = State.products.filter(p => p.isFlashSale);
  container.innerHTML = flashItems.slice(0, 4).map(prod => renderProductCardHtml(prod, true)).join("");
}

function renderMainCatalog() {
  const container = document.getElementById("main-product-grid");
  const emptyState = document.getElementById("catalog-empty-state");
  const resultsCounter = document.getElementById("catalog-results-count");
  if (!container) return;

  let filtered = [...State.products];

  // Category filter
  if (State.activeCategory !== "all") {
    filtered = filtered.filter(p => p.category.toLowerCase() === State.activeCategory.toLowerCase());
  }

  // Search filter
  if (State.searchQuery) {
    const q = State.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      (p.name && p.name.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q)) ||
      (p.seller && p.seller.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.sku && p.sku.toLowerCase().includes(q))
    );
  }

  // Stock Filter
  const stockSelect = document.getElementById("filter-stock-select");
  if (stockSelect && stockSelect.value !== "all") {
    if (stockSelect.value === "in-stock") filtered = filtered.filter(p => p.stock > 0);
    if (stockSelect.value === "on-sale") filtered = filtered.filter(p => p.oldPrice && p.oldPrice > p.price);
  }

  // Price Tier Filter
  const priceSelect = document.getElementById("filter-price-select");
  if (priceSelect && priceSelect.value !== "all") {
    if (priceSelect.value === "under-250") filtered = filtered.filter(p => p.price < 250);
    if (priceSelect.value === "250-1000") filtered = filtered.filter(p => p.price >= 250 && p.price <= 1000);
    if (priceSelect.value === "over-1000") filtered = filtered.filter(p => p.price > 1000);
  }

  // Sorting
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    const sortVal = sortSelect.value;
    if (sortVal === "price-asc") filtered.sort((a, b) => a.price - b.price);
    else if (sortVal === "price-desc") filtered.sort((a, b) => b.price - a.price);
    else if (sortVal === "rating") filtered.sort((a, b) => b.rating - a.rating);
    else if (sortVal === "newest") filtered.sort((a, b) => b.id - a.id);
  }

  if (resultsCounter) {
    resultsCounter.textContent = `Showing ${filtered.length} of ${State.products.length} creations`;
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
  } else {
    if (emptyState) emptyState.style.display = "none";
    container.innerHTML = filtered.map(prod => renderProductCardHtml(prod, false)).join("");
  }

  renderActiveFilterChips();
}

function renderProductCardHtml(prod, isFlashCard = false) {
  const isWish = State.wishlist.has(prod.id);
  const isComp = State.compareList.has(prod.id);
  const discountPct = prod.oldPrice && prod.oldPrice > prod.price ? Math.round(((prod.oldPrice - prod.price) / prod.oldPrice) * 100) : null;
  const stockReservePct = Math.min(100, Math.round((prod.stock / 20) * 100));

  let stockBadgeHtml = "";
  if (prod.stock > 4) {
    stockBadgeHtml = `<span class="card-stock-badge-pill badge-green">In Stock (${prod.stock})</span>`;
  } else if (prod.stock > 0) {
    stockBadgeHtml = `<span class="card-stock-badge-pill badge-gold">Low Reserve (${prod.stock})</span>`;
  } else {
    stockBadgeHtml = `<span class="card-stock-badge-pill badge-outline">Out of Stock</span>`;
  }

  const primaryImg = (prod.images && prod.images.length > 0) ? prod.images[0] : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800";

  return `
    <div class="product-card" id="card-prod-${prod.id}">
      
      <!-- Top Image Area with Badges & Actions -->
      <div class="product-card-thumb-wrap" onclick="openProductModal(${prod.id})">
        <img src="${primaryImg}" alt="${escapeHtml(prod.name)}" class="product-card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'">
        
        <!-- Floating Badges -->
        <div class="card-floating-badges">
          ${discountPct ? `<span class="card-discount-badge">-${discountPct}% OFF</span>` : ""}
          ${prod.isCurated ? `<span class="card-featured-badge">Curated</span>` : ""}
        </div>

        <!-- Quick Action Floating Buttons -->
        <div class="card-quick-actions" onclick="event.stopPropagation()">
          <button class="btn-card-action ${isWish ? 'active' : ''}" onclick="toggleWishlist(${prod.id})" title="Save to Wishlist" aria-label="Save to Wishlist">
            ${isWish ? '❤️' : '🤍'}
          </button>
          <button class="btn-card-action ${isComp ? 'active' : ''}" onclick="toggleCompare(${prod.id})" title="Compare Item" aria-label="Compare Product">
            ⚖️
          </button>
        </div>

        <!-- Hover Reveal Quick View CTA -->
        <div class="card-hover-overlay-btn">
          Quick View & Provenance ↗
        </div>
      </div>

      <!-- Card Information -->
      <div class="product-card-body">
        
        <div class="card-seller-row">
          <span class="seller-verified-mini">
            <span style="color:var(--emerald-green); font-size:0.8rem;">🛡️</span> ${escapeHtml(prod.seller || 'Verified Atelier')}
          </span>
          <span class="rating-num">★ ${prod.rating ? prod.rating.toFixed(2) : "5.00"} (${prod.reviewsCount || 1})</span>
        </div>

        <!-- Category & Stock Status Row -->
        <div class="card-meta-tags-row">
          <span class="card-category-badge">${escapeHtml(prod.category || 'Luxury')}</span>
          ${stockBadgeHtml}
        </div>

        <h3 class="product-card-title" onclick="openProductModal(${prod.id})" title="${escapeHtml(prod.name)}">
          ${escapeHtml(prod.name)}
        </h3>

        ${isFlashCard ? `
          <div class="card-stock-progress">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${stockReservePct}%;"></div>
            </div>
            <div class="stock-label">
              <span>Limited Stock: ${prod.stock} Units Left</span>
              <span>Reserve: ${stockReservePct}%</span>
            </div>
          </div>
        ` : ""}

        <!-- Price & Discount Line -->
        <div class="price-group" style="margin-top:auto; padding-top:0.5rem;">
          <div style="display:flex; align-items:baseline; gap:0.5rem;">
            <span class="card-price">$${prod.price.toFixed(2)}</span>
            ${prod.oldPrice && prod.oldPrice > prod.price ? `<span class="card-old-price">$${prod.oldPrice.toFixed(2)}</span>` : ""}
          </div>
        </div>

        <!-- Dual Action Buttons: View Details & Add to Cart -->
        <div class="product-card-actions-group">
          <button class="btn-view-details-card" onclick="openProductModal(${prod.id})" title="View Complete Product Details">
            View Details ↗
          </button>
          <button class="btn-add-to-bag-full" onclick="addToCart(${prod.id}, 1)" ${prod.stock === 0 ? 'disabled' : ''} title="Add to Bag">
            + Add to Bag
          </button>
        </div>

      </div>

    </div>
  `;
}

function renderActiveFilterChips() {
  const chipsContainer = document.getElementById("active-filter-chips");
  const tagsList = document.getElementById("filter-tags-list");
  if (!chipsContainer || !tagsList) return;

  const chips = [];
  if (State.activeCategory !== "all") {
    chips.push({ label: `Category: ${State.activeCategory}`, removeFn: "filterByCategory('all')" });
  }
  if (State.searchQuery) {
    chips.push({ label: `Query: "${State.searchQuery}"`, removeFn: "clearSearch()" });
  }

  const stockSelect = document.getElementById("filter-stock-select");
  if (stockSelect && stockSelect.value !== "all") {
    chips.push({ label: `Stock: ${stockSelect.options[stockSelect.selectedIndex].text}`, removeFn: "resetSelectFilter('filter-stock-select')" });
  }

  const priceSelect = document.getElementById("filter-price-select");
  if (priceSelect && priceSelect.value !== "all") {
    chips.push({ label: `Price: ${priceSelect.options[priceSelect.selectedIndex].text}`, removeFn: "resetSelectFilter('filter-price-select')" });
  }

  if (chips.length === 0) {
    chipsContainer.style.display = "none";
  } else {
    chipsContainer.style.display = "flex";
    tagsList.innerHTML = chips.map(c => `
      <span class="chip-active">
        ${c.label}
        <span class="chip-remove-btn" onclick="${c.removeFn}">✕</span>
      </span>
    `).join("");
  }
}

function filterByCategory(categoryName) {
  State.activeCategory = categoryName;

  // Highlight pill in category subnav
  const pills = document.querySelectorAll(".cat-pill");
  pills.forEach(p => {
    if (p.textContent.includes(categoryName) || (categoryName === "all" && p.textContent.includes("All Departments"))) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  const heading = document.getElementById("catalog-heading");
  if (heading) {
    heading.textContent = categoryName === "all" ? "All Marketplace Masterpieces" : `${categoryName} Atelier Collection`;
  }

  if (State.currentView !== "marketplace") {
    switchView("marketplace");
  }

  renderMainCatalog();
  smoothScrollTo("catalog-section");
}

function filterByVerifiedSellers() {
  State.activeCategory = "all";
  showToast("Filtering creations by Tier-1 Audited Sellers", "info");
  renderMainCatalog();
  smoothScrollTo("catalog-section");
}

function applyCatalogFilters() {
  renderMainCatalog();
}

function resetSelectFilter(id) {
  const sel = document.getElementById(id);
  if (sel) sel.value = "all";
  renderMainCatalog();
}

function resetAllFilters() {
  State.activeCategory = "all";
  State.searchQuery = "";
  const sInput = document.getElementById("global-search-input");
  if (sInput) sInput.value = "";
  resetSelectFilter("filter-stock-select");
  resetSelectFilter("filter-price-select");
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) sortSelect.value = "curated";
  filterByCategory("all");
}

function renderSellersSpotlight() {
  const container = document.getElementById("verified-sellers-grid");
  if (!container) return;

  container.innerHTML = State.sellers.map(s => `
    <div class="seller-spotlight-card">
      <div class="seller-card-top">
        <div class="seller-badge-icon">${s.avatar}</div>
        <div>
          <h4 class="seller-spotlight-name">${escapeHtml(s.name)}</h4>
          <span class="seller-location">${s.location}</span>
        </div>
      </div>
      <div class="seller-card-stats">
        <div>
          <span style="color:var(--text-muted); font-size:0.7rem; display:block;">FULFILLMENT</span>
          <span class="seller-stat-val">${s.onTimeDelivery}</span>
        </div>
        <div>
          <span style="color:var(--text-muted); font-size:0.7rem; display:block;">RATING</span>
          <span class="seller-stat-val" style="color:var(--champagne-gold);">★ ${s.rating}</span>
        </div>
        <div>
          <span style="color:var(--text-muted); font-size:0.7rem; display:block;">ORDERS</span>
          <span class="seller-stat-val">${s.ordersCompleted}+</span>
        </div>
      </div>
      <button class="btn-outline-glass btn-sm" style="width:100%; justify-content:center;" onclick="filterBySeller('${s.name}')">
        View Atelier Creations →
      </button>
    </div>
  `).join("");
}

function filterBySeller(sellerName) {
  State.searchQuery = sellerName;
  renderMainCatalog();
  smoothScrollTo("catalog-section");
}

// ==========================================================================
// 08. PRODUCT DETAIL & QUICK VIEW MODAL
// ==========================================================================

function openProductModal(productId) {
  const prod = State.products.find(p => p.id === productId);
  if (!prod) return;

  State.selectedProductForModal = prod;
  const modalContainer = document.getElementById("product-detail-modal");
  const backdrop = document.getElementById("product-modal-backdrop");
  const content = document.getElementById("product-modal-content");

  const isWish = State.wishlist.has(prod.id);
  const isComp = State.compareList.has(prod.id);
  const images = (prod.images && prod.images.length > 0) ? prod.images : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"];
  const colors = (prod.colors && prod.colors.length > 0) ? prod.colors : ["Standard Studio Finish"];
  const specs = (prod.specs && prod.specs.length > 0) ? prod.specs : ["Provenance: Authenticated Atelier", "Quality: Master Inspection Certified"];
  const reviews = Array.isArray(prod.reviews) ? prod.reviews : [];

  content.innerHTML = `
    <div class="product-modal-grid">
      
      <!-- Left: Multi-Image Interactive Gallery -->
      <div class="modal-gallery-col">
        <div class="gallery-main-view">
          <img src="${images[0]}" alt="${escapeHtml(prod.name)}" class="gallery-main-img" id="gallery-main-img" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'">
        </div>
        <div class="gallery-thumbs-row">
          ${images.map((img, idx) => `
            <img 
              src="${img}" 
              alt="Thumbnail ${idx + 1}" 
              class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" 
              onclick="switchGalleryImage('${img}', this)"
              onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'"
            >
          `).join("")}
        </div>
      </div>

      <!-- Right: Detailed Specifications & Commercial Actions -->
      <div class="modal-info-col">
        
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem; flex-wrap:wrap; gap:0.5rem;">
          <div class="modal-seller-badge" style="margin-bottom:0;">
            <span class="badge-green">AUTHENTICATED SELLER</span>
            <span>${escapeHtml(prod.seller || 'Verified Atelier')} • Provenance Certified</span>
          </div>
          <div style="display:flex; gap:0.4rem; align-items:center;">
            <button class="btn-outline-glass btn-sm" style="color:var(--electric-blue); font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="closeProductModal(); openEditProductModal(${prod.id});" title="Edit This Product">✏️ Edit Product</button>
            <button class="btn-outline-glass btn-sm" style="color:var(--ruby-rose); font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="promptDeleteProduct(${prod.id});" title="Delete This Product">🗑️ Delete</button>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.4rem;">
          <span class="card-category-badge" style="font-size:0.75rem; padding:0.2rem 0.6rem;">${escapeHtml(prod.category || 'Luxury')}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">SKU: ${prod.sku || '#VLX-00' + prod.id}</span>
        </div>

        <h2 class="modal-product-title">${escapeHtml(prod.name)}</h2>

        <div class="modal-rating-row">
          <span style="color:var(--champagne-gold); font-weight:700;">★ ${prod.rating ? prod.rating.toFixed(2) : "5.00"}</span>
          <span style="color:var(--text-muted); font-size:0.8rem;">(${prod.reviewsCount || 1} verified reviews)</span>
          <span class="badge-pulsing" style="margin-left:auto;"><span class="pulse-dot"></span> ${prod.stock > 0 ? `In Stock (${prod.stock} available)` : `Out of Stock`}</span>
        </div>

        <div class="modal-price-row">
          <span class="modal-current-price">$${prod.price.toFixed(2)}</span>
          ${prod.oldPrice && prod.oldPrice > prod.price ? `<span class="modal-old-price">$${prod.oldPrice.toFixed(2)}</span>` : ""}
          <span style="font-size:0.75rem; color:var(--text-muted);">Includes Full Escrow Protection & Transit Insurance</span>
        </div>

        <p class="modal-desc-text">${escapeHtml(prod.description)}</p>

        <!-- Bespoke Options -->
        <div class="options-selector-group">
          <span class="options-label">Select Color / Finish:</span>
          <div class="variant-swatches">
            ${colors.map((col, idx) => `
              <button class="swatch-btn ${idx === 0 ? 'active' : ''}" onclick="selectModalColor(this, '${col}')">${col}</button>
            `).join("")}
          </div>
        </div>

        <!-- Quantity & Order CTAs -->
        <div class="modal-cta-row">
          <div class="modal-qty-box">
            <button class="qty-btn" onclick="adjustModalQty(-1)">-</button>
            <span class="qty-display" id="modal-qty-val">1</span>
            <button class="qty-btn" onclick="adjustModalQty(1)">+</button>
          </div>

          <button class="btn-primary-gradient" onclick="addModalItemToCart()" ${prod.stock === 0 ? 'disabled' : ''}>
            <span>Add to Shopping Bag</span>
          </button>

          <button class="btn-glass-secondary" onclick="buyModalItemNow()" ${prod.stock === 0 ? 'disabled' : ''}>
            <span>Acquire Immediately (Instant Checkout)</span>
          </button>

          <button class="btn-icon-pill ${isWish ? 'has-badge' : ''}" onclick="toggleWishlist(${prod.id})" title="Wishlist">
            <span>${isWish ? '❤️' : '🤍'}</span>
          </button>

          <button class="btn-icon-pill ${isComp ? 'has-badge' : ''}" onclick="toggleCompare(${prod.id})" title="Compare">
            <span>⚖️</span>
          </button>
        </div>

        <!-- Detail Tabs (Specifications, Shipping & Returns, Verified Reviews) -->
        <div class="modal-tabs-nav">
          <button class="modal-tab-trigger active" onclick="switchModalTab('specs', this)">Technical Specs</button>
          <button class="modal-tab-trigger" onclick="switchModalTab('shipping', this)">Delivery & Escrow</button>
          <button class="modal-tab-trigger" onclick="switchModalTab('reviews', this)">Connoisseur Reviews (${reviews.length})</button>
        </div>

        <div class="modal-tab-pane active" id="modal-tab-specs">
          <table class="specs-table">
            <tbody>
              ${specs.map(spec => {
                const parts = spec.split(":");
                return `
                  <tr>
                    <td>${parts[0] ? parts[0].trim() : "Feature"}</td>
                    <td>${parts[1] ? parts[1].trim() : parts[0]}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>

        <div class="modal-tab-pane" id="modal-tab-shipping">
          <p style="font-size:0.85rem; line-height:1.6; color:var(--text-secondary); margin-bottom:0.8rem;">
            Dispatched directly from the authorized atelier in tamper-evident secure containers. All orders include complimentary DHL Express Priority transit with real-time biometric signature delivery.
          </p>
          <div style="display:flex; gap:1rem; font-size:0.78rem;">
            <div class="badge-green">✓ 30-Day Doorstep Courier Returns</div>
            <div class="badge-green">✓ Full-Value Loss/Theft Insurance Included</div>
          </div>
        </div>

        <div class="modal-tab-pane" id="modal-tab-reviews">
          <div style="display:flex; flex-direction:column; gap:0.8rem; margin-bottom:1.5rem;">
            ${prod.reviews.map(r => `
              <div style="background:var(--bg-glass); border:1px solid var(--border-subtle); padding:0.8rem; border-radius:var(--radius-md);">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.2rem; font-size:0.82rem;">
                  <strong style="color:var(--text-primary);">${escapeHtml(r.user)} <span class="badge-green" style="font-size:0.65rem; padding:0.1rem 0.4rem;">Verified Acquisition</span></strong>
                  <span style="color:var(--champagne-gold);">★ ${r.rating}</span>
                </div>
                <p style="font-size:0.82rem; color:var(--text-secondary);">${escapeHtml(r.text)}</p>
                <span style="font-size:0.68rem; color:var(--text-muted);">${r.date}</span>
              </div>
            `).join("")}
          </div>

          <!-- Add Review Form -->
          <form onsubmit="event.preventDefault(); submitCustomerReview(${prod.id});" style="background:var(--bg-secondary); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <div style="font-size:0.85rem; font-weight:700; margin-bottom:0.6rem;">Submit Your Provenance Assessment</div>
            <div class="form-grid-2" style="margin-bottom:0.6rem;">
              <input type="text" id="review-user-name" placeholder="Your Full Name or Initials" required style="padding:0.4rem 0.8rem; font-size:0.8rem;">
              <select id="review-star-rating" style="padding:0.4rem 0.8rem; font-size:0.8rem;">
                <option value="5">★★★★★ Exceptional (5 Stars)</option>
                <option value="4">★★★★☆ Refined (4 Stars)</option>
                <option value="3">★★★☆☆ Satisfactory (3 Stars)</option>
              </select>
            </div>
            <textarea id="review-comment-text" rows="2" placeholder="Describe craftsmanship, acoustic tone, or wearability..." required style="width:100%; padding:0.5rem; font-size:0.8rem; margin-bottom:0.6rem;"></textarea>
            <button type="submit" class="btn-primary-gradient btn-sm">Post Assessment</button>
          </form>
        </div>

      </div>

    </div>
  `;

  modalContainer.classList.add("active");
  backdrop.classList.add("active");
}

function closeProductModal() {
  const modalContainer = document.getElementById("product-detail-modal");
  const backdrop = document.getElementById("product-modal-backdrop");
  if (modalContainer) modalContainer.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

function switchGalleryImage(src, thumbEl) {
  const mainImg = document.getElementById("gallery-main-img");
  if (mainImg) mainImg.src = src;

  document.querySelectorAll(".gallery-thumb-item").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

function selectModalColor(btn, colorName) {
  document.querySelectorAll(".swatch-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  btn.setAttribute("data-selected-color", colorName);
}

function adjustModalQty(delta) {
  const qtyEl = document.getElementById("modal-qty-val");
  if (!qtyEl) return;
  let current = parseInt(qtyEl.textContent, 10) || 1;
  current = Math.max(1, current + delta);
  qtyEl.textContent = current;
}

function switchModalTab(tabKey, triggerBtn) {
  document.querySelectorAll(".modal-tab-trigger").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".modal-tab-pane").forEach(p => p.classList.remove("active"));

  triggerBtn.classList.add("active");
  const pane = document.getElementById(`modal-tab-${tabKey}`);
  if (pane) pane.classList.add("active");
}

function addModalItemToCart() {
  if (!State.selectedProductForModal) return;
  const qtyEl = document.getElementById("modal-qty-val");
  const qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
  addToCart(State.selectedProductForModal.id, qty);
  closeProductModal();
}

function buyModalItemNow() {
  addModalItemToCart();
  openCheckoutModal();
}

function submitCustomerReview(productId) {
  const nameInput = document.getElementById("review-user-name");
  const ratingSelect = document.getElementById("review-star-rating");
  const commentInput = document.getElementById("review-comment-text");

  if (!nameInput || !commentInput) return;

  const newReview = {
    user: nameInput.value.trim() || "Anonymous Connoisseur",
    rating: parseInt(ratingSelect.value, 10) || 5,
    date: "Just now",
    text: commentInput.value.trim()
  };

  const prod = State.products.find(p => p.id === productId);
  if (prod) {
    prod.reviews.unshift(newReview);
    prod.reviewsCount++;
    State.saveProducts();
    showToast("Thank you for your assessment. Published to provenance record.", "success");
    openProductModal(productId);
  }
}

// ==========================================================================
// 09. PRODUCT COMPARISON DRAWER & MATRIX
// ==========================================================================

function toggleCompare(productId) {
  if (State.compareList.has(productId)) {
    State.compareList.delete(productId);
    showToast("Removed from comparison drawer", "info");
  } else {
    if (State.compareList.size >= 4) {
      showToast("Comparison limit reached (Maximum 4 products)", "error");
      return;
    }
    State.compareList.add(productId);
    showToast("Added to side-by-side comparison tray", "success");
  }

  State.saveCompare();
  renderMainCatalog();
}

function openCompareModal() {
  const modal = document.getElementById("compare-modal");
  const backdrop = document.getElementById("compare-modal-backdrop");
  const tableContainer = document.getElementById("compare-table-container");

  if (State.compareList.size === 0) {
    tableContainer.innerHTML = `
      <div class="empty-state-card">
        <div class="empty-icon">⚖️</div>
        <h3 class="empty-title">Comparison Tray is Empty</h3>
        <p class="empty-desc">Click the balance icon ⚖️ on any product card or details view to contrast technical specifications side by side.</p>
        <button class="btn-primary-gradient" onclick="closeCompareModal()">Explore Catalog</button>
      </div>
    `;
  } else {
    const prods = Array.from(State.compareList).map(id => State.products.find(p => p.id === id)).filter(Boolean);

    tableContainer.innerHTML = `
      <div class="table-responsive">
        <table class="compare-matrix-table">
          <thead>
            <tr>
              <th class="compare-attr-name">Masterpiece</th>
              ${prods.map(p => `
                <th class="compare-col">
                  <div class="compare-thumb-box">
                    <img src="${p.images[0]}" alt="${escapeHtml(p.name)}" class="compare-thumb-img">
                  </div>
                  <div class="compare-prod-name">${escapeHtml(p.name)}</div>
                  <div class="compare-prod-price">$${p.price.toFixed(2)}</div>
                  <button class="btn-primary-gradient btn-sm" style="width:100%; justify-content:center;" onclick="addToCart(${p.id}, 1); closeCompareModal();">
                    + Add to Bag
                  </button>
                </th>
              `).join("")}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="compare-attr-name">Atelier / Seller</td>
              ${prods.map(p => `<td>${escapeHtml(p.seller)} <span style="color:var(--emerald-green)">🛡️</span></td>`).join("")}
            </tr>
            <tr>
              <td class="compare-attr-name">Department Category</td>
              ${prods.map(p => `<td>${p.category}</td>`).join("")}
            </tr>
            <tr>
              <td class="compare-attr-name">Patron Rating</td>
              ${prods.map(p => `<td><strong style="color:var(--champagne-gold)">★ ${p.rating}</strong> (${p.reviewsCount} reviews)</td>`).join("")}
            </tr>
            <tr>
              <td class="compare-attr-name">Availability Reserve</td>
              ${prods.map(p => `<td><span class="badge-green">${p.stock} Units In Stock</span></td>`).join("")}
            </tr>
            <tr>
              <td class="compare-attr-name">Core Provenance / Specs</td>
              ${prods.map(p => `<td><ul style="padding-left:1.1rem; font-size:0.8rem; line-height:1.5;">${p.specs.map(s => `<li>${escapeHtml(s)}</li>`).join("")}</ul></td>`).join("")}
            </tr>
            <tr>
              <td class="compare-attr-name">Escrow Guarantee</td>
              ${prods.map(() => `<td>100% Insured Valet Inspection</td>`).join("")}
            </tr>
            <tr>
              <td class="compare-attr-name">Action</td>
              ${prods.map(p => `<td><button class="btn-link" style="color:var(--ruby-rose); font-size:0.75rem;" onclick="toggleCompare(${p.id}); openCompareModal();">Remove</button></td>`).join("")}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  modal.classList.add("active");
  backdrop.classList.add("active");
}

function closeCompareModal() {
  const modal = document.getElementById("compare-modal");
  const backdrop = document.getElementById("compare-modal-backdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

function clearComparison() {
  State.compareList.clear();
  State.saveCompare();
  openCompareModal();
  renderMainCatalog();
}

// ==========================================================================
// 10. WISHLIST SYSTEM
// ==========================================================================

function toggleWishlist(productId) {
  if (State.wishlist.has(productId)) {
    State.wishlist.delete(productId);
    showToast("Removed from your Private Wishlist", "info");
  } else {
    State.wishlist.add(productId);
    showToast("Saved to your Private Wishlist vault", "success");
  }

  State.saveWishlist();
  renderMainCatalog();

  // If customer dashboard is open, re-render customer wishlist tab
  if (State.currentView === "customer-dashboard") {
    renderCustomerWishlist();
  }
}

// ==========================================================================
// 11. MULTI-SELLER CART DRAWER & FINANCIAL ENGINE
// ==========================================================================

function addToCart(productId, qty = 1) {
  const prod = State.products.find(p => p.id === productId);
  if (!prod) return;

  const existingItem = State.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    State.cart.push({
      id: prod.id,
      qty: qty,
      selectedColor: prod.colors[0] || "Standard"
    });
  }

  State.saveCart();
  showToast(`Added "${prod.name}" to your Shopping Bag`, "success");
  renderCartDrawer();
}

function toggleCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-drawer-backdrop");
  if (!drawer) return;

  const isOpen = drawer.classList.contains("active");
  if (isOpen) {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
  } else {
    renderCartDrawer();
    drawer.classList.add("active");
    backdrop.classList.add("active");
  }
}

function renderCartDrawer() {
  const container = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const discountRow = document.getElementById("cart-discount-row");
  const discountEl = document.getElementById("cart-discount-val");
  const shippingEl = document.getElementById("cart-shipping-val");
  const taxEl = document.getElementById("cart-tax-val");
  const grandTotalEl = document.getElementById("cart-grand-total");
  const btnCheckout = document.getElementById("btn-proceed-checkout");

  if (!container) return;

  if (State.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card" style="padding:2.5rem 1rem;">
        <div class="empty-icon">🛍️</div>
        <h3 class="empty-title">Your Bag is Empty</h3>
        <p class="empty-desc">Discover handpicked creations from independent global ateliers.</p>
        <button class="btn-primary-gradient" onclick="toggleCartDrawer(); smoothScrollTo('catalog-section');">
          Explore Creations
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "$0.00";
    if (discountRow) discountRow.style.display = "none";
    if (taxEl) taxEl.textContent = "$0.00";
    if (grandTotalEl) grandTotalEl.textContent = "$0.00";
    if (shippingEl) shippingEl.textContent = "Complimentary";
    if (btnCheckout) btnCheckout.disabled = true;
    return;
  }

  if (btnCheckout) btnCheckout.disabled = false;

  // Group items by Seller (Multi-Seller Architecture Requirement)
  const groupedBySeller = {};
  State.cart.forEach(cartItem => {
    const prod = State.products.find(p => p.id === cartItem.id);
    if (prod) {
      if (!groupedBySeller[prod.seller]) {
        groupedBySeller[prod.seller] = [];
      }
      groupedBySeller[prod.seller].push({ ...prod, cartQty: cartItem.qty, selectedColor: cartItem.selectedColor });
    }
  });

  let html = "";
  for (const [sellerName, items] of Object.entries(groupedBySeller)) {
    const sellerSubtotal = items.reduce((sum, i) => sum + i.price * i.cartQty, 0);

    html += `
      <div class="cart-seller-group">
        <div class="cart-seller-header">
          <span><span style="color:var(--emerald-green);">🛡️</span> ${escapeHtml(sellerName)}</span>
          <span class="cart-seller-shipping">Direct Insured Express Dispatch</span>
        </div>

        ${items.map(item => `
          <div class="cart-item-card">
            <img src="${item.images[0]}" alt="${escapeHtml(item.name)}" class="cart-item-img">
            <div class="cart-item-details">
              <div class="cart-item-title">${escapeHtml(item.name)}</div>
              <div class="cart-item-price">$${item.price.toFixed(2)}</div>
              <div class="cart-item-controls">
                <div class="qty-stepper">
                  <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1)">-</button>
                  <span class="qty-display">${item.cartQty}</span>
                  <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove-btn" onclick="removeCartItem(${item.id})">Remove</button>
              </div>
            </div>
          </div>
        `).join("")}

        <div style="text-align:right; font-size:0.75rem; color:var(--text-muted); margin-top:0.4rem; padding-top:0.4rem; border-top:1px dashed var(--border-subtle);">
          Atelier Subtotal: <strong>$${sellerSubtotal.toFixed(2)}</strong>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;

  // Financial Calculations
  const fin = State.calculateCartFinancials();
  if (subtotalEl) subtotalEl.textContent = `$${fin.subtotal.toFixed(2)}`;

  if (fin.discount > 0) {
    if (discountRow) discountRow.style.display = "flex";
    if (discountEl) discountEl.textContent = `-$${fin.discount.toFixed(2)} (${State.appliedCoupon.code})`;
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  if (shippingEl) shippingEl.textContent = fin.shippingFee === 0 ? "Complimentary (DHL Express)" : `$${fin.shippingFee.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${fin.tax.toFixed(2)}`;
  if (grandTotalEl) grandTotalEl.textContent = `$${fin.grandTotal.toFixed(2)}`;
}

function updateCartItemQty(productId, delta) {
  const item = State.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeCartItem(productId);
    return;
  }

  State.saveCart();
  renderCartDrawer();
}

function removeCartItem(productId) {
  State.cart = State.cart.filter(i => i.id !== productId);
  State.saveCart();
  renderCartDrawer();
  showToast("Item removed from your shopping bag", "info");
}

function applyCouponCode() {
  const input = document.getElementById("coupon-code-input");
  const msgEl = document.getElementById("coupon-status-msg");
  if (!input || !msgEl) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    msgEl.className = "coupon-status-msg error";
    msgEl.textContent = "Please enter a valid coupon code.";
    return;
  }

  const found = State.coupons.find(c => c.code === code);
  if (!found) {
    msgEl.className = "coupon-status-msg error";
    msgEl.textContent = "Invalid or expired coupon code.";
    return;
  }

  const fin = State.calculateCartFinancials();
  if (found.minSpend && fin.subtotal < found.minSpend) {
    msgEl.className = "coupon-status-msg error";
    msgEl.textContent = `Coupon requires minimum order spend of $${found.minSpend}.`;
    return;
  }

  State.appliedCoupon = found;
  msgEl.className = "coupon-status-msg success";
  msgEl.textContent = `✓ Privilege code "${code}" applied: ${found.desc}`;
  showToast(`Coupon "${code}" applied successfully!`, "success");
  renderCartDrawer();
}

// ==========================================================================
// 12. MULTI-STEP CHECKOUT WIZARD
// ==========================================================================

function openCheckoutModal() {
  if (State.cart.length === 0) {
    showToast("Your shopping bag is currently empty.", "error");
    return;
  }

  // Close cart drawer
  const cartDrawer = document.getElementById("cart-drawer");
  const cartBackdrop = document.getElementById("cart-drawer-backdrop");
  if (cartDrawer) cartDrawer.classList.remove("active");
  if (cartBackdrop) cartBackdrop.classList.remove("active");

  const modal = document.getElementById("checkout-modal");
  const backdrop = document.getElementById("checkout-modal-backdrop");
  
  State.currentCheckoutStep = 1;
  updateCheckoutStepDisplay();
  renderCheckoutMiniSummary();

  modal.classList.add("active");
  backdrop.classList.add("active");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  const backdrop = document.getElementById("checkout-modal-backdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

function updateCheckoutStepDisplay() {
  // Update stepper navigation
  for (let s = 1; s <= 5; s++) {
    const navEl = document.getElementById(`step-nav-${s}`);
    const panelEl = document.getElementById(`checkout-step-${s}`);

    if (navEl) {
      navEl.classList.remove("active", "completed");
      if (s < State.currentCheckoutStep) navEl.classList.add("completed");
      if (s === State.currentCheckoutStep) navEl.classList.add("active");
    }

    if (panelEl) {
      if (s === State.currentCheckoutStep) {
        panelEl.classList.add("active");
      } else {
        panelEl.classList.remove("active");
      }
    }
  }

  // Populate Step 5 Review info if reached
  if (State.currentCheckoutStep === 5) {
    const fname = document.getElementById("chk-fname").value;
    const lname = document.getElementById("chk-lname").value;
    const street = document.getElementById("chk-street").value;
    const city = document.getElementById("chk-city").value;
    const postal = document.getElementById("chk-postal").value;
    const country = document.getElementById("chk-country").value;

    const rName = document.getElementById("rev-patron-name");
    const rAddr = document.getElementById("rev-delivery-address");
    const rFinalBtn = document.getElementById("rev-final-button-total");

    if (rName) rName.textContent = `${fname} ${lname}`;
    if (rAddr) rAddr.textContent = `${street}, ${city} ${postal}, ${country}`;

    const fin = State.calculateCartFinancials();
    if (rFinalBtn) rFinalBtn.textContent = `$${fin.grandTotal.toFixed(2)}`;
  }
}

function nextCheckoutStep(targetStep) {
  State.currentCheckoutStep = targetStep;
  updateCheckoutStepDisplay();
  renderCheckoutMiniSummary();
}

function prevCheckoutStep(targetStep) {
  State.currentCheckoutStep = targetStep;
  updateCheckoutStepDisplay();
}

function updateCheckoutShippingSpeed(tier) {
  State.activeShippingTier = tier;
  renderCheckoutMiniSummary();

  const rShip = document.getElementById("rev-shipping-type");
  if (rShip) {
    if (tier === "standard") rShip.textContent = "Complimentary Insured Express ($0.00)";
    if (tier === "priority") rShip.textContent = "Priority Armored Overnight (+$45.00)";
    if (tier === "white-glove") rShip.textContent = "White-Glove Private Valet (+$120.00)";
  }
}

function selectPaymentTab(tabName) {
  document.querySelectorAll(".payment-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".payment-content").forEach(c => c.style.display = "none");

  const btn = document.getElementById(`pay-tab-${tabName}`);
  const content = document.getElementById(`payment-content-${tabName}`);
  if (btn) btn.classList.add("active");
  if (content) content.style.display = "block";

  const rPay = document.getElementById("rev-payment-source");
  if (rPay) {
    if (tabName === "card") rPay.textContent = "Mastercard •••• 8842 (Escrow Hold)";
    if (tabName === "crypto") rPay.textContent = "Smart Contract Escrow (USDC Vault)";
    if (tabName === "apple") rPay.textContent = "Apple Pay / Biometric Secure Enclave";
  }
}

function simulateOneTouchPay() {
  showToast("Biometric credentials authenticated with Apple Secure Enclave", "success");
  nextCheckoutStep(5);
}

function renderCheckoutMiniSummary() {
  const itemsContainer = document.getElementById("checkout-mini-items");
  const subEl = document.getElementById("chk-mini-subtotal");
  const discRow = document.getElementById("chk-mini-discount-row");
  const discEl = document.getElementById("chk-mini-discount");
  const shipEl = document.getElementById("chk-mini-shipping");
  const taxEl = document.getElementById("chk-mini-tax");
  const grandEl = document.getElementById("chk-mini-grand");

  if (!itemsContainer) return;

  const items = State.cart.map(c => {
    const prod = State.products.find(p => p.id === c.id);
    return { ...prod, qty: c.qty };
  }).filter(Boolean);

  itemsContainer.innerHTML = items.map(item => `
    <div class="mini-chk-item">
      <img src="${item.images[0]}" alt="${escapeHtml(item.name)}" class="mini-chk-img">
      <div class="mini-chk-info">
        <div style="font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(item.name)}</div>
        <div style="color:var(--text-muted); font-size:0.75rem;">Qty: ${item.qty} • ${escapeHtml(item.seller)}</div>
        <div class="mini-chk-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
    </div>
  `).join("");

  const fin = State.calculateCartFinancials();
  if (subEl) subEl.textContent = `$${fin.subtotal.toFixed(2)}`;
  if (fin.discount > 0) {
    if (discRow) discRow.style.display = "flex";
    if (discEl) discEl.textContent = `-$${fin.discount.toFixed(2)}`;
  } else {
    if (discRow) discRow.style.display = "none";
  }
  if (shipEl) shipEl.textContent = fin.shippingFee === 0 ? "Complimentary" : `$${fin.shippingFee.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${fin.tax.toFixed(2)}`;
  if (grandEl) grandEl.textContent = `$${fin.grandTotal.toFixed(2)}`;
}

function executeOrderPlacement() {
  const termsCheckbox = document.getElementById("chk-accept-terms");
  if (termsCheckbox && !termsCheckbox.checked) {
    showToast("Please acknowledge the neutral escrow terms.", "error");
    return;
  }

  const fin = State.calculateCartFinancials();
  const orderId = `VLX-${Math.floor(10000 + Math.random() * 90000)}-US`;

  const orderItems = State.cart.map(c => {
    const prod = State.products.find(p => p.id === c.id);
    return {
      id: prod.id,
      name: prod.name,
      price: prod.price,
      qty: c.qty,
      seller: prod.seller,
      image: prod.images[0]
    };
  });

  const fname = document.getElementById("chk-fname").value;
  const lname = document.getElementById("chk-lname").value;
  const street = document.getElementById("chk-street").value;
  const city = document.getElementById("chk-city").value;
  const postal = document.getElementById("chk-postal").value;
  const country = document.getElementById("chk-country").value;

  const newOrder = {
    id: orderId,
    date: "Just now",
    status: "Confirmed & Escrowed",
    progressPct: 35,
    carrier: "DHL Express Priority",
    trackingNumber: `DHL-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    items: orderItems,
    total: fin.grandTotal,
    address: `${street}, ${city} ${postal}, ${country}`,
    patron: `${fname} ${lname}`
  };

  // Add order to database
  State.orders.unshift(newOrder);
  State.saveOrders();

  // Clear cart
  State.cart = [];
  State.appliedCoupon = null;
  State.saveCart();

  closeCheckoutModal();
  showToast(`Order ${orderId} successfully authenticated and placed in escrow!`, "success");

  // Open live tracking modal
  openTrackingModal(orderId);
}

// ==========================================================================
// 13. ORDER CONFIRMATION & STEP-BY-STEP LIVE TRACKING
// ==========================================================================

function openTrackingModal(orderId) {
  const order = State.orders.find(o => o.id === orderId) || State.orders[0];
  if (!order) return;

  const modal = document.getElementById("tracking-modal");
  const backdrop = document.getElementById("tracking-modal-backdrop");
  const orderTitle = document.getElementById("track-order-id-title");
  const carrierMeta = document.getElementById("track-carrier-meta");
  const sellersList = document.getElementById("track-sellers-list");
  const addrVal = document.getElementById("track-address-val");

  if (orderTitle) orderTitle.textContent = `Order #${order.id}`;
  if (carrierMeta) carrierMeta.textContent = `Courier: ${order.carrier} • Air Waybill #${order.trackingNumber}`;

  const sellers = Array.from(new Set(order.items.map(i => i.seller)));
  if (sellersList) sellersList.textContent = sellers.join(", ");
  if (addrVal) addrVal.textContent = order.address;

  // Set milestone active
  const progressBar = document.getElementById("milestone-progress-bar");
  if (progressBar) progressBar.style.width = `${order.progressPct || 50}%`;

  modal.classList.add("active");
  backdrop.classList.add("active");
}

function closeTrackingModal() {
  const modal = document.getElementById("tracking-modal");
  const backdrop = document.getElementById("tracking-modal-backdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

// ==========================================================================
// 14. SELLER CENTER (VENDOR OPERATING PORTAL)
// ==========================================================================

function renderSellerPortal() {
  const tbody = document.getElementById("seller-inventory-tbody");
  if (!tbody) return;

  const myStoreProducts = State.products.filter(p => p.seller === "Apex Luxe Audio");

  // Update Metrics
  const revEl = document.getElementById("seller-stat-revenue");
  const prodEl = document.getElementById("seller-stat-products");
  if (revEl) revEl.textContent = `$${(myStoreProducts.reduce((sum, p) => sum + p.price * 25, 0) + 148920).toLocaleString()}.00`;
  if (prodEl) prodEl.textContent = `${myStoreProducts.length} SKUs`;

  tbody.innerHTML = myStoreProducts.map(prod => {
    let stockBadgeClass = "badge-green";
    let stockLabel = "In Stock";
    if (prod.stock <= 4 && prod.stock > 0) {
      stockBadgeClass = "badge-gold";
      stockLabel = "Low Reserve";
    } else if (prod.stock === 0) {
      stockBadgeClass = "badge-outline";
      stockLabel = "Out of Stock";
    }

    return `
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:0.8rem;">
            <img src="${prod.images[0]}" alt="${escapeHtml(prod.name)}" style="width:40px; height:40px; border-radius:6px; object-fit:cover;">
            <div>
              <strong style="display:block; font-size:0.85rem;">${escapeHtml(prod.name)}</strong>
              <span style="font-size:0.72rem; color:var(--text-muted);">SKU: #VLX-00${prod.id}</span>
            </div>
          </div>
        </td>
        <td><span class="badge-violet">${prod.category}</span></td>
        <td>
          <input 
            type="number" 
            class="inline-input-num" 
            value="${prod.price.toFixed(2)}" 
            step="10" 
            onchange="updateProductPrice(${prod.id}, this.value)"
          >
        </td>
        <td>
          <input 
            type="number" 
            class="inline-input-num" 
            value="${prod.stock}" 
            min="0" 
            onchange="updateProductStock(${prod.id}, this.value)"
          >
        </td>
        <td><span class="${stockBadgeClass}">${stockLabel}</span></td>
        <td>
          <div style="display:flex; gap:0.4rem; align-items:center;">
            <button class="btn-outline-glass btn-sm" onclick="openProductModal(${prod.id})" title="Preview Product">Preview ↗</button>
            <button class="btn-outline-glass btn-sm" style="color:var(--electric-blue);" onclick="openEditProductModal(${prod.id})" title="Edit Product">Edit ✏️</button>
            <button class="btn-outline-glass btn-sm" style="color:var(--ruby-rose);" onclick="promptDeleteProduct(${prod.id})" title="Delete Product">Delete ✕</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function updateProductPrice(productId, newPrice) {
  const prod = State.products.find(p => p.id === productId);
  if (prod) {
    prod.price = parseFloat(newPrice) || prod.price;
    State.saveProducts();
    showToast(`Updated price for "${prod.name}" to $${prod.price.toFixed(2)}`, "success");
    renderMainCatalog();
  }
}

function updateProductStock(productId, newStock) {
  const prod = State.products.find(p => p.id === productId);
  if (prod) {
    prod.stock = parseInt(newStock, 10) || 0;
    State.saveProducts();
    showToast(`Updated inventory reserve for "${prod.name}" to ${prod.stock} units`, "info");
    renderSellerPortal();
    renderMainCatalog();
  }
}

function filterSellerInventory() {
  const input = document.getElementById("seller-inventory-search");
  const term = input ? input.value.toLowerCase() : "";
  const rows = document.querySelectorAll("#seller-inventory-tbody tr");

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(term) ? "" : "none";
  });
}

// ==========================================================================
// 14B. PRODUCT IMAGE UPLOAD & GALLERY ENGINE
// ==========================================================================

let uploadedProductImages = [];
let pendingDeleteProductId = null;

function triggerFileInput() {
  const fileInput = document.getElementById("prod-file-input");
  if (fileInput) fileInput.click();
}

function handleDeviceImageSelect(files) {
  if (!files || files.length === 0) return;
  const fileList = Array.from(files);

  let processedCount = 0;
  fileList.forEach(file => {
    if (!file.type.startsWith("image/")) {
      processedCount++;
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // High quality Canvas compressor to ~900px max dimension, quality 0.82
        // Guarantees fast load and prevents localStorage quota errors!
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const MAX_WIDTH = 900;
        const MAX_HEIGHT = 900;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.82);
        uploadedProductImages.push(compressedDataUrl);
        processedCount++;

        if (processedCount === fileList.length) {
          renderImagePreviews();
          showToast(`Uploaded and optimized ${fileList.length} photo(s) successfully`, "success");
        }
      };
      img.onerror = () => {
        processedCount++;
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Reset file input value so same files can be re-selected if desired
  const fileInput = document.getElementById("prod-file-input");
  if (fileInput) fileInput.value = "";
}

function handleAddImageUrl() {
  const urlInput = document.getElementById("prod-image-url-input");
  if (!urlInput) return;
  const url = urlInput.value.trim();
  if (!url) {
    showToast("Please enter a valid image URL", "error");
    return;
  }
  uploadedProductImages.push(url);
  urlInput.value = "";
  renderImagePreviews();
  showToast("Image URL added to gallery", "success");
}

function setPrimaryImage(index) {
  if (index < 0 || index >= uploadedProductImages.length) return;
  const selected = uploadedProductImages.splice(index, 1)[0];
  uploadedProductImages.unshift(selected);
  renderImagePreviews();
  showToast("Selected as primary cover image", "info");
}

function removeUploadedImage(index) {
  if (index < 0 || index >= uploadedProductImages.length) return;
  uploadedProductImages.splice(index, 1);
  renderImagePreviews();
  showToast("Image removed from gallery", "info");
}

function renderImagePreviews() {
  const tray = document.getElementById("images-preview-tray");
  const countBadge = document.getElementById("images-count-indicator");
  const errorMsg = document.getElementById("image-validation-error");

  if (countBadge) {
    countBadge.textContent = `${uploadedProductImages.length} Image${uploadedProductImages.length === 1 ? "" : "s"} Selected`;
  }

  if (errorMsg && uploadedProductImages.length > 0) {
    errorMsg.style.display = "none";
  }

  if (!tray) return;

  if (uploadedProductImages.length === 0) {
    tray.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 0.8rem; text-align: center; color: var(--text-muted); font-size: 0.8rem;">
        No images uploaded yet. Please upload at least 1 image (from device or via web URL).
      </div>
    `;
    return;
  }

  tray.innerHTML = uploadedProductImages.map((imgUrl, idx) => `
    <div class="preview-thumb-card ${idx === 0 ? 'is-primary' : ''}">
      <img src="${imgUrl}" alt="Product Photo ${idx + 1}" class="preview-thumb-img" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'">
      ${idx === 0 ? `<span class="thumb-badge-primary">★ Main Cover</span>` : ""}
      <div class="thumb-actions-overlay">
        ${idx !== 0 ? `<button type="button" class="btn-thumb-action" onclick="setPrimaryImage(${idx})" title="Set as Main Cover">★ Set Main</button>` : `<span></span>`}
        <button type="button" class="btn-thumb-action btn-thumb-delete" onclick="removeUploadedImage(${idx})" title="Remove Picture">✕</button>
      </div>
    </div>
  `).join("");
}

function initAddProductDropzone() {
  const dropzone = document.getElementById("image-dropzone-box");
  if (!dropzone) return;

  ["dragenter", "dragover"].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("drag-over");
    }, false);
  });

  ["dragleave", "drop"].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("drag-over");
    }, false);
  });

  dropzone.addEventListener("drop", (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      handleDeviceImageSelect(dt.files);
    }
  }, false);
}

// ==========================================================================
// 14C. ADD & EDIT PRODUCT MODAL CONTROLLER
// ==========================================================================

function openAddProductModal() {
  const modal = document.getElementById("add-product-modal");
  const backdrop = document.getElementById("add-product-backdrop");
  if (!modal || !backdrop) return;

  // Reset form
  const form = document.getElementById("product-master-form");
  if (form) form.reset();

  const editIdInput = document.getElementById("prod-edit-id");
  if (editIdInput) editIdInput.value = "";

  const titleEl = document.getElementById("add-product-modal-title");
  if (titleEl) titleEl.textContent = "Add New Masterpiece / Product";

  const descEl = document.getElementById("add-product-modal-desc");
  if (descEl) descEl.textContent = "Publish directly to global catalog, shop listing, and authenticated inventory.";

  const submitBtn = document.getElementById("btn-save-product-submit");
  if (submitBtn) submitBtn.innerHTML = "<span>Add Product</span>";

  // Auto-generate random SKU
  const skuInput = document.getElementById("new-prod-sku");
  if (skuInput) skuInput.value = `VLX-${Math.floor(1000 + Math.random() * 9000)}`;

  // Default values
  const sellerInput = document.getElementById("new-prod-seller");
  if (sellerInput) sellerInput.value = "Apex Luxe Audio";

  const stockInput = document.getElementById("new-prod-stock");
  if (stockInput) stockInput.value = "10";

  uploadedProductImages = [];
  renderImagePreviews();

  const errorMsg = document.getElementById("image-validation-error");
  if (errorMsg) errorMsg.style.display = "none";

  modal.classList.add("active");
  backdrop.classList.add("active");
}

function openEditProductModal(productId) {
  const prod = State.products.find(p => p.id == productId);
  if (!prod) return;

  const modal = document.getElementById("add-product-modal");
  const backdrop = document.getElementById("add-product-backdrop");
  if (!modal || !backdrop) return;

  const editIdInput = document.getElementById("prod-edit-id");
  if (editIdInput) editIdInput.value = prod.id;

  const titleEl = document.getElementById("add-product-modal-title");
  if (titleEl) titleEl.textContent = `Edit Product: ${prod.name}`;

  const descEl = document.getElementById("add-product-modal-desc");
  if (descEl) descEl.textContent = "Modify pricing, inventory stock, description, or update gallery photography.";

  const submitBtn = document.getElementById("btn-save-product-submit");
  if (submitBtn) submitBtn.innerHTML = "<span>Save Changes</span>";

  document.getElementById("new-prod-title").value = prod.name || "";
  document.getElementById("new-prod-sku").value = prod.sku || `VLX-00${prod.id}`;
  document.getElementById("new-prod-category").value = prod.category || "Audio";
  document.getElementById("new-prod-seller").value = prod.seller || "Apex Luxe Audio";
  document.getElementById("new-prod-status").value = prod.status || "Active";
  document.getElementById("new-prod-price").value = prod.price || "";
  document.getElementById("new-prod-oldprice").value = (prod.oldPrice && prod.oldPrice > prod.price) ? prod.oldPrice : "";
  document.getElementById("new-prod-stock").value = prod.stock !== undefined ? prod.stock : 10;
  document.getElementById("new-prod-desc").value = prod.description || "";
  document.getElementById("new-prod-specs").value = (prod.specs || []).join(", ");

  uploadedProductImages = Array.isArray(prod.images) ? [...prod.images] : [];
  renderImagePreviews();

  const errorMsg = document.getElementById("image-validation-error");
  if (errorMsg) errorMsg.style.display = "none";

  modal.classList.add("active");
  backdrop.classList.add("active");
}

function closeAddProductModal() {
  const modal = document.getElementById("add-product-modal");
  const backdrop = document.getElementById("add-product-backdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

function handleSaveProduct() {
  const editId = document.getElementById("prod-edit-id").value;
  const title = document.getElementById("new-prod-title").value.trim();
  const sku = document.getElementById("new-prod-sku").value.trim() || `VLX-${Math.floor(1000 + Math.random() * 9000)}`;
  const category = document.getElementById("new-prod-category").value;
  const seller = document.getElementById("new-prod-seller").value.trim() || "Apex Luxe Audio";
  const status = document.getElementById("new-prod-status").value || "Active";
  const price = parseFloat(document.getElementById("new-prod-price").value) || 0;
  const oldPriceVal = document.getElementById("new-prod-oldprice").value;
  const oldPrice = oldPriceVal ? parseFloat(oldPriceVal) : null;
  const stock = parseInt(document.getElementById("new-prod-stock").value, 10);
  const desc = document.getElementById("new-prod-desc").value.trim();
  const specsRaw = document.getElementById("new-prod-specs").value.trim();

  // Validate images
  const errorMsg = document.getElementById("image-validation-error");
  if (!uploadedProductImages || uploadedProductImages.length === 0) {
    if (errorMsg) errorMsg.style.display = "block";
    showToast("Please upload or add at least one product picture", "error");
    smoothScrollTo("image-dropzone-box");
    return;
  }
  if (errorMsg) errorMsg.style.display = "none";

  if (!title) {
    showToast("Please enter a valid product name", "error");
    return;
  }
  if (isNaN(price) || price < 0) {
    showToast("Please enter a valid price", "error");
    return;
  }
  if (isNaN(stock) || stock < 0) {
    showToast("Please enter a valid stock quantity", "error");
    return;
  }

  const specsList = specsRaw ? specsRaw.split(",").map(s => s.trim()).filter(Boolean) : ["Handcrafted Masterpiece", "Insured Provenance"];

  if (editId) {
    // EDIT EXISTING PRODUCT
    const prodId = parseInt(editId, 10) || editId;
    const existing = State.products.find(p => p.id == prodId);
    if (existing) {
      existing.name = title;
      existing.sku = sku;
      existing.category = category;
      existing.seller = seller;
      existing.status = status;
      existing.price = price;
      existing.oldPrice = (oldPrice && oldPrice > price) ? oldPrice : null;
      existing.stock = stock;
      existing.description = desc;
      existing.specs = specsList;
      existing.images = [...uploadedProductImages];

      State.saveProducts();
      closeAddProductModal();
      showToast(`Updated "${title}" successfully!`, "success");

      // Re-render views
      renderMainCatalog();
      renderSellerPortal();
      renderAdminPortal();
      renderCategoriesGrid();

      // If details modal was open for this product, refresh it
      if (State.selectedProductForModal && State.selectedProductForModal.id == prodId) {
        openProductModal(prodId);
      }
      return;
    }
  }

  // CREATE NEW PRODUCT
  const newProd = {
    id: Date.now(),
    name: title,
    sku: sku,
    category: category,
    seller: seller,
    sellerVerified: true,
    status: status,
    price: price,
    oldPrice: (oldPrice && oldPrice > price) ? oldPrice : null,
    rating: 5.0,
    reviewsCount: 1,
    stock: stock,
    isFlashSale: false,
    isCurated: true,
    images: [...uploadedProductImages],
    description: desc,
    specs: specsList,
    colors: ["Default Studio Finish", "Bespoke Edition"],
    reviews: [
      { user: "Platform Curator", rating: 5, date: "Just now", text: "Verified master creation newly indexed in the Sovereign Marketplace." }
    ]
  };

  // Prepend to catalog so it appears at top of Product Listing
  State.products.unshift(newProd);
  State.saveProducts();

  closeAddProductModal();
  showToast(`Published "${title}" to international catalog!`, "success");

  // Reset category filter if needed so user immediately sees the new item
  if (State.activeCategory !== "all" && State.activeCategory.toLowerCase() !== category.toLowerCase()) {
    State.activeCategory = "all";
  }

  // Switch to marketplace view and scroll to catalog
  switchView("marketplace");
  renderMainCatalog();
  renderSellerPortal();
  renderAdminPortal();
  renderCategoriesGrid();

  setTimeout(() => {
    smoothScrollTo("catalog-section");
    // Highlight newly created card
    const newCard = document.getElementById(`card-prod-${newProd.id}`);
    if (newCard) {
      newCard.style.boxShadow = "0 0 35px rgba(56, 189, 248, 0.6)";
      setTimeout(() => {
        if (newCard) newCard.style.boxShadow = "";
      }, 3000);
    }
  }, 100);
}

// Backward compatibility alias
function handleAddNewProduct() {
  handleSaveProduct();
}

// ==========================================================================
// 14D. DELETE PRODUCT SYSTEM WITH CONFIRMATION POPUP
// ==========================================================================

function promptDeleteProduct(productId) {
  const prod = State.products.find(p => p.id == productId);
  if (!prod) return;

  pendingDeleteProductId = prod.id;
  const modal = document.getElementById("delete-confirm-modal");
  const backdrop = document.getElementById("delete-confirm-backdrop");
  const preview = document.getElementById("delete-product-preview-card");

  const thumbImg = (prod.images && prod.images.length > 0) ? prod.images[0] : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800";

  if (preview) {
    preview.innerHTML = `
      <img src="${thumbImg}" alt="${escapeHtml(prod.name)}" class="delete-preview-thumb" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'">
      <div style="flex:1;">
        <strong style="display:block; font-size:0.9rem; color:var(--text-primary);">${escapeHtml(prod.name)}</strong>
        <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(prod.category)} • SKU: ${prod.sku || '#VLX-00' + prod.id}</span>
        <span style="display:block; font-size:0.85rem; color:var(--electric-blue); font-weight:700; margin-top:0.2rem;">$${prod.price.toFixed(2)}</span>
      </div>
    `;
  }

  if (modal && backdrop) {
    modal.classList.add("active");
    backdrop.classList.add("active");
  }
}

function closeDeleteConfirmModal() {
  pendingDeleteProductId = null;
  const modal = document.getElementById("delete-confirm-modal");
  const backdrop = document.getElementById("delete-confirm-backdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

function executeDeleteProduct() {
  if (!pendingDeleteProductId) return;

  const targetId = pendingDeleteProductId;
  const prod = State.products.find(p => p.id == targetId);
  const prodName = prod ? prod.name : "Product";

  // Remove from products
  State.products = State.products.filter(p => p.id != targetId);

  // Remove from cart if present
  State.cart = State.cart.filter(item => item.id != targetId);

  // Remove from wishlist & compare if present
  State.wishlist.delete(targetId);
  State.compareList.delete(targetId);

  // Persist
  State.saveProducts();
  State.saveCart();
  State.saveWishlist();
  State.saveCompare();

  closeDeleteConfirmModal();

  // If details modal was open for this product, close it
  if (State.selectedProductForModal && State.selectedProductForModal.id == targetId) {
    closeProductModal();
  }

  showToast(`"${prodName}" successfully deleted from catalog and database`, "info");

  renderMainCatalog();
  renderSellerPortal();
  renderAdminPortal();
  renderCategoriesGrid();
}

function removeProductAdmin(productId) {
  promptDeleteProduct(productId);
}

// ==========================================================================
// 15. ADMIN CONTROL CENTER (ENTERPRISE GOVERNANCE)
// ==========================================================================

function renderAdminPortal() {
  // 1. Seller Verification Queue
  const sellerVerifyList = document.getElementById("admin-seller-verification-list");
  if (sellerVerifyList) {
    sellerVerifyList.innerHTML = State.sellers.map(s => `
      <div class="seller-verify-item">
        <div style="display:flex; align-items:center; gap:0.8rem;">
          <div style="font-size:1.3rem;">${s.avatar}</div>
          <div>
            <strong style="display:block; font-size:0.88rem;">${escapeHtml(s.name)}</strong>
            <span style="font-size:0.72rem; color:var(--text-muted);">${s.location} • Status: ${s.verified ? '<span style="color:var(--emerald-green)">Certified</span>' : '<span style="color:var(--champagne-gold)">Audit Pending</span>'}</span>
          </div>
        </div>
        <div>
          <button class="btn-outline-glass btn-sm" onclick="toggleSellerVerification('${s.id}')">
            ${s.verified ? 'Revoke' : 'Approve & Certify'}
          </button>
        </div>
      </div>
    `).join("");
  }

  // 2. Promotions List
  const promoList = document.getElementById("admin-promotions-list");
  if (promoList) {
    promoList.innerHTML = State.coupons.map(c => `
      <div class="promo-item-card">
        <div>
          <strong style="font-family:var(--font-display); color:var(--electric-blue);">${c.code}</strong>
          <span style="display:block; font-size:0.72rem; color:var(--text-muted);">${c.desc}</span>
        </div>
        <div style="text-align:right;">
          <span class="badge-green">${c.type === 'percent' ? c.value + '% OFF' : '$' + c.value + ' OFF'}</span>
        </div>
      </div>
    `).join("");
  }

  // 3. Product Catalog Moderation
  const prodTbody = document.getElementById("admin-products-tbody");
  if (prodTbody) {
    prodTbody.innerHTML = State.products.slice(0, 25).map(prod => {
      const thumb = (prod.images && prod.images.length > 0) ? prod.images[0] : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800";
      return `
        <tr>
          <td>
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <img src="${thumb}" alt="${escapeHtml(prod.name)}" style="width:36px; height:36px; border-radius:6px; object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'">
              <div>
                <strong style="display:block; font-size:0.84rem;">${escapeHtml(prod.name)}</strong>
                <span style="font-size:0.7rem; color:var(--text-muted);">${prod.sku || '#VLX-00' + prod.id} • ${prod.category}</span>
              </div>
            </div>
          </td>
          <td>${escapeHtml(prod.seller || 'Apex Luxe Audio')}</td>
          <td><strong style="color:var(--electric-blue);">$${prod.price.toFixed(2)}</strong></td>
          <td>
            <button class="btn-sm-pill ${prod.isCurated ? 'badge-green' : 'badge-outline'}" onclick="toggleCurated(${prod.id})">
              ${prod.isCurated ? '★ Curated Pick' : 'Standard'}
            </button>
          </td>
          <td><span class="badge-green">${prod.status || 'Active in Feed'}</span></td>
          <td>
            <div style="display:flex; gap:0.4rem; align-items:center;">
              <button class="btn-outline-glass btn-sm" style="color:var(--electric-blue); font-size:0.72rem; padding:0.2rem 0.5rem;" onclick="openEditProductModal(${prod.id})" title="Edit Product">Edit</button>
              <button class="btn-link" style="color:var(--ruby-rose); font-size:0.75rem;" onclick="promptDeleteProduct(${prod.id})" title="Delete Product">Delist</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }
}

function openPromoModal() {
  const modal = document.getElementById("promo-modal");
  const backdrop = document.getElementById("promo-modal-backdrop");
  modal.classList.add("active");
  backdrop.classList.add("active");
}

function closePromoModal() {
  const modal = document.getElementById("promo-modal");
  const backdrop = document.getElementById("promo-modal-backdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

function handleCreatePromoCode() {
  const code = document.getElementById("promo-code").value.trim().toUpperCase();
  const type = document.getElementById("promo-type").value;
  const value = parseFloat(document.getElementById("promo-value").value) || 10;
  const minSpend = parseFloat(document.getElementById("promo-min").value) || 0;

  if (!code) return;

  const newCoupon = {
    code: code,
    type: type,
    value: value,
    minSpend: minSpend,
    desc: type === "percent" ? `${value}% off storewide` : `$${value} off orders over $${minSpend}`
  };

  State.coupons.push(newCoupon);
  State.saveCoupons();
  closePromoModal();
  showToast(`Privilege Promo Code "${code}" is now live!`, "success");
  renderAdminPortal();
}

// ==========================================================================
// 16. CUSTOMER DASHBOARD & ORDER MANAGEMENT
// ==========================================================================

function renderCustomerPortal() {
  // Update order count badge
  const cOrdersCount = document.getElementById("c-orders-count");
  if (cOrdersCount) cOrdersCount.textContent = State.orders.length;

  // Active orders stats
  const activeOrdEl = document.getElementById("c-active-orders-num");
  if (activeOrdEl) activeOrdEl.textContent = `${State.orders.length} In Transit`;

  // Render recent order highlight
  renderRecentOrderHighlight();

  // Render subtabs
  renderCustomerOrders();
  renderCustomerWishlist();
}

function showCustomerTab(tabName) {
  document.querySelectorAll(".c-nav-item").forEach(item => item.classList.remove("active"));
  document.querySelectorAll(".customer-subtab").forEach(sub => sub.classList.remove("active"));

  const navItem = document.getElementById(`c-tab-${tabName}`);
  const subtab = document.getElementById(`subtab-${tabName}`);
  if (navItem) navItem.classList.add("active");
  if (subtab) subtab.classList.add("active");
}

function renderRecentOrderHighlight() {
  const card = document.getElementById("recent-order-card");
  if (!card) return;

  if (State.orders.length === 0) {
    card.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem;">No active orders currently in flight.</p>`;
    return;
  }

  const latest = State.orders[0];
  card.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.6rem;">
      <div>
        <span class="badge-green">ACTIVE SHIPMENT IN FLIGHT</span>
        <h4 style="font-size:1.15rem; font-weight:700; margin-top:0.3rem;">Order #${latest.id}</h4>
        <span style="font-size:0.75rem; color:var(--text-muted);">Dispatched via ${latest.carrier} • Air Waybill #${latest.trackingNumber}</span>
      </div>
      <button class="btn-primary-gradient btn-sm" onclick="openTrackingModal('${latest.id}')">
        Live Milestone Tracker ↗
      </button>
    </div>

    <div style="display:flex; gap:1rem; align-items:center; background:var(--bg-glass); padding:0.8rem; border-radius:var(--radius-md);">
      <img src="${latest.items[0]?.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'}" alt="Item" style="width:50px; height:50px; border-radius:8px; object-fit:cover;">
      <div style="flex:1;">
        <strong style="font-size:0.88rem; display:block;">${escapeHtml(latest.items[0]?.name || 'Luxury Acquisition')}</strong>
        <span style="font-size:0.75rem; color:var(--text-secondary);">${latest.items.length} item(s) • Total: $${latest.total.toFixed(2)}</span>
      </div>
      <span class="badge-violet">${latest.status}</span>
    </div>
  `;
}

function renderCustomerOrders() {
  const container = document.getElementById("customer-orders-list");
  if (!container) return;

  if (State.orders.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card">
        <div class="empty-icon">📦</div>
        <h3 class="empty-title">No Orders Yet</h3>
        <p class="empty-desc">Your provenance certificates and escrow tracking logs will display here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = State.orders.map(order => `
    <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:1.4rem; margin-bottom:1.2rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-subtle); padding-bottom:0.8rem; margin-bottom:1rem; flex-wrap:wrap; gap:0.8rem;">
        <div>
          <strong style="font-family:var(--font-display); font-size:1.05rem;">Order #${order.id}</strong>
          <span style="font-size:0.75rem; color:var(--text-muted); display:block;">Placed ${order.date} • Total: $${order.total.toFixed(2)}</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <span class="badge-green">${order.status}</span>
          <button class="btn-outline-glass btn-sm" onclick="openTrackingModal('${order.id}')">Track Milestone</button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.6rem;">
        ${order.items.map(item => `
          <div style="display:flex; align-items:center; gap:0.8rem; font-size:0.82rem;">
            <img src="${item.image}" alt="${escapeHtml(item.name)}" style="width:38px; height:38px; border-radius:6px; object-fit:cover;">
            <span style="flex:1;">${escapeHtml(item.name)} (x${item.qty})</span>
            <span style="color:var(--electric-blue); font-weight:700;">$${(item.price * item.qty).toFixed(2)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderCustomerWishlist() {
  const container = document.getElementById("customer-wishlist-grid");
  if (!container) return;

  if (State.wishlist.size === 0) {
    container.innerHTML = `
      <div class="empty-state-card" style="grid-column: 1 / -1;">
        <div class="empty-icon">🤍</div>
        <h3 class="empty-title">Your Wishlist is Empty</h3>
        <p class="empty-desc">Save bespoke items for future private acquisition by clicking the heart icon on any product.</p>
        <button class="btn-primary-gradient" onclick="switchView('marketplace')">Explore Marketplace</button>
      </div>
    `;
    return;
  }

  const wishProducts = Array.from(State.wishlist).map(id => State.products.find(p => p.id === id)).filter(Boolean);
  container.innerHTML = wishProducts.map(prod => renderProductCardHtml(prod, false)).join("");
}

function applyVaultCredit() {
  showToast("4,850 points converted: $485.00 Escrow Credit applied to your profile!", "success");
}

// ==========================================================================
// 17. THEME TOGGLE & TOAST NOTIFICATION ENGINE
// ==========================================================================

function toggleTheme() {
  const newTheme = State.theme === "dark" ? "light" : "dark";
  State.theme = newTheme;
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("valence_theme", newTheme);
  State.updateThemeIcon();
  showToast(`Switched to ${newTheme.toUpperCase()} theme mode`, "info");
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  let icon = "💎";
  if (type === "success") icon = "✓";
  if (type === "error") icon = "⚠️";
  if (type === "info") icon = "ℹ️";

  const toast = document.createElement("div");
  toast.className = "toast-glass-alert";
  toast.innerHTML = `
    <div class="toast-icon-wrap">${icon}</div>
    <div class="toast-body-text">${escapeHtml(message)}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}

// Helper utilities
function smoothScrollTo(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToFlashSale() {
  if (State.currentView !== "marketplace") switchView("marketplace");
  smoothScrollTo("flash-sale-section");
}

function toggleCategoryDrawer() {
  smoothScrollTo("catalog-section");
}

function handleNewsletterSubscribe() {
  const email = document.getElementById("newsletter-email").value;
  showToast(`Private invitation dispatched to ${email}`, "success");
  document.getElementById("newsletter-email").value = "";
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
