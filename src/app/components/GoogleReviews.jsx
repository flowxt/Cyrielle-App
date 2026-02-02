"use client";
import React from 'react';

const reviews = [
  // Nouveaux avis
  {
    author_name: "Thomas Richard-Mas",
    relative_time_description: "il y a 2 semaines",
    text: "Super prestation pour Le repas de fin d'année avec mon équipe. Je recommande vivement Cyrielle !",
    rating: 5,
  },
  {
    author_name: "La Compagnie du Jeu",
    relative_time_description: "il y a 2 mois",
    text: "Très bonne expérience avec l'enquête grandeur nature au Château de l'Echelle à La Roche sur Foron ! Le scénario est adapté aux débutants, les règles sont claires et la démarche assez facile à suivre : on interroge des personnages (interprétés par des comédiens), on mène notre enquête, et on délivre un verdict ! Merci Cyrielle et Adèle pour ce bon jeu coopératif dans un décor très immersif !",
    rating: 5,
  },
  {
    author_name: "Léa Meghzili",
    relative_time_description: "il y a 2 mois",
    text: "Très bonne soirée type murder party au château de La-Roche-Sur-Foron. Une bonne organisation, un joli lieu, une équipe d'acteurs impliqués, et un scénario et des indices qui nous a fait douter à certains moments. Visité en octobre 2025",
    rating: 5,
  },
  {
    author_name: "Angelloz-Nicoud Antoine",
    relative_time_description: "il y a 2 mois",
    text: "Nous avons pris part au \"Jugement de la Comtesse\" en tant que jurés ! L'immersion est très prenante et le dénouement est à vivre, un vrai electro-choc émotionnel ! Visité en octobre 2025",
    rating: 5,
  },
  {
    author_name: "Christophe Vaudel",
    relative_time_description: "il y a 2 mois",
    text: "C'est top une excellente soirée dans un lieux magique pour la murder au chateau de la roche sur foron avec des comédiens supers chouettes..je conseille donc à tous d'aller au prochain événement en avril..à ne pas manquer..vraiment 😁🙏😘 Visité en octobre 2025",
    rating: 5,
  },
  {
    author_name: "Lou Ann Lagarde",
    relative_time_description: "il y a 2 mois",
    text: "Nous étions dans la peau d'un vrai juré ! Quelle expérience ! Joueurs, enquêteurs, foncez ! Vous allez aimer 🔍 Visité en octobre 2025",
    rating: 5,
  },
  {
    author_name: "Doriol Deborah",
    relative_time_description: "il y a 7 mois",
    text: "La Murder party a été organisée avec un professionnalisme et une créativité incroyable. L'intrigue était captivante, les personnages bien construits, et l'ambiance immersive du début à la fin. Les animateurs ont su parfaitement guider le jeu tout en laissant une grande liberté d'interprétation. Un moment de pur plaisir, idéal pour renforcer la cohésion d'équipe ou passer une soirée originale entre amis. Hâte de réorganiser cela pour l'année prochaine ! Visité en avril 2025",
    rating: 5,
  },
  {
    author_name: "Benjamin SOHIER",
    relative_time_description: "il y a 9 mois",
    text: "J'ai participé à une « Murder Party » façon Cluedo au Château de la Roche sur Foron. Le jeu des artistes et le scénario permettent de passer un excellent moment ! Visité en avril 2025",
    rating: 5,
  },
  {
    author_name: "Aline Favre",
    relative_time_description: "il y a 10 mois",
    text: "Super expérience ! Pendant 2h30, nous avons été totalement plongés dans l'intrigue grâce aux acteurs et au décor du Château de l'Échelle. L'ambiance était captivante, rendant chaque énigme encore plus prenante. Un excellent moment entre amis, mêlant réflexion et suspense !",
    rating: 5,
  },
  {
    author_name: "Anouck Durand Teixeira",
    relative_time_description: "il y a 10 mois",
    text: "Expérience géniale à la Roche-sur-Foron au Château de l'Echelle. Les acteurs et les organisateurs étaient au top ! On se prend vite au jeu et ne voit vraiment pas le temps passer ! C'était une enquête immersive et très bien ficelée. Visité en mars 2025",
    rating: 5,
  },
  {
    author_name: "Sylvie T",
    relative_time_description: "il y a 11 mois",
    text: "Captivant, très bons comédiens. Agréable moment d'enquête ! Tout était parfait, bravo. Visité en février 2025",
    rating: 5,
  },
  {
    author_name: "Olivier Lamer",
    relative_time_description: "il y a un an",
    text: "Cyrielle et la troupe de comédiens nous ont permis de passer un très bon moment lors de l'enquête sur la disparition du Roi. Le scénario était très réussi et le lieu nous mettait assurément dans l'ambiance. A refaire pour une prochaine enquête ! Visité en octobre 2024",
    rating: 5,
  },
  {
    author_name: "Marjorie",
    relative_time_description: "il y a 3 mois",
    text: "Superbe expérience, nous nous sommes vraiment plongés dans l'univers du château et de son histoire. Nous avons hâte de recommencer. Merci.",
    rating: 5,
  },
  {
    author_name: "aSaBloco V.",
    relative_time_description: "il y a 3 mois",
    text: "Une équipe passionnée et passionnante, merci pour l'immersion. Si vous aimez mener l'enquête, ils sauront vous captiver au travers de leurs scénarios. Visité en octobre 2025",
    rating: 5,
  },
  // Anciens avis
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
    text: "Superbe expérience avec ma fille de 7ans. Une aventure qui se termine à merveille avec la libération de la princesse et un diplôme d'apprenti sorcier en poche. Merci 🙏 pour ce moment immersif",
    rating: 5,
  },
  {
    author_name: "Benoit Mondié",
    relative_time_description: "il y a 1 mois",
    text: "Une expérience intense à vivre en famille ou seul(e) pour petits et grands. Cyrielle captive les participants et arrive à nous emmener dans son univers magique et féerique. Nous avons eu l'occasion de nous plonger dans ses aventures à 2 reprises et avons adoré.",
    rating: 5,
  },
  {
    author_name: "VOTRAN nhatquang",
    relative_time_description: "il y a 2 mois",
    text: "Génial mon fils s'est pris au jeu et le château se prêtait bien à la situation. On reviendra avec plaisir",
    rating: 5,
  },
  {
    author_name: "Damien Daurade",
    relative_time_description: "il y a 3 mois",
    text: "Superbe moment passé avec les enfants. La mise en scène est excellente et tous les enfants étaient captivés du début à la fin. Nous espérons que la potion magique sera efficace et permettra de délivrer la princesse ! Merci encore pour tout et ne changez rien !",
    rating: 5,
  },
  {
    author_name: "Célyne LN",
    relative_time_description: "il y a 2 semaines",
    text: "Une expérience magique pour les enfants dans un univers confectionné avec soins. Bravo à vous pour cette belle organisation. Mon fils a adoré l'aventure et le fait que les parents puissent y assister est un vrai plus. Le prix est très abordable et les enfants sont conquis !!", 
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
    text: "Top! Une expérience adaptée aux enfants de 6 à 10 ans (voir plus). Mes enfants ont adoré et se sont vite prêtés au jeu! Je recommande vivement car il n'y a pas beaucoup de scénarios adaptés à des enfants tels que celui là!",
    rating: 5,
  },
  {
    author_name: "Sylvie Hulin",
    relative_time_description: "il y a 2 semaines",
    text: "Super après-midi en famille sur une idée originale avec un parcours mené par mains de maîtres avec humour. On n'a pas vu le temps passé !",
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
    author_name: "Audrey Montjod",
    relative_time_description: "il y a 2 semaines",
    text: "De trop bon moments de partage autour d'aventures qui nous prennent vraiment au jeu . Une valeur sur pour tous les enquêteurs en herbe",
    rating: 5,
  },
  {
    author_name: "Cocorico letterpress",
    relative_time_description: "il y a 2 semaines",
    text: "Encore une expérience dont je me souviendrai ! C'est la deuxième fois que je participe à l'un des évènements immersifs proposés par En Scènes et le concept est à chaque fois une découverte géniale ! L'histoire est parfaitement écrite...",
    rating: 5,
  },
  {
    author_name: "Marie-Laure Fuchs",
    relative_time_description: "il y a 2 semaines",
    text: "Ma fille a beaucoup aimé l'escape game auquel elle a participé avec ses copines. Super organisation. Merci",
    rating: 5,
  },
  {
    author_name: "Carole Yahiaoui",
    relative_time_description: "il y a 2 semaines",
    text: "C'était génial ! Des parcours et mises en scène de qualité, un accueil chaleureux. Gentillesse et sourire au rendez-vous. À refaire !",
    rating: 5,
  },
  {
    author_name: "Dorian Lachaise",
    relative_time_description: "il y a 2 semaines",
    text: "Excellent moment, l'adaptation pour les enfants est parfaite, mon fils n'a pas vu le temps passé",
    rating: 5,
  },
  {
    author_name: "Marvak",
    relative_time_description: "il y a 2 semaines",
    text: "Une belle expérience immersive qui a bien plu aux petits mais aussi aux grands. Tout le monde a passé un super moment.",
    rating: 5,
  },
  {
    author_name: "Aurelie Lepage",
    relative_time_description: "il y a 2 semaines",
    text: "J'ai testé la murder party au château de La Roche sur Foron et c'était génial. Une expérience fun, originale, immersive et prenante avec des comédiens génialissimes. Je recommande vivement, à faire entre amis ou en famille !",
    rating: 5,
  },
  {
    author_name: "Géraldine Boisson",
    relative_time_description: "il y a 2 semaines",
    text: "Super expérience immersive! Un jeu d'acteurs très juste et une histoire qui nous tient en haleine jusqu'au bout !! Bravo et merci pour ce bon moment partagé entre amis au château de l'échelle !",
    rating: 5,
  },
  {
    author_name: "Mickael Delove",
    relative_time_description: "il y a 2 semaines",
    text: "Les acteurs au top et immersion direct ! Meme les plus timides se lâchent",
    rating: 5,
  },
  {
    author_name: "Alexandre Jouss",
    relative_time_description: "il y a 2 semaines",
    text: "Un excellent moment. Absolument à faire. Je recommande à 100%",
    rating: 5,
  },
  {
    author_name: "Angélique Dussolier",
    relative_time_description: "il y a 2 semaines",
    text: "Super animation nous avons passé un très bon moment, convivial, divertissant et animé par des acteurs très talentueux. Le format d'enquête vivante où nous sommes également acteur est inédite. Nous recommandons entre amis ou en famille🔎🕵️‍♀️",
    rating: 5,
  },
];

const GoogleReviews = () => {
  return (
    <section className="py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* En-tête de la section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
          Ce que disent nos{' '}
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
            clients
          </span>
        </h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="font-semibold text-2xl">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 text-2xl">★</span>
            <span className="font-semibold ml-1">4.9</span>
            <span className="text-gray-600 ml-2">sur Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Conteneur du défilement */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="animate-scroll whitespace-nowrap">
          {reviews.concat(reviews).map((review, index) => (
            <div 
              key={index} 
              className="inline-block w-[340px] mx-3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* En-tête de l'avis */}
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-semibold">
                    {review.author_name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-1">{review.author_name}</h3>
                  <div className="flex items-center">
                    {Array(review.rating).fill().map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-500 ml-2">{review.relative_time_description}</span>
                  </div>
                </div>
              </div>

              {/* Contenu de l'avis */}
              <div className="relative mt-6">
                <svg className="absolute top-0 left-0 w-6 h-6 text-gray-200 -translate-x-2 -translate-y-3" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 break-words whitespace-normal overflow-hidden text-sm leading-relaxed h-32 font-roboto pl-4">
                  {review.text}
                </p>
              </div>

              {/* Badge Google */}
              <div className="mt-4 flex items-center justify-end">
                <div className="flex items-center text-xs text-gray-500">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                  </svg>
                  {review.relative_time_description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton pour voir tous les avis sur Google */}
      <div className="text-center mt-12 px-4">
        <a
          href="https://share.google/pNHuntyfPTtv4H6SQ"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-white text-gray-800 font-poppins px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-red-600"
        >
          <span className="font-semibold text-xl">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          <span>Voir tous nos avis</span>
          <svg 
            className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default GoogleReviews;
