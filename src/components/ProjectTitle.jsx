import Link from 'next/link';
import React from 'react';

export function ProjectTitle ({ project }) {
  return (
    // Nous utilisons les classes Tailwind pour le style
        <Link 
          href={`/projets/${project.slug}`} 
          className=""
        >
        <div className="py-8 w-full border-[0px_0px_1px] border-solid border-white">  
            <p className="font-serif text-center italic leading-[normal] relative shrink-0 text-[100px] text-nowrap text-white uppercase whitespace-pre">
                {project.title}
            </p>
        </div>

        </Link>
  );
}