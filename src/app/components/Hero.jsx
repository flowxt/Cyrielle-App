import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const Hero = ({
  backgroundImageSrc, // Image de fond qui change selon la page
  title, // Titre principal
  subtitle, // Sous-titre avec mots en rouge
  description, // Texte descriptif
}) => {
  return (
    <header>
      {/* Section principale avec image de fond */}
      <section className="relative">
        <Image
          src={backgroundImageSrc}
          alt="Background"
          fill
          priority
          sizes="100vw"
  quality={75}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0"></div>

        {/* Contenu du Hero */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:justify-end lg:px-8">
          {/* Logo fixe */}
          <div className="absolute top-10 sm:top-0 left-0 p-4">
            <Image
              src="/logo-blanc.png"
              alt="Logo en scènes acting"
              className="w-40 sm:w-40 lg:w-48 xl:w-56"
              width={150}
              height={64}
            />
          </div>
          {/* Titre */}
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right lg:ml-auto">
            <h1 className="text-3xl font-extrabold text-white lg:text-4xl bg-neutral-900/50 font-poppins uppercase  mt-12">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Section avec texte et animations */}
      <div className="bg-gradient-to-b from-gray-200 to-gray-300">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center px-6 py-6"
        >
          {/* Sous-titre */}
          <motion.h3
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-roboto my-4"
          >
            {subtitle}
          </motion.h3>
          {/* Texte principal */}
          <motion.p
            variants={textVariants}
            className="md:text-lg lg:text-xl font-roboto font-light py-8"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;