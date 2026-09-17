/* Renders the hero, the contact section, the header wordmark and the
   footer from js/data/profile.js. Edit the data file, not this one. */

(() => {
  const p = PROFILE;

  // ---- Header wordmark ----
  H.mount("wordmark", p.name.replace(/ /g, "&nbsp;"));

  // ---- Hero ----
  const availability = p.availability
    ? `<p class="eyebrow reveal">
         <span class="status-dot" aria-hidden="true"></span>${p.availability}
       </p>`
    : "";

  const portrait = p.photo
    ? `<img src="${p.photo}" alt="${p.name}">`
    : `<div class="portrait" role="img" aria-label="Portrait placeholder">
         <span>Your photo here</span>
       </div>`;

  H.mount("hero", `
    <div>
      ${availability}
      <h1 class="reveal">${p.name}</h1>
      <p class="hero-role reveal">${p.position}<br>${p.affiliation}</p>
      <p class="lede reveal">${p.intro}</p>

      <div class="cta-row reveal">
        <a class="btn btn-primary" href="#publications">Publications</a>
        <a class="btn btn-ghost" href="${p.cv}">Curriculum&nbsp;Vitae&nbsp;<span aria-hidden="true">↓</span></a>
        <a class="btn btn-ghost" href="mailto:${p.email}">Email</a>
      </div>

      ${H.linkList(p.links, "id-links reveal")}
    </div>

    <div class="portrait-col reveal">${portrait}</div>
  `);

  // ---- Contact ----
  const address = p.address
    ? `<p class="address reveal">${p.address}</p>`
    : "";

  const contactLinks = p.links.concat([
    { label: "Curriculum Vitae", url: p.cv },
  ]);

  H.mount("contact-body", `
    <h2 class="section-title reveal"><span class="num">06</span> Contact</h2>
    <p class="lede reveal">${p.contactNote}</p>
    <a class="big-email reveal" href="mailto:${p.email}">${p.email}</a>
    ${address}
    ${H.linkList(contactLinks, "socials reveal")}
  `);

  // ---- Footer ----
  H.mount("footer-name", `© ${new Date().getFullYear()} ${p.name}`);

  // ---- Page title, if it still holds the placeholder ----
  if (!document.title.includes(p.name)) {
    document.title = `${p.name} — ${document.title}`;
  }
})();
