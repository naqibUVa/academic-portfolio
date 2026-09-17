/* Renders the Publications section from js/data/publications.js.
   Groups with no papers are skipped, so you can leave them empty. */

(() => {
  const note = PUBLICATIONS.note
    ? `<p class="section-intro reveal">${PUBLICATIONS.note}</p>`
    : "";

  const paper = p => `
    <li class="reveal">
      <p class="pub-title">${p.title}</p>
      <p class="pub-authors">${H.boldName(p.authors, PROFILE.authorName)}</p>
      <p class="pub-venue">
        ${p.venue}${p.badge ? ` <span class="badge">${p.badge}</span>` : ""}
      </p>
      ${H.linkList(p.links, "pub-links")}
    </li>
  `;

  const groups = PUBLICATIONS.groups
    .filter(g => g.papers && g.papers.length)
    .map(g => `
      <h3 class="pub-group reveal">${g.name}</h3>
      <ol class="pub-list">${g.papers.map(paper).join("")}</ol>
    `)
    .join("");

  H.mount("publications-body", note + groups);
})();
