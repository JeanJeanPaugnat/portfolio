'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, ArrowRight, Linkedin, Github, Mail } from 'lucide-react';
import ScrollName from './ScrollName'; // Assuming this component exists based on your code

// Social Data for cleaner mapping
const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jeanpaugnat/', icon: Linkedin },
  { name: 'Github', href: 'https://github.com/JeanJeanPaugnat', icon: Github },
  { name: 'Email', href: 'mailto:your@email.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-white text-black w-full mt-16">
      
      {/* 1. Call to Action Section */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="flex justify-center md:justify-end">
          <h2 className="text-3xl md:text-5xl font-serif italic text-center md:text-right max-w-lg leading-tight">
            Let's design your goals together!
          </h2>
        </div>
      </div>
      
      {/* 2. Main Navigation Grid */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Primary Nav */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className=" font-sans text-3xl font-normal">Menu</h4>
            <ul className="flex flex-col items-center md:items-start gap-3 font-sans font-medium text-neutral-600">
              {['Home', 'Work', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : item === 'Work' ? '/projets' : `/${item.toLowerCase()}`} 
                    className="hover:text-[#0059ff] transition-colors relative group"
                  >
                    {item}
                    {/* Animated Underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0059ff] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        
          {/* Column 2: Socials */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className=" font-sans text-3xl font-normal">Connect</h4>
            <ul className="flex flex-col items-center md:items-start gap-3 font-sans font-medium text-neutral-600">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#0059ff] transition-colors group"
                  >
                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        
          {/* Column 3: Actions (Buttons) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            
            {/* CV Button (Outline Style) */}
            <motion.a 
              href='./CV-english-nov-25.pdf' 
              target='_blank'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between w-full md:w-auto min-w-[200px] px-6 py-3 
                         border-2 border-[#0059ff] rounded-lg 
                         text-[#0059ff] hover:bg-[#0059ff] hover:text-white 
                         transition-colors duration-300 group cursor-pointer"
            >
              <span className="font-sans font-bold uppercase tracking-wide text-sm">Download CV</span>
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>

            {/* Contact Button (Solid Style) */}
            <Link href="/contact" className="w-full md:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full md:w-auto min-w-[200px] px-6 py-3 
                           bg-[#0059ff] rounded-lg 
                           text-white hover:bg-[#0046cc] 
                           transition-colors duration-300 group shadow-lg shadow-blue-500/20"
              >
                <span className="font-sans font-bold uppercase tracking-wide text-sm">Let's Work Together</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

          </div>
        </div>
      </div>
      
      {/* 3. Large Name Section */}
      <div className="w-full">
         <ScrollName />
      </div>
      
      {/* 4. Copyright Bar */}
      <div className="bg-black text-white py-4">
        <div className=" mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 font-sans text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Jean Paugnat</p>
          <div className="flex gap-4">
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}