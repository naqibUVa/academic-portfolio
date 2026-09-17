/* Theme toggle. Cycles auto (follow your OS) → light → dark → auto,
   and remembers the choice in localStorage. */

(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;

  const order = ["auto", "light", "dark"];

  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const next = order[(order.indexOf(root.dataset.theme) + 1) % order.length];
    root.dataset.theme = next;

    if (next === "auto") localStorage.removeItem("theme");
    else                 localStorage.setItem("theme", next);
  });
})();
