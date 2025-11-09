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
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-6xl font-extrabold mb-4">{project.title}</h1>
      <p className="text-xl text-gray-700 mb-8">{project.category} - {project.year}</p>
      
      <div className="prose lg:prose-xl max-w-none mb-8">
        <p>{project.description}</p>
        {/* Ici, vous pourriez ajouter plus de détails, des images, etc. */}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-3">Technologies utilisées :</h3>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900">
            Voir sur GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Voir le site en ligne
          </a>
        )}
      </div>
    </main>
  );
}