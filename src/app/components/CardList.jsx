import Card from "./Card";

export default function CardList() {
  const cards = [
    {
      title: "Team Building",
      subtitle: "Fédérez et engagez vos équipes",
      image: "/images/carte1.jpg",
      listItems: ["Révéler l'équipe", "Libérer la réflexion", "Fidéliser ses collaborateurs"],
      buttonText: "Activité de cohésion",
    },
    {
      title: "Seminaires",
      subtitle: "Réunissez vos équipes pour un moment insolite",
      image: "/images/carte2.jpg",
      listItems: ["Capter l'attention", "Souvenir d'une expérience mémorable", "Réussir ensemble"],
      buttonText: "Nos concepts",
    },
    {
      title: "Formations",
      subtitle: "Découvrez ce que le jeu peut vous apporter",
      image: "/images/carte3.jpg",
      listItems: ["Construire ensemble", "Découvrir les mécanismes des jeux", "Prendre confiance en soi"],
      buttonText: "Notre catalogue",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-16 ">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          image={card.image}
          listItems={card.listItems}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
}
