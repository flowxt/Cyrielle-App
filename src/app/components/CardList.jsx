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
      subtitle: "Créez des liens durables entre vos collaborateurs",
      image: carte1,
      listItems: ["Révéler l'équipe", "Libérer la réflexion", "Fidéliser ses collaborateurs"],
      buttonText: "Activité de cohésion",
      link: "/team-building"
    },
    {
      title: "Seminaires",
      subtitle: "Réunissez vos équipes pour un moment insolite",
      image: carte2,
      listItems: ["Capter l'attention", "Souvenir d'une expérience mémorable", "Réussir ensemble"],
      buttonText: "Nos concepts",
      link: "/nos-concepts"
    },
    {
      title: "Formations",
      subtitle: "Découvrez ce que le jeu peut vous apporter",
      image: carte3,
      listItems: ["Construire ensemble", "Découvrir les mécanismes des jeux", "Prendre confiance en soi"],
      buttonText: "Notre catalogue",
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
      <div className="py-12 px-4 md:px-8 lg:px-12">
        <div className="flex justify-center gap-8 flex-wrap">
          {cards.map((card, index) => (
            <div key={index}>
              <Card
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                listItems={card.listItems}
                buttonText={card.buttonText}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-8 lg:px-12">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <Card
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              listItems={card.listItems}
              buttonText={card.buttonText}
              link={card.link}
            />
          </div>
        ))}
      </Slider>

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