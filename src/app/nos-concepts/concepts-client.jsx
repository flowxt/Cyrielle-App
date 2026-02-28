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
          <b>Plongez nos spect&apos;acteurs</b> au cœur d&apos;<strong>aventures immersives en Haute-Savoie</strong>.  
          <br /><br />
          Découvrez ou redécouvrez les dynamiques humaines qui vous relient grâce à des jeux adaptés à chaque environnement.  
          Une approche ludique et sur mesure pour une <strong>expérience authentique et enrichissante</strong>.<br /><br />
          <span className="italic text-red-800">Créez des liens uniques et des moments mémorables avec vos équipes.</span>
      </>
        }
      />
    <main className="bg-gradient-to-b from-gray-200 to-gray-400">
      <CardConceptFull />

      {/* Section Grand jeu collaboratif */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-300 to-gray-400">
        <div className="max-w-7xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">
              Grand jeu collaboratif{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                — Escape game
              </span>
            </h2>
            <div className="mx-auto mt-3 w-20 h-1 bg-red-600 rounded-full mb-6" />
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Des formats de jeux collaboratifs conçus pour des groupes de <strong>12 à 200 personnes</strong>. Sans scénario théâtral, ces challenges proposent des défis & énigmes par équipe, pensés selon vos objectifs pédagogiques, la taille du groupe et le contexte de votre événement.
            </p>
            {/* Points clés */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-700">
              <span>🧑‍🧑‍🧒‍🧒 12 à 200 participants</span>
              <span>⏱ 1h à 2h30</span>
              <span>🎯 Coopération, communication, stratégie, créativité</span>
              <span>📍 Intérieur / Extérieur</span>
            </div>
          </div>

          {/* 2 vignettes côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vignette 1 - Escape game scénarisé */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col border border-white/20">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/aventure/aventure2.jpeg"
                  alt="Escape game scénarisé - En Scènes Acting"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
                <div className="absolute top-4 right-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  Escape game
                </div>
              </div>

              <div className="p-6 space-y-5 flex-grow flex flex-col">
                <div className="relative pb-4">
                  <h3 className="text-2xl font-bold text-gray-800 tracking-wide transition-colors duration-200 group-hover:text-red-700">
                    Escape game scénarisé
                  </h3>
                  <div className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full group-hover:w-24 transition-all duration-300" />
                </div>

                <p className="text-gray-700">
                  En équipe, résolvez des énigmes pour atteindre votre mission en moins d'une heure. Le chrono tourne… serez-vous suffisamment perspicaces ?
                </p>

                <ul className="space-y-2 mt-auto pb-4">
                  <li className="flex items-start text-gray-600">
                    <span className="text-red-600 mr-3 mt-0.5 text-sm">&#9656;</span>
                    <span className="flex-1 text-sm">De 12 à 35 joueurs</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="text-red-600 mr-3 mt-0.5 text-sm">&#9656;</span>
                    <span className="flex-1 text-sm">Durée : environ 1h30</span>
                  </li>
                </ul>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 transition-all duration-300 rounded-2xl" />
            </div>

            {/* Vignette 2 - Challenge ton équipe */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col border border-white/20">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/aventure/aventure5.jpeg"
                  alt="Challenge ton équipe - En Scènes Acting"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
                <div className="absolute top-4 right-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  Challenge
                </div>
              </div>

              <div className="p-6 space-y-5 flex-grow flex flex-col">
                <div className="relative pb-4">
                  <h3 className="text-2xl font-bold text-gray-800 tracking-wide transition-colors duration-200 group-hover:text-red-700">
                    Challenge ton équipe
                  </h3>
                  <div className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full group-hover:w-24 transition-all duration-300" />
                </div>

                <p className="text-gray-700">
                  Défiez-vous autour de défis collectifs, parfois loufoques, parfois stratégiques, où il faudra bouger, réfléchir… et surtout coopérer pour faire gagner votre équipe !
                </p>

                <ul className="space-y-2 mt-auto pb-4">
                  <li className="flex items-start text-gray-600">
                    <span className="text-red-600 mr-3 mt-0.5 text-sm">&#9656;</span>
                    <span className="flex-1 text-sm">De 35 à 200 joueurs</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="text-red-600 mr-3 mt-0.5 text-sm">&#9656;</span>
                    <span className="flex-1 text-sm">Durée : environ 2h30</span>
                  </li>
                </ul>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 transition-all duration-300 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

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
                  </span>
                  &nbsp;?
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