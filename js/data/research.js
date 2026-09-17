/* ============================================================
   RESEARCH — Research agenda and core directions.
   ============================================================ */

const RESEARCH = {

  intro: `My research focuses on mathematical data science, optimal transport theory, and machine learning
          for biomedical applications. In particular, I develop frameworks to analyze, model, and classify
          complex spatial distributions, point sets, and high-dimensional multiplex single-cell data.`,

  threads: [

    {
      title: "Optimal Transport & Transport-Based Morphometry (TBM)",
      body: `We develop mathematical frameworks leveraging linear optimal transport (LOT) and cumulative
             distribution transforms (such as RCDT) for modeling and classifying complex distributions,
             point clouds, and biological structures. These methods provide closed-form operations, sample
             efficiency, and interpretability in biological pattern recognition.`,
      tags: ["Optimal Transport", "Linear Optimal Transport", "Point Set Classification", "TBM"],
      links: [
        { label: "Related papers", url: "#publications" },
      ],
    },

    {
      title: "Multiplex Imaging & Spatial Single-Cell Analysis (4i)",
      body: `High-plex spatial biology modalities, such as iterative indirect immunofluorescence imaging (4i),
             capture dozens of protein markers across millions of cells. We formulate mathematical methods
             and computational pipelines—establishing a calculus for high-dimensional single-cell measurements—to
             quantify phenotypic heterogeneity, structural variation, and spatial organizations across tissues.`,
      tags: ["4i Technique", "Multiplex Imaging", "Spatial Biology", "Single-Cell Analysis"],
      links: [
        { label: "Related papers", url: "#publications" },
      ],
    },

    {
      title: "Biomedical Signal & Clinical Image Processing",
      body: `Investigating adaptive signal processing and machine learning algorithms for physiological monitoring
             (photoplethysmography [PPG] during exercise, electroencephalography [EEG] for sleep and motor imagery)
             and diagnostic imaging (digital pathology nuclear morphometry, retinal vessel segmentation, brain MRI).`,
      tags: ["PPG & EEG Processing", "Digital Pathology", "Adaptive Filtering", "Machine Learning"],
      links: [
        { label: "Related papers", url: "#publications" },
      ],
    },

  ],
};
