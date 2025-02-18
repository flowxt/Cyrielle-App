// import React from 'react';
// import CardConcept from './CardConcept';


// const CardConceptFull = () => {
//   const cardsData = [
//     {
//       image: '/images/caroussel/img3.webp',
//       title: 'Story Game',
//       paragraph: "Préparez vous à **devenir acteur** de l'histoire qui se déroule sous vos yeux.\n \n **Observer, fouillez** et tentez de résoudre des énigmes qui vous mèneront à découvrir de mystérieux secrets.",
//       listItems: ['Par équipe de 4 à 6 personnes', "Jusqu'à 60 personnes", 'Durée : 1h30'],
//     },
//     {
//       image: '/images/caroussel/img4.webp',
//       title: 'Le procès',
//       paragraph: "**Devenez jurés** d'un procès.\n L'accusé est-il coupable ou non coupable du crime dont on l'accuse ? \n \n **Analyser les pièces à conviction, débattez** et définissez d'un **verdict unanime**",
//       listItems: ['Par équipe de 8 à 12 personnes', "Jusqu'à 35 personnes", 'Durée : 1h30'],
//     },
//     {
//       image: '/images/caroussel/img5.webp',
//       title: "L'enquête",
//       paragraph: "Vous voilà appelés pour dénouer le vrai du faux.\n \n En tant qu'**enquêteurs**, vous devrez interroger les différents suspects, définir vos **hypothèses** et **lever tous les mystères** de cette affaire.\n ",
//       listItems: ['Par équipe de 6 à 8 personnes', "Jusqu'à 50 personnes", 'Durée 2h30'],
//     },
//     {
//       image: '/images/caroussel/img7.webp',
//       title: 'Linguistik',
//       paragraph: "Mettez vous dans la peau d'**experts en linguistique**.\n Tentez de **déchiffrer un mystérieux message** composé de symboles étranges.\n \n Êtes vous prêts à révéler un terrible secret.",
//       listItems: ['Par équipe de 6 à 9 personnes', "Jusqu'à 9 personnes", 'Durée: 1h30'],
//     },
//     {
//       image: '/images/caroussel/img8.webp',
//       title: "L'odysée des légendes",
//       paragraph: "Vivez une **aventure épique** où vous serez seul maître de votre destin. Partez avec votre équipe à la **rencontre** de ceux qui peuplent cet univers.\n \n Réussirez vous à aller au bout des **quêtes** qui vous seront confiées ?",
//       listItems: ['Par équipe de 4 à 6 personnes', "Jusqu'à 6 personnes", 'Durée : 2h30'],
//     },
//   ];

//   return (
//     <>
//     <div className="bg-gradient-to-b from-gray-200 to-gray-300 pt-4 border-gray-900 pb-6">
//     <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-poppins ">Nos <span className="text-red-700">concepts</span></h2>
//     <div className="flex flex-wrap justify-center py-8">
        
//       {cardsData.map((card, index) => (
//         <CardConcept
//           key={index}
//           image={card.image}
//           title={card.title}
//           paragraph={card.paragraph}
//           listItems={card.listItems}
//         />
        
//       ))}
//     </div>
//     </div>
    
//     </>
//   );
// };

// export default CardConceptFull;

import React from 'react';
import Slider from 'react-slick';
import CardConcept from './CardConcept';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardConceptFull = () => {
  const cardsData = [
    {
      image: '/images/caroussel/img3.webp',
      title: 'Story Game',
      paragraph: "Préparez vous à **devenir acteur** de l'histoire qui se déroule sous vos yeux.\n \n **Observer, fouillez** et tentez de résoudre des énigmes qui vous mèneront à découvrir de mystérieux secrets.",
      listItems: ['Par équipe de 4 à 6 personnes', "Jusqu'à 60 personnes", 'Durée : 1h30'],
    },
    {
      image: '/images/caroussel/img4.webp',
      title: 'Le procès',
      paragraph: "**Devenez jurés** d'un procès.\n L'accusé est-il coupable ou non coupable du crime dont on l'accuse ? \n \n **Analyser les pièces à conviction, débattez** et définissez d'un **verdict unanime**",
      listItems: ['Par équipe de 8 à 12 personnes', "Jusqu'à 35 personnes", 'Durée : 1h30'],
    },
    {
      image: '/images/caroussel/img5.webp',
      title: "L'enquête",
      paragraph: "Vous voilà appelés pour dénouer le vrai du faux.\n \n En tant qu'**enquêteurs**, vous devrez interroger les différents suspects, définir vos **hypothèses** et **lever tous les mystères** de cette affaire.\n ",
      listItems: ['Par équipe de 6 à 8 personnes', "Jusqu'à 50 personnes", 'Durée 2h30'],
    },
    {
      image: '/images/caroussel/img7.webp',
      title: 'Linguistik',
      paragraph: "Mettez vous dans la peau d'**experts en linguistique**.\n Tentez de **déchiffrer un mystérieux message** composé de symboles étranges.\n \n Êtes vous prêts à révéler un terrible secret.",
      listItems: ['Par équipe de 6 à 9 personnes', "Jusqu'à 9 personnes", 'Durée: 1h30'],
    },
    {
      image: '/images/caroussel/img8.webp',
      title: "L'odysée des légendes",
      paragraph: "Vivez une **aventure épique** où vous serez seul maître de votre destin. Partez avec votre équipe à la **rencontre** de ceux qui peuplent cet univers.\n \n Réussirez vous à aller au bout des **quêtes** qui vous seront confiées ?",
      listItems: ['Par équipe de 4 à 6 personnes', "Jusqu'à 6 personnes", 'Durée : 2h30'],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Une seule carte visible sur mobile
    slidesToScroll: 1,
    arrows: false, // Désactive les flèches pour les mobiles
  };

  return (
    <>
      <div className="bg-gradient-to-b from-gray-200 to-gray-300 pt-4 border-gray-900 pb-6">
        <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-poppins">
          Nos <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">concepts</span>
        </h2>
        
        {/* Version Desktop et Tablette */}
        <div className="hidden md:flex flex-wrap justify-center py-8 gap-4">
          {cardsData.map((card, index) => (
            <CardConcept
              key={index}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
              listItems={card.listItems}
            />
          ))}
        </div>

        {/* Version Mobile */}
        <div className="md:hidden py-8">
          <Slider {...settings}>
            {cardsData.map((card, index) => (
              <div key={index}>
                <CardConcept
                  image={card.image}
                  title={card.title}
                  paragraph={card.paragraph}
                  listItems={card.listItems}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CardConceptFull;