'use client';

import React, { useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <div className="relative">
            <div className="embla overflow-hidden " ref={emblaRef}>
                <div className="embla__container flex gap-x-1">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-shrink-0 flex justify-center items-center w-[20%] max-w-[250px] h-[450px] rounded-lg overflow-hidden shadow-2xl"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Ombres dégradées à gauche et à droite du carousel  */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full ml-8 h-16 w-10 z-10"
                onClick={scrollPrev}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full h-16 w-10 bg-gray-400 mr-8 z-10"
                onClick={scrollNext}
            >
                &gt;
            </button>

            {isOpen && (
                <Lightbox
                    slides={images.map((src) => ({ src }))}
                    index={photoIndex}
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    onIndexChange={setPhotoIndex}
                />
            )}
        </div>
    );
}