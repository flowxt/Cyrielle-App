import React from "react";

const StoryGameSection = ({ videos }) => {
  return (
    <section className="relative py-16 bg-gradient-to-t from-gray-100 to-gray-300">
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-16 font-poppins">STORY <span className="text-white bg-gradient-to-r from-red-700 to-red-800 p-2">GAME</span></h2>

        {/* Grille des vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center ${index % 2 === 0 ? 'text-red-800' : 'text-black'}`}
            >
              {/* Conteneur vidéo */}
              <div className="w-[70%] h-96 overflow-hidden rounded-xl shadow-2xl">
                <video 
                  src={video.src} 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop
                  playsInline
                />
              </div>
              <h3 className="text-2xl font-bold mt-6">{video.title}</h3>
              <button className={`mt-4 px-6 py-2 rounded-full transition-colors ${index % 2 === 0 ? 'bg-white text-red-800 hover:bg-gray-100' : 'bg-red-800 text-white hover:bg-red-900'}`}>
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