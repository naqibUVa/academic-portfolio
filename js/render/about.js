/* Renders About / education / skills from js/data/about.js. */

(() => {
  const bio = ABOUT.paragraphs.map(t => `<p>${t}</p>`).join("");

  const languages = ABOUT.languages && ABOUT.languages.length
    ? `<h3 class="mini-title">Languages</h3>${H.tags(ABOUT.languages, "tags-lg")}`
    : "";

  const skills = ABOUT.skills && ABOUT.skills.length
    ? `<h3 class="mini-title">Technical skills</h3>${H.tags(ABOUT.skills, "tags-lg")}`
    : "";

  H.mount("about-body", `
    <div class="reveal">${bio}</div>
    <div class="reveal">
      ${H.block("Education", ABOUT.education)}
      ${skills}
      ${languages}
    </div>
  `);
})();
