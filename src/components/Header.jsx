// src/components/Header.jsx

import React from 'react';

// Ce composant est un simple en-tête de navigation
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-white shadow-md z-10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Nom du développeur */}
        <span className="text-2xl font-extrabold text-gray-800">
          Votre Nom.dev
        </span>

        {/* Liens de navigation */}
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-600 transition duration-300">Accueil</a>
          <a href="/projets" className="hover:text-blue-600 transition duration-300">Projets</a>
          <a href="/contact" className="hover:text-blue-600 transition duration-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}