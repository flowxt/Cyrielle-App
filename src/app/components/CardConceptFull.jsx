import React from 'react';
import Slider from 'react-slick';
import CardConcept from './CardConcept';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardConceptFull = () => {
  const cardsData = [
    {
      image: '/telescope.png',
      title: 'Story Game',
      paragraph: "Préparez vous à **devenir acteur** de l'histoire qui se déroule sous vos yeux.\n \n **Observer, fouillez** et tentez de résoudre des énigmes qui vous mèneront à découvrir de mystérieux secrets.",
      listItems: ['Par équipe de 4 à 6 personnes', "Jusqu'à 60 personnes", 'Durée : 1h30'],
      tag: 'Immersif'
    },
    {
      image: '/justice2.png',
      title: 'Le procès',
      paragraph: "**Devenez jurés** d'un procès.\n L'accusé est-il coupable ou non coupable du crime dont on l'accuse ? \n \n **Analyser les pièces à conviction, débattez** et définissez d'un **verdict unanime**",
      listItems: ['Par équipe de 8 à 12 personnes', "Jusqu'à 35 personnes", 'Durée : 1h30'],
      tag: 'Argumentation'
    },
    {
      image: '/juge.png',
      title: "L'enquête",
      paragraph: "Vous voilà appelés pour dénouer le vrai du faux.\n \n En tant qu'**enquêteurs**, vous devrez interroger les différents suspects, définir vos **hypothèses** et **lever tous les mystères** de cette affaire.\n ",
      listItems: ['Par équipe de 6 à 8 personnes', "Jusqu'à 50 personnes", 'Durée 2h30'],
      tag: 'Investigation'
    },
    {
      image: '/megaphone.png',
      title: 'Linguistik',
      paragraph: "Mettez vous dans la peau d'**experts en linguistique**.\n Tentez de **déchiffrer un mystérieux message** composé de symboles étranges.\n \n Êtes vous prêts à révéler un terrible secret.",
      listItems: ['Par équipe de 6 à 9 personnes', "Jusqu'à 9 personnes", 'Durée: 1h30'],
      tag: 'Déchiffrage'
    },
    {
      image: '/jeu.png',
      title: "L'odysée des légendes",
      paragraph: "Vivez une **aventure épique** où vous serez seul maître de votre destin. Partez avec votre équipe à la **rencontre** de ceux qui peuplent cet univers.\n \n Réussirez vous à aller au bout des **quêtes** qui vous seront confiées ?",
      listItems: ['Par équipe de 4 à 6 personnes', "Jusqu'à 6 personnes", 'Durée : 2h30'],
      tag: 'Aventure'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    responsive: [
      {
        // Desktop
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        }
      },
      {
        // Tablette
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        }
      },
      {
        // Mobile
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
       
        
        {/* Slider pour toutes les versions */}
        <div className="pb-12 pt-4">
          <Slider {...settings}>
            {cardsData.map((card, index) => (
              <div key={index} className="px-3">
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
        .slick-prev,
        .slick-next {
          width: 40px;
          height: 40px;
          z-index: 10;
        }
        
        .slick-prev {
          left: -5px;
        }
        
        .slick-next {
          right: -5px;
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 40px;
          color: #991b1b;
          opacity: 0.75;
        }

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

export default CardConceptFull;