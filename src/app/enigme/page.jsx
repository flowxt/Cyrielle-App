"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Métadonnées exportées pour le SEO (sera utilisé par Next.js)


// Composant page principale (côté serveur)
export default function EnigmePage() {
  return <EnigmeClient />;
}

// Composant client (avec les animations côté client)
function EnigmeClient() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-400 relative">
      {/* En-tête de style Hero */}
      <div className="relative h-[50vh] bg-gray-900 overflow-hidden">
        <Image
          src="/images/caroussel/img2.webp" 
          alt="Fond énigme mystérieuse"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              DÉCHIFFREZ LE <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">MYSTÈRE</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            >
              Plongez dans l'univers de l'investigation et mettez vos talents de déduction à l'épreuve pour résoudre ces énigmes codées.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Avertissement - Une seule énigme */}
          <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-8 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-800 font-medium">
                Attention : Les deux images ci-dessous forment <span className="font-bold">une seule et même énigme</span>. Analysez-les ensemble pour trouver la solution !
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Indice 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 relative pb-4 mb-6">
                Indice A
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full" />
              </h2>
              
              <div 
                className="relative h-[350px] rounded-xl overflow-hidden bg-black cursor-pointer"
                onClick={() => openLightbox("/enigme1.png")}
              >
                <Image
                  src="/enigme1.png"
                  alt="Premier indice de l'énigme"
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/30 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-gray-700">
                Cet indice contient des informations cruciales. Cliquez pour agrandir l'image.
              </p>
            </motion.div>

            {/* Indice 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 relative pb-4 mb-6">
                Indice B
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full" />
              </h2>
              
              <div 
                className="relative h-[350px] rounded-xl overflow-hidden bg-black cursor-pointer"
                onClick={() => openLightbox("/enigme2.png")}
              >
                <Image
                  src="/enigme2.png"
                  alt="Second indice de l'énigme"
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/30 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-gray-700">
                Cet indice complète le premier. Combinez-les pour résoudre l'énigme !
              </p>
            </motion.div>
          </div>

          {/* Appel à l'action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vous avez déchiffré le code ?</h3>
              
              <p className="text-gray-700 mb-8">
                Les réponses se cachent dans les détails. Une fois que vous aurez percé le mystère, contactez-nous pour vérifier votre solution.
              </p>

              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-b from-red-700 to-red-900 text-white font-medium rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all text-center"
              >
                Soumettre ma solution
              </Link>
              
              <div className="mt-6 text-sm text-gray-500 flex justify-center items-center gap-2">
                <span className="animate-pulse">💡</span>
                Astuce : Analysez les deux indices ensemble pour révéler le code secret
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Énigme agrandie"
                  fill
                  className="object-contain"
                />
                <button
                  className="absolute top-4 right-4 bg-red-700 text-white rounded-full p-2 hover:bg-red-800 transition-colors"
                  onClick={closeLightbox}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}