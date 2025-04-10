'use client';

import Image from 'next/image';
import Link from 'next/link';
import CardTBComplete from '../components/CardTBComplete';
import Hero from '../components/Hero';

export default function TeamBuildingClient() {
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
        backgroundImageSrc="/tb1.webp" // Image de fond pour cette page
        title="ACTIVITÉS DE COHÉSION UNE ÉQUIPE PRÊTE À RELEVER DES DÉFIS"
        subtitle={
          <>
            Découvrez nos activités stimulantes et {" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">fédératrice</span>
          </>
        }
        description={
          <>
           À la recherche de solutions innovantes pour renforcer la cohésion, le partage et l'engagement tout en vivant des expériences inoubliables ? <br /><br />Transmettez des <strong>valeurs d'équipe</strong> en participant à des <strong>activités insolites</strong> qui favorise la <b>réflexion collective</b>. A chaque besoin, un format adapté pour une expérience inédite de <strong>team building</strong>.
          </>
        }
      />
    
      <main className="flex flex-col bg-gradient-to-b from-gray-200 to-gray-400">
        <section className='max-w-7xl mx-auto px-4 py-8 '>
          <CardTBComplete />
          <div className="flex justify-center w-full mt-8">
            <Link 
              href="/nos-concepts"
              className="inline-block px-6 py-3 bg-gradient-to-b from-gray-900 to-black text-white font-poppins shadow-lg hover:bg-red-950 hover:scale-105 hover:shadow-xl transition-all text-center"
            >
              Découvrez nos différents concepts
            </Link>
          </div>
          {/* A crrer un bouton avec un bg black ici plutot que de prendre */}
        </section>

        <section className="border-t-2 border-red-700 bg-gradient-to-b from-gray-200 to-gray-400 dark:text-gray-700">
          <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center lg:gap-12">
              {/* Partie Texte */}
              <div className="flex justify-center text-center">
                <div className="max-w-lg md:max-w-none">
                  <h2 className="font-poppins text-4xl font-semibold">
                    Réinventons votre{' '}
                    <span className="text-gray-100 bg-gradient-to-r from-red-600 to-red-900 p-2 inline-block">
                      équipe
                    </span>
                  </h2>

                  <p className="font-roboto mt-6 text-lg font-light">
                    Chez En Scènes Acting, nous sommes dévoués à{' '}
                    <strong >
                      transformer votre équipe
                    </strong>{' '}
                    en une force unifiée, prête à relever tous les{' '}
                    <strong >
                      défis
                    </strong>
                    .<br /><br />
                    
                    Nos concepts de team building innovants vous offrent des{' '}
                    <strong className="text-gray-100 bg-gradient-to-r from-red-700 to-red-900 p-1">
                      expériences uniques
                    </strong>{' '}
                    conçues pour stimuler la collaboration, renforcer les liens et favoriser la croissance collective.
                    <br /><br />
                    
                    Nos activités ludiques en Haute Savoie plongent votre équipe dans des{' '}
                    <strong >
                      scénarios interactifs
                    </strong>{' '}
                    où chaque membre joue un rôle crucial. Improvisations théâtrales, jeux de rôle stratégiques et défis 
                    de résolution de problèmes encouragent la{' '}
                    <strong >
                      communication
                    </strong>
                    , la{' '}
                    <strong>
                      créativité
                    </strong>{' '}
                    et le{' '}
                    <strong>
                      leadership
                    </strong>
                    .
                  </p>

                  <div className="mt-8">
                    <Link 
                      href="/contact"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-red-700 to-red-900 hover:bg-red-950 hover:scale-105 text-white font-poppins shadow-lg hover:shadow-xl transition-all text-center"
                    >
                      Créons ensemble votre team building
                    </Link>
                  </div>
                </div>
              </div>

              {/* Partie Image */}
              <div className="relative flex justify-center ">
                <Image
                  src="/cohesion.png"
                  alt="Content illustration"
                  width={600}
                  height={600}
                  className="border-2 border-red-700 rounded-xl shadow-2xl shadow-neutral-900 transition-transform duration-300 ease-in-out hover:scale-90 md:hover:scale-105 hover:rotate-3 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.4)]"
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