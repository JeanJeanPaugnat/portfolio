// src/components/ProjectCard.jsx

import Link from 'next/link';
import React from 'react';

// Le composant reçoit "project" comme prop
export default function ProjectCard({ project }) {
  return (
    // Nous utilisons les classes Tailwind pour le style
    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" /> */}
      {/* Remarque : L'image viendra plus tard, concentrons-nous sur les données */}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        
        {/* Affiche les technologies en utilisant map() */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech) => (
            <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
        
        {/* Le Link de Next.js pour naviguer vers la page de détail */}
        <Link 
          href={`/projets/${project.slug}`} 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voir le projet
        </Link>
      </div>
    </div>
  );
}