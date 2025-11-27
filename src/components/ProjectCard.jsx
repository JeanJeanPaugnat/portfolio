// src/components/ProjectCard.jsx

import Link from 'next/link';
import React from 'react';

// Le composant reçoit "project" comme prop
export default function ProjectCard({ project }) {
  return (
    <div className='group hover:bg-black hover:text-white transition-colors
                    grid grid-cols-[1fr_1fr_1fr_200px] text-base sm:text-lg md:text-xl py-3 px-2.5
                    md:grid-cols-[1fr_1fr_1fr_200px]
                    sm:grid-cols-1 sm:gap-2 sm:py-4 sm:px-4
                    border-b border-gray-200 last:border-b-0'>
      {/* Mobile layout - stacked */}
      <div className="sm:block md:hidden">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <p className="font-semibold text-lg">
              {project.title}
            </p>
            <Link href={`/projets/${project.slug}`} className="ml-4">
              <span className="flex items-center justify-center text-sm font-serif rounded-sm px-2 py-1 bg-blue-primary text-white italic uppercase cursor-pointer group-hover:bg-blue-700 transition-colors">
                SEE
              </span>
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            {Array.isArray(project.category) ? project.category.join(', ') : project.category}
          </p>
          <p className="text-gray-500 text-sm">
            {project.date.month} {project.date.year}
          </p>
        </div>
      </div>

      {/* Desktop layout - grid (hidden on small screens) */}
      <p className="hidden md:block">
        {project.title}
      </p>
      <p className="hidden md:block">
        {Array.isArray(project.category) ? project.category.join(', ') : project.category}
      </p>
      <p className="hidden md:block">
        {project.date.month} {project.date.year}
      </p>
      <Link href={`/projets/${project.slug}`} className="hidden md:flex justify-end w-full">
        <span className="flex items-center justify-center text-xl lg:text-2xl font-serif rounded-sm px-3 bg-blue-primary hover:bg-blue-700 italic uppercase cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity text-white">
          SEE
        </span>
      </Link>
    </div>
  );
}