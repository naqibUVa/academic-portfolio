/* ============================================================
   PUBLICATIONS — the most important section on the page.

   Structure: a list of GROUPS, each with a list of PAPERS.

   HOW TO ADD A PAPER: copy one { title: ... } block, paste it at
   the top of the right group (newest first), and edit it.
   Your name is bolded automatically — it matches PROFILE.authorName
   in profile.js, so write it the same way in the authors line.

   HOW TO ADD A GROUP: copy a whole { name: ..., papers: [...] }
   block. Delete any group you don't need — empty ones are hidden.
   ============================================================ */

const PUBLICATIONS = {

  // Optional note under the section heading. Set to "" to hide.
  note: `<span class="me">Bold</span> denotes my name.
         † indicates equal contribution.
         See <a href="#">Google Scholar</a> for the complete list.`,

  groups: [

    {
      name: "Peer-reviewed articles",
      papers: [

        {
          title: "[Full Title of the Paper as Published]",
          authors: "N. S. Pathan, A. Coauthor, and B. Coauthor",
          // Venue in italics, then volume/pages/year.
          venue: "<em>[Journal or Conference Name]</em>, vol. X, no. Y, pp. 1–14, 2025.",
          // Small colored pill after the venue. "" to hide it.
          badge: "[acceptance rate, optional]",
          links: [
            { label: "PDF",    url: "#" },
            { label: "DOI",    url: "#" },
            { label: "arXiv",  url: "#" },
            { label: "Code",   url: "#" },
            { label: "BibTeX", url: "#" },
          ],
        },

        {
          title: "[Second Paper Title]",
          authors: "A. Coauthor, N. S. Pathan, and C. Coauthor",
          venue: "<em>[Venue]</em>, 2024.",
          badge: "",
          links: [
            { label: "PDF", url: "#" },
            { label: "DOI", url: "#" },
          ],
        },

      ],
    },

    {
      name: "Conference & workshop papers",
      papers: [

        {
          title: "[Workshop Paper Title]",
          authors: "N. S. Pathan and D. Coauthor",
          venue: "<em>[Workshop @ Conference]</em>, 2024.",
          badge: "",
          links: [
            { label: "PDF",    url: "#" },
            { label: "Poster", url: "#" },
          ],
        },

      ],
    },

    {
      name: "Preprints & under review",
      papers: [

        {
          title: "[Preprint Title]",
          authors: "N. S. Pathan, E. Coauthor",
          venue: "Under review at <em>[Venue]</em>, 2026.",
          badge: "",
          links: [
            { label: "arXiv", url: "#" },
          ],
        },

      ],
    },

  ],
};
