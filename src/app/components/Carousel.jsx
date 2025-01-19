'use client';

import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Carousel() {
    const autoplay = useRef(
        Autoplay({
            delay: 3000, // Temps entre les slides (en ms)
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    // Liste des images
    const images = Array.from({ length: 17 }, (_, i) => `/images/caroussel/img${i + 1}.png`);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <div className="relative">
            {/* Conteneur avec un fond dégradé aux bords */} 
            {/* ajout du bg black et des border red  */}
            <div className="embla overflow-hidden bg-black border-4 border-red-700 p-8" ref={emblaRef}>
                <div className="embla__container flex gap-x-1">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-shrink-0 flex justify-center items-center w-[20%] max-w-[250px] h-[450px] rounded-lg overflow-hidden shadow-2xl"
                        >
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover "
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Ombres dégradées à gauche et à droite du carousel */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full ml-2 h-16 w-10 z-10"
                onClick={scrollPrev}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full h-16 w-10 bg-gray-400 mr-2 z-10"
                onClick={scrollNext}
            >
                &gt;
            </button>
        </div>
    );
}
