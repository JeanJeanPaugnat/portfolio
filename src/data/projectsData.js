// src/data/projectsData.js

const projects = [
  {
    id: 1,
    title: "Site Portfolio MMI",
    slug: "portfolio-mmi", // Important pour l'URL
    description: "Mon site personnel pour...",
    category: "Web Dev",
    skills: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React", "Node.js"],
      tools: ["Git", "VSCode"]
    },
    year: 2025,
    githubUrl: "...",
    about: "Details about the portfolio project...",
    liveUrl: "...",
    isFeatured: true,
    team: ["Alice", "Bob", "Charlie"]
  },
  {
    id: 2,
    title: "Projet de Synthèse MMI",
    slug: "projet-mmi-synthese",
    description: "Description de votre projet...",
    category: "Systèmes Interactifs",
    skills: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React", "Node.js"],
      tools: []
    },
    year: 2024,
    githubUrl: "...",
    liveUrl: "...",
    isFeatured: false,
    team: ["Jean Dupont", "Marie Curie", "Albert Einstein"]
  },
  {
    id: 3,
    title: "Another Project",
    slug: "another-project",
    description: "Description of another project...",
    category: "Web Dev",
    skills: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React", "Node.js"],
      tools: ["Git"]
    },
    year: 2023,
    githubUrl: "...",
    liveUrl: "...",
    isFeatured: false,
    about: "Details about another project...",
    team: ["Alice", "Bob", "Charlie"]
  },
  {
    id: 4,
    title: "Featured Project",
    slug: "featured-project",
    description: "Description of the featured project...",
    category: "Web Dev",
    skills: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React", "Node.js"],
      tools: ["Git", "Figma"]
    },
    year: 2023,
    githubUrl: "...",
    liveUrl: "...",
    about: "Details about the featured project...",
    isFeatured: true,
    team: ["Alice", "Bob", "Charlie"]
  },
  // ... vos autres projets
];

export default projects;