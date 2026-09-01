function renderNavbar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isActive = (page) => currentPage === page ? 'text-green-700 dark:text-green-400 font-semibold border-b-2 border-green-700 dark:border-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400';
  const homeActive = (currentPage === 'index.html' || currentPage === 'home2.html') ? 'text-green-700 dark:text-green-400 font-semibold border-b-2 border-green-700 dark:border-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400';

  const navHTML = `
    <!-- Desktop Navbar -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 no-print">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <a href="index.html" class="flex items-center gap-2 group">
            <div class="w-9 h-9 bg-green-700 dark:bg-green-500 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
              <i data-lucide="leaf" class="w-5 h-5 text-white"></i>
            </div>
            <span class="text-xl font-bold text-green-800 dark:text-green-300 tracking-tight">GreenNest</span>
          </a>

          <!-- Desktop Links -->
          <div class="hidden lg:flex items-center space-x-1">

            <!-- Home Dropdown -->
            <div class="dropdown">
              <button class="inline-flex items-center px-2 py-2 text-sm rounded-lg transition-all duration-200 ${homeActive}">
                Home
                <i data-lucide="chevron-down" class="w-4 h-4 ml-1"></i>
              </button>
              <div class="dropdown-menu absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50">
                <a href="index.html" class="flex items-center px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-700 transition-colors">
                  <i data-lucide="home" class="w-4 h-4 mr-3 text-green-600"></i>Home 1
                </a>
                <a href="home2.html" class="flex items-center px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-700 transition-colors">
                  <i data-lucide="home" class="w-4 h-4 mr-3 text-green-600"></i>Home 2
                </a>
              </div>
            </div>

            <a href="about.html" class="px-2 py-2 text-sm rounded-lg transition-all duration-200 ${isActive('about.html')}">About</a>
            <a href="products.html" class="px-2 py-2 text-sm rounded-lg transition-all duration-200 ${isActive('products.html')}">Products</a>
            <a href="plant-care.html" class="px-2 py-2 text-sm rounded-lg transition-all duration-200 ${isActive('plant-care.html')}">Plant Care</a>
            <a href="bulk-orders.html" class="px-2 py-2 text-sm rounded-lg transition-all duration-200 ${isActive('bulk-orders.html')}">Bulk Orders</a>
            <a href="contact.html" class="px-2 py-2 text-sm rounded-lg transition-all duration-200 ${isActive('contact.html')}">Contact</a>
          </div>

          <!-- Right Actions -->
          <div class="flex items-center space-x-1.5">

            <!-- Theme Toggle -->
            <button onclick="toggleTheme()" class="hidden lg:inline-flex p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Toggle theme" id="theme-toggle-desktop">
              <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
              <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
            </button>

            <!-- RTL / LTR Toggle -->
            <button onclick="toggleDir()" class="hidden lg:inline-flex px-2 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-semibold" title="Toggle RTL / LTR direction" id="dir-toggle">
              <span id="dir-label">LTR</span>
            </button>

            <!-- Login -->
            <a href="login.html" class="hidden lg:inline-flex items-center px-3 py-2 border border-green-700 dark:border-green-500 text-green-700 dark:text-green-400 text-sm font-medium rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors">
              <i data-lucide="log-in" class="w-4 h-4 mr-1.5"></i>
              Login
            </a>

            <!-- Sign Up -->
            <a href="signup.html" class="hidden lg:inline-flex items-center px-3 py-2 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
              <i data-lucide="user-plus" class="w-4 h-4 mr-1.5"></i>
              Sign Up
            </a>

            <!-- Mobile Hamburger -->
            <button onclick="toggleMobileMenu()" class="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" id="hamburger-btn">
              <i data-lucide="menu" class="w-6 h-6" id="hamburger-icon"></i>
              <i data-lucide="x" class="w-6 h-6 hidden" id="close-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="mobile-menu fixed inset-0 z-40 lg:hidden no-print">
      <div class="absolute inset-0 bg-black/50" onclick="toggleMobileMenu()"></div>
      <div class="relative w-72 h-full bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto">
        <div class="p-6">
          <div class="flex items-center justify-between mb-8">
            <a href="index.html" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
                <i data-lucide="leaf" class="w-4 h-4 text-white"></i>
              </div>
              <span class="text-lg font-bold text-green-800 dark:text-green-300">GreenNest</span>
            </a>
            <button onclick="toggleMobileMenu()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <i data-lucide="x" class="w-5 h-5 text-gray-600 dark:text-gray-400"></i>
            </button>
          </div>

          <div class="space-y-1">
            <!-- Home accordion -->
            <div>
              <button onclick="toggleMobileHome()" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                <span class="font-medium">Home</span>
                <i data-lucide="chevron-down" class="w-4 h-4 transition-transform" id="mobile-home-chevron"></i>
              </button>
              <div id="mobile-home-submenu" class="hidden pl-11 space-y-1 mt-1">
                <a href="index.html" class="block px-3 py-2 text-sm rounded-lg text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-700">Home 1</a>
                <a href="home2.html" class="block px-3 py-2 text-sm rounded-lg text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-gray-800 hover:text-green-700">Home 2</a>
              </div>
            </div>

            <a href="about.html" class="block px-3 py-2.5 rounded-lg ${currentPage === 'about.html' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}">
              <span class="font-medium">About</span>
            </a>
            <a href="products.html" class="block px-3 py-2.5 rounded-lg ${currentPage === 'products.html' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}">
              <span class="font-medium">Products</span>
            </a>
            <a href="plant-care.html" class="block px-3 py-2.5 rounded-lg ${currentPage === 'plant-care.html' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}">
              <span class="font-medium">Plant Care</span>
            </a>
            <a href="bulk-orders.html" class="block px-3 py-2.5 rounded-lg ${currentPage === 'bulk-orders.html' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}">
              <span class="font-medium">Bulk Orders</span>
            </a>
            <a href="contact.html" class="block px-3 py-2.5 rounded-lg ${currentPage === 'contact.html' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}">
              <span class="font-medium">Contact</span>
            </a>
          </div>

          <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div class="flex justify-center items-center gap-3 px-3 py-2">
              <button onclick="toggleTheme()" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800" title="Toggle dark / light theme">
                <i data-lucide="sun" class="w-6 h-6 hidden dark:block text-yellow-500"></i>
                <i data-lucide="moon" class="w-6 h-6 block dark:hidden text-gray-600"></i>
              </button>
              <button onclick="toggleDir()" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800" title="Toggle RTL / LTR direction">
                <i data-lucide="arrow-right" id="mobile-dir-icon-ltr" class="w-6 h-6 block text-gray-600 dark:text-gray-400"></i>
                <i data-lucide="arrow-left" id="mobile-dir-icon-rtl" class="w-6 h-6 hidden text-gray-600 dark:text-gray-400"></i>
              </button>
            </div>

            <div class="mt-4 space-y-2">
              <a href="login.html" class="flex items-center justify-center w-full px-4 py-2.5 border border-green-700 dark:border-green-500 text-green-700 dark:text-green-400 font-medium rounded-lg transition-colors">
                <i data-lucide="log-in" class="w-4 h-4 mr-2"></i>Login
              </a>
              <a href="signup.html" class="flex items-center justify-center w-full px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors">
                <i data-lucide="user-plus" class="w-4 h-4 mr-2"></i>Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Apply theme immediately
  applyTheme();
  // Apply saved direction immediately
  applyDir();

  updateCartCount();

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function toggleMobileHome() {
  const submenu = document.getElementById('mobile-home-submenu');
  const chevron = document.getElementById('mobile-home-chevron');
  const isHidden = submenu.classList.contains('hidden');
  if (isHidden) {
    submenu.classList.remove('hidden');
    chevron.style.transform = 'rotate(180deg)';
  } else {
    submenu.classList.add('hidden');
    chevron.style.transform = 'rotate(0deg)';
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-icon');
  const close = document.getElementById('close-icon');
  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    menu.classList.remove('open');
    hamburger.classList.remove('hidden');
    close.classList.add('hidden');
    document.body.style.overflow = '';
  } else {
    menu.classList.add('open');
    hamburger.classList.add('hidden');
    close.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  updateDirLabel();
  updateThemeIcons();
});
