// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Copy number
function copyNumber() {
  navigator.clipboard.writeText('8134877412').then(() => {
    ['copy-text', 'copy-text-2'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const original = el.textContent;
        el.textContent = 'Copied!';
        el.style.color = '#25D366';
        setTimeout(() => {
          el.textContent = original;
          el.style.color = '';
        }, 2000);
      }
    });
  }).catch(() => {});
}
