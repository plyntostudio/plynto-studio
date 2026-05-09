// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Copy number
function copyNumber() {
  navigator.clipboard.writeText('8134877412').then(() => {
    ['copy-text', 'copy-text-2'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const original = el.textContent;
      el.textContent = 'Copied ✓';
      el.style.color = '#1DB954';
      setTimeout(() => {
        el.textContent = original;
        el.style.color = '';
      }, 2000);
    });
  }).catch(() => {});
}

// Nav scroll state
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 20
    ? 'rgba(255,255,255,0.1)'
    : 'rgba(255,255,255,0.08)';
}, { passive: true });
