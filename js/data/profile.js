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
  name: "Naqib Sad Pathan",

  // How your name is written in author lists. The publications
  // renderer bolds this automatically wherever it appears.
  authorName: "Naqib Sad Pathan",

  // Small pill above your name. Set to "" to hide it entirely.
  availability: "PhD Student · Spring 2027",

  // Your position. The <span class="accent"> makes the field
  // stand out in your accent color — keep it or remove it.
  position: 'PhD Student in <span class="accent">Electrical Engineering</span>',

  // Department and institution, on the line underneath.
  affiliation: "Imaging and Data Science Lab (Rohde Lab), University of Virginia",

  // Two sentences on your research, written for a committee
  // member outside your subfield.
  intro: `I am a PhD student in Electrical Engineering at the University of Virginia,
          working with <a href="https://datascience.virginia.edu/people/gustavo-k-rohde" target="_blank" rel="noopener">Prof. Gustavo K. Rohde</a>.
          My research focuses on optimal transport, multiplex image analysis (4i technique),
          and machine learning methods for high-dimensional biomedical measurements.`,

  email: "qpb3vt@virginia.edu",

  // Path to your CV. Drop the file in the academic/ folder.
  cv: "cv.pdf",

  // Your photo. Put me.jpg in academic/ and change this to "me.jpg".
  // Leave as "" to show the dashed placeholder box instead.
  photo: "Naqib.JPG",

  // Profile links, shown under the hero buttons and in Contact.
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=NUPZdZoAAAAJ&hl=en" },
    { label: "ORCID", url: "https://orcid.org/0000-0002-1571-8221" },
    { label: "GitHub", url: "https://github.com/naqibUVa" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/naqib-sad-pathan" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Naqib-Sad-Pathan" },
  ],

  // ---- Contact section ----

  contactNote: `I'm happy to talk about research, collaborations,
                or open opportunities. Email is the surest way to reach me.`,

  // Office address. Set to "" to hide it.
  address: `Medical Research Building 4 (MR4), University of Virginia<br>
            1337 Jefferson Park Avenue<br>
            Charlottesville, VA 22903, USA`,

};
