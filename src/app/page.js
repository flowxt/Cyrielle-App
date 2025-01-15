import CardList from "./components/CardList";

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

              {/* <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p> */}

              {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </a>

                <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
        </section>
        {/* <h1 className="text-5xl bg-black text-center text-white">
          Créateur d'Expérience Interactives et Immersives
        </h1>
        <img
          src="/reactbg.png"
          alt="fond"
          className="h-96 w-full object-cover object-center"
        /> */}
        <div className="bg-gradient-to-b from-gray-200 to-zinc-300">
          <h3 className="md:text-2xl  lg:text-3xl p-16 text-center max-w-3xl mx-auto">
            "Libérer le potentiel de vos équipes grâce à des{" "}
            <span className="text-red-600">expériences</span> sur mesure, où
            chaque participant est un acteur clé de la{" "}
            <span className="text-red-600">réussite collective</span>"
          </h3>
        </div>
      </header>
      <main className="bg-gradient-to-t from-gray-300 to-zinc-500 pt-8 border-t-2 border-gray-900">
        <h2 className="text-4xl text-center p-16">
          Vos <span className="text-red-600">défis </span>| Nos{" "}
          <span className="text-red-600">solutions</span>{" "}
        </h2>
        <p className="text-xl text-center p-4">
          "En Scènes Acting" vous apporte des solutions novatrices pour répondre
          à vos attentes.
        </p>
        <CardList />
      </main>
    </>
  );
}
