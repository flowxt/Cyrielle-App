export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-5xl bg-black text-center text-white">
          Créateur d'Expérience Interactives et Immersives
        </h1>
        <img
          src="/reactbg.png"
          alt="fond"
          className="h-96 w-full object-cover object-center"
        />
        <h3 className="text-3xl bg-gray-400 p-16 text-center ">
          "Libérer le potentiel de vos équipes grâce à des{" "}
          <span className="text-red-600">expériences</span> sur mesure,
          <br /> où chaque participant est un acteur clé de la{" "}
          <span className="text-red-600">réussite collective</span>"
        </h3>
      </header>
      <main>
        <h2 className="text-4xl bg-gray-200 text-center p-16">
          Vos <span className="text-red-600">défis </span>| Nos{" "}
          <span className="text-red-600">solutions</span>{" "}
        </h2>
        <p className="text-xl text-center p-4">
          En Scènes Acting vous apporte des solutions novatrices pour répondre à
          vos attentes.
        </p>
      </main>
    </>
  );
}
