import React from "react";
import Image from "next/image";

const CardConcept = ({ image, title, paragraph, listItems, tag = "Concept" }) => {
  return (
    <div className="h-full">
      <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden h-[600px] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col border border-white/20">
        {/* Image avec overlay dégradé */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <Image 
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {/* Overlay léger */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
          
          {/* Badge personnalisable */}
          <div className="absolute top-4 right-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {tag}
          </div>
        </div>

        {/* Contenu texte */}
        <div className="p-6 space-y-5 flex-grow flex flex-col">
          {/* Titre avec effet au survol */}
          <div className="relative pb-4">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide transition-colors duration-200 group-hover:text-red-700">
              {title}
            </h2>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full group-hover:w-24 transition-all duration-300" />
          </div>

          {/* Paragraphe avec formatage */}
          <div className="text-gray-700 space-y-3 mt-2">
            {paragraph.split("\n").map((line, index) => (
              <p key={index} className="text-current">
                {line.split("**").map((part, i) =>
                  i % 2 === 1 ? (
                    <span key={i} className="font-semibold text-red-700">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>
            ))}
          </div>

          {/* Liste avec icônes personnalisées */}
          <ul className="space-y-3 mt-auto">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start text-gray-600">
                <span className="text-red-600 mr-3 mt-1">&#9656;</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Effet de bordure animée */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 transition-all duration-300 rounded-2xl" />
      </div>
    </div>
  );
};

export default CardConcept;