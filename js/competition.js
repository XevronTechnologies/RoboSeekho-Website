// RoboSeekho National Innovation Challenge 2026 — shared UI behaviour

document.addEventListener('DOMContentLoaded', function () {

  // Scroll progress bar
  var progressBar = document.getElementById('rcScrollProgress');
  function updateProgress() {
    if (!progressBar) return;
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Mobile nav toggle
  var hamburger = document.getElementById('rcHamburger');
  var navLinks = document.getElementById('rcNavLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('rc-open');
      hamburger.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('rc-open');
        hamburger.classList.remove('active');
      });
    });
  }

  // Reveal-on-scroll
  var revealEls = document.querySelectorAll('[data-rc-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('rc-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('rc-in'); });
  }

  // FAQ accordion
  document.querySelectorAll('.rc-faq-item').forEach(function (item) {
    var q = item.querySelector('.rc-faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.rc-faq-item').forEach(function (i) {
        i.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Back to top
  var backTop = document.getElementById('rcBackTop');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active nav link highlighting (competition.html sections)
  var sections = document.querySelectorAll('main [id]');
  var navAnchors = document.querySelectorAll('.rc-nav-link[href*="#"]');
  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navAnchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href').indexOf('#' + id) !== -1);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(function (s) { navIo.observe(s); });
  }

  // Footer year
  var yearEl = document.getElementById('rcYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
