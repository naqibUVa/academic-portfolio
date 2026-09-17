/* ============================================================
   PROFILE — who you are.
   Feeds the hero, the footer and the Contact section.

   HOW TO EDIT: change the text between the quotes.
   Keep the quotes, keep the commas at the end of each line.
   Any text field accepts HTML, so <em>, <strong> and
   <a href="...">links</a> all work inside them.
   ============================================================ */

const PROFILE = {

  // Your name, as it should appear in the header and footer.
  name: "Naqib Sa'd Pathan",

  // How your name is written in author lists. The publications
  // renderer bolds this automatically wherever it appears.
  authorName: "N. S. Pathan",

  // Small pill above your name. Set to "" to hide it entirely.
  availability: "On the academic job market — [year]",

  // Your position. The <span class="accent"> makes the field
  // stand out in your accent color — keep it or remove it.
  position: 'PhD Candidate in <span class="accent">[Field]</span>',

  // Department and institution, on the line underneath.
  affiliation: "[Department], [University]",

  // Two sentences on your research, written for a committee
  // member outside your subfield.
  intro: `I research [one-line description of your research problem].
          My work combines [method A] and [method B] to [what it enables],
          with applications to [domain].
          Advised by <a href="#">[Advisor Name]</a>.`,

  email: "you@university.edu",

  // Path to your CV. Drop the file in the academic/ folder.
  cv: "cv.pdf",

  // Your photo. Put me.jpg in academic/ and change this to "me.jpg".
  // Leave as "" to show the dashed placeholder box instead.
  photo: "",

  // Profile links, shown under the hero buttons and in Contact.
  // Delete any line you don't need. Add more the same way.
  links: [
    { label: "Google Scholar", url: "#" },
    { label: "ORCID",          url: "#" },
    { label: "GitHub",         url: "#" },
    { label: "LinkedIn",       url: "#" },
  ],

  // ---- Contact section ----

  contactNote: `I'm happy to talk about research, collaborations,
                or open positions. Email is the surest way to reach me.`,

  // Office address. Set to "" to hide it.
  address: `[Office / Building], [Department]<br>
            [University], [City, Country]`,

};
