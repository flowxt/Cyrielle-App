import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Une soirée insolite et immersive dans notre établissement qui a marqué tous les esprits ! Une vraie réussite",
    author: "Alexia LEFEBVRE",
    role: "Chargée de groupes et évènements",
    company: "Chalet-Hôtel la Marmotte - Les Gets",
    year: "2023",
    logo: "/logo1.png"
  },
  {
    quote: "Encore une belle soirée de passée au côté de l'équipe En scènes acting. Un cadre incroyable, et surtout un deuxième épisode ludique bien scénarisé, avec des comédiens au top et des participants qui ont bien joué le jeu !",
    author: "Lori-Kim MAYERAT",
    role: "Chargée de communication et commercialisation",
    company: "Restaurant la Terre de Bellevarde – Duingt",
    year: "2023",
    logo: "/logo2.png"
  }
];

const partners = [
  { src: "/logo3.png", alt: "Quoi faire Léman" },
  { src: "/logo4.png", alt: "Partenaire 4" },
  { src: "/logo5.jpg", alt: "Partenaire 5" },
  { src: "/logo6.png", alt: "Partenaire 6" },
  { src: "/logo7.jpg", alt: "Partenaire 7" },
  { src: "/logo8.png", alt: "Partenaire 8" },
  { src: "/logo9.png", alt: "Partenaire 9" },
  { src: "/sauterelle.png", alt: "Partenaire 10" },
];

const TrustedPartners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Témoignages */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">
          Ils nous ont fait <span className="bg-red-800 text-white px-4 py-1 rounded-lg">confiance</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-20 w-40 mb-6">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <blockquote className="flex-grow">
                  <p className="text-gray-700 italic font-roboto text-lg mb-6">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-red-700">{testimonial.role}</p>
                  <div className="flex items-center mt-2">
                    <p className="text-gray-600">{testimonial.year} - {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Partenaires */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-16 font-poppins">
            Nos <span className="bg-red-800 text-white px-4 py-1 rounded-lg">Partenaires</span>
          </h3>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    filter: "brightness(1.1)"
                  }}
                  className="relative w-40 h-40 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50 rounded-xl" />
                  <div className="relative h-full w-full p-4">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain p-2 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;