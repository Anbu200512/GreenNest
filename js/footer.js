function renderFooter() {
  const footerHTML = `
    <footer class="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-100 no-print border-t-4 border-green-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <!-- Brand -->
          <div class="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="index.html" class="flex items-center space-x-2 mb-4">
              <div class="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
                <i data-lucide="leaf" class="w-5 h-5 text-white"></i>
              </div>
              <span class="text-xl font-bold text-green-700 dark:text-green-300">GreenNest</span>
            </a>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
              Your trusted partner for premium plants, pots, soil, seeds, fertilizers, and gardening tools. Bringing nature home with joy and care.
            </p>
            <div class="flex space-x-3">
              <a href="#" class="w-9 h-9 bg-green-50 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-100 dark:hover:bg-gray-700 transition-colors" title="Facebook" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-green-700 dark:text-white"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>
              </a>
              <a href="#" class="w-9 h-9 bg-green-50 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-100 dark:hover:bg-gray-700 transition-colors" title="Instagram" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-700 dark:text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="w-9 h-9 bg-green-50 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-100 dark:hover:bg-gray-700 transition-colors" title="Twitter" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-green-700 dark:text-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" class="w-9 h-9 bg-green-50 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-100 dark:hover:bg-gray-700 transition-colors" title="YouTube" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-green-700 dark:text-white"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12z"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider text-green-700 dark:text-green-300 mb-4">Quick Links</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Home</a></li>
              <li><a href="about.html" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">About</a></li>
              <li><a href="products.html" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Products</a></li>
              <li><a href="plant-care.html" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Plant Care</a></li>
              <li><a href="bulk-orders.html" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Bulk Orders</a></li>
              <li><a href="contact.html" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Categories -->
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider text-green-700 dark:text-green-300 mb-4">Categories</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="products.html?category=Indoor%20Plants" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Indoor Plants</a></li>
              <li><a href="products.html?category=Flower%20Pots" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Flower Pots</a></li>
              <li><a href="products.html?category=Soil" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Soil</a></li>
              <li><a href="products.html?category=Seeds" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Seeds</a></li>
              <li><a href="products.html?category=Fertilizers" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Fertilizers</a></li>
              <li><a href="products.html?category=Gardening%20Tools" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">Gardening Tools</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider text-green-700 dark:text-green-300 mb-4">Contact</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start space-x-2">
                <i data-lucide="map-pin" class="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 shrink-0"></i>
                <span class="text-gray-600 dark:text-green-100/70">42 Green Meadow Lane, Bloomfield, CA 90210</span>
              </li>
              <li class="flex items-center space-x-2">
                <i data-lucide="phone" class="w-4 h-4 text-green-600 dark:text-green-400 shrink-0"></i>
                <a href="tel:+15551234567" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li class="flex items-center space-x-2">
                <i data-lucide="mail" class="w-4 h-4 text-green-600 dark:text-green-400 shrink-0"></i>
                <a href="mailto:hello@greennest.com" class="text-gray-600 hover:text-green-700 dark:text-green-100/70 dark:hover:text-white transition-colors">hello@greennest.com</a>
              </li>
              <li class="flex items-start space-x-2">
                <i data-lucide="clock" class="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 shrink-0"></i>
                <span class="text-gray-600 dark:text-green-100/70">Mon-Sat: 9:00 AM - 8:00 PM<br>Sun: 10:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <p class="text-sm text-gray-500 dark:text-gray-500">&copy; ${new Date().getFullYear()} GreenNest. All rights reserved.</p>
          <div class="flex space-x-4 text-sm">
            <a href="#" class="text-gray-500 hover:text-green-700 dark:text-gray-500 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-500 hover:text-green-700 dark:text-gray-500 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderFooter();
});
