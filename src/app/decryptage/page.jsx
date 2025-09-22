import AdventureLayout from '../components/AdventureLayout';

export const metadata = {
  title: "Décryptage de messages secrets | Activité Team Building | En Scènes Acting",
  description: "Plongez dans une aventure immersive de décryptage avec 'Polyxène et le mystérieux message'. Une activité de team building originale où votre équipe devra résoudre des énigmes linguistiques en Haute-Savoie.",
  openGraph: {
    title: "Décryptage de messages secrets | Activité Team Building | En Scènes Acting",
    description: "Plongez dans une aventure immersive de décryptage avec 'Polyxène et le mystérieux message'. Une activité de team building originale où votre équipe devra résoudre des énigmes linguistiques en Haute-Savoie.",
  }
};

export default function DecryptagePage() {
  const retrospectivePhotos = [
    {
      src: "/teaser/photos-site/poly1.png",
      alt: "Participants décryptant le mystérieux poème",
      caption: "Décryptage du message secret"
    },
    {
      src: "/teaser/photos-site/poly2.png", 
      alt: "Équipe analysant les indices linguistiques",
      caption: "Analyse linguistique collaborative"
    },
    {
      src: "/teaser/photos-site/poly3.png",
      alt: "Révélation du secret enfoui de Polyxène",
      caption: "Découverte du secret"
    }
  ];

  return (
    <AdventureLayout
      title="Polyxène et le mystérieux message"
      videoSrc="/videos/aventure1.mp4"
      retrospectivePhotos={retrospectivePhotos}
      description={
        <>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">📚</div>
              <p className="flex-1 mt-2">Dans les années 1930, une jeune comtesse nommée Izabela Potocka découvrit dans sa bibliothèque, un mystérieux poème.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🌍</div>
              <p className="flex-1 mt-2">Intriguée de découvrir ce qu'il pouvait bien signifier, elle compte sur vous expert en linguistique pour l'aider dans sa quête de vérité.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🔒</div>
              <p className="flex-1 mt-2">Cette découverte vous emmènera bien au-delà de ce que vous pouvez imaginer, vous allez déterrer un secret enfoui depuis des dizaines d'années.</p>
            </div>
          </div>
        </>
      }
    />
  );
}