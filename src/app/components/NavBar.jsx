"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    ['Accueil', '/'],
    ['Team Building', '/team-building'],
    ['Concepts', '/nos-concepts'],
    ['Formations', '/nos-formations'],
    ['Galerie', '/galerie-scenarios'],
    ['Témoignages', '/agenda'],
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-red-800/30' : 'bg-transparent'}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo simplifié */}
          <Link 
            href="/" 
            className="z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src='./logoES.jpg' 
              alt="logo" 
              className="h-14 w-14 lg:h-16 lg:w-16 transition-transform hover:scale-105" 
            />
          </Link>

          {/* Navigation desktop (seulement pour grand écran) */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map(([title, path]) => (
              <Link
                key={title}
                href={path}
                className="relative px-3 py-2 text-base font-medium text-white hover:text-red-500 transition-colors group"
              >
                {title}
                <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 w-0 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5  bg-gradient-to-b from-red-600 to-red-900 rounded-full text-white font-semibold hover:bg-red-700 transition-colors flex items-center gap-2 text-sm"
            >
              Parlons-en
            </Link>
          </nav>

          {/* Menu tablette/mobile */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link
              href="/contact"
              className="px-4 py-2  bg-gradient-to-b from-red-600 to-red-900 rounded-full text-white text-sm hover:bg-red-700 transition-colors"
            >
              Parlons-en
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-red-800/20 transition-colors"
            >
              <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>

          {/* Overlay mobile/tablette */}
          <div className={`lg:hidden fixed inset-0 bg-black/95 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 -z-10'}`}>
            <nav className="flex flex-col items-center justify-center h-full space-y-6 p-4">
              {navLinks.map(([title, path]) => (
                <Link
                  key={title}
                  href={path}
                  className="text-xl text-center text-white hover:text-red-500 transition-colors py-2 px-4 w-full max-w-xs relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                  <span className="absolute bottom-0 left-1/2 h-0.5 bg-red-500 w-0 transition-all duration-300 group-hover:w-3/4 -translate-x-1/2" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;