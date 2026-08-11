/**
 * LINE WITH MARKERS GRAPH
 * Monotonic Vector Technology - Growth & Scalability Visualizer
 * High-performance Canvas renderer with interactive glowing markers and tooltips
 */

(function () {
  const canvas = document.getElementById('heroLineGraphCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let hoveredPoint = null;
  let currentDatasetIndex = 0;

  // Monotonic Datasets (Strictly non-decreasing curves)
  const datasets = [
    {
      name: 'Realtime Vector Throughput',
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
      data: [12.4, 18.2, 29.5, 45.8, 68.2, 94.7, 142.8],
      unit: 'k ops/sec',
      growth: '+1,051%'
    },
    {
      name: 'Deterministic Scale Capacity',
      labels: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Phase 6', 'Phase 7'],
      data: [20, 35, 58, 88, 125, 180, 260],
      unit: 'TB Vector/s',
      growth: '+1,200%'
    },
    {
      name: 'Model Invariance SLA',
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
      data: [99.2, 99.6, 99.85, 99.95, 99.99, 99.995, 99.999],
      unit: '% Reliability',
      growth: '99.999%'
    }
  ];

  let points = [];
  let animProgress = 0;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    calculatePoints();
    drawGraph();
  }

  function calculatePoints() {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const padding = { top: 35, right: 35, bottom: 45, left: 45 };

    const currentData = datasets[currentDatasetIndex].data;
    const minVal = Math.min(...currentData) * 0.85;
    const maxVal = Math.max(...currentData) * 1.1;

    const availableWidth = width - padding.left - padding.right;
    const availableHeight = height - padding.top - padding.bottom;

    points = currentData.map((val, idx) => {
      const x = padding.left + (idx / (currentData.length - 1)) * availableWidth;
      const normalizedY = (val - minVal) / (maxVal - minVal);
      const y = height - padding.bottom - normalizedY * availableHeight;
      return {
        x,
        y,
        val,
        label: datasets[currentDatasetIndex].labels[idx],
        baseY: height - padding.bottom
      };
    });
  }

  function drawGraph() {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Grid Lines
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const y = 35 + (i / 4) * (height - 80);
      ctx.beginPath();
      ctx.moveTo(35, y);
      ctx.lineTo(width - 25, y);
      ctx.stroke();
    }

    if (points.length < 2) return;

    // 2. Draw Gradient Area Fill Beneath Curve
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const currentP1Y = p0.y + (p1.y - p0.y) * animProgress;
      const cpX = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(cpX, p0.y, cpX, currentP1Y, p1.x, currentP1Y);
    }

    ctx.lineTo(points[points.length - 1].x, height - 45);
    ctx.lineTo(points[0].x, height - 45);
    ctx.closePath();

    const areaGradient = ctx.createLinearGradient(0, 30, 0, height - 45);
    areaGradient.addColorStop(0, 'rgba(0, 240, 255, 0.28)');
    areaGradient.addColorStop(0.6, 'rgba(0, 132, 255, 0.12)');
    areaGradient.addColorStop(1, 'rgba(0, 82, 254, 0.0)');
    ctx.fillStyle = areaGradient;
    ctx.fill();

    // 3. Draw The Monotonic Curve Stroke
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const currentP1Y = p0.y + (p1.y - p0.y) * animProgress;
      const cpX = (p0.x + p1.x) / 2;
      ctx.bezierCurveTo(cpX, p0.y, cpX, currentP1Y, p1.x, currentP1Y);
    }

    const strokeGrad = ctx.createLinearGradient(points[0].x, 0, points[points.length - 1].x, 0);
    strokeGrad.addColorStop(0, '#0084ff');
    strokeGrad.addColorStop(0.5, '#00f0ff');
    strokeGrad.addColorStop(1, '#38bdf8');

    ctx.strokeStyle = strokeGrad;
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.stroke();

    // 4. Draw Glowing Markers on Every Datapoint
    points.forEach((pt, index) => {
      const isHovered = hoveredPoint === index;

      // Outer Halo Ring
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, isHovered ? 12 : 7, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? 'rgba(0, 240, 255, 0.4)' : 'rgba(0, 132, 255, 0.25)';
      ctx.fill();

      // Glowing Marker Circle
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, isHovered ? 7 : 4.5, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#ffffff' : '#00f0ff';
      ctx.fill();
      ctx.strokeStyle = '#0052fe';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Axis Label below
      ctx.fillStyle = isHovered ? '#00f0ff' : '#64748b';
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(pt.label, pt.x, height - 20);
    });

    // 5. Draw Active Tooltip if Hovered
    if (hoveredPoint !== null && points[hoveredPoint]) {
      const pt = points[hoveredPoint];
      const text = `${pt.val} ${datasets[currentDatasetIndex].unit}`;
      
      ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
      const textWidth = ctx.measureText(text).width;
      const tooltipW = textWidth + 24;
      const tooltipH = 32;
      let tooltipX = pt.x - tooltipW / 2;
      let tooltipY = pt.y - 45;

      // Prevent overflow
      if (tooltipX < 10) tooltipX = 10;
      if (tooltipX + tooltipW > width - 10) tooltipX = width - tooltipW - 10;

      // Tooltip Card Background
      ctx.fillStyle = 'rgba(11, 18, 34, 0.95)';
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 1.2;
      
      ctx.beginPath();
      ctx.roundRect(tooltipX, tooltipY, tooltipW, tooltipH, 6);
      ctx.fill();
      ctx.stroke();

      // Text inside Tooltip
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(text, tooltipX + tooltipW / 2, tooltipY + 20);
    }
  }

  function animate() {
    if (animProgress < 1) {
      animProgress += 0.04;
      if (animProgress > 1) animProgress = 1;
      drawGraph();
      requestAnimationFrame(animate);
    }
  }

  // Handle Mouse Hover
  canvas.addEventListener('mousemove', function (e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let found = null;
    points.forEach((pt, idx) => {
      const dist = Math.hypot(pt.x - mouseX, pt.y - mouseY);
      if (dist < 22) {
        found = idx;
      }
    });

    if (found !== hoveredPoint) {
      hoveredPoint = found;
      drawGraph();
    }
  });

  canvas.addEventListener('mouseleave', function () {
    if (hoveredPoint !== null) {
      hoveredPoint = null;
      drawGraph();
    }
  });

  // Timeframe Pills
  const timeframePills = document.querySelectorAll('.graph-pill-btn');
  timeframePills.forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      timeframePills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      currentDatasetIndex = idx % datasets.length;
      animProgress = 0;
      calculatePoints();
      animate();

      // Update stat cards below graph
      const statVal = document.getElementById('heroGraphGrowthVal');
      if (statVal) {
        statVal.textContent = datasets[currentDatasetIndex].growth;
      }
    });
  });

  window.addEventListener('resize', resizeCanvas);

  // Initialize
  setTimeout(() => {
    resizeCanvas();
    animate();
  }, 100);
})();
