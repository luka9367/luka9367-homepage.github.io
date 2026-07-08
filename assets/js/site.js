/* ============================================================
   site.js — interactivity for the personal homepage
   - Mobile nav toggle
   - Reveal-on-scroll
   - Year stamp
   - Email obfuscation (assemble at click instead of putting raw
     address in HTML; mitigates scraping for personal email)
   - Smooth-scroll for in-page anchors with sticky-header offset
   ============================================================ */
(function () {
  'use strict';

  // -------- Mobile nav toggle --------
  var toggle = document.querySelector('.site-nav__toggle');
  var nav    = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // -------- Reveal-on-scroll (IntersectionObserver, no library) --------
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // -------- Year stamp --------
  var yearEl = document.getElementById('js-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -------- Email obfuscation (assembled on click) --------
  function assembleEmail(el) {
    var user   = el.getAttribute('data-user')   || '';
    var domain = el.getAttribute('data-domain') || '';
    if (!user || !domain) return null;
    return user + '@' + domain;
  }

  document.querySelectorAll('[data-user][data-domain]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var addr = assembleEmail(el);
      if (!addr) return;
      e.preventDefault();
      el.setAttribute('href', 'mailto:' + addr);
      // For sidebar text-only links, also update visible text
      if (el.classList.contains('contact-item__value') === false) {
        // Set href and let the click-through work
      }
      // Re-dispatch navigation
      window.location.href = 'mailto:' + addr;
    });
  });

  // -------- Smooth scroll offset for sticky header --------
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        var rect = target.getBoundingClientRect();
        var offset = window.pageYOffset + rect.top - 70;
        window.scrollTo({ top: offset, behavior: 'smooth' });
        // Update URL hash without jumping
        if (history.pushState) history.pushState(null, null, '#' + id);
      }
    });
  });
})();
