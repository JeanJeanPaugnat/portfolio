// src/app/projets/page.js

import React from 'react';
// Importez vos données. 
// L'arobase '@' est un alias pour le dossier 'src/', configuré par Next.js.
import projects from '@/data/projectsData'; 
import ProjectCard from '@/components/ProjectCard'; // Importez votre nouveau composant

export default function ProjetsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12">
        Mes Projets
      </h1>
      
      {/* Nous utilisons .map() pour boucler sur nos données 
        et rendre un ProjectCard pour chaque projet.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          // "key" est obligatoire en React lors d'un .map()
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}