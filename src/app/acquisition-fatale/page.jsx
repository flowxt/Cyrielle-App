import AdventureLayout from '../components/AdventureLayout';

export const metadata = {
  title: "Acquisition Fatale | Enquête Immersive au Château | En Scènes Acting",
  description: "Plongez dans 'Acquisition Fatale', une enquête immersive en 1858 au château. Un acquéreur retrouvé mort, 6 suspects à interroger. Démêlez le vrai du faux lors de cette murder party en Haute-Savoie.",
  openGraph: {
    title: "Acquisition Fatale | Enquête Immersive au Château | En Scènes Acting",
    description: "Plongez dans 'Acquisition Fatale', une enquête immersive en 1858 au château. Un acquéreur retrouvé mort, 6 suspects à interroger. Démêlez le vrai du faux lors de cette murder party en Haute-Savoie.",
  }
};

export default function AcquisitionFatalePage() {
  const retrospectivePhotos = [
    {
      src: "/acquisition-fatale/749A1936.jpeg",
      alt: "Enquête Acquisition Fatale - Interrogatoire des suspects",
      caption: "Sur les traces des suspects"
    },
    {
      src: "/acquisition-fatale/749A1957.jpeg",
      alt: "Enquête Acquisition Fatale - Analyse des indices",
      caption: "Analyse des pièces à conviction"
    },
    {
      src: "/acquisition-fatale/749A1958.jpeg",
      alt: "Enquête Acquisition Fatale - Les enquêteurs au château",
      caption: "Au cœur du château"
    },
    {
      src: "/acquisition-fatale/749A1966.jpeg",
      alt: "Enquête Acquisition Fatale - Résolution de l'énigme",
      caption: "Vers la résolution"
    },
    {
      src: "/acquisition-fatale/749A2010.JPG",
      alt: "Enquête Acquisition Fatale - Les participants",
      caption: "Les enquêteurs en action"
    },
    {
      src: "/acquisition-fatale/749A2013.JPG",
      alt: "Enquête Acquisition Fatale - Immersion au château",
      caption: "Immersion dans l'histoire"
    },
  ];

  return (
    <AdventureLayout
      title="Acquisition Fatale"
      youtubeId="oX8i-hscfrg"
      retrospectivePhotos={retrospectivePhotos}
      description={
        <>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🏰</div>
              <p className="flex-1 mt-2">Nous sommes en 1858. Vous veniez simplement visiter le domaine lors des portes ouvertes, mais le corps d'un acquéreur potentiel vient d'être découvert dans le donjon.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">👥</div>
              <p className="flex-1 mt-2">Le commissaire bloque les issues : <strong>6 suspects</strong>, arrivés plus tôt dans l'après-midi, vous attendent pour que vous fassiez éclater la vérité.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🔍</div>
              <p className="flex-1 mt-2">Serez-vous capables de retracer le fil de leur journée et de <strong>démêler le vrai du faux</strong> pour comprendre pourquoi cette vente a coûté la vie à la victime ?</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">⚠️</div>
              <p className="flex-1 mt-2">Ne vous laissez pas impressionner par le prestige des vieilles pierres : une transaction immobilière cache parfois de <strong>sombres rivalités</strong>. Soyez perspicaces.</p>
            </div>
          </div>
        </>
      }
    />
  );
}
