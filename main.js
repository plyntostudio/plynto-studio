// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Nav shadow on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 10);
  nav.style.boxShadow = window.scrollY > 10 ? '0 1px 24px rgba(26,24,20,0.07)' : 'none';
}, { passive: true });

// Shared mobile nav for pages that use the standard menu markup
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const heroPanel = document.querySelector('.hero-panel-card');

function closeMobile() {
  hamburger?.classList.remove('open');
  mobileMenu?.classList.remove('open');
}

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobile();
}, { passive: true });

if (heroPanel && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('mousemove', (event) => {
    const { innerWidth, innerHeight } = window;
    const rotateY = ((event.clientX / innerWidth) - 0.5) * 8;
    const rotateX = (((event.clientY / innerHeight) - 0.5) * -1) * 6;
    heroPanel.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    heroPanel.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  });
}
