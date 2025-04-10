"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Métadonnées exportées pour le SEO (sera utilisé par Next.js)


// Composant page principale (côté serveur)
export default function EnigmePage() {
  return <EnigmeClient />;
}

// Composant client (avec les animations côté client)
function EnigmeClient() {
  return (
    <div className="min-h-screen bg-black py-12 relative overflow-hidden">
      {/* Fond étoilé subtil */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      <div className="max-w-4xl mx-auto px-4 space-y-8 mt-11 relative z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent mb-8 font-archivo"
        >
          Déchiffrez le Mystère
        </motion.h1>

        {/* Première image avec effet holographique */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            scale: { type: 'spring', stiffness: 100 }
          }}
          whileHover={{ scale: 1.02 }}
          className="relative h-[400px] lg:h-[70vh] w-full rounded-xl overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-900/10 to-black"
        >
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
          <Image
            src="/enigme1.png"
            alt="Première énigme"
            fill
            className="object-contain p-4"
            priority
          />
        </motion.div>

        {/* Deuxième image avec effet de profondeur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: 'spring', 
            bounce: 0.4 
          }}
          whileHover={{ y: -5 }}
          className="relative h-[200px] w-full rounded-xl overflow-hidden border border-red-800/30 bg-gradient-to-b from-red-900/20 to-transparent"
        >
          <Image
            src="/enigme2.png"
            alt="Deuxième énigme"
            fill
            className="object-contain p-4"
          />
        </motion.div>

        {/* Bouton de contact amélioré */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center pt-8"
        >
          <Link
            href="/contact"
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-red-700 via-red-600 to-amber-800 text-white font-poppins rounded-2xl shadow-2xl hover:shadow-red-500/30 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <div className="absolute -inset-[5px] animate-rotate bg-[conic-gradient(white,transparent,transparent)]" />
            </div>
            
            <span className="relative flex items-center gap-3 text-lg">
              <span className="bg-white/10 p-2 rounded-lg">
                🔐 
              </span>
              <span className="text-shadow">
                Vous avez trouvé le code ?
              </span>
              <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">
                →
              </span>
            </span>
          </Link>
        </motion.div>

        {/* Indice animé */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-red-400/60 text-sm mt-6 flex justify-center items-center gap-2"
        >
          <span className="animate-pulse">💡</span>
          Les réponses se cachent dans les détails...
        </motion.div>
      </div>
    </div>
  );
}