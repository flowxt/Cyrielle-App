// import React from 'react';
// import { motion } from 'framer-motion';
// import CardTB from './CardTB';

// const cardData = [
//   {
//     imageSrc: '/images/caroussel/img1.png',
//     title: 'Fédérer',
//     content: "Vous souhaitez renformer l'esprit d'équipe de vos collaborateurs à travers une expérience unique.<br /><br /> Le temps de quelques heures, dans un lieu insolite, nous vous transporterons dans nos univers",
//     buttonText: 'Réussir ensemble'
//   },
//   {
//     imageSrc: '/images/caroussel/img2.png',
//     title: 'Intégrer',
//     content: 'Pas toujours évident de trouver sa place dans une équipe déjà bien installée.<br /><br /> Sortez vos collaborateurs du cadre professionnel et permettez leur de reconnaître les talents de chacun pour les valoriser et atteindre des objectifs communs.',
//     buttonText: 'Révéler votre équipe'
//   },
//   {
//     imageSrc: '/images/caroussel/img3.png',
//     title: 'Développer',
//     content: 'Vous êtes convaincu que le format «Réunion» n’est pas le plus efficace pour developper un projet.<br /><br /> A votre écoute pour comprendre vos attentes, nous concevrons un scénario personnalisé pour permettre à vos collaborateurs de réfléchir autrement et d’aboutir à des actions concrètes.',
//     buttonText: 'Libérer la reflexion'
//   },
//   // Ajoutez plus de cartes ici
// ];

// const CardTBComplete = () => {
//   return (
//     <section className="py-8 px-4">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {cardData.map((card, index) => (
//         <CardTB
//           key={index}
//           imageSrc={card.imageSrc}
//           title={card.title}
//           content={card.content}
//           buttonText={card.buttonText}
//         />
//       ))}
//     </div>
//   </section>
//   );
// };

// export default CardTBComplete;

// Code pour animer les cartes
import React from 'react';
import { motion } from 'framer-motion';
import CardTB from './CardTB';

const cardData = [
  {
    imageSrc: '/images/caroussel/img1.png',
    title: 'Fédérer',
    content: "Vous souhaitez renformer l'esprit d'équipe de vos collaborateurs à travers une expérience unique.<br /><br /> Le temps de quelques heures, dans un lieu insolite, nous vous transporterons dans nos univers",
    buttonText: 'Réussir ensemble'
  },
  {
    imageSrc: '/images/caroussel/img2.png',
    title: 'Intégrer',
    content: 'Pas toujours évident de trouver sa place dans une équipe déjà bien installée.<br /><br /> Sortez vos collaborateurs du cadre professionnel et permettez leur de reconnaître les talents de chacun pour les valoriser et atteindre des objectifs communs.',
    buttonText: 'Révéler votre équipe'
  },
  {
    imageSrc: '/images/caroussel/img3.png',
    title: 'Développer',
    content: 'Vous êtes convaincu que le format «Réunion» n’est pas le plus efficace pour developper un projet.<br /><br /> A votre écoute pour comprendre vos attentes, nous concevrons un scénario personnalisé pour permettre à vos collaborateurs de réfléchir autrement et d’aboutir à des actions concrètes.',
    buttonText: 'Libérer la reflexion'
  },
  // Ajoutez plus de cartes ici
];

const CardTBComplete = () => {
  return (
    <section className="py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              x: 0,
              transition: { 
                duration: 0.8,
                delay: index * 0.2
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <CardTB
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
              buttonText={card.buttonText}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardTBComplete;