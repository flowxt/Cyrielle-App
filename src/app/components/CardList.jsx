import Card from "./Card";

export default function CardList() {
  const cards = [
    {
      title: "Team Building",
      subtitle: "Fédérez et engagez vos équipes",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      listItems: ["Révéler l'équipe", "Libérer la réflexion", "Fidéliser ses collaborateurs"],
      buttonText: "Activité de cohésion",
    },
    {
      title: "Seminaires",
      subtitle: "Réunissez vos équipes pour un moment insolite",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      listItems: ["Capter l'attention", "Souvenir d'une expérience mémorable", "Réussir ensemble"],
      buttonText: "Nos concepts",
    },
    {
      title: "Formations",
      subtitle: "Découvrez ce que le jeu peut vous apporter",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
