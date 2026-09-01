// ===== SHARED HELPERS =====
function getCategoryImgClass(category) {
  const classes = {
    'Indoor Plants': 'bg-gradient-to-br from-green-400 to-green-600',
    'Flower Pots': 'bg-gradient-to-br from-amber-400 to-amber-600',
    'Soil': 'bg-gradient-to-br from-amber-700 to-amber-900',
    'Seeds': 'bg-gradient-to-br from-lime-400 to-lime-600',
    'Fertilizers': 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    'Gardening Tools': 'bg-gradient-to-br from-gray-400 to-gray-600'
  };
  return classes[category] || 'bg-gradient-to-br from-green-400 to-green-600';
}

function getCategoryIcon(category) {
  const icons = {
    'Indoor Plants': 'flower-2',
    'Flower Pots': 'flower',
    'Soil': 'mountain',
    'Seeds': 'sprout',
    'Fertilizers': 'droplets',
    'Gardening Tools': 'wrench'
  };
  return icons[category] || 'package';
}

// ===== THEME MANAGEMENT =====
function applyTheme() {
  const savedTheme = localStorage.getItem('greennest_theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('greennest_theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('greennest_theme', 'dark');
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Apply theme before anything else (prevent flashing)
applyTheme();
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.remove('theme-loading');
});

// Listen for system theme changes if user hasn't set preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('greennest_theme')) {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
  const existingToast = document.getElementById('toast-container');
  if (existingToast) existingToast.remove();

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-amber-600',
    info: 'bg-blue-600'
  };

  const icons = {
    success: 'check-circle-2',
    error: 'x-circle',
    warning: 'alert-triangle',
    info: 'info'
  };

  const toast = document.createElement('div');
  toast.id = 'toast-container';
  toast.className = `toast ${colors[type] || colors.success} text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center space-x-3 max-w-sm`;
  toast.innerHTML = `
    <i data-lucide="${icons[type] || 'check-circle-2'}" class="w-5 h-5 shrink-0"></i>
    <span class="text-sm font-medium">${message}</span>
  `;
  document.body.appendChild(toast);

  if (typeof lucide !== 'undefined') lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== RTL / LTR DIRECTION =====
function applyDir() {
  const savedDir = localStorage.getItem('greennest_dir');
  if (savedDir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

function toggleDir() {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  if (isRTL) {
    document.documentElement.setAttribute('dir', 'ltr');
    localStorage.setItem('greennest_dir', 'ltr');
  } else {
    document.documentElement.setAttribute('dir', 'rtl');
    localStorage.setItem('greennest_dir', 'rtl');
  }
  updateDirLabel();
}

function updateDirLabel() {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  const label = isRTL ? 'RTL' : 'LTR';
  const desktopLabel = document.getElementById('dir-label');
  const mobileLtrIcon = document.getElementById('mobile-dir-icon-ltr');
  const mobileRtlIcon = document.getElementById('mobile-dir-icon-rtl');
  if (desktopLabel) desktopLabel.textContent = label;
  if (mobileLtrIcon) mobileLtrIcon.classList.toggle('hidden', isRTL);
  if (mobileRtlIcon) mobileRtlIcon.classList.toggle('hidden', !isRTL);
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const suns = document.querySelectorAll('[data-lucide="sun"]');
  const moons = document.querySelectorAll('[data-lucide="moon"]');
  suns.forEach(s => s.classList.toggle('hidden', !isDark));
  moons.forEach(m => m.classList.toggle('hidden', isDark));
}

// Apply direction before anything else
applyDir();

// ===== BACK TO TOP =====
function createBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.className = 'back-to-top fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-green-700 hover:bg-green-800 text-white shadow-lg flex items-center justify-center transition-colors';
  btn.innerHTML = '<i data-lucide="arrow-up" class="w-5 h-5"></i>';
  btn.setAttribute('aria-label', 'Back to top');
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);

  if (typeof lucide !== 'undefined') lucide.createIcons();

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
}

// ===== FAQ ACCORDION =====
function initAccordion() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    button.addEventListener('click', () => {
      const isOpen = answer.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach((otherItem) => {
        otherItem.querySelector('.faq-answer').classList.remove('open');
        otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        otherItem.querySelector('.faq-toggle').classList.remove('bg-gray-50', 'dark:bg-gray-800');
      });

      if (!isOpen) {
        answer.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
        button.classList.add('bg-gray-50', 'dark:bg-gray-800');
      }
    });
  });
}

// ===== NEWSLETTER FORM =====
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]');
      if (!email.value || !isValidEmail(email.value)) {
        showToast('Please enter a valid email address', 'error');
        email.classList.add('border-red-500');
        email.focus();
        return;
      }

      saveEmailToNewsletter(email.value);
      showToast('Thanks for subscribing to our newsletter!', 'success');
      form.reset();
      email.classList.remove('border-red-500');
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function saveEmailToNewsletter(email) {
  const prefs = JSON.parse(localStorage.getItem('greennest_preferences') || '{}');
  const currentEmails = prefs.newsletter || [];
  if (!currentEmails.includes(email)) {
    currentEmails.push(email);
  }
  prefs.newsletter = currentEmails;
  localStorage.setItem('greennest_preferences', JSON.stringify(prefs));
}

// ===== GENERIC MODAL =====
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeModalOnOverlayClick(e) {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ===== CART SIDEBAR =====
function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  if (sidebar) {
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
      sidebar.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      sidebar.classList.add('open');
      document.body.style.overflow = 'hidden';
      renderCartItems();
    }
  }
}

function closeCart() {
  const sidebar = document.getElementById('cart-sidebar');
  if (sidebar) {
    sidebar.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  createBackToTop();
  initScrollAnimations();
  initAccordion();
  initNewsletter();
});
