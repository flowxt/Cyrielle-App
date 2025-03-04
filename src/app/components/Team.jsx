import Image from 'next/image';

export default function Team() {
    return (
      <>
        <section className="container-team text-center pt-6 flex flex-col items-center gap-8 border-t-2 border-red-800 bg-gradient-to-b from-gray-200 to-gray-400">
          <h2 className="text-4xl font-poppins font-semibold dark:text-gray-700">Notre <span className='text-gray-100 bg-gradient-to-r from-red-600 to-red-900 p-2 inline-block'>équipe</span></h2>
          <p className="font-roboto text-lg font-light px-4 dark:text-gray-700">
            Un duo complémentaire et passionné à l'écoute de vos besoins, garants d'une <strong className='text-gray-100 bg-gradient-to-r from-red-700 to-red-900 p-2'>expérience unique et immersive.</strong>
          </p>
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-8 py-4">
            <div className="container-Cyrielle flex flex-col lg:flex-row-reverse items-center gap-8">
            <Image
      src="/cyrielle.jpg"
      alt="Cyrielle"
      width={330} // Largeur réelle de l'image
      height={600} // Hauteur réelle de l'image
      className="border-2 border-red-700 rounded-xl shadow-2xl shadow-neutral-900 h-80 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.4)]"
    />
              <div className="content-cyrielle flex flex-col text-start">
                <h3 className="text-xl font-poppins font-semibold dark:text-gray-700">
                  Cyrielle <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Schepens</span>
                </h3>
                <ul className="font-roboto text-lg font-light list-none">
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700">
                    Scénariste
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700">
                    Coordinatrice des équipes
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700">
                    Metteuse en scène
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700">
                    Créatrice de concepts originaux
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700">
                    Comédienne
                  </li>
                </ul>
              </div>
            </div>
            <div className="container-Matthieu flex flex-col lg:flex-row items-center gap-8 py-4">
            <Image
    src="/matthieu.jpg"
    alt="Matthieu"
    width={330} // Largeur réelle de l'image
    height={600} // Hauteur réelle de l'image
    className="border-2 border-red-700 rounded-xl shadow-2xl shadow-neutral-900 h-80 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.4)]"
  />
              <div className="content-matthieu flex flex-col text-start ">
                <h3 className="text-xl font-poppins font-semibold dark:text-gray-700">
                  Matthieu <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Vernisse</span>
                </h3>
                <ul className="font-roboto text-lg font-light list-none">
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700 ">
                    Architecte scénographe
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700 ">
                    Graphiste - Illustrateur
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700 ">
                    Concepteur d'environnements immersifs
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700 ">
                    Maître de l'esthétique et du storytelling
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-400 before:animate-move-x dark:text-gray-700">
                    Comédien
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-gray-100 flex flex-col lg:flex-row items-center justify-center px-4">

</div>
        </section>
      </>
    );
  }