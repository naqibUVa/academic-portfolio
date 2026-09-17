/* Renders the Research section from js/data/research.js. */

(() => {
  const intro = RESEARCH.intro
    ? `<p class="section-intro reveal">${RESEARCH.intro}</p>`
    : "";

  const cards = RESEARCH.threads.map(t => `
    <article class="card reveal">
      <div class="card-head"><h3>${t.title}</h3></div>
      <p class="card-body">${t.body}</p>
      ${H.tags(t.tags)}
      ${H.arrowLinks(t.links)}
    </article>
  `).join("");

  H.mount("research-body", `${intro}<div class="cards">${cards}</div>`);
})();
