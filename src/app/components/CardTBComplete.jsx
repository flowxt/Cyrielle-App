import React from 'react';
import CardTB from './CardTB';

const cardData = [
  {
    imageSrc: '/images/caroussel/img2.webp',
    title: 'Fédérer',
    content: "Vous souhaitez renforcer l'esprit d'équipe de vos collaborateurs à travers une expérience unique.<br /><br /> Le temps de quelques heures, dans un lieu insolite, nous vous transporterons dans nos univers immersifs pour créer des liens durables.",
    tag: "Cohésion d'équipe"
  },
  {
    imageSrc: '/card-couleur.png',
    title: 'Intégrer',
    content: 'Pas toujours évident de trouver sa place dans une équipe déjà bien installée.<br /><br /> Sortez vos collaborateurs du cadre professionnel et permettez-leur de reconnaître les talents de chacun pour les valoriser et atteindre des objectifs communs.',
    tag: "Nouveaux collaborateurs"
  },
  {
    imageSrc: '/card-color2.png',
    title: 'Développer',
    content: 'Vous êtes convaincu que le format «Réunion» n\'est pas le plus efficace pour développer un projet.<br /><br /> À votre écoute pour comprendre vos attentes, nous concevrons un scénario personnalisé permettant à vos collaborateurs de réfléchir autrement et d\'aboutir à des actions concrètes.',
    tag: "Créativité et innovation"
  }
];

const CardTBComplete = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Nos solutions <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Team Building</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Créez des expériences mémorables et renforcez la cohésion d'équipe
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <CardTB
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
              tag={card.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardTBComplete;