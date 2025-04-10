import AdventureLayout from '../components/AdventureLayout';

export const metadata = {
  title: "Enquête au Château | Team Building Immersif | En Scènes Acting",
  description: "Résolvez une enquête immersive au château: disparition mystérieuse, interrogatoire de suspects et recherche d'indices. Activité de team building originale en Haute-Savoie.",
  openGraph: {
    title: "Enquête au Château | Team Building Immersif | En Scènes Acting",
    description: "Résolvez une enquête immersive au château: disparition mystérieuse, interrogatoire de suspects et recherche d'indices. Activité de team building originale en Haute-Savoie.",
  }
};

export default function EnquetePage() {
  return (
    <AdventureLayout
      title="Disparition inquiétante au château"
      videoSrc="/videos/chateau.mp4"
      description={
        <>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🕵️</div>
              <p className="flex-1 mt-2">Nous sommes en 1450, la princesse De Benevix vient de vous appeler, son père le roi a disparu.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">👥</div>
              <p className="flex-1 mt-2">Tous les suspects sont réunis au château et vous attendent pour que vous fassiez éclater la vérité.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🔍</div>
              <p className="flex-1 mt-2">Serez-vous suivre les bonnes pistes et démêler le vrai du faux ?</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🏰</div>
              <p className="flex-1 mt-2">Ne vous laissez pas berner par ce lieu grandiose, des choses terribles ont pu se passer dans le château et ses alentours, soyez perspicace.</p>
            </div>
          </div>
        </>
      }
    />
  );
}