// src/app/projets/page.js

import React from 'react';
// Importez vos données. 
// L'arobase '@' est un alias pour le dossier 'src/', configuré par Next.js.
import projects from '@/data/projectsData'; 
import ProjectCard from '@/components/ProjectCard'; // Importez votre nouveau composant

export default function ProjetsPage() {
  return (
    <section className='px-4 sm:px-8 md:px-16 lg:px-28 py-16 sm:py-24 md:py-32 flex flex-col justify-end gap-16 sm:gap-24 md:gap-32 min-h-screen'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0'>
        <h4 className='font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase text-center md:text-left'>
          Projects
        </h4>
        <p className='font-serif max-w-xl text-sm sm:text-base md:text-lg text-center md:text-left'>
          Here is a selection of my projects showcasing my skills and experience in web development. Each project reflects my commitment to quality, innovation, and user-centric experience.
        </p>
      </div>
      
      <div className=''>
        {/* Header - visible only on desktop */}
        <div className='hidden md:grid grid-cols-[1fr_1fr_1fr_200px] px-2.5 mb-6'>
          <div className='flex items-center gap-4'>
            <p className='text-xl lg:text-2xl'>Name</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path d="M4.99219 0.219666C5.28509 -0.0732334 5.75984 -0.0732334 6.05273 0.219666L10.8252 4.99213C11.1181 5.28503 11.1181 5.75977 10.8252 6.05267C10.5323 6.34535 10.0575 6.3455 9.76465 6.05267L6.27246 2.56049V15.4394L9.76465 11.9472C10.0575 11.6543 10.5323 11.6544 10.8252 11.9472C11.1181 12.2401 11.1181 12.7149 10.8252 13.0078L6.05273 17.7802C5.75983 18.073 5.28506 18.0731 4.99219 17.7802L0.219727 13.0078C-0.0731504 12.7149 -0.0731067 12.2401 0.219727 11.9472C0.512625 11.6543 0.987375 11.6543 1.28027 11.9472L4.77246 15.4394V2.56049L1.28027 6.05267C0.987388 6.34542 0.512588 6.34546 0.219727 6.05267C-0.0731295 5.75982 -0.0730437 5.28504 0.219727 4.99213L4.99219 0.219666Z" fill="#0059FF"/>
            </svg>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-xl lg:text-2xl'>Category</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path d="M4.99219 0.219666C5.28509 -0.0732334 5.75984 -0.0732334 6.05273 0.219666L10.8252 4.99213C11.1181 5.28503 11.1181 5.75977 10.8252 6.05267C10.5323 6.34535 10.0575 6.3455 9.76465 6.05267L6.27246 2.56049V15.4394L9.76465 11.9472C10.0575 11.6543 10.5323 11.6544 10.8252 11.9472C11.1181 12.2401 11.1181 12.7149 10.8252 13.0078L6.05273 17.7802C5.75983 18.073 5.28506 18.0731 4.99219 17.7802L0.219727 13.0078C-0.0731504 12.7149 -0.0731067 12.2401 0.219727 11.9472C0.512625 11.6543 0.987375 11.6543 1.28027 11.9472L4.77246 15.4394V2.56049L1.28027 6.05267C0.987388 6.34542 0.512588 6.34546 0.219727 6.05267C-0.0731295 5.75982 -0.0730437 5.28504 0.219727 4.99213L4.99219 0.219666Z" fill="#0059FF"/>
            </svg>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-xl lg:text-2xl'>Year Released</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path d="M4.99219 0.219666C5.28509 -0.0732334 5.75984 -0.0732334 6.05273 0.219666L10.8252 4.99213C11.1181 5.28503 11.1181 5.75977 10.8252 6.05267C10.5323 6.34535 10.0575 6.3455 9.76465 6.05267L6.27246 2.56049V15.4394L9.76465 11.9472C10.0575 11.6543 10.5323 11.6544 10.8252 11.9472C11.1181 12.2401 11.1181 12.7149 10.8252 13.0078L6.05273 17.7802C5.75983 18.073 5.28506 18.0731 4.99219 17.7802L0.219727 13.0078C-0.0731504 12.7149 -0.0731067 12.2401 0.219727 11.9472C0.512625 11.6543 0.987375 11.6543 1.28027 11.9472L4.77246 15.4394V2.56049L1.28027 6.05267C0.987388 6.34542 0.512588 6.34546 0.219727 6.05267C-0.0731295 5.75982 -0.0730437 5.28504 0.219727 4.99213L4.99219 0.219666Z" fill="#0059FF"/>
            </svg>
          </div>
          <div></div>
        </div>
        
        {/* Projects list */}
        <div className=''>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}