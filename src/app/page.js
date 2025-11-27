'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import projects from '../data/projectsData.js';
import { ProjectTitle } from '../components/ProjectTitle.jsx';
import Hero from '../components/Hero.jsx';

// Scroll indicator component
function ScrollIndicator() {
  return (
    <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
      <svg
        className="w-3 h-6 sm:w-4 sm:h-7"
        viewBox="0 0 15 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.65685 25.7071C7.04737 26.0976 7.68054 26.0976 8.07106 25.7071L14.435 19.3431C14.8255 18.9526 14.8255 18.3195 14.435 17.9289C14.0445 17.5384 13.4113 17.5384 13.0208 17.9289L7.36395 23.5858L1.7071 17.9289C1.31657 17.5384 0.68341 17.5384 0.292886 17.9289C-0.0976388 18.3195 -0.0976387 18.9526 0.292886 19.3431L6.65685 25.7071ZM7.36395 0L6.36395 4.37114e-08L6.36395 25L7.36395 25L8.36395 25L8.36395 -4.37114e-08L7.36395 0Z"
          fill="#171717"
        />
      </svg>
      <p className="capitalize text-sm sm:text-base" style={{ color: 'var(--neutral-900)' }}>
        scroll down
      </p>
      <svg
        className="w-3 h-6 sm:w-4 sm:h-7"
        viewBox="0 0 15 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.65685 25.7071C7.04737 26.0976 7.68054 26.0976 8.07106 25.7071L14.435 19.3431C14.8255 18.9526 14.8255 18.3195 14.435 17.9289C14.0445 17.5384 13.4113 17.5384 13.0208 17.9289L7.36395 23.5858L1.7071 17.9289C1.31657 17.5384 0.68341 17.5384 0.292886 17.9289C-0.0976388 18.3195 -0.0976387 18.9526 0.292886 19.3431L6.65685 25.7071ZM7.36395 0L6.36395 4.37114e-08L6.36395 25L7.36395 25L8.36395 25L8.36395 -4.37114e-08L7.36395 0Z"
          fill="#171717"
        />
      </svg>
    </div>
  );
}


// Hero section component
export function HomeHeader() {
  const targetRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // S'assurer que l'animation ne se déclenche que côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Capturer le scroll progress pendant que l'élément est dans la vue
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Transformer le scroll vertical en mouvement horizontal
  // Le texte se déplace de 20% à -50% pendant le scroll
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);

  if (!isClient) {
    // Rendu initial côté serveur sans animation
    return (
      <section
        ref={targetRef}
        className="bg-white min-h-full flex flex-col justify-center items-center relative"
      >
        <div className="top-0 h-screen flex flex-col justify-end items-center">
          <ScrollIndicator />

          <div className="flex overflow-hidden w-full">
            <h1
              className="font-black whitespace-nowrap leading-[0.65]
                          text-[clamp(2.5rem,8vw,12rem)] sm:text-[clamp(4rem,12vw,18rem)] 
                          md:text-[clamp(6rem,15vw,24rem)] lg:text-[clamp(8rem,18vw,30rem)] 
                          xl:text-[clamp(10rem,20vw,35rem)]"
              style={{ color: 'var(--neutral-900)' }}
            >
              JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT /
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={targetRef}
      className="bg-white min-h-full flex flex-col justify-center items-center relative"
    >
      {/* Section sticky pour garder le texte visible pendant le scroll */}
      <div className=" top-0 h-screen flex flex-col justify-end items-center">
        <ScrollIndicator />

        <div className="flex overflow-hidden w-full">
          <motion.h1
            style={{ x, color: 'var(--neutral-900)' }}
            className="font-black whitespace-nowrap leading-[0.65]
                      text-[clamp(2.5rem,8vw,12rem)] sm:text-[clamp(4rem,12vw,18rem)] 
                      md:text-[clamp(6rem,15vw,24rem)] lg:text-[clamp(8rem,18vw,30rem)] 
                      xl:text-[clamp(10rem,20vw,35rem)]"
          >
            JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT /
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

// Recent projects section component
export function RecentProjects() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  const displayedProjects = sortedProjects.slice(0, 3);

  return (
    <section className="min-h-screen w-full py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--neutral-900)' }}>
      {/* Header Section */}
      <div className="border-b border-white flex sm:flex-row items-start sm:items-end justify-between pb-6 sm:pb-8 gap-4 sm:gap-0">
        <h2 className="capitalize font-sans font-light text-lg sm:text-xl md:text-2xl" style={{ color: 'var(--white)' }}>
          Recent Projects
        </h2>

        <Link
          href="/projets"
          className="transition-colors active:scale-95 
                    flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg 
                    group w-fit hover:bg-blue-hover"
        >
          <span className="font-serif italic text-base sm:text-lg md:text-xl uppercase 
                          group-hover:scale-105 transition-transform" 
                style={{ color: 'var(--white)' }}>
            See all
          </span>
        </Link>
      </div>

      {/* Projects List */}
      <div className="flex flex-col w-full mt-8 sm:mt-12">
        {displayedProjects.map((project, index) => (
          <ProjectTitle
            key={project.id}
            project={project}
            isLast={index === displayedProjects.length - 1}
          />
        ))}
      </div>

      {/* Projects Counter */}
      {sortedProjects.length > 3 && (
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base" style={{ color: 'var(--white-opacity-50)' }}>
            Showing {displayedProjects.length} of {sortedProjects.length} projects
          </p>
        </div>
      )}
    </section>
  );
}

// Main homepage component
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HomeHeader />
      <RecentProjects />
      <Hero />
    </main>
  );
}
