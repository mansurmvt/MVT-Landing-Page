/**
 * SECTION 5: INDUSTRIES & DOMAINS ORBITAL VISUALIZER
 * Moving circle with glowing markers doing "big and small" animation while revolving
 */

(function () {
  const revolvingDisc = document.getElementById('orbitalRevolvingDisc');
  const inspectorTag = document.getElementById('domainInspectorTag');
  const inspectorTitle = document.getElementById('domainInspectorTitle');
  const inspectorDesc = document.getElementById('domainInspectorDesc');
  const inspectorFeatures = document.getElementById('domainInspectorFeatures');

  if (!revolvingDisc) return;

  const domains = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: '🏥',
      tag: 'HIPAA & CLINICAL AI COMPLIANT',
      title: 'Healthcare & Life Sciences Systems',
      desc: 'Fault-tolerant clinical SaaS infrastructure, HIPAA-compliant patient telemetry streams, and high-throughput genomic vector search engines engineered for zero downtime.',
      features: [
        'Sub-second Electronic Health Record (EHR) vector search',
        'Deterministic HIPAA & FDA Title 21 CFR compliance',
        'Real-time IoT patient monitoring telemetry pipelines'
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      icon: '🛍️',
      tag: 'SUB-MILLISEC CONVERSION ENGINES',
      title: 'High-Velocity E-Commerce & Retail AI',
      desc: 'Next-gen multi-tenant commerce architecture powering real-time vector recommendations, sub-50ms catalog searches, and resilient checkout pipelines during massive flash traffic spikes.',
      features: [
        'Vector-driven multi-modal visual & semantic product search',
        'Zero-regression inventory synchronization across millions of SKUs',
        'Dynamic personalized pricing and automated checkout resilience'
      ]
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: '🏢',
      tag: 'SPATIAL & ASSET INTELLIGENCE',
      title: 'Real Estate & PropTech Infrastructure',
      desc: 'Geospatial vector indexing, automated valuation models (AVM), and dynamic property portfolio management platforms engineered for hyper-accurate market analytics.',
      features: [
        'Geospatial multi-polygon vector matching and neighborhood clustering',
        'Automated real-time property yield forecasting algorithms',
        'High-concurrency document & lease OCR automation'
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: '💳',
      tag: 'DETERMINISTIC ZERO-LATENCY',
      title: 'FinTech & High-Frequency Ledgers',
      desc: 'Mission-critical financial SaaS backbones featuring immutable transaction logs, sub-millisecond fraud pattern detection, and automated algorithmic reconciliation systems.',
      features: [
        'Monotonic transaction journals with mathematical invariance',
        'Real-time vector anomaly detection preventing fraudulent flows',
        'SOC2 Type II and PCI-DSS compliant cloud architectures'
      ]
    },
    {
      id: 'retail',
      name: 'Retail',
      icon: '📦',
      tag: 'OMNICHANNEL SUPPLY SCALING',
      title: 'Omnichannel Retail & Logistics Systems',
      desc: 'Intelligent supply chain networks integrating POS hardware, warehouse robotics orchestration, and dynamic consumer demand forecasting engines.',
      features: [
        'Autonomous multi-warehouse inventory routing & demand forecasting',
        'Unified point-of-sale (POS) and online catalog synchronization',
        'Smart cold-chain and logistics sensor telemetry ingestion'
      ]
    },
    {
      id: 'government',
      name: 'Government',
      icon: '🏛️',
      tag: 'SOVEREIGN CLOUD & CIVIC TECH',
      title: 'Public Sector & Sovereign Civic Tech',
      desc: 'Hardened civic SaaS platforms delivering seamless citizen digital services, federated identity access management, and air-gapped sovereign cloud resilience.',
      features: [
        'Zero-Trust FedRAMP & GovCloud certified architectures',
        'High-density citizen registry processing with AES-256 encryption',
        'Reliable accessibility (WCAG 2.1 AAA) across all civic portals'
      ]
    }
  ];

  const radius = 190; // Radius of orbit
  const total = domains.length;
  let activeIndex = 0;
  let isHovering = false;

  // Render Markers on Circular Perimeter
  revolvingDisc.innerHTML = '';
  const markerElements = [];

  domains.forEach((dom, idx) => {
    const angle = (idx / total) * (Math.PI * 2) - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    const marker = document.createElement('div');
    marker.className = `orbital-domain-marker marker-pulsing ${idx === 0 ? 'active' : ''}`;
    marker.style.left = `calc(50% + ${x}px - 37px)`;
    marker.style.top = `calc(50% + ${y}px - 37px)`;
    // Stagger pulse animations so they breathe rhythmically
    marker.style.animationDelay = `${idx * 0.45}s`;

    marker.innerHTML = `
      <div class="orbit-counter-rotate" style="display:flex; flex-direction:column; align-items:center;">
        <span class="marker-inner-icon">${dom.icon}</span>
        <span class="marker-inner-name">${dom.name}</span>
      </div>
    `;

    marker.addEventListener('click', () => {
      selectDomain(idx);
    });

    marker.addEventListener('mouseenter', () => {
      selectDomain(idx);
    });

    revolvingDisc.appendChild(marker);
    markerElements.push(marker);
  });

  // Activate continuous rotation on the disc
  revolvingDisc.classList.add('orbit-active');

  function selectDomain(idx) {
    activeIndex = idx;
    const dom = domains[idx];

    markerElements.forEach((el, i) => {
      if (i === idx) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Update Inspector UI
    if (inspectorTag) inspectorTag.textContent = dom.tag;
    if (inspectorTitle) inspectorTitle.textContent = dom.title;
    if (inspectorDesc) inspectorDesc.textContent = dom.desc;
    
    if (inspectorFeatures) {
      inspectorFeatures.innerHTML = dom.features
        .map(
          (feat) => `
          <li class="inspector-feature-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${feat}</span>
          </li>
        `
        )
        .join('');
    }
  }

  // Hover over the orbital container pauses the rotation so user can inspect easily
  const visualWrapper = document.querySelector('.orbital-visual-wrapper');
  if (visualWrapper) {
    visualWrapper.addEventListener('mouseenter', () => {
      revolvingDisc.classList.add('orbit-paused');
      const counterRotates = revolvingDisc.querySelectorAll('.orbit-counter-rotate');
      counterRotates.forEach((el) => el.classList.add('orbit-paused'));
    });

    visualWrapper.addEventListener('mouseleave', () => {
      revolvingDisc.classList.remove('orbit-paused');
      const counterRotates = revolvingDisc.querySelectorAll('.orbit-counter-rotate');
      counterRotates.forEach((el) => el.classList.remove('orbit-paused'));
    });
  }

  // Initialize with domain 0
  selectDomain(0);
})();
