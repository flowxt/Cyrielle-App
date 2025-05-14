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
        backgroundImageSrc="/equipe-en-reflexion.webp" // Image de fond pour cette page
        title="TEAM BUILDING"
        subtitle={
          <>
            Découvrez nos activités stimulantes et {" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">fédératrices</span>
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
              className="group relative inline-flex items-center justify-center px-8 py-4 font-poppins text-lg font-semibold tracking-wider text-white bg-gradient-to-r from-red-700 to-red-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-red-500/25 hover:shadow-xl"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-0 bg-gradient-to-r from-black to-gray-900 group-hover:translate-x-full ease"></span>
              <span className="relative flex items-center">
                Découvrez nos différents concepts
                <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
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
                      className="group relative inline-flex items-center justify-center px-8 py-4 font-poppins text-lg font-semibold tracking-wider text-white bg-gradient-to-r from-red-700 to-red-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-red-500/25 hover:shadow-xl"
                    >
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-0 bg-gradient-to-r from-black to-gray-900 group-hover:translate-x-full ease"></span>
                      <span className="relative flex items-center">
                        Créons ensemble votre team building
                        <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
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

        {/* Section CTA finale */}
        <section className="py-16 bg-gradient-to-b from-gray-400 to-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Prêt à vivre une{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                expérience unique
              </span>
              ?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Transformez votre équipe en une force unie et créative. Contactez-nous pour organiser votre événement sur mesure en Haute-Savoie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-poppins text-lg font-semibold tracking-wider text-white bg-gradient-to-r from-red-700 to-red-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-red-500/25 hover:shadow-xl"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-0 bg-gradient-to-r from-black to-gray-900 group-hover:translate-x-full ease"></span>
                <span className="relative flex items-center">
                  Réserver maintenant
                  <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/nos-concepts"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-poppins text-lg font-semibold tracking-wider text-gray-900 bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-red-500/25 hover:shadow-xl border-2 border-red-700"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-full bg-gradient-to-r from-red-700 to-red-900 group-hover:translate-x-0 ease"></span>
                <span className="relative flex items-center group-hover:text-white">
                  En savoir plus
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 