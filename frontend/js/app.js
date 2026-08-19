/**
 * GLOBAL APPLICATION CONTROLLER
 * Smooth Scrolling, Active Navigation Tracking, and Direct Contact Actions
 */

(function () {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'rgba(7, 13, 26, 0.98)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '24px';
        navMenu.style.borderBottom = '1px solid var(--border-glow)';
      }
    });
  }

  // Active Link Observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
})();
