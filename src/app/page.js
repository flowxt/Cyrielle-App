import CardList from "./components/CardList";
import ContentHome from "./components/ContentHome";
import Team from "./components/Team";
import Carousel from "./components/Carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section modernisée */}
      <header className="relative">
        {/* Section d'image principale améliorée */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/recherche-en-groupe.png"
              alt="Equipe en train de résoudre une énigme"
              fill
              priority
              className="object-cover object-center brightness-[0.99]"
              sizes="100vw"
              quality={90}
            />
          </div>

          {/* Overlay amélioré pour meilleure lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Contenu héro amélioré avec animations subtiles */}
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-3 py-1 bg-red-700 text-white text-sm font-semibold uppercase tracking-wide rounded-md">
                Expériences immersives pour entreprises
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="block mb-2">Transformez votre équipe</span>
                <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
                  avec des expériences inoubliables
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
                En Scènes Acting propose des activités de team building
                immersives et originales qui renforcent la cohésion et révèlent
                le potentiel collectif de vos collaborateurs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/nos-concepts"
                  className="px-8 py-4 bg-black/70 border border-white hover:bg-black text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Découvrir nos activités
                </Link>
              </div>
            </div>
          </div>

          {/* Indicateur de défilement amélioré */}
          <div className="absolute bottom-8 w-full flex justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Bannière de partenaires simplifiée */}
        <section className="bg-white shadow-md py-10 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
              Des expériences pour tous types d'entreprises
            </h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center px-4">
                <h3 className="font-semibold text-red-700">PME</h3>
                <p className="text-gray-600">
                  Renforcez la cohésion de vos équipes
                </p>
              </div>
              <div className="text-center px-4">
                <h3 className="font-semibold text-red-700">Startups</h3>
                <p className="text-gray-600">Développez une culture forte</p>
              </div>
              <div className="text-center px-4">
                <h3 className="font-semibold text-red-700">Grands groupes</h3>
                <p className="text-gray-600">
                  Facilitez les connexions inter-services
                </p>
              </div>
              <div className="text-center px-4">
                <h3 className="font-semibold text-red-700">Associations</h3>
                <p className="text-gray-600">
                  Fédérez vos membres et bénévoles
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* Section "Notre approche" */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-700 text-white text-sm font-semibold rounded-md mb-4">
              Notre philosophie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              L&apos;art du team building{" "}
              <span className="text-red-700">redéfini</span>
            </h2>
            <p className="text-lg text-gray-600">
              Nous créons des expériences sur mesure qui combinent créativité,
              jeu et collaboration pour développer des compétences essentielles
              et renforcer la cohésion d&apos;équipe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-red-700"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-red-700/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cohésion d&apos;équipe
                </h3>
                <p className="text-gray-600">
                  Renforcez les liens entre collaborateurs à travers des défis
                  collectifs stimulants et engageants.
                </p>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-red-700"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-red-700/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Créativité et innovation
                </h3>
                <p className="text-gray-600">
                  Stimulez la pensée créative et développez la capacité
                  d&apos;innovation par des approches immersives originales.
                </p>
              </div>
            </div>

            {/* Carte 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-red-700"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-red-700/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sur mesure
                </h3>
                <p className="text-gray-600">
                  Des activités adaptées à vos objectifs, votre culture
                  d&apos;entreprise et les défis spécifiques de votre équipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section solutions améliorée (reprise de CardList) */}
      <main className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-700 text-white text-sm font-semibold rounded-md mb-4">
              Nos activités
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Des expériences immersives{" "}
              <span className="text-red-700">adaptées</span> à vos objectifs
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez notre gamme d&apos;activités de team building conçues
              pour répondre aux besoins spécifiques de votre entreprise.
            </p>
          </div>

          <CardList />

          <div className="text-center mt-12">
            <Link
              href="/nos-concepts"
              className="inline-flex items-center px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg transition duration-300"
            >
              Voir toutes nos activités
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Section témoignages améliorée */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-700 text-white text-sm font-semibold rounded-md mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ce que nos clients{" "}
              <span className="text-red-700">disent de nous</span>
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez l&apos;impact de nos expériences immersives sur les
              entreprises qui nous ont fait confiance.
            </p>
          </div>

          <div className="caroussel text-center flex items-center justify-center pb-8">
            <Carousel />
          </div>
        </div>
      </section> */}

      {/* Section "Pourquoi nous choisir" incorporant ContentHome */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-700 text-white text-sm font-semibold rounded-md mb-4">
              Notre différence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pourquoi choisir{" "}
              <span className="text-red-700">En Scènes Acting</span> ?
            </h2>
            <p className="text-lg text-gray-600">
              Notre approche unique combine l&apos;art de la mise en scène avec
              l&apos;expertise en développement d&apos;équipe pour offrir des
              expériences véritablement transformatives.
            </p>
          </div>

          <ContentHome />

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Discuter de votre projet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section équipe améliorée */}
      <Team />

      {/* Nouvelle section CTA finale */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre équipe ?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contactez-nous dès aujourd&apos;hui pour construire ensemble une
              expérience sur mesure qui révélera tout le potentiel de vos
              collaborateurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/temoignages"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Voir tous les témoignages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
