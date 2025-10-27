'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardTBComplete from '../components/CardTBComplete';
import Hero from '../components/Hero';

export default function TeamBuildingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          
          {/* CTA pour ouvrir la modale des 3 formules */}
          <div className="mt-16 mb-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-red-700/20">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-gray-800">
                Découvrez nos{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                  3 formules
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-roboto">
                Évasion, Défi ou Sens : chaque formule est conçue pour répondre à vos objectifs spécifiques. Explorez nos offres complètes et trouvez celle qui correspond parfaitement à votre équipe.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-10 py-5 font-poppins text-lg font-semibold tracking-wider text-white bg-gradient-to-r from-red-700 to-red-900 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-red-500/50 hover:shadow-2xl transform hover:scale-105"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-500 transform translate-x-0 bg-gradient-to-r from-black to-gray-900 group-hover:translate-x-full ease"></span>
                <span className="relative flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Voir nos 3 formules
                  <svg className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

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
        </section>

        <section className="border-t-2 border-red-700 bg-gradient-to-b from-gray-200 to-gray-400">
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

      {/* Modale pour les 3 formules Calaméo */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête de la modale */}
            <div className="sticky top-0 bg-gradient-to-r from-red-700 to-red-900 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-poppins">Nos 3 Formules Team Building</h3>
                <p className="text-red-100 text-sm mt-1">Évasion • Défi • Sens</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300"
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenu Calaméo */}
            <div className="p-6 md:p-8">
              <div className="text-center mb-4">
                <a 
                  href="https://www.calameo.com/books/008072011687b36e803df" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-700 hover:text-red-900 font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>Team Évasion-Défi-Sens</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
                <iframe 
                  src="//v.calameo.com/?bkcode=008072011687b36e803df&mode=mini" 
                  width="100%" 
                  height="500" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency="true"
                  allowFullScreen={true}
                  className="mx-auto rounded-lg"
                  title="Team Évasion-Défi-Sens"
                />
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="http://www.calameo.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-300"
                >
                  Lire plus de publications sur Calaméo
                </a>
              </div>

              {/* Bouton d'action */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-poppins text-lg font-semibold tracking-wider text-white bg-gradient-to-r from-red-700 to-red-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-red-500/25 hover:shadow-xl"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-0 bg-gradient-to-r from-black to-gray-900 group-hover:translate-x-full ease"></span>
                  <span className="relative flex items-center">
                    Contactez-nous
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-4 font-poppins text-lg font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 