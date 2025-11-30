"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, MessageCircle, Menu, X } from "lucide-react";

// --- VARIANTES ---
const menuListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
};

const menuButtonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { delay: 0.6, type: "spring" }
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mapping pour les liens du menu mobile
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/projets" },
    { name: "ABOUT", path: "/about" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <LayoutGroup>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none pt-6 px-4">
        
        {/* --- NAVBAR DESKTOP (CAPSULE) --- */}
        <AnimatePresence mode="wait">
          {!isMenuOpen && (
            <motion.nav
              layoutId="navbar-container"
              layout
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0, opacity: 1,
                width: isScrolled ? "min(100%, 800px)" : "min(100%, 1400px)",
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 1)",
                backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
                borderRadius: "16px",
                border: isScrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0)",
                boxShadow: isScrolled ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
                padding: isScrolled ? "10px 20px" : "16px 24px",
              }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
              className="flex items-center justify-between pointer-events-auto relative z-50"
            >
              
              <motion.div 
                 className="flex items-center justify-between w-full"
                 animate={{ opacity: isMenuOpen ? 0 : 1 }}
                 transition={{ duration: 0.2 }}
              >
                  <Link href="/" className="font-bold text-lg md:text-xl tracking-tight text-neutral-900 uppercase">
                    Jean Paugnat
                  </Link>

                  {/* LIENS DESKTOP */}
                  <div className="hidden md:flex items-center gap-8 font-medium text-neutral-600">
                    <Link href="/">
                      {/* On utilise motion.span ici pour éviter l'erreur <a> dans <a> */}
                      <motion.span layout className="relative cursor-pointer hover:text-black transition-colors block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Home
                      </motion.span>
                    </Link>
                    <Link href="/projets">
                      <motion.span layout className="relative cursor-pointer hover:text-black transition-colors block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Work
                      </motion.span>
                    </Link>
                    <Link href="/about">
                      <motion.span layout className="relative cursor-pointer hover:text-black transition-colors block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        About
                      </motion.span>
                    </Link>
                    
                    <Link href="/contact">
                      <motion.span layout whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group flex items-center gap-2 bg-[#0059FF] text-white px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-colors hover:bg-blue-700">
                        LET'S TALK
                        <MessageCircle className="w-4 h-4 hidden group-hover:block transition-all" />
                        <ArrowRight className="w-4 h-4 group-hover:hidden transition-all" />
                      </motion.span>
                    </Link>
                  </div>

                  {/* BURGER TRIGGER (MOBILE) */}
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

      {/* --- OVERLAY MOBILE --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            layoutId="navbar-container"
            layout
            initial={{ borderRadius: "16px" }} 
            animate={{ borderRadius: "0px" }}
            exit={{ borderRadius: "16px", transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[999] bg-white flex flex-col p-6 md:hidden overflow-hidden"
            transition={{ type: "spring", stiffness: 180, damping: 25, mass: 1.5 }}
          >
            
            {/* Header Menu Mobile */}
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

            {/* Navigation Mobile en cascade */}
            <motion.nav 
              variants={menuListVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col flex-grow"
            >
              {navLinks.map((item) => (
                // On met le motion.div AUTOUR du Link pour appliquer l'animation d'entrée
                <motion.div key={item.name} variants={menuItemVariants} className="w-full">
                  <Link 
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="group py-4 border-b border-neutral-100 block w-full"
                  >
                    <div className="overflow-hidden h-[50px]">
                        <span className="block font-serif italic text-5xl text-neutral-900 group-hover:-translate-y-full transition-transform duration-300 ease-[0.22,1,0.36,1]">
                          {item.name}
                        </span>
                        <span className="block font-serif italic text-5xl text-[#0059FF] group-hover:-translate-y-full transition-transform duration-300 ease-[0.22,1,0.36,1]">
                          {item.name}
                        </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Bouton du bas Mobile */}
            <motion.div
              variants={menuButtonVariants}
              initial="hidden"
              animate="visible"
              className="mt-auto flex-shrink-0"
            >
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-[#0059FF] text-white py-5 px-6 rounded-lg flex items-center justify-between"
              >
                <span className="font-bold text-xl tracking-wide uppercase">Let's Talk</span>
                <ArrowRight className="w-8 h-8" />
              </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}