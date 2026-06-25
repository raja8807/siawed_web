/**
 * SIAWED WEBSITE — script.js
 * Version 1.0  |  June 2026
 * ─────────────────────────────────────────────────────────
 * TABLE OF CONTENTS
 *   1. DOM Ready Wrapper
 *   2. Navigation — Hamburger Toggle
 *   3. Mobile Drawer — Open / Close / Keyboard
 *   4. Mobile Drawer — Accordion Submenus
 *   5. Bottom Tab Bar — WENBA & More tabs
 *   6. Scroll Reveal — IntersectionObserver
 *   7. WENBA Category Filter
 *   8. Smooth Scroll for Anchor Links
 *   9. Newsletter Form — Basic Validation
 *  10. Active Nav Link on Scroll
 * ─────────────────────────────────────────────────────────
 */

/* ============================================================
   1. DOM READY WRAPPER
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ============================================================
     2. NAVIGATION — HAMBURGER TOGGLE
     ============================================================ */
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('drawer');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = drawer.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }


  /* ============================================================
     3. MOBILE DRAWER — Open / Close / Keyboard
     ============================================================ */
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerClose   = document.getElementById('drawer-close');

  function openDrawer() {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first focusable element in drawer
    const firstFocusable = drawer.querySelector('button, a, input');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Close all open submenus
    document.querySelectorAll('.drawer-trigger.is-open').forEach(function (trigger) {
      trigger.classList.remove('is-open');
      const sub = trigger.nextElementSibling;
      if (sub) sub.classList.remove('is-open');
    });
  }

  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  if (drawerClose)   drawerClose.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });


  /* ============================================================
     4. MOBILE DRAWER — Accordion Submenus
     One submenu open at a time.
     ============================================================ */
  document.querySelectorAll('.drawer-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const sub    = this.nextElementSibling;
      const isOpen = this.classList.contains('is-open');

      // Close all open submenus
      document.querySelectorAll('.drawer-trigger.is-open').forEach(function (t) {
        t.classList.remove('is-open');
        const s = t.nextElementSibling;
        if (s && s.classList.contains('drawer-sub')) s.classList.remove('is-open');
      });

      // Open clicked (if it was closed)
      if (!isOpen && sub && sub.classList.contains('drawer-sub')) {
        this.classList.add('is-open');
        sub.classList.add('is-open');
        // Smooth scroll to show submenu
        setTimeout(function () {
          sub.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    });
  });


  /* ============================================================
     5. BOTTOM TAB BAR — WENBA & More tabs
     ============================================================ */
  const wenbaTab = document.getElementById('wenba-tab');
  const moreTab  = document.getElementById('more-tab');

  if (moreTab) {
    moreTab.addEventListener('click', openDrawer);
  }

  if (wenbaTab) {
    wenbaTab.addEventListener('click', function () {
      openDrawer();
      // Auto-expand WENBA submenu after drawer opens
      setTimeout(function () {
        const wenbaTrigger = document.querySelector('.drawer-trigger--wenba');
        if (wenbaTrigger && !wenbaTrigger.classList.contains('is-open')) {
          wenbaTrigger.click();
          // Scroll to WENBA submenu
          setTimeout(function () {
            const wenbaSub = document.querySelector('.drawer-trigger--wenba + .drawer-sub');
            if (wenbaSub) wenbaSub.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 200);
        }
      }, 300);
    });
  }

  // Highlight active bottom tab based on scroll position
  const tabLinks = document.querySelectorAll('.bottom-tab[href]');
  tabLinks.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabLinks.forEach(function (t) { t.classList.remove('is-active'); });
      this.classList.add('is-active');
    });
  });


  /* ============================================================
     6. SCROLL REVEAL — IntersectionObserver
     Elements with class .reveal animate in when they enter
     the viewport (threshold: 8% visible).
     ============================================================ */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after reveal — animate once
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all elements immediately in unsupported browsers
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }


  /* ============================================================
     7. WENBA CATEGORY FILTER
     Clicking a category pill adds .is-active and could trigger
     filtering of .wenba-img-card elements by data-category attr.
     Developer: add data-category="handicrafts" etc. to cards.
     ============================================================ */
  const wenbaCats   = document.querySelectorAll('.wenba-cat');
  const wenbaCards  = document.querySelectorAll('.wenba-img-card');

  wenbaCats.forEach(function (cat) {
    cat.addEventListener('click', function () {
      // Update active state
      wenbaCats.forEach(function (c) { c.classList.remove('is-active'); });
      this.classList.add('is-active');

      const selectedCat = this.dataset.cat || 'all';

      // Filter cards (works when data-category attr is set)
      if (wenbaCards.length > 0) {
        wenbaCards.forEach(function (card) {
          const cardCat = card.dataset.category || 'all';
          if (selectedCat === 'all' || cardCat === selectedCat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });


  /* ============================================================
     8. SMOOTH SCROLL FOR ANCHOR LINKS
     Handles offset for the sticky navbar height.
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.nav') ?
                          document.querySelector('.nav').offsetHeight : 72;
        const offset = target.getBoundingClientRect().top +
                       window.pageYOffset - navHeight - 16;
        window.scrollTo({ top: offset, behavior: 'smooth' });
        // Close drawer if open
        if (drawer.classList.contains('is-open')) closeDrawer();
      }
    });
  });


  /* ============================================================
     9. NEWSLETTER FORM — Basic Validation
     ============================================================ */
  document.querySelectorAll('.footer__newsletter').forEach(function (form) {
    const btn   = form.querySelector('button');
    const input = form.querySelector('input[type="email"]');

    if (btn && input) {
      btn.addEventListener('click', function () {
        const email = input.value.trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          input.style.outline = '2px solid #E8701A';
          input.placeholder   = 'Please enter a valid email';
          setTimeout(function () {
            input.style.outline = '';
            input.placeholder   = 'Your email address';
          }, 2500);
          return;
        }
        // SUCCESS — Developer: replace with actual API call / form submission
        btn.textContent        = '✓ Subscribed!';
        btn.style.background   = '#0D7A6E';
        btn.disabled           = true;
        input.value            = '';
        input.placeholder      = 'You\'re subscribed!';
        setTimeout(function () {
          btn.textContent      = 'Subscribe';
          btn.style.background = '';
          btn.disabled         = false;
          input.placeholder    = 'Your email address';
        }, 4000);
      });
    }
  });


  /* ============================================================
    10. ACTIVE NAV LINK ON SCROLL
    Highlights the correct nav link as the user scrolls
    through page sections.
    ============================================================ */
  const sections  = document.querySelectorAll('section[id], div[id]');
  const navLinks  = document.querySelectorAll('.nav__link');

  if (sections.length > 0 && navLinks.length > 0) {
    const navHeight = document.querySelector('.nav') ?
                      document.querySelector('.nav').offsetHeight : 72;

    window.addEventListener('scroll', function () {
      let currentId = '';
      sections.forEach(function (sec) {
        const top = sec.getBoundingClientRect().top;
        if (top <= navHeight + 50) currentId = sec.id;
      });

      navLinks.forEach(function (link) {
        link.classList.remove('is-active');
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('is-active');
        }
      });
    }, { passive: true });
  }

}); // end DOMContentLoaded
