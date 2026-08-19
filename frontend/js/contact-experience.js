/**
 * SECTION 08: UNIQUE CONTACT EXPERIENCE
 * Interactive Project Builder & Axios REST API Form Submission (POST /api/contact)
 */

(function () {
  const projectOptions = document.querySelectorAll('.project-option-pill');
  const projectTypeHidden = document.getElementById('selectedProjectType');
  const contactForm = document.getElementById('interactiveContactForm');
  const statusAlert = document.getElementById('contactStatusAlert');
  const submitBtn = document.getElementById('contactSubmitBtn');

  if (!contactForm) return;

  // Handle Project Type Selection
  projectOptions.forEach(option => {
    option.addEventListener('click', () => {
      projectOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      const selectedVal = option.getAttribute('data-value');
      if (projectTypeHidden) {
        projectTypeHidden.value = selectedVal;
      }
    });
  });

  // Handle Form Submission via Axios
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const timeline = document.getElementById('contactTimeline')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();
    const projectType = projectTypeHidden ? projectTypeHidden.value : 'Custom Enterprise SaaS';

    // UI Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="circuit-energy-flow">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
        <span>Transmitting Scope to Architecture Team...</span>
      `;
    }

    if (statusAlert) {
      statusAlert.className = 'form-status-alert';
      statusAlert.style.display = 'none';
    }

    try {
      // Call Axios API Client
      const result = await window.MvtApi.submitProjectInquiry({
        name,
        email,
        projectType,
        timeline,
        message
      });

      // Show Real Success State
      if (statusAlert) {
        statusAlert.className = 'form-status-alert success';
        statusAlert.innerHTML = `
          <strong>✓ Inquiry Transmitted Successfully!</strong><br>
          ${result.message || 'A Senior Solutions Architect will review your technical specifications and contact you within 4 hours.'}
          <br><small style="color: #6ee7b7; font-family: var(--font-mono); margin-top: 4px; display: inline-block;">Ref ID: ${result.inquiryId || 'MVT-LIVE'}</small>
        `;
        statusAlert.style.display = 'block';
      }

      contactForm.reset();

    } catch (err) {
      // Show Real Error State
      if (statusAlert) {
        statusAlert.className = 'form-status-alert error';
        statusAlert.innerHTML = `
          <strong>✕ Communication Notice:</strong><br>
          ${err.message || 'Could not reach server. Please reach us directly via WhatsApp or Telegram.'}
        `;
        statusAlert.style.display = 'block';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Initiate Architecture Discovery</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        `;
      }
    }
  });
})();
