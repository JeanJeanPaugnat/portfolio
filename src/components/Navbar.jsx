"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, MessageCircle, Menu, X } from "lucide-react";

// --- VARIANTES POUR L'ANIMATION EN CASCADE ---
// Le conteneur de la liste
const menuListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Délai entre chaque élément
      delayChildren: 0.2,    // On attend un peu que le menu s'ouvre
    },
  },
};

// Les éléments individuels (Liens)
const menuItemVariants = {
  hidden: { opacity: 0, y: 40 }, // Arrive du bas
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
};

// Le gros bouton du bas
const menuButtonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { delay: 0.6, type: "spring" } // Apparait en dernier
  },
};


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Détection scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquage scroll body
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    // LayoutGroup est essentiel pour que les animations partagées fonctionnent
    <LayoutGroup>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none pt-6 px-4">
        
        {/* --- LA NAVBAR PRINCIPALE (Visible quand menu fermé) --- */}
        {/* On utilise AnimatePresence pour gérer sa disparition fluide quand le menu s'ouvre */}
        <AnimatePresence mode="wait">
          {!isMenuOpen && (
            <motion.nav
              // layoutId EST LA CLÉ : Il lie cet élément à l'overlay
              layoutId="navbar-container"
              layout
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                width: isScrolled ? "min(100%, 800px)" : "min(100%, 1400px)",
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 1)", // Blanc pur au début pour transition propre
                backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
                borderRadius: "16px",
                border: isScrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0)",
                boxShadow: isScrolled ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
                padding: isScrolled ? "10px 20px" : "16px 24px",
              }}
              // Animation de sortie quand le menu s'ouvre
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
              className="flex items-center justify-between pointer-events-auto relative z-50"
            >
              
              {/* Contenu de la navbar (Logo, Liens Desktop, Burger) */}
              {/* On l'enveloppe pour qu'il disparaisse vite quand le "morphing" commence */}
              <motion.div 
                 className="flex items-center justify-between w-full"
                 animate={{ opacity: isMenuOpen ? 0 : 1 }}
                 transition={{ duration: 0.2 }}
              >
                  <div className="font-bold text-lg md:text-xl tracking-tight text-neutral-900 uppercase">
                    Jean Paugnat
                  </div>

                  {/* Desktop Links */}
                  <div className="hidden md:flex items-center gap-8 font-medium text-neutral-600">
                    {["Home", "Work", "About"].map((item) => (
                      <motion.a key={item} layout href={`#${item.toLowerCase()}`} className="relative cursor-pointer hover:text-black transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        {item}
                      </motion.a>
                    ))}
                    <motion.a layout href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group flex items-center gap-2 bg-[#0059FF] text-white px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-colors hover:bg-blue-700">
                      LET'S TALK
                      <MessageCircle className="w-4 h-4 hidden group-hover:block transition-all" />
                      <ArrowRight className="w-4 h-4 group-hover:hidden transition-all" />
                    </motion.a>
                  </div>

                  {/* Mobile Burger Trigger */}
                  <div className="md:hidden">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMenuOpen(true)}
                      className="flex items-center justify-center w-10 h-10 bg-[#0059FF] text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Menu size={24} strokeWidth={2.5} />
                    </motion.button>
                  </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* --- OVERLAY MOBILE (Visible quand menu ouvert) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // MÊME layoutId que la navbar ! C'est ça qui fait le lien.
            layoutId="navbar-container"
            layout
            // Configuration initiale pour que le morphing soit fluide
            initial={{ borderRadius: "16px" }} 
            animate={{ borderRadius: "0px" }} // Devient carré en plein écran
            exit={{ borderRadius: "16px", transition: { duration: 0.3 } }}
            // Z-index très élevé pour passer devant tout
            className="fixed inset-0 z-[999] bg-white flex flex-col p-6 md:hidden overflow-hidden"
            transition={{ type: "spring", stiffness: 180, damping: 25, mass: 1.5 }} // Transition fluide et lourde
          >
            
            {/* Header du Menu (Doit apparaître vite) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="flex justify-between items-center mb-12 flex-shrink-0"
            >
              <span className="font-bold text-lg uppercase tracking-tight text-neutral-900">
                Jean Paugnat
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 bg-[#0059FF] text-white rounded-md"
              >
                <X size={24} strokeWidth={2.5} />
              </motion.button>
            </motion.div>

            {/* Navigation en cascade */}
            <motion.nav 
              variants={menuListVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col flex-grow"
            >
              {["HOME", "WORK", "ABOUT"].map((item) => (
                <motion.a
                  key={item}
                  variants={menuItemVariants} // Applique la variante individuelle
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="group py-4 border-b border-neutral-100 "
                >
                  {/* Effet de texte qui monte au survol */}
                  <div className="overflow-hidden h-[50px]">
                     <span className="block font-serif italic text-5xl text-neutral-900 group-hover:-translate-y-full transition-transform duration-300 ease-[0.22,1,0.36,1]">
                        {item}
                     </span>
                     <span className="block font-serif italic text-5xl text-[#0059FF] group-hover:-translate-y-full transition-transform duration-300 ease-[0.22,1,0.36,1]">
                        {item}
                     </span>
                  </div>
                </motion.a>
              ))}
            </motion.nav>

            {/* Bouton du bas */}
            <motion.a
              variants={menuButtonVariants}
              initial="hidden"
              animate="visible"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-auto w-full bg-[#0059FF] text-white py-5 px-6 rounded-lg flex items-center justify-between flex-shrink-0"
            >
              <span className="font-bold text-xl tracking-wide uppercase">Let's Talk</span>
              <ArrowRight className="w-8 h-8" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}