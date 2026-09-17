/* Fades elements with class="reveal" in as they scroll into view.
   Runs after the render/ scripts, so it also catches generated content. */

(() => {
  const items = document.querySelectorAll(".reveal");

  // No IntersectionObserver (very old browser)? Show everything.
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  // Stagger neighbours slightly so groups cascade instead of popping.
  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 60}ms`;
    io.observe(el);
  });
})();
