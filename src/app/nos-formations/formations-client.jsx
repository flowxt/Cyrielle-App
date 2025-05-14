"use client";
import Hero from '../components/Hero';
import Image from 'next/image';
import CardFormation from '../components/CardFormation';
import Link from 'next/link';

export default function FormationsClient() {
    return (
      <>
      <Hero
        backgroundImageSrc="/test.png" // Image de fond pour cette page
        title="FORMATIONS"
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
      
      
      <section className="border-t-2 border-red-700 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex justify-center items-center">
            <div className="flex justify-center text-center w-full">
              <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 transform hover:scale-[1.02] transition-transform duration-300">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800">
                  Vous souhaitez aborder une{' '}
                  <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                    thématique
                  </span>{' '}
                  précise ?
                </h2>

                <p className="font-roboto mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
                  Partagez votre{' '}
                  <span className="font-semibold text-gray-800">
                    cahier des charges
                  </span>{' '}
                  et nous élaborerons ensemble un{' '}
                  <span className="font-semibold text-gray-800">
                    programme sur mesure
                  </span>{' '}
                  adapté à vos objectifs.
                </p>

                <div className="mt-10 flex justify-center">
                  <Link 
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-poppins px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Détaillez-nous votre projet
                    <svg 
                      className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
                
                {/* Section certification avec design modernisé */}
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                    <div className="w-72 lg:w-96 h-32 relative transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/cce.png"
                        width={500}
                        height={300}
                        alt="CCE Logo"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <h3 className="font-poppins font-semibold text-xl text-gray-800">
                        Votre formatrice certifiée
                      </h3>
                      <ul className="font-roboto space-y-2">
                        <li className="text-lg font-medium text-gray-800">Cyrielle Schepens</li>
                        <li className="text-gray-600">Certification obtenue le 11/07/2024</li>
                        <li className="text-gray-600">Auprès de la CCI Annecy</li>
                        <li className="font-mono text-sm text-gray-500">N°2024-0021057-8</li>
                      </ul>
                    </div>
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