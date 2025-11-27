import React from 'react';

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  // --- CONFIGURATION DES ANIMATIONS (Inchangée) ---
  // L'effet de cascade pour l'apparition des éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre chaque élément
        delayChildren: 0.1,
      },
    },
  };

  // L'animation individuelle de chaque élément (glissement vers le haut)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Easing doux
    },
  };

  return (
    // Changement ici : bg-white et text-black
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white text-black selection:bg-blue-100 selection:text-blue-900 overflow-hidden pt-20 pb-10">
      
      {/* Fond subtil optionnel pour le light mode (tu peux le retirer si tu veux du blanc pur) */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-40"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          
          {/* 1. LE BADGE (Adapté au light mode avec animation du point vert) */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-300 bg-white text-sm font-medium text-neutral-700 shadow-sm">
              {/* Le point vert qui pulse */}
              <span className="relative flex h-2.5 w-2.5 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available For Internship • April 2026
            </span>
          </motion.div>

          {/* 2. LE TITRE PRINCIPAL (H1) - Serif et Italique */}
          {/* Note: J'utilise 'font-serif'. Assure-toi que ton tailwind.config.js a une bonne police serif configurée, ou cela utilisera celle par défaut du navigateur (Times New Roman) */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-serif italic font-medium tracking-tight mb-8 text-black leading-[1.1]"
          >
            BUILDING DIGITAL SOLUTIONS <br className="hidden md:block" />
            WHERE DESIGN MEETS CODE
          </motion.h1>

          {/* 3. LE SOUS-TITRE (P) - Sans-serif */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl leading-relaxed font-sans"
          >
            Hi, I’m Jean Paugnat. MMI Student At IUT Limoges And Developer. 
            I Transform Creative Concepts Into Performant And Interactive Web Applications.
          </motion.p>

          {/* 4. LES BOUTONS (CTA) */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            {/* Bouton Bleu "View My Work" avec Flèche */}
            <a 
              href="#projects" 
              className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-md bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Bouton "Download CV" avec Icône */}
            <a 
              href="/cv.pdf" 
              download 
              className="group inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border-2 border-neutral-900 bg-transparent px-8 font-medium text-neutral-900 transition-all duration-300 hover:bg-neutral-100"
            >
              <span>Download CV</span>
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </a>
          </motion.div>

          {/* 5. LE FOOTER (Réseaux et Localisation) */}
          <motion.div 
            variants={itemVariants} 
            className="mt-20 flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-3xl border-t border-neutral-200 pt-8 text-neutral-600"
          >
            {/* Partie Gauche : Liens Sociaux avec Icônes */}
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <a href="https://github.com/tonprofil" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-black transition-colors group">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
            <div className="hidden md:block h-4 w-px bg-neutral-300 mx-2"></div>

            {/* Partie Droite : Localisation */}
            <div className="font-medium flex items-center">
              Based In Limoges, FR
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}