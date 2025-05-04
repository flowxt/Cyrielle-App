"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingBookButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-2 min-w-[280px] bg-white rounded-xl shadow-2xl overflow-hidden border border-red-100"
          >
            <div className="p-4 bg-gradient-to-r from-red-600 to-red-800">
              <h3 className="text-white font-bold text-lg font-poppins">
                Réservez vos aventures
              </h3>
              <p className="text-white/80 text-sm">
                Choisissez votre expérience immersive
              </p>
            </div>
            
            <div className="p-3 max-h-[60vh] overflow-y-auto">
              <a 
                href="https://linktr.ee/Enscenesacting" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeMenu}
                className="block p-3 hover:bg-red-50 rounded-lg transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800 group-hover:text-red-700 transition-colors">
                      Voir toutes les réservations
                    </h4>
                    <p className="text-sm text-gray-600">
                      Accédez à notre Linktree
                    </p>
                  </div>
                </div>
              </a>

              <div className="h-px bg-gray-200 my-2"></div>

              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 my-2">
                Aventures populaires
              </h4>

              <a 
                href="https://linktr.ee/Enscenesacting" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeMenu}
                className="block p-3 hover:bg-red-50 rounded-lg transition-colors"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center text-red-700 mt-0.5">
                    🧙‍♂️
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800">
                      Jeux de piste (4-8 ans)
                    </h4>
                    <p className="text-xs text-gray-500">
                      Au château de l'Échelle
                    </p>
                  </div>
                </div>
              </a>

              <a 
                href="https://linktr.ee/Enscenesacting" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeMenu}
                className="block p-3 hover:bg-red-50 rounded-lg transition-colors"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center text-red-700 mt-0.5">
                    👸
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800">
                      Escape contes à énigmes (6-11 ans)
                    </h4>
                    <p className="text-xs text-gray-500">
                      Au château de l'Échelle
                    </p>
                  </div>
                </div>
              </a>

              <a 
                href="https://linktr.ee/Enscenesacting" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeMenu}
                className="block p-3 hover:bg-red-50 rounded-lg transition-colors"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center text-red-700 mt-0.5">
                    🔎
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800">
                      Enquête grandeur nature (Ados/Adultes)
                    </h4>
                    <p className="text-xs text-gray-500">
                      Au château de l'Échelle
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-100">
              <Link 
                href="/contact"
                onClick={closeMenu}
                className="block w-full text-center py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Demander un devis personnalisé
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton principal avec texte */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg hover:shadow-xl transition-all sm:pr-6"
        aria-label="Réserver un événement"
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-2">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            )}
          </div>
          <span className="hidden sm:inline-block font-medium whitespace-nowrap">
            Voir nos événements
          </span>
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingBookButton; 