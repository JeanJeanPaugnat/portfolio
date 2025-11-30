"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

export default function ProjectItem({ project, isLast }) {
  const [isHovered, setIsHovered] = useState(false);

  // Configuration de l'animation "ressort" pour un effet premium
  const springTransition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 1
  };

  return (
    <Link href={`/projets/${project.slug}`}>
    <motion.div
      layout // Gère l'agrandissement
      transition={springTransition} // Applique la physique fluide
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden cursor-pointer
        ${!isLast && !isHovered ? "border-b border-neutral-700" : ""}`}
    >
      {/* FOND ANIMÉ SÉPARÉ : 
         Au lieu d'animer la couleur sur le parent, on utilise un calque absolute.
         C'est beaucoup plus performant (60fps) que transition-colors.
      */}
      <motion.div 
        className="absolute inset-0 bg-[#0055FF] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Container global avec Padding */}
      <div className={`relative z-10 flex flex-col px-6 md:px-12 transition-all duration-500 ${isHovered ? "py-8 h-[450px] md:h-[400px]" : "py-10"}`}>
        
        {/* TITRE */}
        {/* J'ai remis la différence de taille pour que l'animation ait du sens */}
        <motion.h3
          layout="position"
          className={`font-serif italic uppercase leading-[0.9] z-20 text-white
            ${isHovered ? "text-4xl md:text-7xl" : "text-4xl md:text-7xl"}`}
        >
          {project.title}
        </motion.h3>

        {/* CONTENU DÉTAILLÉ */}
        <AnimatePresence>
          {isHovered && (
            <div className="flex-grow flex flex-col md:flex-row mt-6 md:mt-4 z-20"> 
              {/* DESCRIPTION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-full md:w-1/2 text-white/90 text-lg leading-relaxed font-sans z-20 pb-2 md:pr-4"
              >
                <p>{project.overallCaption}</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* IMAGE EN ABSOLUTE */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            // Animation d'entrée : Glisse depuis le bas-droite + Opacité
            initial={{ opacity: 0, y: 100, x: 50 }} 
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 }} // Léger délai pour suivre l'ouverture

            // POSITIONNEMENT CSS :
            className="absolute 
                       bottom-[-40px] left-0 right-0 mx-auto w-[90%] h-[220px] 
                       md:bottom-[-80px] md:right-[-100px] md:left-auto md:mx-0 md:w-[55%] md:h-[85%] 
                       rounded-3xl overflow-hidden z-10 shadow-2xl shadow-black/50"
          >
             {/* Tag sur l'image */}
             {project.tag && (
                <div className="absolute top-0 left-0 z-10 bg-white text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-br-lg shadow-md">
                  {project.tag}
                </div>
              )}

            <div className="relative w-full h-full">
              <Image
                src={project.img.imgPrincipal}
                alt={project.title}
                fill
                className="object-cover object-center md:object-top"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
    </Link>
  );
}