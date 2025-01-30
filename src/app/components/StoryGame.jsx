// components/StoryGameSection.jsx
import React from "react";

const StoryGameSection = ({ videos }) => {
  return (
    <section className="relative min-h-screen py-16">
      {/* Fond bicolore */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/2 bg-white"></div>
        <div className="w-1/2 bg-red-700"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-16 font-poppins">STORY GAME</h2>

        {/* Grille des vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center ${index % 2 === 0 ? 'text-red-700' : 'text-white'}`}
            >
              {/* Conteneur vidéo */}
              <div className="w-[70%] h-96 overflow-hidden rounded-xl shadow-2xl">
                <video 
                  src={video.src} 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop
                />
              </div>

              {/* Titre de la vidéo */}
              <h3 className="text-2xl font-bold mt-6 mb-4 font-poppins">{video.title}</h3>

              {/* Bouton */}
              <button className={`px-8 py-3 rounded-full font-semibold font-roboto transition-all ${
                index % 2 === 0 
                  ? 'bg-red-700 text-white hover:bg-red-800' 
                  : 'bg-white text-red-700 hover:bg-gray-100'
              }`}>
                {video.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryGameSection;