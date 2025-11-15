// src/data/projectsData.js

const projects = [
  {
    id: 1,
    title: "Site Portfolio MMI",
    slug: "portfolio-mmi", // Important pour l'URL
    description: "Mon site personnel pour...",
    category: "Web Dev",
    techs: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    year: 2025,
    githubUrl: "...",
    liveUrl: "...",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Projet de Synthèse MMI",
    slug: "projet-mmi-synthese",
    description: "Description de votre projet...",
    category: "Systèmes Interactifs",
    techs: ["Vanilla JS", "GSAP", "PHP"],
    year: 2024,
    githubUrl: "...",
    liveUrl: "...",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Another Project",
    slug: "another-project",
    description: "Description of another project...",
    category: "Web Dev",
    techs: ["React", "Node.js"],
    year: 2023,
    githubUrl: "...",
    liveUrl: "...",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Featured Project",
    slug: "featured-project",
    description: "Description of the featured project...",
    category: "Web Dev",
    techs: ["React", "Node.js"],
    year: 2023,
    githubUrl: "...",
    liveUrl: "...",
    isFeatured: true,
  },
  // ... vos autres projets
];

export default projects;