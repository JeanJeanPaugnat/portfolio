// src/data/projectsData.js

const projects = [
  {
    id: 1,
    title: "Site Portfolio MMI",
    slug: "portfolio-mmi", // Important pour l'URL
    overallCaption: "Mon site personnel pour...",
    about: "Ce portfolio a été conçu et développé dans le cadre de mon cursus MMI afin de présenter mes compétences, projets et expériences professionnelles. L'objectif principal était de créer une plateforme à la fois esthétique et fonctionnelle, reflétant mon identité en tant que développeur web. J'ai utilisé des technologies modernes telles que React pour le front-end et Next.js pour le rendu côté serveur, assurant ainsi une performance optimale et une excellente expérience utilisateur. Le design minimaliste met en avant le contenu tout en offrant une navigation fluide et intuitive.",
    category: ["Web Dev"],
    skills: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React", "Node.js"],
      tools: ["Git", "VSCode"]
    },
    date: { year: 2025, month: "November" },
    githubUrl: null,
    liveUrl: null,
    isFeatured: true,
    team: null
  },
  {
    id: 2,
    title: "Ecommerce Louis vuitton",
    slug: "ecommerce-louis-vuitton",
    overallCaption: "Conception d'un site e-commerce complet (Front & Back-office) alliant l'esthétique Louis Vuitton à une expérience utilisateur intuitive.",
    about: "Ce projet d'e-commerce pour Louis Vuitton a été réalisé dans le cadre de mon cursus MMI. Il s'agit d'une plateforme complète de vente en ligne, intégrant à la fois une interface utilisateur élégante et un back-office robuste pour la gestion des produits, des commandes et des clients. Le design respecte strictement la charte graphique de la marque, offrant une expérience utilisateur fluide et immersive. J'ai utilisé des technologies modernes telles que React pour le front-end et Node.js pour le back-end, assurant ainsi une performance optimale et une évolutivité future.",
    category: ["Web Dev", "Ecommerce"],
    skills: {
      languages: ["JavaScript", "HTML", "CSS", "SQL", "php"],
      frameworks: ["tailwind", "Vue.js"],
      tools: ["Git", "Figma", "VS Code", "phpmyadmin"]
    },
    date: { year: 2025, month: "October" },
    githubUrl: "https://github.com/JeanJeanPaugnat/SAE301",
    liveUrl: null,
    isFeatured: false,
    team: null
  },
  {
    id: 3,
    title: "Another Project",
    slug: "another-project",
    overallCaption: "Description of another project...",
    about: "Details about another project...",
    category: ["Web Dev"],
    skills: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React", "Node.js"],
      tools: ["Git"]
    },
    date: { year: 2023, month: "March" },
    githubUrl: "...",
    liveUrl: "...",
    isFeatured: false,
    team: ["Alice", "Bob", "Charlie"]
  },
  {
    id: 4,
    title: "Featured Project",
    slug: "featured-project",
    overallCaption: "Description of the featured project...",
    about: "Details about the featured project...",
    category: ["Web Dev"],
    skills: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React", "Node.js"],
      tools: ["Git", "Figma"]
    },
    date: { year: 2023, month: "March" },
    githubUrl: "...",
    liveUrl: "...",
    isFeatured: true,
    team: ["Alice", "Bob", "Charlie"]
  },
  // ... vos autres projets
];

export default projects;