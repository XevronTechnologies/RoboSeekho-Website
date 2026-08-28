const SCRIPT_SRC = document.currentScript.src;
const DATA_URL = new URL('../data/site-data.json', SCRIPT_SRC).href;

const SOCIAL_ICONS = {
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.2 8.23L23 22h-6.9l-5.4-7.06L4.6 22H1.5l7.7-8.8L1 2h7.1l4.9 6.5L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.75 1.14.54.54.88 1.09 1.14 1.75.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.14 1.75 4.9 4.9 0 0 1-1.75 1.14c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.75-1.14 4.9 4.9 0 0 1-1.14-1.75c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.14-1.75A4.9 4.9 0 0 1 5.42.56C6.06.31 6.79.14 7.85.09 8.91.04 9.27.03 12 .03zm0 1.8c-2.65 0-2.98.01-4.02.06-.97.04-1.5.2-1.85.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.3.88-.34 1.85-.05 1.04-.06 1.37-.06 4.02s.01 2.98.06 4.02c.04.97.2 1.5.34 1.85.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.88.3 1.85.34 1.04.05 1.37.06 4.02.06s2.98-.01 4.02-.06c.97-.04 1.5-.2 1.85-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.3-.88.34-1.85.05-1.04.06-1.37.06-4.02s-.01-2.98-.06-4.02c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.3-1.85-.34-1.04-.05-1.37-.06-4.02-.06zM12 6.87a5.13 5.13 0 1 1 0 10.26 5.13 5.13 0 0 1 0-10.26zm0 1.8a3.33 3.33 0 1 0 0 6.66 3.33 3.33 0 0 0 0-6.66zm5.5-2.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.11 20.45H3.56V9h3.55v11.45z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a2.9 2.9 0 0 0-2.05-2.06C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.45.53A2.9 2.9 0 0 0 .5 6.19 30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.81 2.9 2.9 0 0 0 2.05 2.06C4.3 20.4 12 20.4 12 20.4s7.7 0 9.45-.53a2.9 2.9 0 0 0 2.05-2.06A30.4 30.4 0 0 0 24 12a30.4 30.4 0 0 0-.5-5.81zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/></svg>'
};

function applySiteConfig(config) {
  if (!config || !config.companyName) return;

  const rawName = config.companyName.trim();
  const hasLabs = /labs$/i.test(rawName);
  const fullTitleName = hasLabs ? rawName : `${rawName} Labs`;

  // 1. Update Document Title dynamically
  document.title = document.title.replace(
    /STEMROBO\s*Labs|STEM\s+Labs|The Circuitry\s*Labs|STEMROBO/g,
    fullTitleName
  );

  // 2. Update all company name elements
  document.querySelectorAll('[data-site="company"]').forEach(el => {
    el.textContent = rawName;
    const next = el.nextElementSibling;
    if (next && next.tagName === 'SPAN' && next.textContent.trim().toLowerCase() === 'labs') {
      next.style.display = hasLabs ? 'none' : 'inline';
    }
  });

  // 3. Update company initial badges
  document.querySelectorAll('[data-site="company-initial"]').forEach(el => {
    el.textContent = rawName.charAt(0).toUpperCase();
  });

  // 4. Update brand logos alt attribute
  document.querySelectorAll('.brand-logo, [data-site="company-logo"]').forEach(el => {
    el.alt = `${fullTitleName} logo`;
  });

  // 5. Update Phone Links and Phone Text
  if (config.phone) {
    const cleanPhone = config.phone.replace(/[^\d+]/g, '');
    document.querySelectorAll('[data-site="phone-link"]').forEach(el => {
      el.textContent = config.phone;
      el.href = `tel:${cleanPhone}`;
    });
    document.querySelectorAll('[data-site="phone-text"]').forEach(el => {
      el.textContent = config.phone;
    });
  }

  // 6. Update Email Links and Email Text
  if (config.email) {
    document.querySelectorAll('[data-site="email-link"]').forEach(el => {
      el.textContent = config.email;
      el.href = `mailto:${config.email}`;
    });
    document.querySelectorAll('[data-site="email-text"]').forEach(el => {
      el.textContent = config.email;
    });
  }

  // 7. Update Address
  if (config.address) {
    document.querySelectorAll('[data-site="address-text"]').forEach(el => {
      el.textContent = config.address;
    });
  }

  // 8. Update Social Links
  const socialContainer = document.getElementById('socialLinks');
  if (socialContainer && config.social) {
    const links = Object.entries(config.social)
      .filter(([, url]) => Boolean(url))
      .map(([platform, url]) => `
        <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${platform}" class="social-link">
          ${SOCIAL_ICONS[platform] || ''}
        </a>`)
      .join('');
    socialContainer.innerHTML = links;
    socialContainer.style.display = links ? 'flex' : 'none';
  }
}

document.getElementById('year').textContent = new Date().getFullYear();

/* -------------------------------------------------------------------------
   Render lab cards (homepage grid — each card links to its own lab page)
   ------------------------------------------------------------------------- */
const labGrid = document.getElementById('labGrid');

function renderLabs(labs) {
  if (!labGrid) return;
  labGrid.innerHTML = labs.map((lab, i) => `
    <article class="lab-card" data-tags="${lab.tags.join(' ')}" style="--card-grad:${lab.grad}; animation-delay:${i * 0.06}s">
      <div class="lab-card-inner">
        <div class="lab-icon">${lab.icon}</div>
        <span class="lab-grades">${lab.grades}</span>
        <h3>${lab.title}</h3>
        <p>${lab.summary}</p>
        <a class="lab-more" href="labs/${lab.id}.html">
          Learn more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </article>
  `).join('');
}

/* -------------------------------------------------------------------------
   Lab filters
   ------------------------------------------------------------------------- */
const labFilters = document.getElementById('labFilters');
if (labFilters) {
  labFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.lab-card').forEach(card => {
      const tags = card.dataset.tags.split(' ');
      card.classList.toggle('is-hidden', filter !== 'all' && !tags.includes(filter));
    });
  });
}

/* -------------------------------------------------------------------------
   FAQ accordion (faq.html only)
   ------------------------------------------------------------------------- */
const faqList = document.getElementById('faqList');

function renderFaqs(faqs) {
  if (!faqList) return;
  faqList.innerHTML = faqs.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question">
        ${f.q}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join('');

  faqList.addEventListener('click', (e) => {
    const question = e.target.closest('.faq-question');
    if (!question) return;
    const item = question.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    faqList.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-answer').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}

const FALLBACK_DATA = {
  siteConfig: {
    companyName: "RoboSeekho",
    phone: "+91 8696843733",
    email: "contact@roboseekho.in",
    address: "Kota, Rajasthan, India",
    social: { facebook: "", twitter: "", instagram: "", linkedin: "", youtube: "" }
  }
};

function initData(data) {
  if (data.siteConfig) applySiteConfig(data.siteConfig);
  if (data.labs) renderLabs(data.labs);
  if (data.faqs) renderFaqs(data.faqs);
}

// Run fallback immediately to ensure file:// protocol works
initData(FALLBACK_DATA);

fetch(DATA_URL)
  .then(res => {
    if (!res.ok) throw new Error(`Failed to load ${DATA_URL}: ${res.status}`);
    return res.json();
  })
  .then(data => {
    initData(data);
  })
  .catch(err => {
    console.warn('Site data fetch failed (expected on file:// protocol). Applied fallback data.', err);
  });

/* -------------------------------------------------------------------------
   Nav: sticky style, mobile menu, active link
   ------------------------------------------------------------------------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
const currentPage = (location.pathname.split('/').pop() || 'index.html');
const onHomePage = currentPage === 'index.html' || currentPage === '';

function updateActiveNav() {
  let current = sections[0]?.id;
  if (onHomePage) {
    const scrollPos = window.scrollY + 140;
    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) current = section.id;
    });
  }
  navLinkEls.forEach(link => {
    const [hrefPath, hrefHash] = link.getAttribute('href').split('#');
    const hrefPage = hrefPath.split('/').pop() || 'index.html';

    if (!onHomePage) {
      // On a subpage, a nav link is active only when it targets this exact page.
      link.classList.toggle('active', hrefPage === currentPage);
      return;
    }

    // On the homepage, links that jump elsewhere (Why Us, Process, etc.) never
    // highlight — only Home/Labs, whose targets live in the current scroll.
    const isActive = hrefPage === 'index.html' && (hrefHash ? hrefHash === current : current === 'home');
    link.classList.toggle('active', isActive);
  });
}

/* -------------------------------------------------------------------------
   Scroll progress bar + back-to-top + header shadow
   ------------------------------------------------------------------------- */
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = progress + '%';
  backToTop.classList.toggle('show', scrollTop > 500);
  updateActiveNav();
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* -------------------------------------------------------------------------
   Theme: auto dark from 6pm–6am / light from 6am–6pm, every page load.
   The toggle can flip it for the current visit only — nothing is persisted,
   so it can never get stuck showing the wrong theme for the time of day.
   ------------------------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
let themeManuallySet = false;

function timeBasedTheme() {
  const hour = new Date().getHours();
  return (hour >= 18 || hour < 6) ? 'dark' : 'light';
}

root.setAttribute('data-theme', timeBasedTheme());

// Keep it in sync with the clock (e.g. crossing 6am/6pm with the tab open),
// unless the visitor has manually flipped it during this visit.
setInterval(() => {
  if (!themeManuallySet) root.setAttribute('data-theme', timeBasedTheme());
}, 60000);

themeToggle.addEventListener('click', () => {
  themeManuallySet = true;
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  root.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
});

/* -------------------------------------------------------------------------
   Scroll reveal (IntersectionObserver)
   ------------------------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

/* -------------------------------------------------------------------------
   Animated stat counters
   ------------------------------------------------------------------------- */
function animateCount(el, target, duration = 1400) {
  const start = 0;
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(start + (target - start) * eased);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCount(el, parseInt(el.dataset.count, 10));
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

/* -------------------------------------------------------------------------
   Impact ring chart
   ------------------------------------------------------------------------- */
const ringFg = document.getElementById('ringFg');
const ringPercent = document.getElementById('ringPercent');
const ringSection = document.getElementById('impact');

const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = 94;
      const circumference = 2 * Math.PI * 52;
      ringFg.style.strokeDashoffset = circumference - (circumference * target / 100);
      animateCount(ringPercent, target, 1200);
      ringObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
if (ringSection) ringObserver.observe(ringSection);

/* -------------------------------------------------------------------------
   Contact form validation (client-side only, no backend)
   ------------------------------------------------------------------------- */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function setFieldError(field, message) {
  const wrapper = field.closest('.form-field');
  wrapper.classList.toggle('has-error', Boolean(message));
  wrapper.querySelector('.error-msg').textContent = message || '';
}

function validateField(field) {
  if (!field.hasAttribute('required')) return true;
  const value = field.value.trim();

  if (!value) {
    setFieldError(field, 'This field is required');
    return false;
  }
  if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    setFieldError(field, 'Enter a valid email address');
    return false;
  }
  if (field.type === 'tel' && !/^[\d\s+()-]{7,20}$/.test(value)) {
    setFieldError(field, 'Enter a valid phone number');
    return false;
  }
  setFieldError(field, '');
  return true;
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const requiredFields = contactForm.querySelectorAll('[required]');
    let isValid = true;
    requiredFields.forEach(field => { if (!validateField(field)) isValid = false; });

    if (!isValid) {
      if (formSuccess) formSuccess.classList.remove('show');
      return;
    }

    // Actually submit the form data to Netlify
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const originalText = btnText ? btnText.textContent : '';

    // Show loading state
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'Sending...';

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(response => {
      if (response.ok) {
        if (formSuccess) formSuccess.classList.add('show');
        contactForm.reset();
        if (formSuccess) setTimeout(() => formSuccess.classList.remove('show'), 6000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(() => {
      alert('Network error. Please check your connection and try again.');
    })
    .finally(() => {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.textContent = originalText;
    });
  });

  contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
  });
}
