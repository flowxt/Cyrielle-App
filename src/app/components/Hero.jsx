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
  backgroundImageSrc,
  title,
  subtitle,
  description,
}) => {
  return (
    <header className="min-h-screen flex flex-col">
      {/* Section supérieure (50% hauteur) */}
      <section className="relative h-[50vh]">
        <Image
          src={backgroundImageSrc}
          alt="Background"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Conteneur du titre centré */}
        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-poppins uppercase text-center px-4 max-w-4xl"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Section inférieure (50% hauteur) */}
      <section className="h-[50vh] bg-gradient-to-b from-gray-100 to-gray-200 flex items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full max-w-4xl mx-auto px-6"
        >
          <motion.h3
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-roboto text-center mb-8 mt-11 md:mt-6 lg:mt-2"
          >
            {subtitle}
          </motion.h3>
          <motion.p
            variants={textVariants}
            className="md:text-lg lg:text-xl font-roboto font-light text-center"
          >
            {description}
          </motion.p>
        </motion.div>
      </section>
    </header>
  );
};

export default Hero;

// import Image from "next/image";
// import { motion } from "framer-motion";

// const textVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//   },
// };

// const Hero = ({
//   backgroundImageSrc, // Image de fond qui change selon la page
//   title, // Titre principal
//   subtitle, // Sous-titre avec mots en rouge
//   description, // Texte descriptif
// }) => {
//   return (
//     <header>
//       {/* Section principale avec image de fond */}
//       <section className="relative h-screen flex items-center justify-center">
//         <Image
//           src={backgroundImageSrc}
//           alt="Background"
//           fill
//           priority
//           sizes="100vw"
//           quality={75}
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />
//         {/* Overlay pour améliorer la lisibilité du texte */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Contenu du Hero */}
//         <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
//           {/* Titre */}
//           <motion.h1
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={textVariants}
//             className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl font-poppins uppercase"
//           >
//             {title}
//           </motion.h1>
//         </div>
//       </section>

//       {/* Section avec texte et animations */}
//       <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-20">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={staggerContainer}
//           className="max-w-3xl mx-auto text-center px-6"
//         >
//           {/* Sous-titre */}
//           <motion.h3
//             variants={textVariants}
//             className="text-3xl md:text-4xl lg:text-5xl font-roboto my-4"
//           >
//             {subtitle}
//           </motion.h3>
//           {/* Texte principal */}
//           <motion.p
//             variants={textVariants}
//             className="md:text-lg lg:text-xl font-roboto font-light py-8"
//           >
//             {description}
//           </motion.p>
//         </motion.div>
//       </div>
//     </header>
//   );
// };

// export default Hero;