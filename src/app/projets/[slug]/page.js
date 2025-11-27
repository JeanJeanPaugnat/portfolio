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
    <main className='mt-64'>
      <div className='px-22'>
        <div>
          <div className='flex items-center font-sans gap-5 text-3xl'>
              {project.category.map((cat, index) => (
                <p key={index}>{cat}</p>
              ))}
              <svg xmlns="http://www.w3.org/2000/svg" width="3" height="28" viewBox="0 0 3 28" fill="none">
              <path d="M0 27.2V0H2.34667V27.2H0Z" fill="black"/>
              </svg>

            <p>{project.date.year} {project.date.month}</p> 
          </div>
          <h3 className='font-serif text-9xl italic uppercase'>{project.title}</h3>
        </div>
        <div className='flex justify-between gap-22 py-32'>
          <div className='flex flex-col justify-between max-w-3xl gap-20'>
            <p className='font-sans text-xl leading-8'>{project.overallCaption}</p>
            <div className='flex flex-col font-serif uppercase italic text-5xl'>
              {project.liveUrl && (
                <p>Visit // <a className='underline' href={project.liveUrl}>The Website</a></p>
              )}
              {project.githubUrl && (
                <p>Take // <a className='underline' href={project.githubUrl}>a look on Github</a></p>
              )}
            </div>
          </div>
          <div className='flex-1'>
            <img src={`/images/projects/${project.slug}-preview.png`} alt={project.figcaption} className='bg-amber-500 w-auto h-auto object-cover'/>
          </div>
        </div>
        <div className='flex justify-between uppercase border-t border-background pt-6'>
        <p className='font-serif italic uppercase text-2xl'>Skills used :</p>
        <div className='flex justify-between gap-32'>
          <div>
            <p className='text-2xl'>Languages</p>
            <ul className='text-gray-500'>
              {project.skills.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className='text-2xl'>frameworks</p>
            <ul className='text-gray-500'>
              {project.skills.frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className='text-2xl'>Outils</p>
            <ul className='text-gray-500'>
              {project.skills.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      </div>
      <div className='bg-amber-300 mt-52'>
        <img src={`/images/projects/${project.slug}-overview.png`} alt={`${project.title} overview`} className='w-full h-auto object-cover'/>
      </div>
      <div className='px-22 pt-14'>
        <div className='flex justify-between mb-56'>
          <p className='text-4xl'>About</p>
          <p className=''>{project.about}</p>
        </div>
        <div className='grid'>
          {/* nombre d'images qui changent en focntion du projet */}

        </div>
        {project.team && project.team.length > 0 && (
          <div className='border-t border-background pt-6'>
            <p className='text-5xl font-serif italic uppercase'>Work done with these people:</p>
            <ul className='flex uppercase gap-4 text-2xl'>
              {project.team.map((member, index) => (
                <li key={index}>{member} |</li>
              ))}
            </ul>
          </div>
        )}
        <div className='text-5xl font-serif uppercase flex flex-col flex-1 items-center gap-6 mt-88 mb-56'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M13.75 5H16.25V20H18.75V22.5H16.25V25H13.75V22.5H11.25V20H13.75V5ZM8.75 17.5V20H11.25V17.5H8.75ZM8.75 17.5V15H6.25V17.5H8.75ZM21.25 17.5V20H18.75V17.5H21.25ZM21.25 17.5V15H23.75V17.5H21.25Z" fill="black"/>
          </svg>
          <p>Back to other projects</p>
        </div>
      </div>
    </main>
  );
}