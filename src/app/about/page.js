"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Palette, Database, Terminal, Layers, Landmark, Languages } from "lucide-react";

// --- DONNÉES FICTIVES (Tu pourras modifier ici) ---

const skills = {
  frontend: [
    { name: "React", icon: <Code2 size={16} /> },
    { name: "Next.js", icon: <Layers size={16} /> },
    { name: "HTML5", icon: <Terminal size={16} /> },
    { name: "CSS3", icon: <Terminal size={16} /> },
    { name: "SASS", icon: <Palette size={16} /> },
    { name: "Tailwind", icon: <Palette size={16} /> },
    { name: "JavaScript", icon: <Terminal size={16} /> },
    { name: "TypeScript", icon: <Terminal size={16} /> },
  ],
  backend: [
    { name: "Node.js", icon: <Terminal size={16} /> },
    { name: "PHP", icon: <Terminal size={16} /> },
    { name: "Symfony", icon: <Terminal size={16} /> },
    { name: "MySQL", icon: <Database size={16} /> },
    { name: "PhphMyAdmin", icon: <Database size={16} /> },
  ],
  design: [
    { name: "Figma", icon: <Palette size={16} /> },
    { name: "Photoshop", icon: <Palette size={16} /> },
    { name: "Illustrator", icon: <Palette size={16} /> },
    { name: "Adobe XD", icon: <Palette size={16} /> },
    { name: "Premiere Pro", icon: <Palette size={16} /> },
    { name: "After Effects", icon: <Palette size={16} /> },
  ],
  other: [
    { name: "Git & GitHub", icon: <Code2 size={16} /> },
    { name: "Vercel", icon: <Layers size={16} /> },
    { name: "English C1", icon: <Languages size={16} /> },
    { name: "Spannish A2", icon: <Languages size={16} /> },
    { name: "Chinese A2", icon: <Languages size={16} /> },
    { name: "Agile Methodologies", icon: <Layers size={16} /> },
    { name: "SEO Basics", icon: <Terminal size={16} /> },
    { name: "Notion", icon: <Layers size={16} /> },
    { name: "UX/UI Principles", icon: <Palette size={16} /> },

  ]
};

const education = [
  {
    id: 1,
    school: "Université de Limoges",
    logo: "/images/limoges-logo.png", 
    dates: "2023 - Now",
    location: "IUT du Limousin, FR",
    degree: "Bachelor",
    title: "BUT Métiers du Multimédia & de l'Internet",
    description: "Specialization in Web Development and Design. Intensive learning of modern languages (JS, PHP) and Agile project management.",
    style: "blue" // Style carte bleue
  },
  {
    id: 2,
    school: "Southern Utah University",
    logo: "/images/suu-logo.png", 
    dates: "2024 - 2025",
    location: "Cedar City, Utah, USA",
    degree: "Gap Year",
    title: "Bachelor in Computer Science",
    description: "International exchange year focused on Computer Science and professional English. Full cultural immersion.",
    style: "white" // Style carte blanche
  }
];

// --- COMPOSANTS UI ---

const SkillPill = ({ name, icon }) => (
  <div className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg w-fit transition-transform hover:scale-105">
    {/* On simule le petit carré de couleur de l'icône Adobe avec un fond rouge/gris */}
    <span className="flex items-center justify-center w-6 h-6 bg-neutral-800 rounded text-[#0055FF]">
      {icon}
    </span>
    <span className="font-bold text-sm tracking-wide">{name}</span>
  </div>
);

const EducationCard = ({ edu }) => {
  const isBlue = edu.style === "blue";
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-8 rounded-3xl flex flex-col justify-between h-full border
        ${isBlue ? "bg-[#0055FF] text-white border-transparent" : "bg-white text-black border-neutral-200"}`}
    >
      {/* Header Carte */}
      <div className="mb-8">
        {/* Placeholder Logo */}
        <div className={`h-12 w-auto mb-6 ${isBlue ? "brightness-0 invert" : ""}`}>
           {/* Remplace par <Image /> quand tu auras les fichiers */}
           <h3 className="font-bold text-2xl leading-tight">{edu.school}</h3>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[edu.dates, edu.location, edu.degree].map((tag, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold uppercase
              ${isBlue ? "bg-white/20 text-white" : "bg-[#0055FF]/10 text-[#0055FF]"}`}>
              {tag}
            </span>
          ))}
        </div>

        <h4 className="text-2xl font-bold mb-4">{edu.title}</h4>
        <p className={`text-sm leading-relaxed ${isBlue ? "text-white/80" : "text-neutral-600"}`}>
          {edu.description}
        </p>
      </div>
    </motion.div>
  );
};

// --- PAGE PRINCIPALE ---

export default function About() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-20">
      
      {/* 1. HERO SECTION (About + Photo) */}
      <section className=" mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Gauche : Texte */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-7xl md:text-9xl font-serif italic font-medium mb-12">
              ABOUT ME
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-neutral-600  leading-relaxed font-sans">
              <p>
                Passionate about digital technology since my youngest age, I chose to transform this curiosity into technical expertise.
              </p>
              <p>
                I'm not just a developer who writes code; I'm a creator who seeks to understand the end user. My journey in BUT MMI taught me that technique without design is nothing, and vice versa.
              </p>
              <p>
                My goal? To join an ambitious international team to build the products of tomorrow.
              </p>
            </div>

            {/* Social Links Styled */}
            <div className="mt-12  space-y-2 font-serif italic text-2xl md:text-5xl">
              <Link href="https://linkedin.com" className="block hover:text-[#0055FF] transition-colors">
                VISIT // <span className="underline decoration-1 underline-offset-4">ME ON LINKEDIN</span>
              </Link>
              <Link href="https://github.com" className="block hover:text-[#0055FF] transition-colors">
                TAKE // <span className="underline decoration-1 underline-offset-4">A LOOK ON GITHUB</span>
              </Link>
            </div>
          </motion.div>

          {/* Droite : Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Fond Bleu */}
            <div className="bg-[#0055FF] aspect-[4/5] w-8xl rounded-sm overflow-hidden relative">
              {/* Remplace par ta vraie photo */}
              <Image 
                src="/images/ton-portrait.jpg" // Mets ta photo ici
                alt="Jean Paugnat"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold uppercase tracking-wide">Jean Paugnat</h2>
              <p className="text-neutral-500">Student / Developer</p>
            </div>
          </motion.div>
        </div>
      </section>

{/* 2. SKILLS SECTION (Table Layout) */}
<section className="border-t border-neutral-200">
  <div className="grid grid-cols-1 lg:grid-cols-3">
    
    {/* --- ROW 1 --- */}

    {/* Colonne Gauche : Titre + Desc */}
    {/* AJOUT : lg:min-h-[500px] pour la hauteur et justify-between pour espacer le contenu */}
    <div className="p-6 md:p-12 lg:border-r border-b border-neutral-200 lg:min-h-[500px] flex flex-col justify-between">
      <h2 className="text-4xl md:text-5xl font-serif italic mb-6">MY SKILLS</h2>
      
      {/* Le texte se cale en bas grâce au justify-between du parent */}
      <p className="text-neutral-600 text-lg leading-relaxed max-w-xs">
        Discover my technical stack. I love exploring new tools, but here are the ones I master on a daily basis for my projects.
      </p>
    </div>
      
    {/* Case Front-End */}
    {/* AJOUT : lg:min-h-[500px] */}
    <div className="p-6 md:p-12 border-t lg:border-t-0 border-b md:border-r border-neutral-200 lg:min-h-[500px]">
      <h3 className="text-xl font-bold uppercase tracking-wider mb-8">Front-End</h3>
      <div className="flex flex-wrap gap-3">
        {skills.frontend.map(skill => <SkillPill key={skill.name} {...skill} />)}
      </div>
    </div>

    {/* Case Back-End */}
    {/* AJOUT : lg:min-h-[500px] */}
    <div className="p-6 md:p-12 border-t lg:border-t-0 border-b border-neutral-200 lg:min-h-[500px]">
      <h3 className="text-xl font-bold uppercase tracking-wider mb-8">Back-Web</h3>
      <div className="flex flex-wrap gap-3">
        {skills.backend.map(skill => <SkillPill key={skill.name} {...skill} />)}
      </div>
    </div>


    {/* --- ROW 2 (Taille standard) --- */}

    {/* Case Design (On decale pour laisser la 1ere colonne vide en dessous du titre si on veut, ou on laisse couler) */}
    {/* Ici le layout grid fait que ça va se mettre sous le titre si on ne force pas */}
    
    {/* Pour respecter une grille "Swiss Style", souvent la colonne sous "My Skills" reste vide ou contient autre chose. 
        Ici, le code va placer "Design" sous "My Skills". Si tu veux que Design soit sous Front-End, il faut ajouter une div vide avant ou utiliser col-start. */}
    
    <div className="p-6 md:p-12 border-b md:border-r border-neutral-200">
      <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Design</h3>
      <div className="flex flex-wrap gap-3">
        {skills.design.map(skill => <SkillPill key={skill.name} {...skill} />)}
      </div>
    </div>

    {/* Case Other (Prend 2 colonnes pour finir la ligne) */}
    <div className="p-6 md:p-12 border-b border-neutral-200 lg:col-span-2">
      <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Other Technos</h3>
      <div className="flex flex-wrap gap-3">
        {skills.other.map(skill => <SkillPill key={skill.name} {...skill} />)}
      </div>
    </div>

  </div>
</section>

      {/* 3. EDUCATION SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-6">MY EDUCATION</h2>
          <p className="text-neutral-600 max-w-xl text-lg">
            My academic journey combines French university theory and international practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map(edu => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>
      </section>

      {/* 4. CTA SECTION (Bottom) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 text-center">
        <div className="flex justify-center items-center gap-4">
          <Link href="/projets">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0055FF] text-white text-2xl md:text-4xl font-bold uppercase px-12 py-6 rounded-2xl hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/30"
            >
              All My Work
            </motion.button>
          </Link>
          
          <Link href="/projets">
             <motion.button 
               whileHover={{ scale: 1.05, rotate: -10 }}
               className="bg-[#0055FF] text-white w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/30"
             >
               <ArrowRight size={40} />
             </motion.button>
          </Link>
        </div>
      </section>

    </main>
  );
}