// src/app/projets/[slug]/page.js

import React from 'react';
import projects from '@/data/projectsData';
import Link from 'next/link';

// --- IMPORTANT POUR LA PERFORMANCE ---
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// "params" est une prop spéciale donnée par Next.js 
// qui contient le 'slug' de l'URL.

// vvv LA CORRECTION EST ICI vvv
export default async function ProjetDetailPage({ params }) {
  const { slug } = await params;

  // On trouve le bon projet dans nos données
  const project = projects.find((p) => p.slug === slug);

  // Gérer le cas où le projet n'est pas trouvé
  if (!project) {
    return (
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">Projet non trouvé</h1>
        <Link href="/projets" className="text-blue-600 hover:underline mt-4">
          Retour à la liste des projets
        </Link>
      </main>
    );
  }

  // Si le projet est trouvé, on l'affiche
  return (
    <main className='mt-16 sm:mt-32 md:mt-48 lg:mt-64'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-22'>
        {/* Header section */}
        <div>
          <div className='flex flex-col sm:flex-row sm:items-center font-sans gap-2 sm:gap-5 text-lg sm:text-2xl md:text-3xl'>
            <div className='flex flex-wrap gap-2'>
              {project.category.map((cat, index) => (
                <p key={index}>{cat}</p>
              ))}
            </div>
            <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="3" height="28" viewBox="0 0 3 28" fill="none">
              <path d="M0 27.2V0H2.34667V27.2H0Z" fill="black"/>
            </svg>
            <p>{project.date.year} {project.date.month}</p> 
          </div>
          <h3 className='font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl italic uppercase mt-4'>{project.title}</h3>
        </div>

        {/* Main content section */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-22 py-16 sm:py-24 md:py-32'>
          <div className='flex flex-col justify-between max-w-3xl gap-12 sm:gap-16 lg:gap-20'>
            <p className='font-sans text-base sm:text-lg md:text-xl leading-relaxed'>{project.overallCaption}</p>
            <div className='flex flex-col font-serif uppercase italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl gap-4'>
              {project.liveUrl && (
                <p>Visit // <a className='underline hover:text-blue-primary transition-colors' href={project.liveUrl}>The Website</a></p>
              )}
              {project.githubUrl && (
                <p>Take // <a className='underline hover:text-blue-primary transition-colors' href={project.githubUrl}>a look on Github</a></p>
              )}
            </div>
          </div>
          <div className='flex-1 lg:max-w-2xl'>
            <img 
              src={`/projets/${project.slug}-preview.png`} 
              alt={project.figcaption} 
              className='bg-amber-500 w-full h-auto object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Skills section */}
        <div className='flex flex-col md:flex-row md:justify-between uppercase border-t border-background pt-6 gap-8'>
          <p className='font-serif italic uppercase text-xl sm:text-2xl'>Skills used :</p>
          <div className='flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-16 md:gap-32'>
            <div>
              <p className='text-lg sm:text-xl md:text-2xl mb-2'>Languages</p>
              <ul className='text-gray-500 text-sm sm:text-base'>
                {project.skills.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className='text-lg sm:text-xl md:text-2xl mb-2'>Frameworks</p>
              <ul className='text-gray-500 text-sm sm:text-base'>
                {project.skills.frameworks.map((framework, index) => (
                  <li key={index}>{framework}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className='text-lg sm:text-xl md:text-2xl mb-2'>Tools</p>
              <ul className='text-gray-500 text-sm sm:text-base'>
                {project.skills.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overview image section */}
      <div className='bg-amber-300 mt-24 sm:mt-36 md:mt-52'>
        <img 
          src={`/images/projects/${project.slug}-overview.png`} 
          alt={`${project.title} overview`} 
          className='w-full h-auto object-cover'
        />
      </div>

      {/* About section */}
      <div className='px-4 sm:px-8 md:px-16 lg:px-22 pt-8 sm:pt-12 md:pt-14'>
        <div className='flex flex-col md:flex-row md:justify-between mb-32 sm:mb-40 md:mb-56 gap-8'>
          <p className='text-2xl sm:text-3xl md:text-4xl md:w-1/2 font-medium'>About</p>
          <p className='md:w-1/2 text-base sm:text-lg leading-relaxed'>{project.about}</p>
        </div>

        <div className='grid'>
          {/* nombre d'images qui changent en fonction du projet */}
        </div>

        {/* Team section */}
        {project.team && project.team.length > 0 && (
          <div className='border-t border-background pt-6 mb-16'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic uppercase mb-4'>Work done with these people:</p>
            <ul className='flex flex-wrap uppercase gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl'>
              {project.team.map((member, index) => (
                <li key={index}>{member} |</li>
              ))}
            </ul>
          </div>
        )}

        {/* Back to projects section */}
        <Link href="/projets" className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif uppercase flex flex-col flex-1 items-center gap-4 sm:gap-6 mt-32 sm:mt-60 md:mt-88 mb-32 sm:mb-40 md:mb-56 hover:text-blue-primary transition-colors group cursor-pointer'>
          <svg className="group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M13.75 5H16.25V20H18.75V22.5H16.25V25H13.75V22.5H11.25V20H13.75V5ZM8.75 17.5V20H11.25V17.5H8.75ZM8.75 17.5V15H6.25V17.5H8.75ZM21.25 17.5V20H18.75V17.5H21.25ZM21.25 17.5V15H23.75V17.5H21.25Z" fill="currentColor"/>
          </svg>
          <p>Back to other projects</p>
        </Link>
      </div>
    </main>
  );
}