/* ============================================================
   ABOUT — Bio, education, and technical skills.
   ============================================================ */

const ABOUT = {

  // One entry per paragraph.
  paragraphs: [

    `I am a PhD candidate in Electrical Engineering at the University of Virginia, advised by
     <a href="https://datascience.virginia.edu/people/gustavo-k-rohde" target="_blank" rel="noopener">Prof. Gustavo K. Rohde</a>
     in the Imaging and Data Science Laboratory. My work sits at the intersection of mathematical data science,
     machine learning, and computational biology, with a special focus on optimal transport and multiplex imaging.`,

    `My doctoral dissertation develops a mathematical calculus for high-dimensional single-cell measurements,
     providing principled tools to model, classify, and understand spatial heterogeneity and cellular organizations
     in high-plex multiplexed imaging technologies (such as the 4i technique).`,

    `Prior to joining UVA, I served as a Lecturer and Assistant Professor in the Department of Electrical and
     Electronic Engineering at Chittagong University of Engineering and Technology (CUET) in Bangladesh, where I
     mentored student researchers and taught courses in signal processing, systems, and hardware interfacing.`,

  ],

  // Degrees, newest first.
  education: [

    {
      title: "PhD in Electrical Engineering",
      meta: `University of Virginia, 2022 – Expected Spring 2027<br>
             Dissertation: “A calculus for high dimensional single-cell measurements”<br>
             Advisor: Prof. Gustavo K. Rohde`,
    },

    {
      title: "MSc in Electrical and Electronic Engineering",
      meta: "Chittagong University of Engineering and Technology (CUET), 2021",
    },

    {
      title: "BSc in Electrical and Electronic Engineering",
      meta: "Bangladesh University of Engineering and Technology (BUET), 2015",
    },

  ],

  // Technical skills and tools.
  skills: [
    "Python", "PyTorch", "R", "C/C++", "MATLAB",
    "Optimal Transport", "Computational Biology", "Spatial Biology / 4i",
    "Git", "Docker", "LaTeX", "HPC / Slurm",
  ],

};
