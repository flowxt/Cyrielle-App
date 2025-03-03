import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const images = [
  // Bloc 1
  "/images/caroussel/img1.webp",
  "/images/caroussel/img4.webp",
  "/images/petite2.webp",
  "/images/caroussel/img3.webp",
  "/images/caroussel/img5.webp",
  // Bloc 2
  "/images/caroussel/img8.webp",
  "/images/caroussel/img7.webp",
  "/images/caroussel/img9.webp",
  "/images/petite3bloc2.webp",
  "/images/caroussel/img16.webp",
  // Bloc 3
  "/images/caroussel/img11.webp",
  "/images/caroussel/img10.webp",
  "/images/caroussel/img13.webp",
  "/images/caroussel/img14.webp",
  "/images/petite4bloc3.png",
  // Bloc 4
  // "/images/caroussel/img17.webp",
  // "/images/IMG_2493.jpg",
  // "/images/imagenum2.png",
  // "/images/imagenum3.png",
  // "/images/imagenum4.png",
];

const PhotoGallery = () => {
  const galleryRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const largeImageIndices = [0, 5, 10, 15]; // Index des grandes images

  useEffect(() => {
    if (!galleryRef.current) return;

    gsap.fromTo(
      galleryRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 90%",
          end: "bottom 20%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <div className="py-12">
      <div 
        ref={galleryRef} 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto"
        style={{ gridAutoRows: 'minmax(200px, auto)' }}
      >
        {images.map((src, index) => {
          const isLargeImage = largeImageIndices.includes(index);

          return (
            <motion.div
              key={`${src}_${index}`} // Clé unique combinant src et index
              className={`overflow-hidden rounded-lg shadow-lg cursor-pointer
                ${isLargeImage 
                  ? "md:col-span-2 md:row-span-2 min-h-[400px]"
                  : "min-h-[200px]"
                }`
              }
              onClick={() => setSelectedImage(src)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Photo gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 4}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Agrandissement"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;