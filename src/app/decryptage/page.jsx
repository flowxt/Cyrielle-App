import AdventureLayout from '../components/AdventureLayout';

export default function DecryptagePage() {
  return (
    <AdventureLayout
      title="Polyxène et le mystérieux message"
      videoSrc="/videos/aventure1.mp4"
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