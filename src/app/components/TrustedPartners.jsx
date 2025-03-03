"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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

const trustedCompanies = [
  { src: "/logo5.jpg", alt: "Société 5", name: "Réseau initiative Faucigny Mont-Blanc" },
  { src: "/logo6.png", alt: "Société 6", name: "SPSTI Arve Mont-Blanc" },
  { src: "/logo7.jpg", alt: "Société 7", name: "Haute-Savoie Le département" },
  { src: "/logo8.png", alt: "Société 8", name: "Médiathèque de la Roche sur Foron" },
  { src: "/logo9.png", alt: "Société 9", name: "Comité des fêtes" },
];

const partners = [
  { 
    src: "/logo3.png", 
    alt: "Quoi faire Léman", 
    name: "Quoi faire Léman",
    link: "https://www.quoifaireleman.com"
  },
  { 
    src: "/logo4.png", 
    alt: "Partenaire 4 cité médievale de la roche", 
    name: "Cité Médievale de La Roche sur Foron",
    link: "#"
  },
  { 
    src: "/sauterelle.png", 
    alt: "Partenaire Sauterelle", 
    name: "Sauterelle",
    link: "https://linktr.ee/sauterelle.jeux"
  },
];

const TrustedPartners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-200 to-gray-400 border-t-2 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:text-gray-700">
        {/* Section Témoignages */}
        <h2 className="text-xl md:text-4xl font-bold text-center mb-16 font-poppins">
          Ils nous ont fait <span className="bg-red-800 text-white px-4 py-1 rounded-lg">confiance</span>
        </h2>
        
        {/* Témoignages détaillés */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

        {/* Carrousel des sociétés de confiance */}
        <div className="mb-24">
          <h3 className="text-xl font-semibold text-center mb-8 font-poppins">
            Et aussi...
          </h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="trusted-companies-swiper"
          >
            {trustedCompanies.map((company, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.00 }}
                  className="bg-white rounded-xl p-6 shadow-lg h-48 flex flex-col items-center justify-center"
                >
                  <div className="relative h-32 w-full mb-4">
                    <Image
                      src={company.src}
                      alt={company.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center text-gray-700 font-medium">{company.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <a 
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-40 w-full mb-4">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center text-gray-700 font-medium hover:text-red-700 transition-colors">
                    {partner.name}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;