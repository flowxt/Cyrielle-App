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
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            src="/videos/bandeau.webm"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay dégradé pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Contenu centré et dynamique */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-white space-y-4 text-center">
              <div className="border-l-4 border-red-500 pl-4 bg-gray-900/20">
                En Scènes Acting
              </div>
              <div className="text-red-700 bg-black px-6 py-2 inline-block">
                TEAM BUILDING
              </div>
            </h1>

            <div className="max-w-2xl border-t-2 border-red-500 pt-4">
              <p className="text-lg sm:text-xl text-white font-light italic mb-4 bg-gray-900/10">
                "L'intelligence collective n'attend pas"
              </p>
              <p className="text-white uppercase font-semibold text-sm sm:text-base tracking-widest bg-gray-900/10">
                Escape Game • Jeu de rôle • Spectacle intéractif
              </p>
            </div>
          </div>

          {/* Élément graphique animé */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-14 border-4 border-red-500 rounded-full">
              <div className="w-2 h-4 bg-red-500 mx-auto mt-2 rounded-full" />
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
