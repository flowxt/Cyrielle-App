"use client";
import React from 'react';

const reviews = [
  // Vos 50 avis ici
  {
    author_name: "Emilie Bougerol",
   
    relative_time_description: "il y a 2 mois",
    text: "Un grand bravo ! Mes 2 enfants de 7 et 9 ans ont adoré le nouveau parcours Lunaris ! Ils avaient déjà beaucoup aimé celui avec la princesse. Ils étaient de revenir au Château et découvrir autre chose. Nous recommandons à 200% les 2 parcours pour toute la famille.",
    rating: 5,
  },
  {
    author_name: "Jonathan Giron",
   
    relative_time_description: "il y a 1 mois",
    text: "Une superbe expérience !! Des acteurs incroyables et performants. Une histoire très bien écrite. On se met vraiment dans la peau de l'enquêteur. On a passé une excellente soirée et on recommande vivement !! Hâte de vivre une nouvelle enquête. Merci !!",
    rating: 5,
  },
  {
    author_name: "Tatiana Michaud",
    relative_time_description: "il y a 3 mois",
    text: "Superbe expérience avec ma fille de 7ans. Une aventure qui se termine à merveille avec la libération de la princesse et un diplôme d’apprenti sorcier en poche. Merci 🙏 pour ce moment immersif",
    rating: 5,
  },
  {
    author_name: "Benoit Mondié",
    relative_time_description: "il y a 2 semaines",
    text: "Une expérience intense à vivre en famille ou seul(e) pour petits et grands. Cyrielle captive les participants et arrive à nous emmener dans son univers magique et féerique. Nous avons eu l'occasion de nous plonger dans ses aventures à 2 reprises et avons adoré.",
    rating: 5,
  },
  {
    author_name: "VOTRAN nhatquang",
    profile_photo_url: "https://via.placeholder.com/150",
    relative_time_description: "il y a 2 semaines",
    text: "Génial mon fils s'est pris au jeu et le château se prêtait bien à la situation. On reviendra avec plaisir",
    rating: 5,
  },
  {
    author_name: "Damien Daurade",

    relative_time_description: "il y a 2 semaines",
    text: "Superbe moment passé avec les enfants. La mise en scène est excellente et tous les enfants étaient captivés du début à la fin. Nous espérons que la potion magique sera efficace et permettra de délivrer la princesse ! Merci encore pour tout et ne changez rien !",
    rating: 5,
  },
  {
    author_name: "Célyne LN",

    relative_time_description: "il y a 2 semaines",
    text: "Une expérience magique pour les enfants dans un univers confectionné avec soins. Bravo à vous pour cette belle organisation. Mon fils a adoré l’aventure et le fait que les parents puissent y assister est un vrai plus. Le prix est très abordable et les enfants sont conquis !!", 
    rating: 5,
  },
  {
    author_name: "Cherie Coco",

    relative_time_description: "il y a 2 semaines",
    text: "Mes enfants, Jade, âgée de 10 ans, et Johan, 7 ans, ont été enchantés par les passionnantes activités d'énigmes. Ils ont vécu des instants inoubliables avec En Scènes Acting lors des événements des Talentueuses, au majestueux Château de l'Échelle.",
    rating: 5,
  },
  {
    author_name: "BARDAUX Alex",

    relative_time_description: "il y a 2 semaines",
    text: "Un grand merci et bravo pour l'organisation de la superbe enquête au château de la Roche à laquelle on a pu participer entre amis le 1/11! Tout était bien pensé : l'intrigue, le lieu, le jeu des acteurs et actrices, les participants, le déroulé.",
    rating: 5,
  },
  {
    author_name: "Wilsius Estelle",

    relative_time_description: "il y a 2 semaines",
    text: "Vous voulez vous évader pour vivre une expérience auprès d'une équipe investie? Plonger en immersion totale au coeur d'une histoire parfaitement ficelée?... Foncez !!! Un grand BRAVO 👏 Je recommande vivement!",
    rating: 5,
  },
  {
    author_name: "Marie Richard",

    relative_time_description: "il y a 2 semaines",
    text: "Top! Une expérience adaptée aux enfants de 6 à 10 ans (voir plus). Mes enfants ont adoré et se sont vite prêtés au jeu! Je recommande vivement car il n’y a pas beaucoup de scénarios adaptés à des enfants tels que celui là!",
    rating: 5,
  },
  
  {
    author_name: "Sylvie Hulin",

    relative_time_description: "il y a 2 semaines",
    text: "Super après-midi en famille sur une idée originale avec un parcours mené par mains de maîtres avec humour. On n’a pas vu le temps passé !",
    rating: 5,
  },
  {
    author_name: "Max Alex",

    relative_time_description: "il y a 2 semaines",
    text: "Super spectacle, unique en son genre : recherches en équipe, ambiance super travaillée, énigmes bien pensées ; bravo à toute l'équipe.",
    rating: 5,
  },
  {
    author_name: "Mayleen S.",

    relative_time_description: "il y a 2 semaines",
    text: "Une équipe incroyable, super sympa, une expérience de folie et parfait pour sortir du stress des examens. Je conseille à 100%",
    rating: 5,
  },
  {
    author_name: "Michel Durand",

    relative_time_description: "il y a 2 semaines",
    text: "C'était très bien mais il y avait trop de monde dans la même pièce.",
    rating: 3,
  },
  {
    author_name: "Cléclé",

    relative_time_description: "il y a 2 semaines",
    text: "Le jeudi 22 février 2024 j'ai pu vivre une très belle expérience immersive proposé par En Scène Acting dans le cadre somptueux du château de l'Echelle.",
    rating: 5,
  },
  {
    author_name: "Céline Dessambre",

    relative_time_description: "il y a 2 semaines",
    text: "Très chouette moment, les enfants étaient très contents et super motivés! Je recommande, à refaire!",
    rating: 5,
  },
  {
    author_name: "Hotel La marmotte des Gets",

    relative_time_description: "il y a 2 semaines",
    text: "Encore une belle soirée de passée au côté de l' équipe En Scène Acting. Un cadre incroyable, et surtout une deuxième partie de jeux ludique, bien scénarisée, avec des comédiens au top et des participants qui ont bien joué le jeu ! Merci à vous !",
    rating: 5,
  },
  {
    author_name: "Audrey Montjod",

    relative_time_description: "il y a 2 semaines",
    text: "De trop bon moments de partage autour d aventures qui nous prennent vraiment au jeu . Une valeur sur pour tous les enquêteurs en herbe",
    rating: 5,
  },
  {
    author_name: "Cocorico letterpress",

    relative_time_description: "il y a 2 semaines",
    text: "Encore une expérience dont je me souviendrai ! C'est la deuxième fois que je participe à l'un des évènements immersifs proposés par En Scènes et le concept est à chaque fois une découverte géniale ! L'histoire est parfaitement écrite...",
    rating: 5,
  },
  // Ajoutez d'autres avis ici
];

const GoogleReviews = () => {
  return (
    <div className=" py-12 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-24 mt-12 font-poppins">
        Témoignages de nos <span className='px-4 bg-red-800 text-white'>clients</span>
      </h2>
      
      <div className="relative w-full overflow-hidden mb-24">
        {/* Dégradé gauche */}
        <div 
          className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgb(249 250 251) 0%, rgba(249, 250, 251, 0) 100%)'
          }}
        />

        {/* Carrousel de cartes */}
        <div className="animate-scroll whitespace-nowrap">
          {reviews.concat(reviews).map((review, index) => (
            <div 
              key={index} 
              className="inline-block w-80 mx-4 bg-gray-200 p-6 rounded-lg shadow-xl h-80 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold font-poppins">{review.author_name}</h3>
                </div>
              </div>
              <p className="text-gray-800 break-words whitespace-normal overflow-hidden overflow-ellipsis h-48 font-roboto font-thin">
                {review.text}
              </p>
              <div className="mt-4">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dégradé droite */}
        <div 
          className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgb(249 250 251) 0%, rgba(249, 250, 251, 0) 100%)'
          }}
        />
      </div>
    </div>
  );
};

export default GoogleReviews;