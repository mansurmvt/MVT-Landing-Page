/**
 * SECTION 05: PROOF OF CAPABILITY
 * Breakdown: WHAT WE BUILD -> HOW WE BUILD IT -> TECH STACK -> HOW WE DEPLOY -> HOW WE SECURE IT
 */

(function () {
  const proofCards = document.querySelectorAll('.stack-proof-card');

  proofCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-6px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
})();
