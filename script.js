// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains('show');

    // Close all
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('show'));
    document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));

    // Open clicked if it was closed
    if (!isOpen) {
      answer.classList.add('show');
      btn.classList.add('open');
    }
  });
});

// Smooth scroll offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 2px 16px rgba(26,46,74,0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});
