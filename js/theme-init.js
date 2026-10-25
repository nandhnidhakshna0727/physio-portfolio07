/* Runs in <head> before the page paints, so a saved dark mode or custom theme never flashes the default colors. */
try {
  if (localStorage.getItem("theme") === "dark") document.documentElement.dataset.theme = "dark";
  var ct = JSON.parse(localStorage.getItem("customTheme") || "null");
  if (ct && ct.vars) {
    var r = document.documentElement;
    delete r.dataset.theme;
    r.dataset.custom = "";
    for (var k in ct.vars) r.style.setProperty(k, ct.vars[k]);
    r.style.colorScheme = ct.scheme;
  }
} catch (e) {}
