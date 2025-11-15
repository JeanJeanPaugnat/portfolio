
import { Footer } from '../components/Footer.jsx';

export function HomeHeader() {
  return (
    <div className="bg-white min-h-screen min-w-screen flex flex-col justify-end items-center overflow-hidden">
      <div className="flex items-center gap-4 mb-12">
        <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.65685 25.7071C7.04737 26.0976 7.68054 26.0976 8.07106 25.7071L14.435 19.3431C14.8255 18.9526 14.8255 18.3195 14.435 17.9289C14.0445 17.5384 13.4113 17.5384 13.0208 17.9289L7.36395 23.5858L1.7071 17.9289C1.31657 17.5384 0.68341 17.5384 0.292886 17.9289C-0.0976388 18.3195 -0.0976387 18.9526 0.292886 19.3431L6.65685 25.7071ZM7.36395 0L6.36395 4.37114e-08L6.36395 25L7.36395 25L8.36395 25L8.36395 -4.37114e-08L7.36395 0Z" fill="#171717"/>
        </svg>
        <p className="capitalize text-neutral-900">scroll down</p>
        <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.65685 25.7071C7.04737 26.0976 7.68054 26.0976 8.07106 25.7071L14.435 19.3431C14.8255 18.9526 14.8255 18.3195 14.435 17.9289C14.0445 17.5384 13.4113 17.5384 13.0208 17.9289L7.36395 23.5858L1.7071 17.9289C1.31657 17.5384 0.68341 17.5384 0.292886 17.9289C-0.0976388 18.3195 -0.0976387 18.9526 0.292886 19.3431L6.65685 25.7071ZM7.36395 0L6.36395 4.37114e-08L6.36395 25L7.36395 25L8.36395 25L8.36395 -4.37114e-08L7.36395 0Z" fill="#171717"/>
        </svg>
      </div>
        <div className="py-16 flex w-full justify-center overflow-hidden">
        <p className="shrink-0 text-[600px] leading-[300px] font-black text-black">JEAN PAUGNAT</p>

    </div>
    </div>


  );
}

// import { useState } from 'react';
import Link from 'next/link';
import projects from '../data/projectsData.js';
import { ProjectTitle } from '../components/ProjectTitle.jsx';

export function NewProjets() {
  // const [displayCount, setDisplayCount] = useState(3);
  
  // Trier les projets par année (plus récent en premier)
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  console.log(sortedProjects);
  // Projets à afficher
  const displayedProjects = sortedProjects.slice(0, 3);
  
  // Vérifier s'il y a plus de projets
  const hasMore = 3 < sortedProjects.length;



  return (
    <div className="bg-[#1a1a1a] min-h-screen w-full py-[151px] px-[77px]">
      {/* Header Section */}
      <div className="border-[0px_0px_1px] border-solid border-white content-stretch flex items-end justify-between pb-8">
        <p className="capitalize font-sans font-light leading-[normal] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">
          Recent Projects
        </p>
        
        <Link
          href="/projets"
          className="bg-[#0059ff] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-3 py-2 rounded-[7px] shrink-0 hover:bg-[#0047cc] transition-colors active:scale-95"
        >
          <span className="font-serif italic leading-[normal] relative shrink-0 text-[24px] text-nowrap text-white uppercase whitespace-pre">
            See all
          </span>
        </Link>
      </div>

      {/* Projects List */}
      <div className="content-stretch flex flex-col w-full">
        {displayedProjects.map((project) => (
          <ProjectTitle
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {/* Projects Counter */}
      <div className="mt-8 text-center">
        <p className="text-white/50 text-sm">
          Showing {displayedProjects.length} of {sortedProjects.length} projects
        </p>
      </div>
    </div>
  );
}



export default function Home() {
  return (
    <main className="">
      {/* Votre futur contenu ira ici */}
      <HomeHeader />
      <NewProjets />
      <Footer />
    </main>
  );
}
