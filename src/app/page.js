'use client';

import Link from 'next/link';
import projects from '../data/projectsData.js';
// import { ProjectTitle } from '../components/ProjectItemTitle.jsx';
import Hero from '../components/Hero.jsx';
import RecentProjects from '../components/RecentProjects.jsx';

// Import des nouveaux composants "propres"
import ScrollName from '../components/ScrollName.jsx';
import ScrollIndicator from '../components/ScrollIndicator.jsx';



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