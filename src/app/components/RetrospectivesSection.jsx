"use client";
import React, { useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RetrospectivesSection = ({ retrospectives }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Nos <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">rétrospectives</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez nos aventures immersives et nos expériences uniques
          </p>
        </div>

        <div className="relative">
          {/* Boutons de navigation - cachés sur mobile, visibles sur tablette et desktop */}
          <button 
            onClick={scrollLeft} 
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-red-800 p-3 rounded-full shadow-lg transition-all"
            aria-label="Voir les aventures précédentes"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight} 
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-red-800 p-3 rounded-full shadow-lg transition-all"
            aria-label="Voir les aventures suivantes"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Conteneur défilant */}
          <div 
            ref={sliderRef} 
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory touch-pan-x"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {retrospectives.map((item, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 mx-2 sm:mx-4 snap-center first:ml-4 last:mr-4 md:first:ml-8 md:last:mr-8"
              >
                <Link 
                  href={item.link}
                  className="block group"
                >
                  <div className="relative h-64 overflow-hidden rounded-xl shadow-lg">
                    <Image 
                      src={item.imageSrc} 
                      alt={`${item.title} - Aventure immersive par En Scènes Acting`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={320}
                      height={256}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      Voir le teaser
                    </div>
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles pour cacher la scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RetrospectivesSection; 