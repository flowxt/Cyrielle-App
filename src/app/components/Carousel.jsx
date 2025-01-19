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

    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    // Liste des images
    const images = Array.from({ length: 17 }, (_, i) => `/images/caroussel/img${i + 1}.png`);

    return (
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-x-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="embla__slide flex-shrink-0 flex justify-center items-center w-[20%] max-w-[250px] h-[250px] rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
