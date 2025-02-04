import React from "react";

const StoryGameSection = ({ videos }) => {
  return (
    <section className="relative min-h-screen py-16 bg-gradient-to-r from-white to-red-900">
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
              <h3 className="text-2xl font-bold mt-6">{video.title}</h3>
              <button className={`mt-4 px-6 py-2 rounded-full transition-colors ${index % 2 === 0 ? 'bg-white text-red-700 hover:bg-gray-100' : 'bg-red-700 text-white hover:bg-red-800'}`}>
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