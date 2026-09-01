// ===== CART STATE =====
let cart = [];

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem('greennest_cart') || '[]');
  } catch (e) {
    cart = [];
  }
  return cart;
}

function saveCart() {
  localStorage.setItem('greennest_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const countElement = document.getElementById('cart-count');
  if (countElement) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems > 0) {
      countElement.textContent = totalItems;
      countElement.classList.remove('hidden');
    } else {
      countElement.classList.add('hidden');
    }
  }
}

function addToCart(product, quantity = 1) {
  if (!product || !product.id) return;

  loadCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image || null,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`${product.name} added to cart!`, 'success');
  updateCartCount();
}

function removeFromCart(productId) {
  loadCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCartItems();
  updateCartCount();
}

function updateQuantity(productId, newQuantity) {
  loadCart();
  const item = cart.find((i) => i.id === productId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    item.quantity = newQuantity;
    saveCart();
    renderCartItems();
    updateCartCount();
  }
}

function getCartTotal() {
  loadCart();
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart() {
  cart = [];
  saveCart();
  renderCartItems();
  updateCartCount();
}

function getCartQuantity() {
  loadCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCartSidebar() {
  const sidebar = document.getElementById('cart-body');
  if (!sidebar) return;

  loadCart();

  if (cart.length === 0) {
    sidebar.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16">
        <div class="w-20 h-20 bg-green-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <i data-lucide="shopping-bag" class="w-10 h-10 text-green-300 dark:text-gray-600"></i>
        </div>
        <p class="text-gray-500 dark:text-gray-400">Your cart is empty</p>
        <a href="products.html" class="mt-4 px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors">
          Browse Products
        </a>
      </div>
    `;
  } else {
    sidebar.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500 dark:text-gray-400">${getCartQuantity()} item(s) in cart</p>
          <button onclick="clearCart()" class="text-sm text-red-600 hover:text-red-700 dark:text-red-400 hover:underline">Clear All</button>
        </div>
        ${cart.map((item) => `
          <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div class="relative">
              <div class="w-16 h-16 rounded-lg bg-green-100 dark:bg-gray-700 overflow-hidden ${item.image ? '' : 'flex items-center justify-center'}">
                ${item.image
                  ? `<img src="${item.image.startsWith('assets/') || item.image.startsWith('./') ? item.image : item.image + '?auto=format&fit=crop&w=160&q=80'}" alt="${item.name}" class="w-full h-full object-cover">`
                  : `<i data-lucide="${getCategoryIcon(item.category)}" class="w-7 h-7 text-green-500"></i>`
                }
              </div>
              <button onclick="removeFromCart(${item.id})" class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 hover:bg-red-600 rounded-full text-white text-xs flex items-center justify-center transition-colors">
                <i data-lucide="x" class="w-3 h-3"></i>
              </button>
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-medium text-sm text-gray-900 dark:text-white truncate">${item.name}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">$${item.price.toFixed(2)}</p>
              <div class="flex items-center space-x-2 mt-1.5">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="qty-btn w-6 h-6 rounded-md border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                  <i data-lucide="minus" class="w-3 h-3 text-gray-600 dark:text-gray-400"></i>
                </button>
                <span class="w-6 text-center text-sm font-medium text-gray-900 dark:text-white">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="qty-btn w-6 h-6 rounded-md border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                  <i data-lucide="plus" class="w-3 h-3 text-gray-600 dark:text-gray-400"></i>
                </button>
              </div>
            </div>
            <p class="font-semibold text-sm text-gray-900 dark:text-white">$${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderCartSummary() {
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const shippingEl = document.getElementById('cart-shipping');

  if (!subtotalEl) return;

  const subtotal = getCartTotal();
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 7.99;
  const total = subtotal + shipping;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;
}

function renderCartItems() {
  renderCartSidebar();
  renderCartSummary();
}

function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty', 'warning');
    return;
  }
  showToast('Order placed successfully! Thank you for shopping with GreenNest.', 'success');
  clearCart();
}

// ===== PRODUCT DATA COMPONENT =====
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCartCount();
  createCartSidebar();
});

function createCartSidebar() {
  if (document.getElementById('cart-sidebar')) return;

  const sidebarHTML = `
    <div id="cart-sidebar" class="cart-sidebar fixed inset-y-0 right-0 z-[60] w-full sm:w-96 bg-white dark:bg-gray-900 shadow-2xl flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center space-x-2">
          <i data-lucide="shopping-cart" class="w-5 h-5 text-green-700 dark:text-green-400"></i>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Your Cart</h2>
        </div>
        <button onclick="closeCart()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Close cart">
          <i data-lucide="x" class="w-5 h-5 text-gray-600 dark:text-gray-400"></i>
        </button>
      </div>

      <!-- Cart Body -->
      <div id="cart-body" class="flex-1 overflow-y-auto px-6 py-4"></div>

      <!-- Footer -->
      <div class="border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-gray-500 dark:text-gray-400">Subtotal</span>
          <span id="cart-subtotal" class="font-medium text-gray-900 dark:text-white">$0.00</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500 dark:text-gray-400">Shipping</span>
          <span id="cart-shipping" class="font-medium text-gray-900 dark:text-white">$0.00</span>
        </div>
        <div class="flex justify-between text-base font-semibold pt-2 border-t border-gray-200 dark:border-gray-700">
          <span class="text-gray-900 dark:text-white">Total</span>
          <span id="cart-total" class="text-green-700 dark:text-green-400">$0.00</span>
        </div>
        <button onclick="checkout()" class="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', sidebarHTML);

  if (typeof lucide !== 'undefined') lucide.createIcons();
  renderCartItems();
}
