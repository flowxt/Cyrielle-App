'use client';

import Image from 'next/image';

import CardTBComplete from '../components/CardTBComplete';
import CustomButton from '../components/CustomButton';
import Hero from '../components/Hero';
import Image4 from '../../assets/images/image4.png';



export default function TeamBuilding() {
 


  
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    },
  };


  return (
    <>
<Hero
        backgroundImageSrc="/tb1.png" // Image de fond pour cette page
        title="ACTIVITÉS DE COHÉSION UNE ÉQUIPE PRÊTE À RELEVER DES DÉFIS"
        subtitle={
          <>
            Découvrez nos activités stimulantes et {" "}
            <span className="text-red-700">fédératrice</span>
          </>
        }
        description={
          <>
           À la recherche de solutions innovantes pour renforcer la cohésion, le partage et l'engagement tout en vivant des expériences inoubliables ?
<br /><br />
Transmettez des <b>valeurs d'équipe</b> en participant à des <b>activités insolites</b> qui favorise la <b>réflexion collective</b>.

A chaque besoin, un format adapté pour une expérience inédite de <b>team building</b>.

          </>
        }
      />
    
      <main className="flex flex-col">
   <section className='max-w-7xl mx-auto px-4 py-8 '>
    <CardTBComplete />
    <CustomButton text="Découvrez nos différents concepts" additionalClasses="mx-auto mt-8 bg-black hover:bg-gray-900 text-xl " />
    {/* A crrer un bouton avec un bg black ici plutot que de prendre */}
    </section>

    <section>
        <div className="mx-auto  px-4 py-8 sm:px-6 lg:px-8 border-t-2 border-gray-900 bg-gradient-to-b from-gray-200 to-gray-400">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 lg:pb-12">
            <div>
              <div className="max-w-lg md:max-w-none ">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl font-poppins">
                Réinventons <strong className="text-red-600">votre équipe</strong>.
                </h2>
  
                <p className="mt-4 text-gray-700 lg:text-2xl font-roboto font-light">
                Chez En Scènes Acting, nous sommes dévoués à <b>transformer votre équipe</b> en une force unifiée, prête à relever tous les <b>défis</b>.<br /><br />
Nos concepts de team building innovants vous offrent des <b>expériences uniques</b> conçues pour <b>stimuler la collaboration</b>, <b>renforcer les liens</b> et favoriser la croissance collective.<br /><br />
Nos <b>activités ludiques</b> sont conçues pour engager pleinement votre équipe, les plongeant dans des <b>scénarios interactifs</b> où chaque membre joue un rôle crucial. <br /><br />
Improvisations théâtrales, jeux de rôle stratégiques et des défis de résolution de problèmes, nous encourageons la <b>communication</b>, la <b>créativité</b> et le <b>leadership</b>. <br /><br />
Nous croyons fermement que le succès d'une équipe repose sur la force de ses <b>liens</b>, et nous sommes là pour vous aider à les renforcer.
Nous pouvons transformer votre équipe en une <b>véritable force sur la scène professionnelle</b>.
                </p>
                <CustomButton text="Créons ensemble votre team building" />
              </div>
            </div>
            <div>
            <Image
                                src={Image4}
                                alt="Content illustration"
                                className="rounded"
                                priority
                            />
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}