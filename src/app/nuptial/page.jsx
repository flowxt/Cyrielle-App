import AdventureLayout from '../components/AdventureLayout';

export const metadata = {
  title: "Nuptial | Enquête Immersive | En Scènes Acting",
  description: "Plongez dans notre aventure immersive 'Nuptial' et remontez en 1958 lors du mariage de Gustave et Soléa. Une expérience interactive idéale pour vos événements d'entreprise en Haute-Savoie.",
  openGraph: {
    title: "Nuptial | Enquête Immersive | En Scènes Acting",
    description: "Plongez dans notre aventure immersive 'Nuptial' et remontez en 1958 lors du mariage de Gustave et Soléa. Une expérience interactive idéale pour vos événements d'entreprise en Haute-Savoie.",
  }
};

export default function NuptialPage() {
  return (
    <AdventureLayout
      title="Nuptial - Le mariage de Gustave et Soléa"
      videoSrc="/videos/aventure3.mp4"
      description={
        <>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">👨👩👧👦</div>
              <p className="flex-1 mt-2">Remontez sur les traces du passé de Gustave Hornet, en rencontrant sa famille et ses proches lors de son mariage en 1958.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">💒</div>
              <p className="flex-1 mt-2">Vous êtes conviés dans un cadre idyllique, pour célébrer l'union de Gustave et Soléa.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🕵️♂️</div>
              <p className="flex-1 mt-2">Intégrez la famille des mariés et profitez de ce moment pour interagir avec eux et découvrir tous les mystères qui les entourent !</p>
            </div>
          </div>
        </>
      }
    />
  );
}