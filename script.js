// Animated Gradient Wave UI - script.js
// Save as script.js in same folder

(() => {
  // Theme toggle: add minimal dark/light handling by toggling a class on body
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('ws-theme');
  if (stored === 'light') document.documentElement.style.setProperty('--bg','#ffffff');
  if (stored === 'dark' || (!stored && prefersDark)) {
    // set a slightly lighter background for dark theme (optional)
    document.documentElement.style.setProperty('--bg','#0f1724');
    themeToggle.textContent = '☀️';
  } else {
    document.documentElement.style.setProperty('--bg','#f7fafc');
    themeToggle.textContent = '🌙';
  }

  themeToggle.addEventListener('click', () => {
    const current = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
    if (current === '#0f1724' || current.toLowerCase().includes('0f1724')) {
      // switch to light
      document.documentElement.style.setProperty('--bg','#f7fafc');
      document.documentElement.style.setProperty('--card','#ffffff');
      document.documentElement.style.setProperty('--white','#0b1220');
      themeToggle.textContent = '🌙';
      localStorage.setItem('ws-theme','light');
    } else {
      // switch to dark
      document.documentElement.style.setProperty('--bg','#0f1724');
      document.documentElement.style.setProperty('--card','#0b1220');
      document.documentElement.style.setProperty('--white','#f6f8fb');
      themeToggle.textContent = '☀️';
      localStorage.setItem('ws-theme','dark');
    }
  });

  // Mobile drawer open/close
  const menuBtn = document.getElementById('menuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeMenu = document.getElementById('closeMenu');
  menuBtn.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden','false');
  });
  closeMenu.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden','true');
  });

  // Close drawer when mobile link clicked
  document.querySelectorAll('.mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden','true');
    });
  });

  // Simple header style on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 8) header.style.background = 'linear-gradient(180deg, rgba(6,10,16,0.7), rgba(6,10,16,0.5))';
    else header.style.background = 'transparent';
  });

  // set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Optional: small entrance animation for nav links
  document.querySelectorAll('.nav-link').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-6px)';
    setTimeout(() => {
      el.style.transition = 'opacity .5s ease, transform .5s cubic-bezier(.2,.9,.3,1)';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 120 * i + 200);
  });

})();
