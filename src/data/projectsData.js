// src/data/projectsData.js

const projects = [
  {
    id: 1,
    title: "Site Portfolio MMI (Ce Projet)",
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
  // ... vos autres projets
];

export default projects;