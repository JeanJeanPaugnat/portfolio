"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Import de l'icône
import projects from '@/data/projectsData'; // Assure-toi du bon chemin
import ProjectItemTitle from "./ProjectItemTitle"; // Ton composant enfant

export default function RecentProjects() {
  // 1. On prend seulement les 3 premiers projets
  // (Assure-toi que ton tableau 'projects' est trié du plus récent au plus ancien dans ton fichier data)
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="bg-[#111111] py-20 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER DE LA SECTION */}
        <div className="flex items-end justify-between pb-6 border-b border-neutral-700 mb-4">
          <h2 className="text-xl font-sans font-light tracking-wide">
            Recent Projects
          </h2>
          
          {/* Bouton SEE ALL avec Icône */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-3 bg-[#0055FF] rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-blue-600 transition-colors"
          >
            See All
            {/* L'icône bouge un peu au survol grâce à group-hover */}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* LISTE DES PROJETS */}
        <motion.div layout className="flex flex-col">
          {displayedProjects.map((project, index) => (
            <ProjectItemTitle
              key={project.id}
              project={project}
              // CORRECTION : On vérifie si l'index actuel est le dernier du tableau coupé (2)
              isLast={index === displayedProjects.length - 1}
            />
          ))}
        </motion.div>

        {/* Ligne finale */}
         <div className="border-t border-neutral-700 mt-[-1px]"></div>
      </div>
    </section>
  );
}