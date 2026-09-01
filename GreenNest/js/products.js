// ===== PRODUCT DATA =====
const productCategories = [
  { name: 'Indoor Plants', icon: 'flower-2', filterKey: 'indoor-plants' },
  { name: 'Flower Pots', icon: 'flower', filterKey: 'flower-pots' },
  { name: 'Soil', icon: 'mountain', filterKey: 'soil' },
  { name: 'Seeds', icon: 'sprout', filterKey: 'seeds' },
  { name: 'Fertilizers', icon: 'droplets', filterKey: 'fertilizers' },
  { name: 'Gardening Tools', icon: 'wrench', filterKey: 'gardening-tools' }
];

const imgBase = 'https://images.unsplash.com/photo-';
const products = [
  // Indoor Plants
  { id: 1, name: 'Monstera Deliciosa', category: 'Indoor Plants', price: 34.99, oldPrice: 44.99, rating: 4.8, reviews: 152, image: 'assets/images/Monstera%20Deliciosa.jpg', featured: true, description: 'A stunning tropical plant with large, split leaves that bring a touch of the jungle indoors. Low maintenance and air-purifying.' },
  { id: 2, name: 'Snake Plant', category: 'Indoor Plants', price: 24.99, oldPrice: null, rating: 4.7, reviews: 210, image: 'assets/images/Snake%20Plant.jpg', featured: true, description: 'Nearly indestructible and perfect for beginners. Its tall, architectural leaves filter toxins and thrive in low light.' },
  { id: 3, name: 'Peace Lily', category: 'Indoor Plants', price: 29.99, oldPrice: 36.99, rating: 4.6, reviews: 98, image: 'assets/images/Peace%20Lily.jpg', featured: false, description: 'Elegant white blooms and glossy dark leaves. An excellent air purifier that adds serenity to any room.' },
  { id: 4, name: 'Fiddle Leaf Fig', category: 'Indoor Plants', price: 54.99, oldPrice: null, rating: 4.5, reviews: 76, image: 'assets/images/Fiddle%20Leaf%20Fig.jpg', featured: false, description: 'The iconic statement plant with large, violin-shaped leaves. Adds drama and height to living spaces.' },
  { id: 5, name: 'Pothos Golden', category: 'Indoor Plants', price: 19.99, oldPrice: null, rating: 4.8, reviews: 340, image: 'assets/images/Pothos%20Golden.jpg', featured: true, description: 'Fast-growing, trailing vine with gorgeous golden-green foliage. Perfect for hanging baskets or shelves.' },
  { id: 6, name: 'Spider Plant', category: 'Indoor Plants', price: 16.99, oldPrice: null, rating: 4.7, reviews: 189, image: 'assets/images/Spider%20Plant.jpg', featured: false, description: 'Classic, easy-to-grow houseplant with arching leaves and baby plantlets. Pet-friendly and resilient.' },
  { id: 7, name: 'Aloe Vera', category: 'Indoor Plants', price: 22.99, oldPrice: null, rating: 4.6, reviews: 245, image: 'assets/images/Aloe%20Vera.jpg', featured: false, description: 'Succulent with medicinal gel in its fleshy leaves. Loves bright light and needs minimal watering.' },
  { id: 8, name: 'Rubber Plant', category: 'Indoor Plants', price: 38.99, oldPrice: null, rating: 4.4, reviews: 102, image: 'assets/images/Rubber%20Plant.jpg', featured: false, description: 'Bold, glossy leaves in deep green. A sturdy, forgiving plant that can grow quite tall with proper care.' },

  // Flower Pots
  { id: 9, name: 'Terracotta Planter 8"', category: 'Flower Pots', price: 18.99, oldPrice: 22.99, rating: 4.7, reviews: 156, image: 'assets/images/Terracotta%20Planter%208.jpg', featured: true, description: 'Classic terracotta pot with drainage hole. Naturally porous for healthy roots. Timeless earthy look.' },
  { id: 10, name: 'Ceramic Glazed Pot', category: 'Flower Pots', price: 32.99, oldPrice: null, rating: 4.8, reviews: 89, image: 'assets/images/Ceramic%20Glazed%20Pot.jpg', featured: false, description: 'Modern ceramic pot with beautiful glaze finish. Water-resistant and available in subtle earthy tones.' },
  { id: 12, name: 'Self-Watering Planter', category: 'Flower Pots', price: 27.99, oldPrice: null, rating: 4.5, reviews: 128, image: 'assets/images/Self-Watering%20Planter.jpg', featured: true, description: 'Smart planter with reservoir system that helps keep your plants hydrated even when you\'re away.' },

  // Soil
  { id: 15, name: 'Organic Potting Mix', category: 'Soil', price: 14.99, oldPrice: 18.99, rating: 4.8, reviews: 410, image: 'assets/images/Organic%20Potting%20Mix.jpg', featured: true, description: 'Premium organic potting mix enriched with compost and perlite for optimal drainage and nutrition.' },
  { id: 16, name: 'Cactus & Succulent Soil', category: 'Soil', price: 12.99, oldPrice: null, rating: 4.7, reviews: 235, image: 'assets/images/Cactus%20%26%20Succulent%20Soil.jpg', featured: false, description: 'Well-draining mix specially formulated for cacti and succulents. Prevents root rot.' },
  { id: 17, name: 'Seed Starting Mix', category: 'Soil', price: 11.99, oldPrice: null, rating: 4.6, reviews: 178, image: imgBase + '1464226184884-fa280b87c399', featured: false, description: 'Fine-textured, sterilized mix ideal for germinating seeds and rooting cuttings.' },
  { id: 18, name: 'Raised Bed Garden Soil', category: 'Soil', price: 24.99, oldPrice: null, rating: 4.5, reviews: 96, image: imgBase + '1591857177580-dc82b9ac4e1e', featured: false, description: 'Rich, nutrient-dense soil perfect for vegetable and herb raised beds. Promotes strong growth.' },

  // Seeds
  { id: 20, name: 'Tomato Heirloom Seeds', category: 'Seeds', price: 5.99, oldPrice: 7.99, rating: 4.7, reviews: 268, image: 'assets/images/Tomato%20Heirloom%20Seeds.jpg', featured: true, description: 'Pack of premium heirloom tomato seeds. Grow juicy, flavorful tomatoes right in your garden.' },
  { id: 21, name: 'Wildflower Mix Seeds', category: 'Seeds', price: 7.99, oldPrice: null, rating: 4.8, reviews: 320, image: 'assets/images/Wildflower%20Mix%20Seeds.jpg', featured: true, description: 'Colorful mix of native wildflowers that attract pollinators and butterflies to your garden.' },

  // Fertilizers
  { id: 26, name: 'All-Purpose Plant Food', category: 'Fertilizers', price: 16.99, oldPrice: null, rating: 4.7, reviews: 289, image: 'assets/images/All-Purpose%20Plant%20Food.jpg', featured: true, description: 'Balanced 10-10-10 fertilizer for robust growth across all plant types. Easy to use granules.' },
  { id: 28, name: 'Slow-Release Fertilizer', category: 'Fertilizers', price: 18.99, oldPrice: null, rating: 4.5, reviews: 134, image: imgBase + '1589923188900-85dae523342b', featured: false, description: 'Time-release nutrients that feed plants for up to 6 months. Set it and forget it.' },

  // Gardening Tools
  { id: 30, name: 'Stainless Hand Trowel', category: 'Gardening Tools', price: 11.99, oldPrice: 14.99, rating: 4.8, reviews: 356, image: 'assets/images/Stainless%20Hand%20Trowel', featured: true, description: 'Durable stainless steel trowel with ergonomic wooden handle. Essential for planting and transplanting.' },
  { id: 31, name: 'Gardening Glove Set', category: 'Gardening Tools', price: 15.99, oldPrice: null, rating: 4.7, reviews: 410, image: 'assets/images/Gardening%20Glove%20Set.jpg', featured: true, description: 'Flexible, breathable gloves with reinforced fingertips for protection during planting and pruning.' },
  { id: 32, name: 'Pruning Shears', category: 'Gardening Tools', price: 24.99, oldPrice: 29.99, rating: 4.7, reviews: 245, image: 'assets/images/Pruning%20Shears.jpg', featured: false, description: 'Sharp, precision bypass pruners with comfortable grip. Ideal for trimming branches and shaping plants.' },
  { id: 33, name: 'Watering Can 2L', category: 'Gardening Tools', price: 19.99, oldPrice: null, rating: 4.6, reviews: 178, image: 'assets/images/Watering%20Can%202L.jpg', featured: false, description: 'Modern watering can with a fine rose spout for gentle watering. Perfect for indoor and balcony plants.' },
  { id: 34, name: 'Garden Tool Set (5pc)', category: 'Gardening Tools', price: 39.99, oldPrice: 49.99, rating: 4.8, reviews: 295, image: 'assets/images/Garden%20Tool%20Set%20(5pc).jpg', featured: true, description: 'Complete 5-piece toolkit including trowel, fork, cultivator, weeder, and shear. Premium quality set.' }
];

// ===== UTILITIES =====
function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

function createStarIcons(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(rating);
    stars += `<i data-lucide="star" class="w-4 h-4 ${filled ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'}"></i>`;
  }
  return stars;
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function productImage(p, size) {
  if (!p.image) return '';
  if (p.image.startsWith('assets/') || p.image.startsWith('./')) {
    return p.image;
  }
  return `${p.image}?auto=format&fit=crop&w=${size}&q=80`;
}

// ===== RENDER PRODUCT CARD =====
function createProductCard(product) {
  return `
    <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl card-hover group">
      <div class="relative">
        <div class="product-img-container w-full bg-green-50 dark:bg-gray-700 relative overflow-hidden">
          <img src="${productImage(product, 600)}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
          ${product.oldPrice ? `
            <span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              SAVE ${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </span>
          ` : ''}
          <button onclick="openProductModal(${product.id})" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
            <span class="px-4 py-2 bg-white/90 text-green-700 rounded-xl text-sm font-semibold shadow-lg">
              <i data-lucide="eye" class="w-4 h-4 inline mr-1"></i>Quick View
            </span>
          </button>
        </div>
      </div>

      <div class="p-4">
        <p class="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">${product.category}</p>
        <h3 class="font-semibold text-gray-900 dark:text-white text-base mb-2 line-clamp-1">${product.name}</h3>

        <div class="flex items-center space-x-2 mb-3">
          <div class="flex items-center" data-lucide-replace="true">
            ${createStarIcons(product.rating)}
          </div>
          <span class="text-sm text-gray-500 dark:text-gray-400">(${product.rating})</span>
          <span class="text-xs text-gray-400 dark:text-gray-500">${product.reviews} reviews</span>
        </div>

        <div class="flex items-center space-x-2 mb-4">
          <span class="text-lg font-bold text-gray-900 dark:text-white">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="text-sm text-gray-400 line-through">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>

        <div class="flex space-x-2">
          <button onclick="addToCart(getProductById(${product.id}))" class="flex-1 px-4 py-2 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium rounded-xl transition-colors shadow-sm flex items-center justify-center">
            <i data-lucide="shopping-cart" class="w-4 h-4 mr-2"></i>
            Add to Cart
          </button>
          <button onclick="openProductModal(${product.id})" class="px-4 py-2 border border-green-700 dark:border-green-500 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 font-medium rounded-xl transition-colors">
            <i data-lucide="eye" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ===== RENDER COMPACT HORIZONTAL PRODUCT CARD (for offer sections) =====
function createOfferCard(product) {
  return `
    <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl card-hover group flex flex-col sm:flex-row">
      <div class="sm:w-44 sm:shrink-0">
        <div class="offer-img-container w-full bg-green-50 dark:bg-gray-700 relative overflow-hidden">
          <img src="${productImage(product, 400)}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
          ${product.oldPrice ? `
            <span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              SAVE ${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </span>
          ` : ''}
        </div>
      </div>
      <div class="flex-1 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <div class="min-w-0">
          <p class="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">${product.category}</p>
          <h3 class="font-semibold text-gray-900 dark:text-white text-lg mb-1 line-clamp-1">${product.name}</h3>
          <div class="flex items-center space-x-2 mb-2">
            <div class="flex items-center" data-lucide-replace="true">
              ${createStarIcons(product.rating)}
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">(${product.rating})</span>
            <span class="text-xs text-gray-400 dark:text-gray-500">${product.reviews} reviews</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-xl font-bold text-gray-900 dark:text-white">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="text-sm text-gray-400 line-through">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
        </div>
        <button onclick="addToCart(getProductById(${product.id}))" class="self-start sm:self-center shrink-0 px-5 py-2.5 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium rounded-xl transition-colors shadow-sm flex items-center justify-center">
          <i data-lucide="shopping-cart" class="w-4 h-4 mr-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay fixed inset-0 z-[70] bg-black/60 flex items-center justify-center p-4';
  modal.id = 'product-modal';

  modal.innerHTML = `
    <div class="modal-content bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onclick="event.stopPropagation()">
      <div class="relative">
        <div class="h-64 bg-green-100 dark:bg-gray-800 relative overflow-hidden">
          <img src="${productImage(product, 900)}" alt="${product.name}" class="w-full h-full object-cover">
        </div>
        <button onclick="closeProductModal()" class="absolute top-4 right-4 w-9 h-9 bg-white/90 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow">
          <i data-lucide="x" class="w-5 h-5 text-gray-700 dark:text-gray-300"></i>
        </button>
      </div>

      <div class="p-6 sm:p-8">
        <p class="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">${product.category}</p>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">${product.name}</h2>

        <div class="flex items-center space-x-3 mb-4">
          <div class="flex items-center">
            ${createStarIcons(product.rating)}
          </div>
          <span class="text-sm text-gray-500 dark:text-gray-400">${product.rating} out of 5</span>
          <span class="text-sm text-gray-400 dark:text-gray-500">• ${product.reviews} reviews</span>
        </div>

        <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">${product.description}</p>

        <div class="flex items-center justify-between py-4 border-y border-gray-200 dark:border-gray-700 mb-6">
          <div>
            <div class="flex items-center space-x-3">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="text-lg text-gray-400 line-through">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <p class="text-sm text-green-600 dark:text-green-400 mt-1">Free shipping on orders over $75</p>
          </div>

          <div class="flex items-center space-x-2">
            <button onclick="decrementModalQty()" class="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
              <i data-lucide="minus" class="w-4 h-4 text-gray-600 dark:text-gray-400"></i>
            </button>
            <span id="modal-qty" class="w-10 text-center font-semibold text-gray-900 dark:text-white">1</span>
            <button onclick="incrementModalQty()" class="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
              <i data-lucide="plus" class="w-4 h-4 text-gray-600 dark:text-gray-400"></i>
            </button>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <button onclick="addToCartFromModal(${product.id})" class="flex-1 py-3 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center">
            <i data-lucide="shopping-cart" class="w-5 h-5 mr-2"></i>
            Add to Cart
          </button>
          <button onclick="addToCartFromModal(${product.id}); closeProductModal()" class="flex-1 py-3 border border-green-700 dark:border-green-500 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 font-semibold rounded-xl transition-colors">
            <i data-lucide="check" class="w-5 h-5 mr-2"></i>
            Done
          </button>
        </div>

        <div class="mt-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center">
            <i data-lucide="truck" class="w-4 h-4 mr-2 text-green-600"></i> Shipping Information
          </h4>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 mr-2 text-green-600"></i> Free shipping on orders over $75</li>
            <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 mr-2 text-green-600"></i> 30-day hassle-free returns</li>
            <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 mr-2 text-green-600"></i> Live arrival guarantee on all plants</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProductModal();
  });

  window._currentProduct = product;
  window._modalQty = 1;

  requestAnimationFrame(() => modal.classList.add('active'));

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
  }
}

function incrementModalQty() {
  window._modalQty = (window._modalQty || 1) + 1;
  const el = document.getElementById('modal-qty');
  if (el) el.textContent = window._modalQty;
}

function decrementModalQty() {
  window._modalQty = Math.max(1, (window._modalQty || 1) - 1);
  const el = document.getElementById('modal-qty');
  if (el) el.textContent = window._modalQty;
}

function addToCartFromModal(productId) {
  const qty = window._modalQty || 1;
  const product = getProductById(productId);
  if (product) addToCart(product, qty);
}

// ===== PRODUCTS PAGE LOGIC =====
let currentFilters = {
  search: '',
  categories: [],
  price: 0,
  sort: 'featured'
};

function initProductsPage() {
  const maxPrice = Math.max(...products.map((p) => p.price));
  currentFilters.price = maxPrice;

  if (document.getElementById('price-max')) {
    document.getElementById('price-max').max = maxPrice;
    document.getElementById('price-max').value = maxPrice;
    document.getElementById('price-value').textContent = `$${maxPrice.toFixed(2)}`;
  }

  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category');
  if (categoryParam) {
    const cat = productCategories.find((c) => c.name === categoryParam);
    if (cat) {
      currentFilters.categories = [cat.name];
      const checkbox = document.querySelector(`input[value="${cat.name}"]`);
      if (checkbox) checkbox.checked = true;
    }
  }

  const productParam = params.get('product');
  if (productParam && getProductById(productParam)) {
    setTimeout(() => openProductModal(Number(productParam)), 500);
  }

  applyFilters();
}

function toggleCategoryFilter(category) {
  const index = currentFilters.categories.indexOf(category);
  if (index > -1) {
    currentFilters.categories.splice(index, 1);
  } else {
    currentFilters.categories.push(category);
  }
  applyFilters();
}

function updatePriceFilter(value) {
  currentFilters.price = Number(value);
  const priceValueEl = document.getElementById('price-value');
  if (priceValueEl) priceValueEl.textContent = `$${Number(value).toFixed(2)}`;
  applyFilters();
}

function updateSort(value) {
  currentFilters.sort = value;
  applyFilters();
}

function getFilteredProducts() {
  let result = [...products];

  if (currentFilters.search) {
    const q = currentFilters.search.toLowerCase();
    result = result.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (currentFilters.categories.length > 0) {
    result = result.filter((p) => currentFilters.categories.includes(p.category));
  }

  result = result.filter((p) => p.price <= currentFilters.price);

  switch (currentFilters.sort) {
    case 'price-low':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    default:
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
}

function applyFilters() {
  const filtered = getFilteredProducts();
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  const emptyState = document.getElementById('no-products');

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (countEl) countEl.textContent = '0 products found';
  } else {
    if (emptyState) emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map((p) => createProductCard(p)).join('');
    if (countEl) countEl.textContent = `${filtered.length} product${filtered.length > 1 ? 's' : ''} found`;
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function clearFilters() {
  currentFilters = {
    search: '',
    categories: [],
    price: Math.max(...products.map((p) => p.price)),
    sort: 'featured'
  };

  const searchInput = document.getElementById('product-search');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.category-checkbox').forEach((cb) => (cb.checked = false));

  const priceSlider = document.getElementById('price-max');
  if (priceSlider) {
    const maxPrice = Math.max(...products.map((p) => p.price));
    priceSlider.value = maxPrice;
    document.getElementById('price-value').textContent = `$${maxPrice.toFixed(2)}`;
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  applyFilters();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('products-grid')) {
    initProductsPage();
  }
});
