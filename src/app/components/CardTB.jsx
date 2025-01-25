import React from 'react';
import { motion } from 'framer-motion';
import CustomButton from './CustomButton';

const cardVariants = {
  hidden: (index) => ({
    x: index === 0 ? -100 : index === 1 ? 0 : 100,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function CardTB({ imageSrc, title, content, buttonText, index }) {
  return (
    <motion.article
      className="group flex flex-col h-full shadow-xl rounded-xl overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <img
        alt="image de cohésion d'équipe"
        src={imageSrc}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />
  
      <div className="p-4 flex flex-col flex-grow">
        <a href="#">
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-medium text-red-700 font-poppins pb-4">{title}</h3>
        </a>
  
        <p className="text-xl mt-2 text-sm/relaxed text-gray-500 flex-grow font-roboto font-light" dangerouslySetInnerHTML={{ __html: content }} />
        
        <CustomButton text={buttonText} additionalClasses="mt-4 self-start" />
      </div>
    </motion.article>
  );
}
