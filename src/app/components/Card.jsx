// Composant Card.jsx
import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';

export default function Card({ title, subtitle, image, listItems, buttonText, link }) {
  return (
    <Link href={link} className="block">
    <div className="group relative bg-gray-100 rounded-2xl overflow-hidden w-[320px] sm:w-[350px] md:w-[380px] max-w-full min-h-[500px] shadow-2xl shadow-red-900/30 hover:shadow-red-900/50 transition-all duration-300 hover:-translate-y-2 mx-auto">
      {/* Conteneur image avec effet de hover */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Contenu texte */}
      <div className="p-6 space-y-5">
        {/* Titre avec effet de ligne rouge */}
        <div className="relative pb-4">
          <h2 className="text-2xl font-bold text-gray-700 font-poppins uppercase tracking-wide">
            {title}
          </h2>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 rounded-full" />
        </div>

        {/* Sous-titre */}
        <h3 className="text-lg font-medium text-red-700 font-poppins">{subtitle}</h3>

        {/* Liste avec icônes personnalisées */}
        <ul className="space-y-3">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700 font-roboto">
              <svg 
                className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Bouton intégré dans le flux */}
        {buttonText && (
          <div className="pt-4">
            <CustomButton 
              text={buttonText}
              additionalClasses="w-full bg-red-600 hover:bg-red-700 text-white font-poppins py-3  transition-colors duration-300" 
            />
          </div>
        )}
      </div>

      {/* Effet de bordure animée */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 transition-all duration-500 rounded-2xl" />
    </div>
    </Link>
  );
}