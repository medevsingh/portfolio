/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
});

function animateRing() {
  rx += (mx - rx - 18) * 0.12;
  ry += (my - ry - 18) * 0.12;
  ring.style.transform = `translate(${rx}px, ${ry}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .project-card, .skill-group').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(1.8)';
    ring.style.opacity = '0';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.opacity = '0.5';
  });
});

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

/* ── NAV SHRINK ON SCROLL ── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.padding = window.scrollY > 60 ? '12px 60px' : '20px 60px';
});

/* ── TYPEWRITER EFFECT ── */
const accentWord = document.querySelector('.accent-word');
const words = ['Singh', 'Developer', 'Builder', 'Analyst'];
let wi = 0, ci = 0, deleting = false;

function typeEffect() {
  const word = words[wi];
  if (!deleting) {
    accentWord.textContent = word.slice(0, ci + 1);
    ci++;
    if (ci === word.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    accentWord.textContent = word.slice(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(typeEffect, deleting ? 60 : 100);
}
setTimeout(typeEffect, 1200);