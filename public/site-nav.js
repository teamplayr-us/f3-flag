/* Shared mobile-nav + dropdown behavior for the static marketing subpages. */
(function () {
  'use strict';
  function init() {
    var toggle = document.getElementById('subnavToggle');
    var links = document.getElementById('subnavLinks');

    function closeMenu() {
      if (!links || !toggle) return;
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
    function openMenu() {
      if (!links || !toggle) return;
      links.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
    }

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
      });
      // Close after tapping a real link (not the dropdown button)
      links.addEventListener('click', function (e) {
        if (e.target.closest('a')) closeMenu();
      });
    }

    // Dropdown buttons (e.g. "Locations")
    var drops = Array.prototype.slice.call(document.querySelectorAll('.navdrop'));
    drops.forEach(function (drop) {
      var btn = drop.querySelector('.navdrop__btn');
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = drop.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        // close other open dropdowns
        drops.forEach(function (d) {
          if (d !== drop) {
            d.classList.remove('open');
            var b = d.querySelector('.navdrop__btn');
            if (b) b.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.navdrop')) {
        drops.forEach(function (d) {
          d.classList.remove('open');
          var b = d.querySelector('.navdrop__btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // Escape closes everything
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMenu();
        drops.forEach(function (d) {
          d.classList.remove('open');
          var b = d.querySelector('.navdrop__btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
