// Light/dark theme toggle. The initial theme is set by the inline script in
// <head> (see _includes/theme-init.html) so the page never flashes the wrong one.
(function () {
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function stored() {
    try {
      var t = localStorage.getItem('theme');
      return t === 'light' || t === 'dark' ? t : null;
    } catch (e) {
      return null;
    }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.theme-toggle');
    if (!btn) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch (err) {}
    apply(next);
  });

  // Follow the system setting until the visitor picks a theme themselves.
  if (media) {
    var onChange = function (e) {
      if (!stored()) apply(e.matches ? 'dark' : 'light');
    };
    if (media.addEventListener) media.addEventListener('change', onChange);
    else if (media.addListener) media.addListener(onChange);
  }
})();
