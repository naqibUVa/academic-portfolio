/* ============================================================
   RESEARCH — your research agenda.

   HOW TO ADD A THREAD: copy one { ... } block, paste it after
   the last one, and edit the text. Mind the comma between blocks.
   ============================================================ */

const RESEARCH = {

  // The through-line connecting your work. Committees look for a
  // coherent agenda, not a list of unrelated papers.
  intro: `My work sits at the intersection of [area A] and [area B].
          The unifying question across these threads is [the question].
          Below are the three directions I'm currently pursuing.`,

  threads: [

    {
      title: "[Research Thread One]",
      body: `Two or three sentences: the open problem, your approach,
             and what you've established so far. Name the contribution
             explicitly.`,
      tags: ["[method]", "[technique]"],
      links: [
        { label: "Related papers", url: "#publications" },
      ],
    },

    {
      title: "[Research Thread Two]",
      body: `Same shape. If a thread produced a dataset, benchmark, or
             tool that others use, say so here — reuse is evidence of
             impact.`,
      tags: ["[method]", "[technique]"],
      links: [
        { label: "Code & data", url: "#" },
      ],
    },

    {
      title: "[Research Thread Three]",
      body: `In-progress work belongs here too. Label it clearly as
             ongoing and state what you expect to submit and where.`,
      tags: ["[method]", "ongoing"],
      links: [],
    },

  ],
};
