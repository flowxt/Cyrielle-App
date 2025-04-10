"use client";
import Card from "./Card";
import carte1 from "../../assets/images/carte1.png";
import carte2 from "../../assets/images/carte2.png";
import carte3 from "../../assets/images/carte3.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

export default function CardList() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  const cards = [
    {
      title: "Team Building",
      subtitle: "Renforcez l'efficacité de vos équipes",
      image: carte1,
      listItems: [
        "Améliorez la communication interne", 
        "Développez la confiance entre collaborateurs", 
        "Boostez la productivité collective"
      ],
      link: "/team-building"
    },
    {
      title: "Concepts",
      subtitle: "Démarquez votre entreprise par l'expérience",
      image: carte2,
      listItems: [
        "Créez un événement mémorable", 
        "Suscitez l'engagement de vos participants", 
        "Valorisez votre image de marque"
      ],
      link: "/nos-concepts"
    },
    {
      title: "Formations",
      subtitle: "Investissez dans le potentiel humain",
      image: carte3,
      listItems: [
        "Développez les soft skills de vos équipes", 
        "Stimulez la créativité et l'innovation", 
        "Renforcez le leadership par le jeu"
      ],
      link: "/nos-formations"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        }
      },
      {
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

  if (!isMobile) {
    return (
      <div className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Nos solutions pour votre <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">réussite collective</span>
            </h2>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            {cards.map((card, index) => (
              <div key={index}>
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  image={card.image}
                  listItems={card.listItems}
                  link={card.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Nos solutions pour votre <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">réussite collective</span>
          </h2>
        </div>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2">
              <Card
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                listItems={card.listItems}
                link={card.link}
              />
            </div>
          ))}
        </Slider>
      </div>

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
    </div>
  );
}