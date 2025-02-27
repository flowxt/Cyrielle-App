import AdventureLayout from '../components/AdventureLayout';

export default function ToxiquePage() {
  return (
    <AdventureLayout
      title="Toxique"
      videoSrc="/videos/aventure2.mp4"
      description={
        <>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">☀️</div>
              <p className="flex-1 mt-2">Découvrez l'organisation Hélios composée de scientifiques fascinés par le soleil.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🎭</div>
              <p className="flex-1 mt-2">Vous êtes conviés dans une soirée mystérieuse, pour les aider dans leur quête de vérité.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🔎</div>
              <p className="flex-1 mt-2">Découvrez des indices et interrogez les membres de l'organisation pour mettre en lumière les mystères qui les entourent.</p>
            </div>
          </div>
        </>
      }
    />
  );
}