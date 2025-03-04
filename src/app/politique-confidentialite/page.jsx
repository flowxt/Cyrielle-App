import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <main className="bg-gradient-to-b from-gray-200 to-gray-400 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 font-poppins text-gray-800">Politique de Confidentialité</h1>
        <div className="bg-white/80 rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 font-poppins text-gray-800">Utilisation des cookies</h2>
          <div className="prose font-roboto text-gray-700">
            <p className="mb-4">
              En Scènes Acting utilise des cookies pour améliorer votre expérience de navigation.
              Ces cookies sont essentiels pour le bon fonctionnement de notre site et nous aident à :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Mémoriser vos préférences de navigation</li>
              <li>Analyser le trafic du site pour l'améliorer</li>
              <li>Sécuriser votre navigation</li>
              <li>Personnaliser votre expérience utilisateur</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Que sont les cookies ?</h3>
            <p className="mb-4">
              Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent
              de vous offrir une meilleure expérience de navigation.
            </p>

            <h3 className="text-xl font-semibold mb-4">Vos droits</h3>
            <p className="mb-4">
              Conformément au RGPD, vous avez le droit d'accepter ou de refuser les cookies non essentiels.
              Vous pouvez modifier vos préférences à tout moment.
            </p>

            <div className="mt-8 border-t pt-6">
              <Link 
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-b from-red-700 to-red-900 text-white font-poppins rounded-lg hover:scale-105 transition-all"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}