/* Theme and palette manager.
   1. Theme: Cycles auto (follow your OS) → light → dark → auto.
   2. Palette: Indigo, Emerald, Crimson, Ocean, Amber, Slate.
   Persists user preferences in localStorage. */

(() => {
  const root = document.documentElement;

  // 1. Theme mode (light / dark / auto)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) root.dataset.theme = savedTheme;

  const order = ["auto", "light", "dark"];
  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const current = root.dataset.theme || "auto";
    const next = order[(order.indexOf(current) + 1) % order.length];
    root.dataset.theme = next;

    if (next === "auto") localStorage.removeItem("theme");
    else                 localStorage.setItem("theme", next);
  });

  // 2. Palette selector
  const savedPalette = localStorage.getItem("palette") || "indigo";
  root.dataset.palette = savedPalette;

  const paletteToggle = document.querySelector(".palette-toggle");
  const paletteMenu = document.querySelector(".palette-menu");
  const paletteOptions = document.querySelectorAll(".palette-option");

  function updateActiveOption(palette) {
    paletteOptions.forEach(opt => {
      const isActive = opt.dataset.palette === palette;
      opt.classList.toggle("active", isActive);
      opt.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  updateActiveOption(savedPalette);

  if (paletteToggle && paletteMenu) {
    paletteToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = !paletteMenu.hidden;
      paletteMenu.hidden = isOpen;
      paletteToggle.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });

    paletteOptions.forEach(opt => {
      opt.addEventListener("click", (e) => {
        e.stopPropagation();
        const selected = opt.dataset.palette;
        if (!selected) return;

        root.dataset.palette = selected;
        localStorage.setItem("palette", selected);
        updateActiveOption(selected);
        paletteMenu.hidden = true;
        paletteToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!paletteMenu.hidden && !paletteMenu.contains(e.target) && e.target !== paletteToggle) {
        paletteMenu.hidden = true;
        paletteToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !paletteMenu.hidden) {
        paletteMenu.hidden = true;
        paletteToggle.setAttribute("aria-expanded", "false");
        paletteToggle.focus();
      }
    });
  }
})();
