/**
 * APP CONTROLLER - MONOTONIC VECTOR TECHNOLOGY (MVT)
 * Main initialization, header dynamics, counter animations, and form handler
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Backdrop & Border Shift
  const header = document.querySelector('.header-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      if (navMenu.classList.contains('mobile-open')) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'rgba(8, 12, 24, 0.98)';
        navMenu.style.padding = '30px';
        navMenu.style.borderBottom = '1px solid rgba(56, 189, 248, 0.2)';
      } else {
        navMenu.style.display = '';
      }
    });
  }

  // 3. Smooth Nav Link Scrolling & Active Tracking
  const navLinks = document.querySelectorAll('.nav-link, .footer-nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (navMenu && navMenu.classList.contains('mobile-open')) {
            navMenu.classList.remove('mobile-open');
            navMenu.style.display = '';
          }
        }
      }
    });
  });

  // 4. Section 4: "The Intelligence" Live Metric Counters Animation
  // Animates strictly from 0 to target value on viewport arrival
  const metricValues = document.querySelectorAll('.metric-value');

  function animateCounters() {
    metricValues.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 2200; // 2.2 seconds smooth count-up
      const start = 0;
      el.textContent = '0';
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth easeOutCubic curve
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = start + (target - start) * ease;

        el.textContent = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = isDecimal ? target.toFixed(1) : target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  const intelligenceSection = document.getElementById('the-intelligence');
  if (intelligenceSection) {
    let hasAnimated = false;
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.25 }
    );
    counterObserver.observe(intelligenceSection);
  }

  // 5. Contact & Inquiry Form Submission Handler
  const contactForm = document.getElementById('mvtContactForm');
  const formStatus = document.getElementById('formStatusMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Transmitting Architecture Specs...
      `;
      submitBtn.disabled = true;

      // Simulate transmission
      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Inquiry Initiated Successfully!
        `;
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        submitBtn.style.borderColor = '#34d399';

        if (formStatus) {
          formStatus.style.display = 'block';
          formStatus.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); padding: 14px 18px; border-radius: 10px; color: #a7f3d0; font-size: 0.92rem; margin-top: 16px;">
              ⚡ <strong>Request Received:</strong> A Lead Solutions Architect from Monotonic Vector Technology will review your technical specifications and connect with you within 4 business hours.
            </div>
          `;
        }

        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          submitBtn.style.borderColor = '';
        }, 5000);
      }, 1200);
    });
  }
});
