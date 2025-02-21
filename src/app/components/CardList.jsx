import Card from "./Card";
import carte1 from "../../assets/images/carte1.png";
import carte2 from "../../assets/images/carte2.png";
import carte3 from "../../assets/images/carte3.png";

export default function CardList() {
  const cards = [
    {
      title: "Team Building",
      subtitle: "Fédérez et engagez vos équipes pour plus de performance",
      image: carte1,
      listItems: [
        "Révéler les talents de l'équipe",
        "Libérer la réflexion collective",
        "Fidéliser durablement vos collaborateurs"
      ],
      buttonText: "Activité de cohésion",
    },
    {
      title: "Seminaires",
      subtitle: "Réunissez vos équipes pour des moments insolites et marquants",
      image: carte2,
      listItems: [
        "Capter l'attention de vos équipes",
        "Créer une expérience mémorable",
        "Construire et réussir ensemble"
      ],
      buttonText: "Nos concepts",
    },
    {
      title: "Formations",
      subtitle: "Découvrez ce que le jeu peut apporter à votre organisation",
      image: carte3,
      listItems: [
        "Construire une dynamique positive",
        "Maîtriser les mécanismes des jeux",
        "Développer la confiance en soi"
      ],
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
