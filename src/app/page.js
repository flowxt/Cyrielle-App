import CardList from "./components/CardList";
import ContentHome from "./components/ContentHome";
import Team from "./components/Team";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <header>
        <section className="relative h-screen">
          <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/videos/bandeau.webm"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0"></div>

          {/* Conteneur principal modifié pour aligner en bas */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {/* Logo en haut à gauche */}
            <div className="p-4 mt-20 sm:mt-24">
              <img
                src="/logo-blanc.png"
                alt="Logo Blanc"
                className="h-12 sm:h-16 w-auto"
              />
            </div>

            {/* Texte en bas à droite */}
            <div className="w-full flex justify-end p-8 mb-8">
              <div className="max-w-xl">
                <h1 className="text-3xl font-extrabold text-white lg:text-4xl bg-neutral-900/50 font-poppins uppercase text-right">
                  Créateurs
                  <br /> d'Expériences <br />
                  Intéractives et Immersives
                </h1>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-200 backdrop-blur-sm py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-red-600 rounded-lg p-8 shadow-xl bg-white/80 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:translate-y-2">
              <h3 className="text-xl font-light md:text-2xl lg:text-3xl text-center mx-auto font-roboto leading-relaxed">
                "Libérer le potentiel de vos équipes grâce à des{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text font-semibold transform hover:scale-105 transition duration-300">
                  expériences
                </span>{" "}
                sur mesure, où chaque participant est un acteur clé de la{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text font-semibold transform hover:scale-105 transition duration-300">
                  réussite collective
                </span>
                "
              </h3>
            </div>
          </div>
        </div>
      </header>
      <main className="pt-2  bg-gradient-to-b from-gray-200 to-gray-400">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center p-6 font-poppins font-semibold">
          Vos <span className="text-red-700">défis </span>| Nos{" "}
          <span className="text-red-700">solutions</span>{" "}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-center p-4 font-roboto font-light ">
          "En Scènes Acting" vous apporte des solutions novatrices pour répondre
          à vos attentes.
        </p>
        <CardList />
        <div className="caroussel text-center flex items-center justify-center pb-8">
          <Carousel />
        </div>

        <ContentHome />
      </main>
      <Team />
    </>
  );
}
