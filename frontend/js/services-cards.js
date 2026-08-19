/**
 * SECTION 04: WHAT WE BUILD / SERVICES
 * Interactive 3D Flip Cards Controller (Single Section Deck)
 */

(function () {
  const flipCardContainers = document.querySelectorAll('.service-flip-card-container');

  flipCardContainers.forEach(container => {
    // Click toggle for touch devices & explicit clicks
    container.addEventListener('click', (e) => {
      // Toggle flipped state
      container.classList.toggle('is-flipped');
    });

    // Keyboard accessibility
    container.setAttribute('tabindex', '0');
    container.setAttribute('role', 'region');
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        container.classList.toggle('is-flipped');
      }
    });
  });
})();
