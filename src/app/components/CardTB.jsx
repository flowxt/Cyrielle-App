import React from 'react';
import Image from 'next/image';

export default function CardTB({ imageSrc, title, content, tag = "Team Building" }) {
  return (
    <div className="h-full">
      <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden h-[600px] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col border border-white/20">
        {/* Conteneur image avec effet de hover */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay plus léger */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
          
          {/* Badge catégorie personnalisé */}
          <div className="absolute top-4 right-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {tag}
          </div>
        </div>

        {/* Contenu texte */}
        <div className="p-6 space-y-5 flex-grow flex flex-col">
          {/* Titre avec effet de couleur au survol */}
          <div className="relative pb-4">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide transition-colors duration-200 group-hover:text-red-700">
              {title}
            </h2>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full group-hover:w-24 transition-all duration-300" />
          </div>

          {/* Contenu avec HTML */}
          <div 
            className="text-gray-700 space-y-3 flex-grow mt-2"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>

        {/* Effet de bordure animée */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 transition-all duration-300 rounded-2xl" />
      </div>
    </div>
  );
}