/* ============================================================
   Shared helpers for the render/ scripts.
   You shouldn't need to edit this file.

   Note: text from js/data/ is inserted as HTML, so tags like
   <em> and <a href="..."> work inside your content. Only put
   text you wrote yourself in those files.
   ============================================================ */

const H = {

  // Drop HTML into an element by id. Silently does nothing if the
  // element isn't on this page.
  mount(id, html) {
    const node = document.getElementById(id);
    if (node) node.innerHTML = html;
  },

  // <ul class="tags"> — the little monospace chips.
  tags(list, extraClass = "") {
    if (!list || !list.length) return "";
    const items = list.map(t => `<li>${t}</li>`).join("");
    return `<ul class="tags ${extraClass}">${items}</ul>`;
  },

  // Plain <ul> of links, e.g. the hero id-links and contact socials.
  linkList(list, className) {
    if (!list || !list.length) return "";
    const items = list
      .map(l => `<li><a href="${l.url}">${l.label}</a></li>`)
      .join("");
    return `<ul class="${className}">${items}</ul>`;
  },

  // "Related papers →" style links at the foot of a card.
  arrowLinks(list) {
    if (!list || !list.length) return "";
    const items = list
      .map(l => `<a href="${l.url}">${l.label}&nbsp;<span aria-hidden="true">→</span></a>`)
      .join("");
    return `<div class="card-links">${items}</div>`;
  },

  // <li> rows for .plain-list — the title/meta pairs used by
  // teaching.js and about.js.
  entries(list) {
    if (!list || !list.length) return "";
    return list
      .map(i => `<li><strong>${i.title}</strong><span class="meta">${i.meta || ""}</span></li>`)
      .join("");
  },

  // A titled .plain-list block. Returns "" when the list is empty,
  // so unused sections vanish instead of leaving a stray heading.
  block(title, list) {
    if (!list || !list.length) return "";
    return `<h3 class="mini-title">${title}</h3>
            <ul class="plain-list">${H.entries(list)}</ul>`;
  },

  // Wrap your name in <span class="me"> wherever it appears.
  boldName(text, name) {
    if (!name) return text;
    return text.split(name).join(`<span class="me">${name}</span>`);
  },

};
