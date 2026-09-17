/* ============================================================
   TEACHING, TALKS & SERVICE

   Five independent lists. Every entry has the same two fields:
     title — the bold line
     meta  — the grey line underneath

   Delete an entry by removing its { ... } line.
   Delete a whole list by emptying it, e.g.  mentoring: [],
   — empty lists disappear from the page automatically.
   ============================================================ */

const TEACHING = {

  // ---- Left column ----

  teaching: [
    { title: "[Course Code] — [Course Name]",
      meta:  "Teaching Assistant, [University], [Term Year]" },

    { title: "[Course Code] — [Course Name]",
      meta:  "Teaching Assistant, [University], [Term Year]" },

    { title: "Guest lecture — [Topic]",
      meta:  "[Course], [Year]" },
  ],

  mentoring: [
    { title: "[Student Name]",
      meta:  "[Undergraduate / MSc] thesis, [Year] — now at [outcome]" },
  ],

  // ---- Right column ----

  talks: [
    { title: "[Talk Title]",
      meta:  "[Venue / Seminar], [Month Year]" },

    { title: "[Poster Title]",
      meta:  "[Conference], [Month Year]" },
  ],

  service: [
    { title: "Reviewer",
      meta:  "[Venue], [Venue], [Years]" },

    { title: "[Committee or organizing role]",
      meta:  "[Organization], [Year]" },
  ],

  awards: [
    { title: "[Award or Fellowship Name]",
      meta:  "[Awarding body], [Year]" },

    { title: "[Travel grant / scholarship]",
      meta:  "[Body], [Year]" },
  ],

};
