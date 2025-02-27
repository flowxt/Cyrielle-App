import AdventureLayout from '../components/AdventureLayout';

export default function ArgumentationPage() {
  return (
    <AdventureLayout
      title="Le jugement de la comtesse"
      videoSrc="/videos/aventure5.mp4"
      description={
        <>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">⚖️</div>
              <p className="flex-1 mt-2">Vous endossez le rôle de juré dans cette affaire qui vous promet bien des rebondissements.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">💀</div>
              <p className="flex-1 mt-2">La comtesse Potocka est accusée d'avoir empoisonné son mari Alfred Potocki.</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">🤔</div>
              <p className="flex-1 mt-2">Mais est-elle réellement coupable ou innocente du crime dont on l'accuse ?</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-100/80 rounded-xl border-l-4 border-red-500 hover:bg-gray-100 transition-all">
              <div className="text-3xl p-3 bg-red-500/10 rounded-full">📜</div>
              <p className="flex-1 mt-2">Votre analyse des preuves et des témoignages vous permettra de débattre pour tenter de définir ensemble un verdict unanime qui changera à jamais le cours de la vie de la comtesse.</p>
            </div>
          </div>
        </>
      }
    />
  );
}