import React from 'react';
import Slider from 'react-slick';
import CardConcept from './CardConcept';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CardFormation = () => {
  const cardsData = [
    {
      image: '/formation2.png',
      title: 'Osez vous exprimer',
      paragraph: "Découvrez vos talents d'orateurs et apprenez à vous faire confiance.\n \n Oser vous exprimer et prenez du plaisir à le faire grâce à des outils pratiques et ludiques à utiliser au quotidien.",
      listItems: ['De 4 à 8 personnes','Durée : 3h'],
      tag: 'Communication'
    },
    {
      image: '/testformation.png',
      title: 'Unissons vos équipes',
      paragraph: "Appréhendez la ludopédagogie et permettez à vos équipes de construire des liens durables.\n \n De nouvelles méthodes pour une cohésion d'équipe sans faille.",
      listItems: ['De 6 à 10 personnes', 'Durée: 7h', "Sur une journée ou 2 demi journée"],
      tag: 'Cohésion'
    },
    {
      image: '/formation3.png',
      title: "Brainstormons autrement",
      paragraph: " Comprendre les différentes phases d'un brainstorming réussi grâce aux mécanismes du jeu de rôle.\n \n Plongez dans cet univers pour en décrypter toutes les facettes.",
      listItems: ['De 6 à 10 personnes', "Durée: 7h", 'Sur une journée ou 2 demi journée'],
      tag: 'Créativité'
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
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
       
        
        {/* Version Desktop et Tablette */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {cardsData.map((card, index) => (
            <CardConcept
              key={index}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
              listItems={card.listItems}
              tag={card.tag}
            />
          ))}
        </div>

        {/* Version Mobile */}
        <div className="md:hidden py-8">
          <Slider {...settings}>
            {cardsData.map((card, index) => (
              <div key={index} className="px-2">
                <CardConcept
                  image={card.image}
                  title={card.title}
                  paragraph={card.paragraph}
                  listItems={card.listItems}
                  tag={card.tag}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Styles du slider */}
      <style jsx global>{`
        .slick-dots li button:before {
          color: #991b1b;
        }

        .slick-dots li.slick-active button:before {
          color: #991b1b;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default CardFormation;