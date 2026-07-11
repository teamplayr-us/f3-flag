/* Shared mobile-nav toggle for the static marketing subpages.
   Opens/closes the hamburger dropdown and handles Escape + link taps. */
(function () {
  'use strict';
  function init() {
    var toggle = document.getElementById('subnavToggle');
    var links = document.getElementById('subnavLinks');
    if (!toggle || !links) return;

    function close() {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
    function open() {
      links.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
    }

    toggle.addEventListener('click', function () {
      toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
    });
    // Close after tapping a link
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
