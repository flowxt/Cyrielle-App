import AdventureLayout from '../components/AdventureLayout';

export const metadata = {
  title: "Le Dragon d'Elbevor | Jeu d'équipe immersif | En Scènes Acting",
  description: "Défiez le dragon d'Elbevor et sauvez la princesse dans cette aventure immersive. Une activité de team building originale mêlant escape game et créativité en Haute-Savoie.",
  openGraph: {
    title: "Le Dragon d'Elbevor | Jeu d'équipe immersif | En Scènes Acting",
    description: "Défiez le dragon d'Elbevor et sauvez la princesse dans cette aventure immersive. Une activité de team building originale mêlant escape game et créativité en Haute-Savoie.",
  }
};

export default function DragonPage() {
  const retrospectivePhotos = [
    {
      src: "/teaser/photos-site/dragon1.JPG",
      alt: "Participants préparant la potion magique",
      caption: "Les apprentis sorciers en action"
    },
    {
      src: "/teaser/photos-site/dragon2.JPG", 
      alt: "Équipe travaillant ensemble sur l'énigme",
      caption: "Collaboration et réflexion collective"
    },
    {
      src: "/teaser/photos-site/dragon3.JPG",
      alt: "Moment de découverte dans l'aventure",
      caption: "Moment de révélation"
    }
  ];

  return (
    <AdventureLayout
      title="Le dragon d'Elbevor et la princesse De Benevix"
      videoSrc="/videos/aventure4.mp4"
      retrospectivePhotos={retrospectivePhotos}
      description={
        <>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🏰</div>
              <p className="flex-1 mt-2">La princesse est retenue prisonnière dans une tour gardée par le dragon d'Elbevor connu pour être l'un des plus féroces.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🔮</div>
              <p className="flex-1 mt-2">Heureusement, sa sœur Eleanor a réussi à pénétrer dans l'atelier secret de la sorcière Isolde.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">⚗️</div>
              <p className="flex-1 mt-2">Vous, jeunes apprentis sorciers, aurez donc une heure devant vous pour concocter une potion magique permettant d'endormir le dragon pour que Sir Ulric puisse secourir la princesse.</p>
            </div>
          </div>
        </>
      }
    />
  );
}