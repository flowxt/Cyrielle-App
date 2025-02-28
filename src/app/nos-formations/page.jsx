"use client";
import Hero from '../components/Hero';
import Image from 'next/image';
import CardFormation from '../components/CardFormation';
import Link from 'next/link';


export default function Formation() {
    return (
      <>
      <Hero
        backgroundImageSrc="/test.png" // Image de fond pour cette page
        title="DEVELOPPER LA COHESION ET VOUS DONNER LES CLEFS POUR L'ENTRETENIR"
        subtitle={
          <>
            Et si nous tirions avantage de <strong className='bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text'>l'art de créer et jouer ensemble</strong>
          </>
        }
        description={
          <>
           Découvrir l'autre sous un autre angle, <strong>se découvrir</strong> de nouveaux talents, <strong>prendre confiance</strong> en soi, trouver sa place au sein d'un groupe, comprendre la <strong>complémentarité</strong> des personnalités. 
           <br /><br />
           Nos formations son conçues pour prendre le temps de découvrir ou redécouvrir ce et/ou ceux qui nous entourent <b>autrement</b>.
          </>
        }
      />
      <CardFormation />
      
      
      <section className="border-t-2 border-red-700 bg-gradient-to-b from-gray-200 to-gray-400">
  <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
    <div className="flex justify-center items-center">
      <div className="flex justify-center text-center w-full">
        <div className="max-w-2xl w-full">
          <h2 className="font-poppins text-4xl font-semibold">
            Vous souhaitez aborder une{' '}
            <span className="text-gray-100 bg-gradient-to-r from-red-600 to-red-900 p-2 inline-block -rotate-3">
              thématique
            </span>{' '}
            précise ?
          </h2>

          <p className="font-roboto mt-6 text-lg font-light">
            Dites nous en plus, donnez nous votre{' '}
            <strong>
              cahier des charges
            </strong>{' '}
            et nous vous proposerons un{' '}
            <strong>
              programme sur mesure
            </strong>
          </p>

          <div className="mt-8">
  <Link 
    href="/contact"
    className="inline-block px-6 py-3 bg-gradient-to-b from-red-700 to-red-900 hover:bg-red-950 hover:scale-105 text-white font-poppins rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
  >
    Je vous explique ce que je veux
  </Link>
</div>
          
          {/* Section certification */}
          <div className="mt-12 pt-12 border-t border-red-700/30">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
              <div className="w-72 lg:w-96 h-32 relative">
              <Image
  src="/cce.png"
  width={500} // Ajustez selon vos besoins
  height={300} // Ajustez selon vos besoins
  alt="CCE Logo"
  className="w-full h-auto object-cover" // Pour un comportement responsive
/>
              </div>
              <ul className="text-center font-roboto text-md md:text-lg space-y-2">
                <li className="font-semibold text-gray-800">Votre formatrice certifiée Cyrielle Schepens</li>
                <li className="text-gray-700">Certification obtenue le 11/07/2024</li>
                <li className="text-gray-700">Auprès de la CCI Annecy</li>
                <li className="text-gray-600 font-light">N°2024-0021057-8</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    );
  }