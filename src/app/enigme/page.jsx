"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Enigme() {
  return (
    <div className="min-h-screen bg-black py-12 ">
      <div className="max-w-4xl mx-auto px-4 space-y-8 mt-11">
        {/* Première image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[600px] w-full shadow-2xl rounded-lg overflow-hidden"
        >
          <Image
            src="/enigme1.png"
            alt="Première énigme"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Deuxième image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[400px] w-full shadow-2xl rounded-lg overflow-hidden"
        >
          <Image
            src="/enigme2.png"
            alt="Deuxième énigme"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Bouton de contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center pt-8"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-poppins rounded-lg shadow-lg hover:shadow-red-500/20 hover:scale-105 transition-all duration-300"
          >
            Vous avez le code ?
          </Link>
        </motion.div>
      </div>
    </div>
  );
}