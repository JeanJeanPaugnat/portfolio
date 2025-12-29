import React from 'react';

import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  // --- ANIMATIONS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    // 1. WRAPPER EXTERNE (Fond blanc ou noir selon ton site, ici blanc pour le contraste)
    <section className=" w-full flex items-center justify-center p-4 md:px-6 bg-white">
      
      {/* 2. LA CARTE "IOS STYLE" (Le gros bloc bleu) */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full min-h-[85vh] flex flex-col justify-between overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0055FF] via-[#0540c7] to-[#0a142f] text-white p-8 md:p-12 "
      >
        
        {/* --- LIGNE DU HAUT (Top Row) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm md:text-base font-medium tracking-wide opacity-90"
        >
          {/* Status (gauche) */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 md:mb-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-green-300/50"></span>
            </span>
            <span>Available For Internship</span>
          </motion.div>

          {/* Location (droite) */}
          <motion.div variants={itemVariants}>
            Based In Limoges, FR
          </motion.div>
        </motion.div>


        {/* --- CONTENU CENTRAL (Titre) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center flex-grow py-12 md:py-0"
        >
          {/* H1 Serif Italic */}
          <motion.h1 
            variants={itemVariants} 
            className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8"
          >
            BUILDING DIGITAL SOLUTIONS <br />
            WHERE DESIGN MEETS CODE.
          </motion.h1>

          {/* Description Sans-Serif */}
          <motion.p 
            variants={itemVariants} 
            className="font-sans text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed"
          >
            Hi, I’m Jean Paugnat. MMI Student At IUT Limoges And Developer.<br className="hidden md:block" />
            I Transform Creative Concepts Into Performant And Interactive Web Applications.
          </motion.p>
        </motion.div>


        {/* --- LIGNE DU BAS (Bottom Row) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-end justify-between gap-8"
        >
          
          {/* BOUTONS (Gauche) - Style "IOS" angles arrondis */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            
            {/* Bouton Bleu électrique (plus clair que le fond) */}

            <motion.a 
              href="/projets"
              variants={itemVariants}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#2563EB] hover:bg-[#3B82F6] text-white rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-900/30"
            >
               View My Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          
            
            </motion.a>

            {/* Bouton Outline (Bordure) */}
            <motion.a 
              variants={itemVariants}
              href="/CV-Jean-PAUGNAT-dec-2025.pdf"
              target="_blank" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
            >
              Download CV
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </motion.a>

          </div>

          {/* SOCIALS (Droite) */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5 text-white/80 w-full md:w-auto justify-start md:justify-end"
          >
            <a 
              href="https://github.com/JeanJeanPaugnat" 
              target="_blank" 
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>

            {/* Séparateur Vertical */}
            <div className="h-5 w-px bg-white/30"></div>

            <a 
              href="https://linkedin.com/in/tonprofil" 
              target="_blank" 
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}