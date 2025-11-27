// src/components/Header.jsx

import React from 'react';

// En-tête simplifié et responsive
export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-foreground">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-background text-lg md:text-xl font-bold tracking-wide">JEAN PAUGNAT</div>

        {/* Navigation: visible à partir de md */}
        <nav className="hidden md:flex gap-8 items-center text-base capitalize">
          <a href="/" className="hover:underline">home</a>
          <a href="/projets" className="hover:underline">work</a>
          <a href="/about" className="hover:underline">about me</a>
          <a href="/contact" className="hover:underline">contact</a>
        </nav>

        {/* Hamburger: visible sur petits écrans */}
        <button
          type="button"
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-label="Open navigation"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}