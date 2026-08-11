/**
 * SECTION 3: THE MONOTONIC PRINCIPLE
 * Interactive Door Box + Dynamic Vector Branching Line Tracing to Sub-boxes
 * ONLY opens when clicked by the user (No auto-open on scroll)
 */

(function () {
  const doorBox = document.getElementById('doorTriggerBox');
  const svgContainer = document.getElementById('circuitBranchingSvg');
  const subboxesGrid = document.getElementById('subboxesGrid');
  const subboxes = document.querySelectorAll('.subbox-card');
  const hintPill = document.getElementById('doorHintText');
  const doorIcon = document.getElementById('doorIconSvg');

  if (!doorBox || !svgContainer || !subboxes.length) return;

  let isExpanded = false;

  function renderBranchingLines() {
    svgContainer.innerHTML = '';
    const svgRect = svgContainer.getBoundingClientRect();
    const boxRect = doorBox.getBoundingClientRect();

    // Start point: Center bottom of the Door Box relative to SVG
    const startX = svgRect.width / 2;
    const startY = 0;
    const splitY = 35; // Where the single trunk splits into multiple paths

    // Create defs for gradients and glow filters
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <linearGradient id="branchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#00f0ff" />
        <stop offset="50%" stop-color="#0084ff" />
        <stop offset="100%" stop-color="#38bdf8" />
      </linearGradient>
      <filter id="branchGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    `;
    svgContainer.appendChild(defs);

    // 1. Draw Main Central Trunk Line
    const trunkPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    trunkPath.setAttribute('d', `M ${startX} ${startY} L ${startX} ${splitY}`);
    trunkPath.setAttribute('stroke', 'url(#branchGrad)');
    trunkPath.setAttribute('stroke-width', '3.5');
    trunkPath.setAttribute('fill', 'none');
    trunkPath.setAttribute('filter', 'url(#branchGlow)');
    trunkPath.classList.add('circuit-branch-path', 'active');
    svgContainer.appendChild(trunkPath);

    // 2. Draw Branching Lines to each of the Sub-boxes
    subboxes.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const targetX = (cardRect.left + cardRect.width / 2) - svgRect.left;
      const targetY = svgRect.height - 8;

      // Draw Smooth Branch Curve
      const branchPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const cp1Y = splitY + (targetY - splitY) * 0.35;
      const cp2Y = splitY + (targetY - splitY) * 0.75;

      const d = `M ${startX} ${splitY} C ${startX} ${cp1Y}, ${targetX} ${cp2Y}, ${targetX} ${targetY}`;
      branchPath.setAttribute('d', d);
      branchPath.setAttribute('stroke', 'url(#branchGrad)');
      branchPath.setAttribute('stroke-width', '2.5');
      branchPath.setAttribute('fill', 'none');
      branchPath.setAttribute('filter', 'url(#branchGlow)');
      branchPath.classList.add('circuit-branch-path', 'active');
      branchPath.style.animationDelay = `${0.15 + idx * 0.08}s`;

      svgContainer.appendChild(branchPath);

      // Terminal Node Indicator Dot
      const terminalDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      terminalDot.setAttribute('cx', targetX);
      terminalDot.setAttribute('cy', targetY);
      terminalDot.setAttribute('r', '5');
      terminalDot.setAttribute('fill', '#00f0ff');
      terminalDot.setAttribute('filter', 'url(#branchGlow)');
      svgContainer.appendChild(terminalDot);
    });
  }

  function toggleDoorExpansion() {
    isExpanded = !isExpanded;

    if (isExpanded) {
      // Opened State
      doorBox.classList.remove('pulse-big-small');
      doorBox.classList.add('door-opened');
      
      if (doorIcon) {
        doorIcon.classList.add('door-active');
      }

      if (hintPill) {
        hintPill.innerHTML = '<span class="section-tag-dot"></span> Gateway Open • Monotonic Core Active (Click to Close)';
        hintPill.style.borderColor = '#00f0ff';
        hintPill.style.color = '#00f0ff';
      }

      if (subboxesGrid) {
        subboxesGrid.style.display = 'grid';
      }

      // Render lines & reveal sub-boxes
      setTimeout(() => {
        renderBranchingLines();
        subboxes.forEach((box, idx) => {
          setTimeout(() => {
            box.classList.remove('subbox-hidden');
            box.classList.add('subbox-visible');
          }, 200 + idx * 100);
        });
      }, 50);

    } else {
      // Collapsed State
      svgContainer.innerHTML = '';
      subboxes.forEach((box) => {
        box.classList.add('subbox-hidden');
        box.classList.remove('subbox-visible');
      });

      if (subboxesGrid) {
        setTimeout(() => {
          if (!isExpanded) subboxesGrid.style.display = 'none';
        }, 400);
      }

      doorBox.classList.remove('door-opened');
      doorBox.classList.add('pulse-big-small');
      
      if (doorIcon) {
        doorIcon.classList.remove('door-active');
      }

      if (hintPill) {
        hintPill.innerHTML = '<span class="section-tag-dot"></span> Click the Gateway to Open Monotonic Core';
        hintPill.style.borderColor = '';
        hintPill.style.color = '';
      }
    }
  }

  // Set initial state: Subboxes hidden until clicked
  if (subboxesGrid) {
    subboxesGrid.style.display = 'none';
  }
  subboxes.forEach((box) => {
    box.classList.add('subbox-hidden');
  });

  doorBox.addEventListener('click', toggleDoorExpansion);

  window.addEventListener('resize', () => {
    if (isExpanded) {
      renderBranchingLines();
    }
  });
})();
