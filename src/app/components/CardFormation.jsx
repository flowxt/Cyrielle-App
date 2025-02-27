import React from 'react';
import Slider from 'react-slick';
import CardConcept from './CardConcept';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardFormation = () => {const cardsData = [
    {
      image: '/formation2.png',
      title: 'Osez vous exprimer',
      paragraph: "Découvrez vos talents d'orateurs et apprenez à vous faire confiance.\n \n Oser vous exprimer et prenez du plaisir à le faire grâce à des outils pratiques et ludiques à utiliser au quotidien.",
      listItems: ['De 4 à 8 personnes','Durée : 3h00'],
    },
    {
      image: '/testformation.png',
      title: 'Unissons vos équipes',
      paragraph: "Appréhendez la ludopédagogie et permettez à vos équipes de construire des liens durables.\n \n De nouvelles méthodes pour une cohésion d'équipe sans faille.",
      listItems: ['De 6 à 10 personnes', 'Durée: 7h00', "Sur une journée ou 2 demi journée"],
    },
    {
      image: '/formation3.png',
      title: "Brainstormons autrement",
      paragraph: " Comprendre les différentes phases d'un brainstorming réussi grâce aux mécanismes du jeu de rôle.\n \n Plongez dans cet univers pour en décrypter toutes les facettes.",
      listItems: ['De 6 à 10 personnes', "Durée: 7h", 'Sur une journée ou 2 demi journée'],
    },
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
    <div className="bg-gradient-to-b from-gray-200 to-gray-300 pt-4 border-gray-900 pb-6">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-poppins">
        Notre <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">catalogue</span>
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
export default CardFormation;