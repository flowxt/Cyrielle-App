import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link';

// Initialiser GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/caroussel/img1.webp",
  "/images/caroussel/img2.webp",
  "/images/caroussel/img3.webp",
  "/images/caroussel/img4.webp",
  "/images/caroussel/img5.webp",
  "/images/caroussel/img6.webp",
  "/images/caroussel/img7.webp",
  "/images/caroussel/img8.webp",
  "/images/caroussel/img9.webp",
  "/images/caroussel/img10.webp",
  "/images/caroussel/img11.webp",
  "/images/caroussel/img12.webp",
  "/images/caroussel/img13.webp",
  "/images/caroussel/img14.webp",
  "/images/caroussel/img15.webp",
  "/images/caroussel/img16.webp",
  "/images/caroussel/img1.webp",
  "/images/caroussel/img2.webp",
  "/images/caroussel/img3.webp",
  "/images/caroussel/img4.webp",
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
    <div className="bg-gray-50 py-12">
      <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            
            whileTap={{ scale: 0.95 }}
            className={`overflow-hidden rounded-lg shadow-lg cursor-pointer 
              ${index % 5 === 0 ? "col-span-2 row-span-2" : ""}`}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Team Building ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}

      <div className="text-center py-12 bg-white">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Prêt pour une <strong>expérience</strong> inoubliable en <strong>Haute-Savoie</strong> ?
        </h2>
        <Link href="/contact" className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition-colors">
          Contactez-nous dès maintenant !
        </Link>
      </div>
    </div>
  );
};

export default PhotoGallery;
