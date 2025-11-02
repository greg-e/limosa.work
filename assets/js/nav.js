diff --git a/assets/js/nav.js b/assets/js/nav.js
new file mode 100644
index 0000000..1111111
--- /dev/null
+++ b/assets/js/nav.js
@@ -0,0 +1,74 @@
+(function () {
+  const btn = document.querySelector('.nav-toggle');
+  const menu = document.querySelector('#site-menu');
+  if (!btn || !menu) return;
+
+  function closeMenu() {
+    btn.classList.remove('is-open');
+    btn.setAttribute('aria-expanded', 'false');
+    menu.classList.remove('is-open');
+  }
+  function openMenu() {
+    btn.classList.add('is-open');
+    btn.setAttribute('aria-expanded', 'true');
+    menu.classList.add('is-open');
+  }
+  function toggleMenu() {
+    const expanded = btn.getAttribute('aria-expanded') === 'true';
+    expanded ? closeMenu() : openMenu();
+  }
+
+  btn.addEventListener('click', toggleMenu);
+  menu.addEventListener('click', (e) => {
+    if (e.target.tagName === 'A') closeMenu();
+  });
+  document.addEventListener('keydown', (e) => {
+    if (e.key === 'Escape') closeMenu();
+  });
+  window.addEventListener('resize', () => {
+    if (window.innerWidth > 900) closeMenu();
+  });
+})();
