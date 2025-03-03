import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

// Initialiser GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const images = [
  //Bloc 1 
  "/images/caroussel/img1.webp",
  "/images/caroussel/img4.webp",
  "/images/petite2.webp",
  "/images/caroussel/img3.webp",
  "/images/caroussel/img5.webp",
  //bloc 2
  "/images/caroussel/img8.webp",
  "/images/caroussel/img7.webp",
  "/images/caroussel/img9.webp",
  "/images/petite3bloc2.webp",
  "/images/caroussel/img16.webp",
  //bloc 3
  "/images/caroussel/img11.webp",
  "/images/caroussel/img10.webp",
  "/images/caroussel/img13.webp",
  "/images/caroussel/img14.webp",
  "/images/petite4bloc3.png",
  //bloc 4 et dernier bloc
 "/images/caroussel/img17.webp",
  "/images/IMG_2493.jpg",
  "/images/imagenum2.png",
  "/images/imagenum3.png",
  "/images/imagenum4.png",
];

const PhotoGallery = () => {
  const galleryRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`
              overflow-hidden rounded-lg shadow-lg cursor-pointer
              ${index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}
              ${index % 5 === 0 ? "min-h-[400px]" : "min-h-[200px]"}
            `}
            onClick={() => setSelectedImage(src)}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Team Building ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index < 4} // Charge en priorité les premières images
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal reste inchangée */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;