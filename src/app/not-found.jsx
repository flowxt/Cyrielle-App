"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Fond avec effet de grille */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      {/* Effet de bruit */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Animation du titre */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-poppins">
            404
          </h1>
          
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-white font-poppins">
            Mystère non résolu
          </h2>
        </motion.div>
        
        {/* Description avec effet d'apparition */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-roboto"
        >
          Telle une énigme sans solution, cette page semble avoir disparu dans les méandres du temps.
        </motion.p>
        
        {/* Image stylisée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.5,
            duration: 0.8,
            type: 'spring', 
            stiffness: 100
          }}
          className="relative w-72 h-72 mx-auto my-12"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-700/30 to-red-900/10 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute -inset-1 rounded-full border-2 border-red-700/40 animate-spin" style={{ animationDuration: '20s' }} />
          
          <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logoES.jpg"
              alt="En Scènes Acting Logo"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Bouton de retour */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="group relative inline-block px-8 py-4 bg-gradient-to-r from-red-700 via-red-600 to-red-900 text-white font-poppins rounded-xl shadow-2xl hover:shadow-red-500/30 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <div className="absolute -inset-[5px] animate-spin-slow bg-[conic-gradient(white_18deg,transparent_18deg)]" />
            </div>
            
            <span className="relative flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-lg">
                🏠
              </span>
              <span>
                Retour à l'aventure
              </span>
              <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                →
              </span>
            </span>
          </Link>
        </motion.div>
        
        {/* Indice animé */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-red-400/70 text-sm flex justify-center items-center gap-2"
        >
          <span className="animate-pulse">💡</span>
          Peut-être que d'autres mystères vous attendent ailleurs...
        </motion.div>
      </div>
    </div>
  );
} 