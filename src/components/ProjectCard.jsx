// src/components/ProjectCard.jsx

import Link from 'next/link';
import React from 'react';

// Le composant reçoit "project" comme prop
export default function ProjectCard({ project }) {
  return (
    <div className='group grid grid-cols-[1fr_1fr_1fr_200px] text-xl py-3 px-2.5 hover:bg-black hover:text-white transition-colors'>
      <p className="">
        {project.title}
      </p>
      <p className="">
        {project.category}
      </p>
      <p className="">
        {project.date.month} {project.date.year}
      </p>
      <Link href={`/projets/${project.slug}`}  className="flex justify-end w-full ">
        <span className="flex items-center justify-center text-2xl font-serif rounded-sm px-3 bg-blue-primary! hover:bg-blue-700! italic uppercase cursor-pointer opacity-0 group-hover:opacity-100">
          SEE
        </span>
      </Link>
    </div>
  );
}