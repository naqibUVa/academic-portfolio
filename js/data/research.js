/* ============================================================
   RESEARCH — Research agenda and core directions.
   ============================================================ */

const RESEARCH = {

  intro: `My research lies at the intersection of optimal transport, mathematical modeling, and machine learning for biomedical applications. I develop computational methods for representing, analyzing, and learning from high-dimensional single-cell, spatial imaging, and biological point-set data.`,

  threads: [

    {
      title: "FlowLOT",
      body: `FlowLOT is an optimal transport-based framework that represents patient-derived single-cell measurements as empirical cellular distributions and maps them into fixed-length feature embeddings. The framework unifies high-dimensional classification, interpretable visualization, and continuous quantitative prediction, including measurable residual disease (MRD) estimation in acute myeloid leukemia (AML), within a transparent and mathematically interpretable architecture.`,
      tags: [
        "Optimal Transport",
        "Linear Optimal Transport",
        "Flow Cytometry",
        "Measurable Residual Disease",
        "Computational Hematology",
        "AML"
      ],
      links: [
        { label: "Related papers", url: "https://arxiv.org/abs/2609.17906" },
        { label: "Code", url: "https://github.com/naqibUVa/FlowLOT_v1" },

      ],
    },

    {
      title: "Metaphase Chromosome Analysis with Iterative Indirect Immunofluorescence Imaging (4i)",
      body: `This project investigates how chromosome passenger complex (CPC) signaling and chromosome condensation are coordinated during mitosis using high-dimensional multiplex imaging. We develop optimal transport-based methods to quantify, visualize, and compare chromosome-scale variation across cell lines, enabling the study of how chromosome geometry influences protein localization and chromosomal organization.`,
      tags: [
        "4i Imaging",
        "Multiplex Imaging",
        "Spatial Biology",
        "Chromosome Biology",
        "Chromosome Passenger Complex"
      ],
      links: [
        { label: "Ongoing project", url: "#" },
      ],
    },

    {
      title: "Quantifying Nuclear Structures in Digital Pathology Using Transport-Based Morphometry",
      body: `We develop transport-based morphometry (TBM) methods grounded in optimal transport theory to quantify nuclear chromatin organization directly from microscopy images. By representing nuclei relative to a common template, these methods provide interpretable and robust morphological descriptors that reveal cancer-associated structural variation across tissue types and imaging protocols.`,
      tags: [
        "Digital Pathology",
        "Whole Slide Imaging",
        "Optimal Transport",
        "Nuclear Morphometry",
        "Image Analysis"
      ],
      links: [
        { label: "Related papers", url: "https://onlinelibrary.wiley.com/doi/full/10.1002/cyto.a.24917" },
      ],
    },

    {
      title: "Computational Autofluorescence Correction for Cyclic Immunofluorescence (cIF)",
      body: `High-plex cyclic immunofluorescence (cIF) experiments are often affected by tissue autofluorescence and imaging artifacts that distort downstream biological measurements. We develop computational and machine-learning approaches for autofluorescence correction, image restoration, and quantitative analysis of spatial proteomics data generated on Lunaphore COMET and related imaging platforms.`,
      tags: [
        "Cyclic Immunofluorescence",
        "Multiplex Imaging",
        "Spatial Proteomics",
        "Image Processing",
        "Single-Cell Analysis",
        "Genentech Internship Project"
      ],
      // links: [
      //   { label: "Related papers", url: "#publications" },
      // ],
    },

    {
      title: "Biomedical Signal Processing and Clinical Image Analysis",
      body: `My broader research interests include biomedical signal processing and medical image analysis. Representative projects include heart-rate estimation from motion-corrupted photoplethysmography (PPG), EEG-based physiological monitoring, retinal vessel segmentation, digital pathology, and brain MRI analysis using machine learning and statistical signal processing methods.`,
      tags: [
        "PPG Signal Processing",
        "EEG Analysis",
        "Digital Pathology",
        "Medical Imaging",
        "Machine Learning"
      ],
      links: [
        { label: "Related papers", url: "#publications" },
      ],
    },

  ],
};