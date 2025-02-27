import React from "react";

const ChateauVideoSection = ({ videos }) => {
  return (
    <section className="relative py-16 ">
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-16 text-black font-poppins">NOS AVENTURES <span className="text-white bg-gradient-to-l from-red-700 to-red-900">AU CHÂTEAU</span></h2>

        {/* Grille des vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-64 overflow-hidden rounded-xl shadow-2xl">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <h3 className={`text-2xl text-center font-poppins font-bold mt-6 ${index < 2 ? 'text-red-800' : 'text-black'}`}>{video.title}</h3>
              <div className="flex-grow flex items-end">
                <button className={`mt-4 px-6 py-2 rounded-full font-roboto transition-colors ${index < 2 ? 'bg-white text-red-700 hover:bg-gray-100' : 'bg-red-800 text-white hover:bg-red-800'}`}>
                  {video.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChateauVideoSection;