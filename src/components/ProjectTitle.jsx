import Link from 'next/link';
import React from 'react';

export function ProjectTitle({ project, isLast = false }) {
  return (
    <Link 
      href={`/projets/${project.slug}`} 
      className="group block w-full transition-all duration-300 hover:bg-white/5"
    >
      <div className={`py-6 sm:py-8 md:py-12 w-full ${!isLast ? 'border-b border-white/20' : ''} 
                      transition-all duration-300 group-hover:border-white/40`}>  
        <h3 className="font-serif text-center italic leading-tight text-white uppercase
                      text-4xl md:text-6xl lg:text-8xl
                      transition-all duration-300 group-hover:scale-105 group-hover:text-[#0059ff]
                      px-4">
          {project.title}
        </h3>

      </div>
    </Link>
  );
}