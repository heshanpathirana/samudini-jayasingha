/**
 * ==============================================================================
 * PARTICLES.JS - SUBTLE MOLECULAR / SCIENTIFIC CANVAS ANIMATION
 * ==============================================================================
 * Renders subtle floating nodes with gentle connective bonds (representing
 * molecules and cellular structures) on the hero canvas.
 * Highly optimized, respects battery and 'prefers-reduced-motion'.
 * ==============================================================================
 */

export function initParticles(canvasId = 'hero-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];

  // Particle configuration
  const particleCount = window.innerWidth < 768 ? 24 : 45;
  const maxDistance = 120;
  const colors = [
    'rgba(13, 148, 136, 0.35)',   // Teal
    'rgba(20, 184, 166, 0.3)',    // Light Teal
    'rgba(15, 39, 86, 0.25)',     // Navy
    'rgba(16, 185, 129, 0.25)'    // Mint
  ];

  function resizeCanvas() {
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width * window.devicePixelRatio || width;
    canvas.height = height * window.devicePixelRatio || height;
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 2.5 + 1.5;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      // Subtle pulse
      this.pulseSpeed = 0.02 + Math.random() * 0.02;
      this.pulseVal = Math.random() * Math.PI;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges smoothly
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      this.pulseVal += this.pulseSpeed;
    }

    draw() {
      const currentRadius = this.radius + Math.sin(this.pulseVal) * 0.5;
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(1, currentRadius), 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function init() {
    resizeCanvas();
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(13, 148, 136, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    drawLines();
    animationFrameId = requestAnimationFrame(animate);
  }

  // Handle window resizing
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
    }, 200);
  });

  // Pause animation when scrolled out of view to optimize CPU/GPU
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!animationFrameId) animate();
      } else {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    });
  }, { threshold: 0.1 });

  observer.observe(canvas);

  init();
  animate();
}
