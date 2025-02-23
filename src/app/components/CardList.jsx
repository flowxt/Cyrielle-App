import Card from "./Card";
import carte1 from "../../assets/images/carte1.png";
import carte2 from "../../assets/images/carte2.png";
import carte3 from "../../assets/images/carte3.png";

export default function CardList() {
  const cards = [
    {
      title: "Team Building",
      subtitle: "Créez des liens durables entre vos collaborateurs", // Nouveau subtitle plus descriptif
      image: carte1,
      listItems: ["Révéler l'équipe", "Libérer la réflexion", "Fidéliser ses collaborateurs"],
      buttonText: "Activité de cohésion",
    },
    {
      title: "Seminaires",
      subtitle: "Réunissez vos équipes pour un moment insolite",
      image: carte2,
      listItems: ["Capter l'attention", "Souvenir d'une expérience mémorable", "Réussir ensemble"],
      buttonText: "Nos concepts",
    },
    {
      title: "Formations",
      subtitle: "Découvrez ce que le jeu peut vous apporter",
      image: carte3,
      listItems: ["Construire ensemble", "Découvrir les mécanismes des jeux", "Prendre confiance en soi"],
      buttonText: "Notre catalogue",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-12 ">
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
