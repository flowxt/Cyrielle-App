import CardList from "./components/CardList";
import ContentHome from "./components/ContentHome";
import Team from "./components/Team";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <header>
        <section className="relative">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/movie-home.webm"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l */}
          <div className="absolute inset-0 "></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:justify-end lg:px-8">
            <div className="absolute top-0 left-0 p-4">
              <img
                src="/logo-blanc.png"
                alt="Logo Blanc"
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right lg:ml-auto">
              <h1 className="text-3xl font-extrabold text-white lg:text-4xl bg-neutral-900/50 font-poppins uppercase">
                Créateurs
                <br /> d'Expériences <br />
                Intéractives et Immersives
              </h1>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-300">
          <h3 className="text-xl font-light md:text-2xl lg:text-3xl p-12 text-center max-w-3xl mx-auto font-roboto">
            "Libérer le potentiel de vos équipes grâce à des{" "}
            <span className="text-red-600 font-semibold transform hover:scale-105 transition duration-300">
              expériences
            </span>{" "}
            sur mesure, où chaque participant est un acteur clé de la{" "}
            <span className="text-red-600 font-semibold transform hover:scale-105 transition duration-300">
              réussite collective
            </span>
            "
          </h3>
        </div>
      </header>
      <main className="pt-6 border-t-2 border-gray-900 bg-gradient-to-b from-gray-300 to-gray-400">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center p-6 font-poppins font-semibold">
          Vos <span className="text-red-700">défis </span>| Nos{" "}
          <span className="text-red-700">solutions</span>{" "}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-center p-4 font-roboto font-roboto font-light ">
          "En Scènes Acting" vous apporte des solutions novatrices pour répondre
          à vos attentes.
        </p>
        <CardList />
        <div className="caroussel text-center flex items-center justify-center pb-12">
          <Carousel />
        </div>

        <ContentHome />
      </main>
      <Team />
    </>
  );
}
