/**
 * SECTION 01: HERO LINE GRAPH WITH GLOWING MARKERS
 * Illustrative Monotonic Growth Trajectory without fake statistical claims
 */

(function () {
  const canvas = document.getElementById('heroLineGraphCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationProgress = 0;
  let animFrameId = null;

  // Monotonic strictly non-decreasing curve points
  const basePoints = [
    { x: 0.05, y: 0.85, label: 'Sprint 0' },
    { x: 0.20, y: 0.72, label: 'Arch Spec' },
    { x: 0.38, y: 0.58, label: 'Vector Index' },
    { x: 0.55, y: 0.44, label: 'Continuous Deploy' },
    { x: 0.75, y: 0.26, label: 'Zero-Regression' },
    { x: 0.95, y: 0.12, label: 'Global Scale' }
  ];

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    drawGraph(animationProgress, rect.width, rect.height);
  }

  function drawGraph(progress, width, height) {
    ctx.clearRect(0, 0, width, height);

    // Draw Subtle Grid Lines
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;

    for (let i = 1; i <= 4; i++) {
      const y = (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(30, y);
      ctx.lineTo(width - 20, y);
      ctx.stroke();
    }

    const pts = basePoints.map(p => ({
      x: 30 + p.x * (width - 50),
      y: 20 + p.y * (height - 50),
      label: p.label
    }));

    // Draw Gradient Area Under Curve
    const areaGrad = ctx.createLinearGradient(0, 0, 0, height);
    areaGrad.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
    areaGrad.addColorStop(0.7, 'rgba(0, 82, 254, 0.08)');
    areaGrad.addColorStop(1, 'rgba(7, 13, 26, 0)');

    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);

    const maxIndex = Math.floor((pts.length - 1) * progress);
    const fraction = ((pts.length - 1) * progress) - maxIndex;

    for (let i = 0; i < maxIndex; i++) {
      const curr = pts[i];
      const next = pts[i + 1];
      const cpX = (curr.x + next.x) / 2;
      ctx.bezierCurveTo(cpX, curr.y, cpX, next.y, next.x, next.y);
    }

    if (maxIndex < pts.length - 1) {
      const curr = pts[maxIndex];
      const next = pts[maxIndex + 1];
      const targetX = curr.x + (next.x - curr.x) * fraction;
      const targetY = curr.y + (next.y - curr.y) * fraction;
      const cpX = (curr.x + targetX) / 2;
      ctx.bezierCurveTo(cpX, curr.y, cpX, targetY, targetX, targetY);
    }

    // Line Path
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 3.5;
    ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
    ctx.shadowBlur = 14;
    ctx.stroke();

    // Complete Area Path
    if (pts.length > 0) {
      const lastPt = maxIndex < pts.length - 1
        ? { x: pts[maxIndex].x + (pts[maxIndex + 1].x - pts[maxIndex].x) * fraction, y: pts[maxIndex].y + (pts[maxIndex + 1].y - pts[maxIndex].y) * fraction }
        : pts[pts.length - 1];

      ctx.lineTo(lastPt.x, height - 10);
      ctx.lineTo(pts[0].x, height - 10);
      ctx.closePath();
      ctx.fillStyle = areaGrad;
      ctx.shadowBlur = 0;
      ctx.fill();
    }

    // Draw Glowing Point Markers
    for (let i = 0; i <= maxIndex; i++) {
      const pt = pts[i];
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;

      // Outer Ring
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#081022';
      ctx.fill();
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Inner Core Dot
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function startAnimation() {
    let start = null;
    const duration = 1800;

    function frame(time) {
      if (!start) start = time;
      const elapsed = time - start;
      animationProgress = Math.min(elapsed / duration, 1);
      
      const rect = canvas.parentElement.getBoundingClientRect();
      drawGraph(animationProgress, rect.width, rect.height);

      if (animationProgress < 1) {
        animFrameId = requestAnimationFrame(frame);
      }
    }

    cancelAnimationFrame(animFrameId);
    animFrameId = requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resizeCanvas);
  
  // Trigger when visible
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startAnimation();
    }
  }, { threshold: 0.2 });

  observer.observe(canvas);
  resizeCanvas();
})();
