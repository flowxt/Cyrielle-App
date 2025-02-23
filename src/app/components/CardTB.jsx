import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

export default function CardTB({ imageSrc, title, content, buttonText }) {
  return (
    <article className="group relative h-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl shadow-red-900/30 hover:shadow-red-900/50 transition-all duration-300 hover:-translate-y-2">
      {/* Conteneur image avec effets */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt="Expérience de team building"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-[20%]"
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Contenu texte */}
      <div className="p-6 space-y-5">
        {/* Titre avec effet de soulignement animé */}
        <div className="relative pb-4">
          <h3 className="text-2xl font-bold text-gray-800 font-poppins uppercase tracking-wide">
            <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
              {title}
            </span>
          </h3>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 rounded-full transition-transform duration-500 group-hover:scale-x-150 origin-left" />
        </div>

        {/* Contenu avec effet de survol */}
        <div 
          className="text-gray-600 font-roboto space-y-3 transition-colors duration-300 group-hover:text-gray-600"
          dangerouslySetInnerHTML={{ __html: content }} 
        />

        {/* Bouton intégré */}
        {buttonText && (
          <div className="pt-4">
            <CustomButton 
              text={buttonText}
              additionalClasses="w-full transition-all duration-300 hover:scale-[1.02]" 
            />
          </div>
        )}
      </div>

      {/* Effet de bordure dynamique */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 transition-all duration-500 rounded-2xl" />
    </article>
  );
}