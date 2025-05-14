"use client";
import Image from "next/image";
import CardConceptFull from "../components/CardConceptFull";
import Hero from '../components/Hero';
import Link from 'next/link';

export default function ConceptsClient() {
    return (
      <>
     <Hero
        backgroundImageSrc="/carte2.webp"
        title="CONCEPTS"
        subtitle={
          <>
            <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Ressentir</span> | Partagez | <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Se souvenir</span>
          </>
        }
        description={
          <>
          <b>Plongez les spect'acteurs</b> au cœur d'<strong>aventures immersives en Haute-Savoie</strong>.  
          <br /><br />
          Découvrez ou redécouvrez votre entourage autrement grâce à des jeux adaptés à chaque environnement.  
          Une approche ludique et sur mesure pour une <strong>expérience authentique et enrichissante</strong>.<br /><br />
          <span className="italic text-red-800">Créez des liens uniques et des moments mémorables avec vos équipes.</span>
      </>
        }
      />
    <main className="bg-gradient-to-b from-gray-200 to-gray-400">
      <CardConceptFull />

      <section className="relative overflow-hidden dark:text-gray-800 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold sm:text-4xl font-poppins">
                Fabriquons{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                  des souvenirs
                </span>
              </h2>

              <p className="text-lg leading-relaxed font-roboto font-light">
                En scènes acting® casse les codes pour vous faire vivre des expériences insolites et immersives. 
                Plongez dans nos univers vivants où les interactions sociales seront essentielles. 
                Le temps de quelques heures, vivez une aventure unique, où le passé et le présent se mêlent 
                pour une <strong>expérience insolite</strong>. Rejoignez nous pour vous créer 
                des <strong>souvenirs inoubliables</strong> !
              </p>

              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-b from-red-700 to-red-900 text-white font-medium rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all text-center"
              >
                Demander une expérience sur mesure
              </Link>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/fabriquons.webp"
                  alt="Expérience immersive"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-red-700 bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex justify-center items-center">
            <div className="flex justify-center text-center w-full">
              <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 transform hover:scale-[1.02] transition-transform duration-300">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                  Une idée précise de votre{' '}
                  <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                    événement
                  </span>{' '}
                  ?
                </h2>

                <div className="space-y-6">
                  <p className="font-roboto text-lg text-gray-600">
                    Choisissez votre approche :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-800">Carte blanche</h3>
                      <p className="text-gray-600">Laissez-nous imaginer une expérience unique basée sur vos objectifs</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-800">Sur mesure</h3>
                      <p className="text-gray-600">Partagez votre vision détaillée, nous la concrétiserons</p>
                    </div>
                  </div>

                  <p className="font-roboto text-lg text-gray-700 mt-8">
                    Dans les deux cas, nous vous garantissons un événement{' '}
                    <span className="font-semibold">clé en main</span> qui dépassera vos attentes.
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
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Lançons votre projet ensemble
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
    );
  } 