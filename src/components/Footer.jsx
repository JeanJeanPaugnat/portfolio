'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Footer scroll text component
function FooterScrollText() {
  const targetRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure component is hydrated on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Capturer le scroll progress pendant que l'élément est dans la vue
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Transformer le scroll vertical en mouvement horizontal
  // Le texte se déplace de droite à gauche pendant le scroll
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  // Render static version during SSR, animated version after hydration
  if (!isClient) {
    return (
      <section 
        ref={targetRef}
        className="py-8 sm:py-12 md:py-16 flex justify-center overflow-hidden px-4 relative"
      >
        <h3 
          className="font-black whitespace-nowrap leading-[0.2] sm:leading-[0.3] text-[clamp(3rem,15vw,20rem)] sm:text-[clamp(5rem,20vw,25rem)] md:text-[clamp(8rem,25vw,30rem)] lg:text-[clamp(12rem,30vw,35rem)]"
        >
          JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT /
        </h3>
      </section>
    );
  }

  return (
    <section 
      ref={targetRef}
      className="py-8 sm:py-12 md:py-16 flex justify-center overflow-hidden px-4 relative"
    >
      <motion.h3 
        style={{ x }}
        className="font-black whitespace-nowrap leading-[0.2] sm:leading-[0.3] text-[clamp(3rem,15vw,20rem)] sm:text-[clamp(5rem,20vw,25rem)] md:text-[clamp(8rem,25vw,30rem)] lg:text-[clamp(12rem,30vw,35rem)]"
      >
        JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT /
      </motion.h3>
    </section>
  );
}

function DownloaderCV() {   
    return (
        <button className="flex rounded-lg border-2 py-2 sm:py-2.5 px-3 border-[#0059ff] items-center gap-2 sm:gap-3 font-serif italic font-bold uppercase text-sm sm:text-base md:text-xl lg:text-2xl hover:bg-[#0059ff] hover:text-white transition-colors group">
            <a href='./CV-english-nov-25.pdf' target='_blank' className="text-xs sm:text-sm md:text-base lg:text-lg">Curriculum Vitae</a>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M21 22H3V2H15V4H17V6H19V8H21V22ZM17 6H15V8H17V6ZM5 4V20H19V10H13V4H5ZM13 16H7V18H13V16ZM7 12H17V14H7V12ZM11 8H7V10H11V8Z" className="fill-current"/>
            </svg>
          </button>
    );
}

export function Footer() {
  return (
    <footer className="bg-white text-black w-full mt-8 sm:mt-16">
      {/* Call to Action Section */}
      <div className="flex w-full justify-center md:justify-end py-8 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-serif italic text-center md:text-right max-w-md">
          Let's design your goals together!
        </h2>
      </div>
      
      {/* Navigation Links Section */}
      <div className="flex flex-col md:flex-row w-full justify-around gap-8 md:gap-0 py-6 sm:py-8 px-4 sm:px-6 md:px-8">
        {/* Primary Navigation */}
        <div className="flex flex-col gap-4 sm:gap-7 items-center md:items-start">
          <h4 className="text-xl sm:text-2xl font-semibold">Primary</h4>
          <ul className="flex flex-col gap-3 sm:gap-4 text-center md:text-left">
            <li><a href="/" className="hover:text-[#0059ff] transition-colors">Home</a></li>
            <li><a href="/projets" className="hover:text-[#0059ff] transition-colors">Work</a></li>
            <li><a href="/about" className="hover:text-[#0059ff] transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-[#0059ff] transition-colors">Let's talk</a></li>
          </ul>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-col gap-4 sm:gap-7 items-center md:items-start">
          <h4 className="text-xl sm:text-2xl font-semibold">Contact</h4>
          <ul className="flex flex-col gap-3 sm:gap-4 text-center md:text-left">
            <li><a href="#" className="hover:text-[#0059ff] transition-colors">LINKEDIN</a></li>
            <li><a href="#" className="hover:text-[#0059ff] transition-colors">INSTAGRAM</a></li>
            <li><a href="#" className="hover:text-[#0059ff] transition-colors">EMAIL</a></li>
          </ul>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:gap-7 items-center md:items-start">
            <DownloaderCV />
          <Link href="/contact">
          <button className="flex rounded-lg py-2 sm:py-2.5 px-3 bg-[#0059ff] items-center gap-2 sm:gap-2.5 font-serif italic text-white font-bold uppercase text-sm sm:text-base md:text-xl lg:text-2xl hover:bg-[#0047cc] transition-colors group">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">Let's work together</span>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
              <path d="M5 13.75L5 16.25L20 16.25L20 18.75L22.5 18.75L22.5 16.25L25 16.25L25 13.75L22.5 13.75L22.5 11.25L20 11.25L20 13.75L5 13.75ZM17.5 8.75L20 8.75L20 11.25L17.5 11.25L17.5 8.75ZM17.5 8.75L15 8.75L15 6.25L17.5 6.25L17.5 8.75ZM17.5 21.25L20 21.25L20 18.75L17.5 18.75L17.5 21.25ZM17.5 21.25L15 21.25L15 23.75L17.5 23.75L17.5 21.25Z" fill="white"/>
            </svg>
          </button>
            </Link>
        </div>
      </div>
      
      {/* Large Name Section with Scroll Animation */}
      <FooterScrollText />
      
      {/* Copyright Bar */}
      <div className="bg-black flex flex-col sm:flex-row font-sans font-normal items-center justify-between px-4 sm:px-8 md:px-12 py-3 sm:py-2 text-xs sm:text-sm text-white gap-2 sm:gap-0">
        <p>©JeanPaugnat</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}