import Image from 'next/image';

export default function Team() {
    return (
      <>
        <div className="container-team text-center py-6 flex flex-col items-center gap-8 border-t-2 border-b-2 border-red-700">
          <h2 className="text-4xl font-poppins font-semibold">Notre équipe</h2>
          <p className="font-roboto text-lg font-light px-4">
            Un duo complémentaire et passionné à l'écoute de vos besoins, garants d'une expérience unique et immersive.
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
                <h3 className="text-xl font-poppins font-semibold">
                  Cyrielle <span className="text-red-700">Schepens</span>
                </h3>
                <ul className="font-roboto text-lg font-light list-none">
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Scénariste
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Coordinatrice des équipes
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Metteuse en scène
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Créatrice de concepts originaux
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
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
              <div className="content-matthieu flex flex-col text-start text-center">
                <h3 className="text-xl font-poppins font-semibold">
                  Matthieu <span className="text-red-700">Vernisse</span>
                </h3>
                <ul className="font-roboto text-lg font-light list-none">
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Architecte scénographe
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Graphiste - Illustrateur
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Concepteur d'environnements immersifs
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Maître de l'esthétique et du storytelling
                  </li>
                  <li className="relative pl-8 before:content-['➤'] before:absolute before:left-0 before:text-red-200 before:animate-move-x">
                    Comédien
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }