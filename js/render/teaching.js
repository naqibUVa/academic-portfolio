/* Renders Teaching / talks / service from js/data/teaching.js.
   Empty lists are dropped, heading and all. */

(() => {
  const left =
    H.block("Teaching",  TEACHING.teaching) +
    H.block("Mentoring", TEACHING.mentoring);

  const right =
    H.block("Invited talks & presentations", TEACHING.talks) +
    H.block("Service",                       TEACHING.service) +
    H.block("Awards & funding",              TEACHING.awards);

  H.mount("teaching-body", `
    <div class="reveal">${left}</div>
    <div class="reveal">${right}</div>
  `);
})();
