/* Renders the Experience timeline from js/data/experience.js. */

(() => {
  const rows = EXPERIENCE.map(e => `
    <li class="reveal">
      <div class="t-when">${e.when}</div>
      <div class="t-what">
        <h3>${e.role} <span class="at">· ${e.org}</span></h3>
        <p>${e.body}</p>
        ${H.tags(e.tags)}
      </div>
    </li>
  `).join("");

  H.mount("experience-body", `<ol class="timeline">${rows}</ol>`);
})();
