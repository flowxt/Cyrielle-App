"use client";
import { useState } from 'react';

const AdventureLayout = ({ title, description, videoSrc }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-400 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8 mt-11">
        {/* Titre */}
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 font-archivo">
            {title}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-800 rounded-full" />
        </div>

        {/* Conteneur vidéo */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-4 border-gray-300 hover:border-red-500/30 transition-all duration-300">
          <video
            src={videoSrc}
            controls
            className="w-full h-full object-cover"
            controlsList="nodownload"
          />
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 space-y-6 font-roboto text-lg leading-relaxed bg-white/90 p-8 rounded-xl shadow-lg">
            {description}
            
            {/* Bouton de réservation */}
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-gray-300 to-gray-200 hover:from-red-500 hover:to-red-600 text-gray-800 hover:text-white rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-red-500/30">
                Réserver cette aventure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureLayout;