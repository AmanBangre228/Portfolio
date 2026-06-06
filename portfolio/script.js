/* =========================================
   AMAN BANGRE PORTFOLIO — JAVASCRIPT
   ========================================= */

(function() {
  'use strict';

  // ─── PARTICLE SYSTEM ───────────────────────────────────────────────────
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrameId;
  let mouseX = 0, mouseY = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.7 ? '#ff6b2b' : '#00f5ff';
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life > this.maxLife) this.reset();
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      // Mouse attraction
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        this.x += dx * 0.002;
        this.y += dy * 0.002;
      }
    }
    draw() {
      const fade = Math.min(this.life / 40, 1) * Math.min(1, (this.maxLife - this.life) / 40);
      ctx.save();
      ctx.globalAlpha = this.opacity * fade;
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
    for (let i = 0; i < count; i++) {
      const p = new Particle();
      p.life = Math.random() * p.maxLife; // stagger
      particles.push(p);
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 90) * 0.12;
          ctx.strokeStyle = '#00f5ff';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    animFrameId = requestAnimationFrame(animateParticles);
  }

  window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
  resizeCanvas();
  initParticles();
  animateParticles();


  // ─── TYPEWRITER ────────────────────────────────────────────────────────
  const phrases = [
    'Mechanical Engineer at YCCE Nagpur',
    'CFD Analyst | ANSYS Fluent Expert',
    'Formula-Wing Aerodynamicist',
    'Hexacopter & Drone Builder',
    'Embedded Systems Enthusiast',
    'Innovating at the Edge of Physics',
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  const typeEl = document.getElementById('typewriter-text');

  function typeWriter() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      typeEl.textContent = phrase.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(typeWriter, 2200);
        return;
      }
    } else {
      typeEl.textContent = phrase.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(typeWriter, deleting ? 45 : 80);
  }
  setTimeout(typeWriter, 1800);


  // ─── COUNTER ANIMATION ─────────────────────────────────────────────────
  function animateCounter(el, target, decimals = 0, duration = 2000) {
    const startTime = performance.now();
    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      el.textContent = decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
    }
    requestAnimationFrame(update);
  }

  let countersStarted = false;
  function startCounters() {
    if (countersStarted) return;
    countersStarted = true;
    document.querySelectorAll('.hero-stat-val').forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const decimals = target % 1 !== 0 ? 2 : 0;
      animateCounter(el, target, decimals);
    });
  }


  // ─── SKILL BARS ANIMATION ──────────────────────────────────────────────
  let skillsAnimated = false;
  function animateSkillBars() {
    if (skillsAnimated) return;
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      skillsAnimated = true;
      document.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
          bar.style.width = width + '%';
        }, i * 80);
      });
    }
  }


  // ─── SCROLL REVEAL ─────────────────────────────────────────────────────
  function revealElements() {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) {
        el.classList.add('visible');
      }
    });
  }

  // Add reveal class to elements
  function addRevealClasses() {
    const selectors = [
      '.about-card', '.about-hud-panel',
      '.skill-category',
      '.project-card',
      '.timeline-card',
      '.contact-info', '.contact-form-wrapper'
    ];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.classList.add('reveal');
      });
    });
  }
  addRevealClasses();


  // ─── NAVIGATION ────────────────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollY = window.scrollY;
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const bottom = top + sec.offsetHeight;
      const link = document.querySelector(`.nav-link[data-section="${sec.id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < bottom) link.classList.add('active');
        else link.classList.remove('active');
      }
    });
  }


  // ─── MAIN SCROLL HANDLER ──────────────────────────────────────────────
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Navbar
        navbar.classList.toggle('scrolled', scrollY > 50);
        // Counter
        if (scrollY < 100) startCounters();
        // Skill bars
        animateSkillBars();
        // Reveal
        revealElements();
        // Active nav
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Trigger on load
  setTimeout(() => {
    startCounters();
    revealElements();
    animateSkillBars();
  }, 500);


  // ─── WING CANVAS (CFD VISUALIZATION) ──────────────────────────────────
  function drawWing() {
    const wCanvas = document.getElementById('wing-canvas');
    if (!wCanvas) return;
    const wCtx = wCanvas.getContext('2d');
    const W = wCanvas.width = wCanvas.offsetWidth;
    const H = wCanvas.height = wCanvas.offsetHeight || 200;

    // Color gradient representing pressure distribution
    // Blue = low pressure (under wing = downforce), Red = high pressure
    const drawAirfoilElement = (x, y, w, h, camber, rotation, pressureColor) => {
      wCtx.save();
      wCtx.translate(x, y);
      wCtx.rotate(rotation);
      const grad = wCtx.createLinearGradient(0, -h, 0, h * 2);
      grad.addColorStop(0, 'rgba(255,60,60,0.8)');     // high pressure top
      grad.addColorStop(0.5, 'rgba(0,245,255,0.6)');   // neutral
      grad.addColorStop(1, 'rgba(0,30,255,0.9)');       // low pressure bottom
      wCtx.beginPath();
      wCtx.ellipse(0, camber, w * 0.5, h * 0.3, 0, 0, Math.PI * 2);
      wCtx.fillStyle = pressureColor;
      wCtx.fill();
      wCtx.strokeStyle = 'rgba(0,245,255,0.5)';
      wCtx.lineWidth = 1;
      wCtx.stroke();
      wCtx.restore();
    };

    // Draw background
    wCtx.fillStyle = 'rgba(0,0,0,0.8)';
    wCtx.fillRect(0, 0, W, H);

    // Draw flow streamlines
    for (let i = 0; i < 12; i++) {
      const y0 = H * 0.1 + i * (H * 0.07);
      wCtx.beginPath();
      wCtx.moveTo(0, y0);
      let x = 0;
      while (x < W) {
        const progress = x / W;
        // Streamlines get compressed under wing elements
        const deflection = progress > 0.15 && progress < 0.85
          ? Math.sin((progress - 0.15) * Math.PI / 0.7) * (H * 0.15) * (i > 6 ? -1 : 0.5)
          : 0;
        wCtx.lineTo(x, y0 + deflection);
        x += 5;
      }
      const speed = i > 6 ? 0.9 : 0.3; // fast under wing = low pressure
      const alpha = 0.15 + speed * 0.25;
      const color = i > 6 ? `rgba(0,100,255,${alpha})` : `rgba(255,100,50,${alpha})`;
      wCtx.strokeStyle = color;
      wCtx.lineWidth = 1;
      wCtx.stroke();
    }

    // Draw wing elements (4-element wing)
    const elements = [
      { x: W * 0.18, y: H * 0.45, w: W * 0.08, h: H * 0.20, angle: -0.3, color: '#00f5ff' },
      { x: W * 0.36, y: H * 0.42, w: W * 0.09, h: H * 0.22, angle: -0.25, color: '#00ccff' },
      { x: W * 0.55, y: H * 0.41, w: W * 0.09, h: H * 0.22, angle: -0.2, color: '#0099ff' },
      { x: W * 0.74, y: H * 0.40, w: W * 0.10, h: H * 0.24, angle: -0.15, color: '#0066ff' },
    ];
    elements.forEach(el => {
      wCtx.save();
      wCtx.translate(el.x, el.y);
      wCtx.rotate(el.angle);
      // Pressure gradient
      const grad = wCtx.createLinearGradient(0, -el.h * 1.5, 0, el.h * 1.5);
      grad.addColorStop(0, 'rgba(255,80,30,0.9)');
      grad.addColorStop(0.5, el.color + 'cc');
      grad.addColorStop(1, 'rgba(0,10,200,0.9)');
      wCtx.beginPath();
      wCtx.ellipse(0, 0, el.w * 0.5, el.h * 0.22, 0, 0, Math.PI * 2);
      wCtx.fillStyle = grad;
      wCtx.fill();
      wCtx.strokeStyle = el.color;
      wCtx.lineWidth = 1.5;
      wCtx.stroke();
      wCtx.restore();
    });

    // Ground plane
    wCtx.fillStyle = 'rgba(0, 245, 255, 0.08)';
    wCtx.fillRect(0, H * 0.78, W, H * 0.22);
    wCtx.strokeStyle = 'rgba(0, 245, 255, 0.4)';
    wCtx.lineWidth = 1;
    wCtx.setLineDash([6, 4]);
    wCtx.beginPath();
    wCtx.moveTo(0, H * 0.78);
    wCtx.lineTo(W, H * 0.78);
    wCtx.stroke();
    wCtx.setLineDash([]);

    // Labels
    wCtx.font = '9px Share Tech Mono, monospace';
    wCtx.fillStyle = 'rgba(255,100,50,0.9)';
    wCtx.fillText('HIGH PRESSURE', 8, 16);
    wCtx.fillStyle = 'rgba(0,100,255,0.9)';
    wCtx.fillText('LOW PRESSURE (DOWNFORCE)', 8, H * 0.73);

    // Velocity indicator
    wCtx.font = '10px Orbitron, monospace';
    wCtx.fillStyle = '#00f5ff';
    wCtx.fillText('v = 216 km/h →', W - 140, 16);

    // Downforce arrow
    wCtx.strokeStyle = '#00ff88';
    wCtx.lineWidth = 2;
    wCtx.beginPath();
    wCtx.moveTo(W - 40, H * 0.5);
    wCtx.lineTo(W - 40, H * 0.7);
    wCtx.stroke();
    wCtx.beginPath();
    wCtx.moveTo(W - 46, H * 0.67);
    wCtx.lineTo(W - 40, H * 0.73);
    wCtx.lineTo(W - 34, H * 0.67);
    wCtx.stroke();
    wCtx.font = '8px Share Tech Mono, monospace';
    wCtx.fillStyle = '#00ff88';
    wCtx.fillText('3438N', W - 58, H * 0.46);
  }

  // Draw wing when visible
  const wCanvas = document.getElementById('wing-canvas');
  if (wCanvas) {
    const wObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        drawWing();
        wObs.disconnect();
      }
    });
    wObs.observe(wCanvas);
    window.addEventListener('resize', () => {
      if (document.getElementById('project-cfd')?.getBoundingClientRect().top < window.innerHeight) {
        drawWing();
      }
    });
  }


  // ─── CONTACT FORM ──────────────────────────────────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = document.getElementById('submit-btn');
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const msg = document.getElementById('contact-message').value.trim();
      if (!name || !email || !msg) {
        btn.style.background = '#ff4444';
        btn.textContent = '⚠ FILL ALL FIELDS';
        setTimeout(() => {
          btn.style.background = '';
          btn.innerHTML = '<span class="btn-icon">◈</span> TRANSMIT MESSAGE';
        }, 2000);
        return;
      }
      // Simulate sending
      btn.style.background = 'rgba(0,245,255,0.3)';
      btn.innerHTML = '<span class="btn-icon">⟳</span> TRANSMITTING...';
      setTimeout(() => {
        btn.style.background = '#00ff88';
        btn.style.color = '#000';
        btn.innerHTML = '<span class="btn-icon">✓</span> MESSAGE SENT';
        form.reset();
        setTimeout(() => {
          btn.style.background = '';
          btn.style.color = '';
          btn.innerHTML = '<span class="btn-icon">◈</span> TRANSMIT MESSAGE';
        }, 3000);
      }, 1500);
    });
  }


  // ─── SMOOTH SCROLL ─────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ─── CURSOR GLOW EFFECT ────────────────────────────────────────────────
  const cursorGlow = document.createElement('div');
  cursorGlow.style.cssText = `
    position: fixed;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 245, 255, 0.05) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(cursorGlow);
  window.addEventListener('mousemove', e => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });


  // ─── KONAMI CODE EASTER EGG ────────────────────────────────────────────
  const konamiCode = [38,38,40,40,37,39,37,39,66,65];
  let konamiIdx = 0;
  document.addEventListener('keydown', e => {
    if (e.keyCode === konamiCode[konamiIdx]) {
      konamiIdx++;
      if (konamiIdx === konamiCode.length) {
        activateHyperMode();
        konamiIdx = 0;
      }
    } else {
      konamiIdx = 0;
    }
  });

  function activateHyperMode() {
    document.body.style.transition = 'filter 0.5s';
    document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
    const msg = document.createElement('div');
    msg.innerHTML = '🚀 HYPER MODE ACTIVATED<br><small style="font-size:0.7rem">↑↑↓↓←→←→BA</small>';
    msg.style.cssText = `
      position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
      background:rgba(0,245,255,0.15); border:2px solid #00f5ff;
      color:#00f5ff; font-family:'Orbitron',monospace; font-size:1.5rem;
      padding:2rem 3rem; z-index:9999; text-align:center;
      backdrop-filter:blur(10px); animation: fadeSlideIn 0.3s ease;
    `;
    document.body.appendChild(msg);
    setTimeout(() => {
      document.body.style.filter = '';
      msg.remove();
    }, 3000);
  }


  // ─── DYNAMIC HEXAGON GRID PARALLAX ─────────────────────────────────────
  const heroGrid = document.querySelector('.hero-bg-grid');
  if (heroGrid) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroGrid.style.transform = `translateY(${y * 0.3}px)`;
    });
  }


  // ─── METRIC CARDS GLOW ON HOVER ────────────────────────────────────────
  document.querySelectorAll('.metric-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 0 20px rgba(0,245,255,0.3), inset 0 0 20px rgba(0,245,255,0.05)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });


  // ─── NAV LOGO CLICK ────────────────────────────────────────────────────
  document.querySelector('.nav-logo')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  console.log('%c[AMAN BANGRE PORTFOLIO]', 'color:#00f5ff; font-family:Orbitron; font-size:14px; font-weight:bold;');
  console.log('%cMechanical Engineer | CFD | Robotics | YCCE Nagpur', 'color:#7ba8b8; font-family:monospace;');
  console.log('%cTry the Konami code: ↑↑↓↓←→←→BA', 'color:#ff6b2b; font-family:monospace; font-size:11px;');

})();
