/**
 * NEURAL NETWORK BACKGROUND CANVAS
 * Section 4: "The Intelligence"
 * Multi-layer synaptic particle mesh with mouse interaction and signal pulses
 */

(function () {
  const canvas = document.getElementById('neuralNetworkCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 160 };
  let pulses = [];

  const PARTICLE_COUNT = 65;
  const MAX_DISTANCE = 140;

  function initDimensions() {
    const parent = canvas.parentElement;
    width = canvas.width = parent.clientWidth;
    height = canvas.height = parent.clientHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.75;
      this.vy = (Math.random() - 0.5) * 0.75;
      this.radius = Math.random() * 2.2 + 1.2;
      this.baseColor = Math.random() > 0.4 ? '#00f0ff' : '#0084ff';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactive pull
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 1.8;
          this.y += (dy / dist) * force * 1.8;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.baseColor;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.baseColor;
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }
  }

  class Pulse {
    constructor(p1, p2) {
      this.p1 = p1;
      this.p2 = p2;
      this.progress = 0;
      this.speed = Math.random() * 0.02 + 0.015;
    }

    update() {
      this.progress += this.speed;
    }

    draw() {
      const currentX = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
      const currentY = this.p1.y + (this.p2.y - this.p1.y) * this.progress;

      ctx.beginPath();
      ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#00f0ff';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function spawnPulses() {
    if (pulses.length < 12 && Math.random() < 0.25) {
      const idx1 = Math.floor(Math.random() * particles.length);
      const p1 = particles[idx1];
      
      // Find a close neighbor
      for (let j = 0; j < particles.length; j++) {
        if (idx1 !== j) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < MAX_DISTANCE) {
            pulses.push(new Pulse(p1, p2));
            break;
          }
        }
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    // Connect synaptic lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

        if (dist < MAX_DISTANCE) {
          const alpha = 1 - dist / MAX_DISTANCE;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.35})`;
          ctx.lineWidth = alpha * 1.5;
          ctx.stroke();
        }
      }
    }

    // Connect to mouse if within radius
    if (mouse.x !== null && mouse.y !== null) {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dist < mouse.radius) {
          const alpha = 1 - dist / mouse.radius;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.5})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    // Pulses
    spawnPulses();
    for (let i = pulses.length - 1; i >= 0; i--) {
      const pulse = pulses[i];
      pulse.update();
      pulse.draw();
      if (pulse.progress >= 1) {
        pulses.splice(i, 1);
      }
    }

    requestAnimationFrame(render);
  }

  // Mouse Listener on the container
  const container = canvas.parentElement;
  container.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  container.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    initDimensions();
    initParticles();
  });

  initDimensions();
  initParticles();
  render();
})();
