import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CardConcept = ({ image, title, paragraph, listItems }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(239, 68, 68, 0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-[90%] sm:w-full max-w-[320px] sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20 bg-gray-100 bg-opacity-80 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-all duration-300 h-[600px] flex flex-col"
    >
      {/* Image avec overlay dégradé - hauteur fixe */}
      <div className="relative h-56 flex-shrink-0 overflow-hidden">
      <Image 
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    src={image} 
    alt={title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    priority
  />
        <div className="absolute inset-0 " />
      </div>

      {/* Contenu - hauteur flexible avec scroll si nécessaire */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col h-full"> {/* Réduction du padding en mobile */}
        <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 font-poppins text-center pb-2 sm:pb-3 relative flex-shrink-0">
          {title}
          <span className="absolute bottom-0 left-1/2 w-16 h-0.5 bg-red-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </h3>

        {/* Paragraphe avec texte plus petit en mobile */}
        <div className="text-gray-800 font-roboto space-y-2 sm:space-y-3 text-justify leading-relaxed text-sm sm:text-base">
          {paragraph.split("\n").map((line, index) => (
            <p key={index} className="text-current">
              {line.split("**").map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} className="text-red-600 font-medium">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </p>
          ))}
        </div>

        {/* Liste avec espacement réduit en mobile */}
        <ul className="space-y-2 sm:space-y-3 mt-auto">
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-gray-800 font-roboto text-sm sm:text-base pl-6 relative hover:text-red-400 transition-colors"
            >
              <span className="absolute left-0 text-red-500 animate-move-x">
                ➤
              </span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default CardConcept;