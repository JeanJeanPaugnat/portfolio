'use client';

import Link from 'next/link';
import projects from '../data/projectsData.js';
// import { ProjectTitle } from '../components/ProjectItemTitle.jsx';
import Hero from '../components/Hero.jsx';
import RecentProjects from '../components/RecentProjects.jsx';

// Import des nouveaux composants "propres"
import ScrollName from '../components/ScrollName.jsx';
import ScrollIndicator from '../components/ScrollIndicator.jsx';



function RecenxxxtProjects() {
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
          className="transition-colors active:scale-95 flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg group w-fit hover:bg-blue-hover"
        >
          <span className="font-serif italic text-base sm:text-lg md:text-xl uppercase group-hover:scale-105 transition-transform" style={{ color: 'var(--white)' }}>
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

// --- Composant Principal ---
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Section Nom & Scroll */}
      <section className="bg-white flex flex-col justify-end items-center pb-20 pt-10 min-h-[50vh]">
        <ScrollIndicator />
        <ScrollName />
      </section>
      <RecentProjects />

      {/* 3. Projets */}
      {/* <RecentProjects /> */}
    </main>
  );
}