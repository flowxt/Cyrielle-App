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

const TrustedPartners = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">
          Ils nous ont fait <span className="bg-red-800 text-white px-4">confiance</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
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

        {/* Partenaire de confiance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <Image
              src="/logo3.png"
              alt="Quoi faire Léman"
              width={200}
              height={100}
              className="object-contain"
            />
            <p className="text-gray-600 mt-2 font-roboto">Partenaire de confiance</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;