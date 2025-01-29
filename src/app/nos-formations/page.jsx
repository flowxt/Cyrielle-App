"use client";
import Hero from '../components/Hero';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';
import CardFormation from '../components/CardFormation';


export default function Formation() {
    return (
      <>
      <Hero
        backgroundImageSrc="/test.png" // Image de fond pour cette page
        title="DEVELOPPER LA COHESION ET VOUS DONNER LES CLEFS POUR L'ENTRETENIR"
        subtitle={
          <>
            Et si nous tirions avantage de <span className='text-red-700'>l'art de créer et jouer ensemble</span>
          </>
        }
        description={
          <>
           Découvrir l'autre sous un autre angle, <b>se découvrir</b> de nouveaux talents, <b>prendre confiance</b> en soi, trouver sa place au sein d'un groupe, comprendre la <b>complémentarité</b> des personnalités. 
           <br /><br />
           Nos formations son conçues pour prendre le temps de découvrir ou redécouvrir ce et/ou ceux qui nous entourent <b>autrement</b>.
          </>
        }
      />
      <CardFormation />
      
      
<div className="bg-gradient-to-b from-gray-200 to-gray-300 border-t-2 border-gray-900 pb-6">
  <div>
          <h3 className="text-2xl md:text-3xl  lg:text-4xl p-12 text-center max-w-3xl mx-auto font-poppins">
          Vous souhaitez aborder une <span className='text-red-700'>thématique</span> précise qui n'apparaît pas dans nos formations ?
          </h3>
          <p className="md:text-lg lg:text-xl font-roboto text-center max-w-3xl mx-auto px-6 pb-6">Dites nous en plus, donnez nous votre cahier des charges et nous vous proposerons un programme sur mesure.</p>
          <CustomButton text="Je vous explique ce que je veux" />
        </div>
      
        <div className="flex flex-col md:flex-row justify-around items-center py-6"> {/* Conteneur parent avec flexbox pour centrer et espacement autour */}
    <div className="w-72 lg:w-96 h-32 relative mb-4 md:mb-0"> {/* Conteneur pour l'image avec largeur fixe */}
      <Image
        src="/cce.png"
        alt="logo-CCE"
        layout="fill"
        objectFit="contain"
        className="object-contain"
      />
    </div>
    <ul className="text-center font-roboto text-md md:text-lg"> {/* Liste centrée */}
      <li>Votre formatrice certifiée Cyrielle Schepens</li>
      <li>Certification obtenue le 11/07/2024</li>
      <li>Auprès de la CCI Annecy</li>
      <li>N°2024-0021057-8</li>
    </ul>
  </div>
</div>
      </>
    );
  }