/**
 * SECTION 06: GROWTH / RESULTS PROGRESSION GRAPH
 * High-Precision Dynamic Monotonic Telemetry Visualizer
 * Sequence: BUILD -> DEPLOY -> MONITOR -> OPTIMIZE -> GROW
 */

(function () {
  const canvas = document.getElementById('growthProgressionCanvas');
  const stepBtns = document.querySelectorAll('.growth-step-btn');
  const stageHeading = document.getElementById('growthActiveStageHeading');
  const stageDesc = document.getElementById('growthActiveStageDesc');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let currentStageIndex = 0;
  let targetProgress = 0.2;
  let currentAnimProgress = 0.2;
  let animId = null;

  // Stages with progress ratios (0.2 to 1.0) and architectural specs
  const growthStages = [
    {
      name: 'BUILD',
      heading: 'Stage 01: Core Architecture Construction',
      desc: 'Engineering immutable database models, REST APIs, and vector similarity indexes with zero technical debt.',
      progress: 0.2,
      label: 'Build Core'
    },
    {
      name: 'DEPLOY',
      heading: 'Stage 02: Zero-Downtime Multi-Region Rollout',
      desc: 'Deploying canary releases behind high-throughput load balancers with sub-millisecond edge routing.',
      progress: 0.4,
      label: 'Edge Deploy'
    },
    {
      name: 'MONITOR',
      heading: 'Stage 03: Full-Spectrum APM Telemetry',
      desc: 'Instrumenting distributed tracing, real-time error logging, and latency percentile tracking (p95 / p99).',
      progress: 0.6,
      label: 'Telemetry'
    },
    {
      name: 'OPTIMIZE',
      heading: 'Stage 04: Monotonic Query & Cache Tuning',
      desc: 'Continuous index defragmentation, cache warming, and compute efficiency improvements.',
      progress: 0.8,
      label: 'Tuning'
    },
    {
      name: 'GROW',
      heading: 'Stage 05: Compounding Technological Velocity',
      desc: 'Scaling traffic and feature capabilities exponentially while keeping system latency and error rates invariant.',
      progress: 1.0,
      label: 'Scale Invariance'
    }
  ];

  function drawGrowthChart(progress) {
    const parent = canvas.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const width = rect.width || 450;
    const height = 180; // Compact, perfectly sized chart height

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Padding
    const padLeft = 40;
    const padRight = 30;
    const padTop = 25;
    const padBottom = 30;

    const plotWidth = width - padLeft - padRight;
    const plotHeight = height - padTop - padBottom;

    // Draw Subtle Grid Lines & Y-axis labels
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#64748b';
    ctx.font = '9px "JetBrains Mono", monospace';

    const yLevels = [
      { y: padTop, label: 'MAX' },
      { y: padTop + plotHeight * 0.5, label: '50%' },
      { y: padTop + plotHeight, label: 'BASE' }
    ];

    yLevels.forEach(lvl => {
      ctx.beginPath();
      ctx.moveTo(padLeft, lvl.y);
      ctx.lineTo(width - padRight, lvl.y);
      ctx.stroke();
      ctx.fillText(lvl.label, 8, lvl.y + 3);
    });

    // Milestone Coordinates (Ascending curve)
    const milestones = growthStages.map((stage, i) => {
      const p = stage.progress;
      const x = padLeft + plotWidth * (i / (growthStages.length - 1));
      // S-Curve ascent: rapid gain with stability
      const normalizedY = Math.pow(i / (growthStages.length - 1), 0.75);
      const y = (padTop + plotHeight) - plotHeight * normalizedY;
      return { x, y, stage, index: i };
    });

    // Draw Ascending Curve Up to Current Progress
    const currentX = padLeft + plotWidth * progress;

    ctx.beginPath();
    ctx.moveTo(milestones[0].x, milestones[0].y);

    const steps = 40;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      if (t > progress) break;

      const x = padLeft + plotWidth * t;
      const normalizedY = Math.pow(t, 0.75);
      const y = (padTop + plotHeight) - plotHeight * normalizedY;
      ctx.lineTo(x, y);
    }

    // Glowing Neon Stroke
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 3.5;
    ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
    ctx.shadowBlur = 12;
    ctx.stroke();

    // Area Fill Under Curve
    ctx.lineTo(currentX, padTop + plotHeight);
    ctx.lineTo(padLeft, padTop + plotHeight);
    ctx.closePath();

    const areaGrad = ctx.createLinearGradient(0, padTop, 0, padTop + plotHeight);
    areaGrad.addColorStop(0, 'rgba(0, 240, 255, 0.28)');
    areaGrad.addColorStop(0.6, 'rgba(0, 82, 254, 0.1)');
    areaGrad.addColorStop(1, 'rgba(7, 13, 26, 0)');
    ctx.fillStyle = areaGrad;
    ctx.shadowBlur = 0;
    ctx.fill();

    // Draw Milestone Nodes
    milestones.forEach((m) => {
      const isReached = (m.index / (growthStages.length - 1)) <= progress + 0.05;
      const isActive = m.index === currentStageIndex;

      // Outer Ring
      ctx.beginPath();
      ctx.arc(m.x, m.y, isActive ? 7 : 5, 0, Math.PI * 2);
      ctx.fillStyle = '#081022';
      ctx.fill();
      ctx.strokeStyle = isReached ? (isActive ? '#ffffff' : '#00f0ff') : 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = isActive ? 3 : 2;
      if (isActive) {
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 15;
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Core Dot
      ctx.beginPath();
      ctx.arc(m.x, m.y, isActive ? 3 : 2, 0, Math.PI * 2);
      ctx.fillStyle = isReached ? '#00f0ff' : 'rgba(56, 189, 248, 0.4)';
      ctx.fill();

      // Milestone Text Tag Below
      ctx.fillStyle = isActive ? '#00f0ff' : '#64748b';
      ctx.font = `${isActive ? 'bold' : 'normal'} 9.5px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(m.stage.name, m.x, padTop + plotHeight + 18);
    });

    ctx.restore();
  }

  function animateToProgress(target) {
    cancelAnimationFrame(animId);

    function step() {
      const diff = target - currentAnimProgress;
      if (Math.abs(diff) < 0.01) {
        currentAnimProgress = target;
        drawGrowthChart(currentAnimProgress);
      } else {
        currentAnimProgress += diff * 0.18;
        drawGrowthChart(currentAnimProgress);
        animId = requestAnimationFrame(step);
      }
    }

    animId = requestAnimationFrame(step);
  }

  function setGrowthStage(index) {
    currentStageIndex = index;
    stepBtns.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    const stage = growthStages[index];
    if (stageHeading) stageHeading.textContent = stage.heading;
    if (stageDesc) stageDesc.textContent = stage.desc;

    targetProgress = stage.progress;
    animateToProgress(targetProgress);
  }

  stepBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => setGrowthStage(index));
  });

  window.addEventListener('resize', () => {
    drawGrowthChart(currentAnimProgress);
  });

  // Initial draw
  setGrowthStage(0);
})();
