// Composant Card.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ title, subtitle, image, listItems, link }) {
  return (
    <Link href={link} className="block h-full">
      <div className="group relative bg-white rounded-xl overflow-hidden w-[320px] sm:w-[350px] md:w-[380px] max-w-full h-[600px] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mx-auto flex flex-col">
        {/* Conteneur image avec effet de hover - hauteur standardisée */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay plus léger */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
          
          {/* Badge catégorie */}
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Découvrir
          </div>
        </div>

        {/* Contenu texte - utilisation de flex-grow pour remplir l'espace disponible */}
        <div className="p-6 space-y-5 flex-grow flex flex-col">
          {/* Titre avec effet de couleur au survol (sans soulignement) */}
          <div className="relative pb-4">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide transition-colors duration-200 group-hover:text-red-700">
              {title}
            </h2>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full group-hover:w-24 transition-all duration-300" />
          </div>

          {/* Sous-titre */}
          <h3 className="text-lg font-medium text-gray-700">{subtitle}</h3>

          {/* Liste avec icônes personnalisées */}
          <ul className="space-y-3 mt-4 flex-grow">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start text-gray-600">
                <span className="text-red-600 mr-3 mt-1">&#9656;</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>

          {/* Appel à l'action - toujours en bas grâce à mt-auto */}
          <div className="pt-4 text-red-600 font-medium flex items-center mt-auto">
            <span>En savoir plus</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Effet de bordure animée */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-all duration-300 rounded-xl" />
      </div>
    </Link>
  );
}