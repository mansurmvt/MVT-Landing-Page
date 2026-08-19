/**
 * SECTION 02: THE STORY / FOUNDATION
 * Connected Physical Journey: Origin -> Problem -> Idea -> Building -> Deployment -> Growth
 */

(function () {
  const storyItems = document.querySelectorAll('.story-station-item');
  const energyFill = document.querySelector('.story-energy-line-fill');
  const timelineWrapper = document.querySelector('.story-timeline-wrapper');

  if (!storyItems.length) return;

  function updateStoryScroll() {
    if (!timelineWrapper) return;
    const rect = timelineWrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate progress as user scrolls through story
    const startY = rect.top;
    const totalHeight = rect.height;

    if (startY <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25) {
      const scrolled = (windowHeight * 0.75 - startY) / (totalHeight + windowHeight * 0.5);
      const progress = Math.min(Math.max(scrolled, 0), 1);
      if (energyFill) {
        energyFill.style.height = `${progress * 100}%`;
      }
    }

    storyItems.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight * 0.8) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateStoryScroll, { passive: true });
  window.addEventListener('resize', updateStoryScroll);
  updateStoryScroll();
})();
