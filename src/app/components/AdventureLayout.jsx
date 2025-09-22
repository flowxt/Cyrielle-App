"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const AdventureLayout = ({ title, description, videoSrc, retrospectivePhotos }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-400 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8 mt-11">
        {/* Titre */}
        <div className="flex flex-col items-center space-y-4">
  <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 font-archivo leading-relaxed px-4 py-2">
    {title}
  </h1>
  <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-800 rounded-full mt-2" />
</div>

        {/* Conteneur vidéo */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-4 border-gray-300 hover:border-red-500/30 transition-all duration-300 group">
          <video
            ref={videoRef}
            src={videoSrc}
            controls={isPlaying}
            className="w-full h-full object-cover"
            controlsList="nodownload"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {/* Overlay stylisé */}
          {!isPlaying && (
            <div 
              onClick={handlePlayClick}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black/30"
            >
              <div className="transform transition-all duration-300 hover:scale-110">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600">
                  <svg 
                    className="w-10 h-10 text-white ml-2" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 space-y-6 font-roboto text-base md:text-lg leading-relaxed bg-white/90 p-8 rounded-xl shadow-lg">
            {description}
            
            {/* Bouton de réservation */}
            <div className="mt-12 flex justify-center">
            <Link 
    href="/contact"
    className="px-8 py-3 bg-gradient-to-r from-gray-300 to-gray-200 hover:from-red-500 hover:to-red-600 text-gray-800 hover:text-white rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-red-500/30"
  >
    Réserver cette aventure
  </Link>
            </div>
          </div>
        </div>

        {/* Section Rétrospectives si des photos sont fournies */}
        {retrospectivePhotos && retrospectivePhotos.length > 0 && (
          <div className="bg-white/90 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-poppins">
              Rétrospectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retrospectivePhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <Image
                    src={photo.src}
                    alt={photo.alt || `Rétrospective ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{photo.caption || `Photo ${index + 1}`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdventureLayout;