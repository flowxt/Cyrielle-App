import CardList from "./components/CardList";
import ContentHome from "./components/ContentHome";

export default function Home() {
  return (
    <>
      <header>
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                Créateurs d'Expériences
                <strong className="block font-extrabold text-rose-500">
                  {" "}
                  Intéractives{" "}
                </strong>
                et Immersives
              </h1>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b from-gray-200 to-gray-300">
          <h3 className="md:text-2xl  lg:text-3xl p-16 text-center max-w-3xl mx-auto">
            "Libérer le potentiel de vos équipes grâce à des{" "}
            <span className="text-red-600">expériences</span> sur mesure, où
            chaque participant est un acteur clé de la{" "}
            <span className="text-red-600">réussite collective</span>"
          </h3>
        </div>
      </header>
      <main className="bg-gradient-to-t from-gray-300 to-gray-400 pt-8 border-t-2 border-gray-900">
        <h2 className="text-4xl text-center p-16">
          Vos <span className="text-red-700">défis </span>| Nos{" "}
          <span className="text-red-700">solutions</span>{" "}
        </h2>
        <p className="text-xl text-center p-4">
          "En Scènes Acting" vous apporte des solutions novatrices pour répondre
          à vos attentes.
        </p>
        <CardList />
        <div className="caroussel h-48 text-center ">
          <h2>ICI IL VA Y AVOIR LE CAROUSSEL</h2>
        </div>
      </main>
      <ContentHome />
      <div className="bg-gradient-to-b from-gray-500 to-gray-400 text-white border-t-2 border-gray-700 flex flex-col lg:flex-row ">
        <h3 className=" text-4xl  lg:text-6xl pt-16 text-center max-w-3xl mx-auto ">
          Créateur de souvenirs uniques
        </h3>
        <p className="text-xl md:text-xl  lg:text-2xl p-16 text-center max-w-3xl mx-auto font-thin">
          <span className="font-bold  md:text-2xl lg:text-4xl">
            "En scènes" nom féminin (latin scena, du grec skênê)
          </span>
          <br />
          Concepteurs et interprètes de scénarios de jeux théâtralisés grandeur
          nature, nous proposons des expériences divertissantes et interactives
          au travers d’une expérience émotionnelle.
        </p>
      </div>
    </>
  );
}
