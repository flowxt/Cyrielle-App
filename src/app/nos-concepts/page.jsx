import Image from "next/image";
import Carousel from "../components/Carousel";

export default function Concepts() {
    return (
      <>
      <header>
      <section className="relative">
        <img src="/carte2.png" alt="Team Building" className="absolute inset-0 w-full h-full object-cover"
        />
        {/* bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l */}
        <div className="absolute inset-0 "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:justify-end lg:px-8">
          <div className="absolute top-10 left-0 p-4">
            <img
              src="/logo-blanc.png"
              alt="Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right lg:ml-auto">
            <h1 className="text-3xl font-extrabold text-white lg:text-4xl bg-neutral-900/50 font-poppins uppercase font-semibold">
          
            SPECTACLES INTERACTIFS<br />
ESCAPE GAME ITINÉRANTS
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-200 to-gray-300">
        <h3 className="text-2xl md:text-3xl  lg:text-4xl p-6 text-center max-w-3xl mx-auto font-roboto font-semibold">
        <span className="text-red-700">Ressentir</span> | Partagez | <span className="text-red-700">Se souvenir</span>
        </h3>
        <p className="md:text-lg lg:text-xl font-roboto text-center max-w-3xl mx-auto px-6">Plongez les spect'acteurs au cœur d'aventures ludiques et immersives, c'est notre métier.

Que ce soit pour découvrir ou redécouvrir ce et/ou ceux qui nous entourent, nos jeux s'adaptent à chaque environnement pour offrir une expérience authentique et enrichissante.</p>
      </div>
    </header>
    <main>
<section>
  <h2>Nos concepts</h2>
  <p>Ici y aura 5 cartes</p>
</section>
<Carousel />

   <section className="grid grid-cols-1 bg-gradient-to-t from-gray-200 to-gray-400  md:grid-cols-5 pb-12">
            <div className="md:col-span-3 px-12 text-center py-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:pb-12 font-semibold">Fabriquons <span className="text-red-700">des souvenirs</span></h2>
              <p className="text-lg">
              En scènes acting® casse les codes pour vous faire vivre des expériences insolites et immersives.


Plongez dans nos univers vivants où les interactions sociales seront essentielles.

​

Le temps de quelques heures, vivez une aventure unique, où le passé et le présent se mêlent pour une expérience insolite.

​

Rejoignez nous pour vous créer des souvenirs inoubliables !
              </p>
              <button className="mt-12 px-6 py-3 text-white bg-red-800  hover:bg-red-700 mx-auto flex justify-center items-center font-poppins">Créons ensemble ces moments</button>
            </div>
            <div className="md:col-span-2 grid grid-rows-2 md:gap-4 lg:pt-6 mr-6">
              <div className="relative w-full h-full hidden md:block">
                <Image
                  src="/tb-img.png"
                  alt="Team Building"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative w-full h-full ">
                <Image
                  src="/tb-img.png"
                  alt="Team Building"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>
          <div className="bg-gradient-to-b from-gray-200 to-gray-300 border-t-2 border-gray-900 pb-6">
          <h3 className="md:text-2xl  lg:text-4xl p-12 text-center max-w-3xl mx-auto font-roboto">
          Une idée précise de <span className="text-red-700">l'événement</span> que vous aimeriez créer ?
          </h3>
          <p className="md:text-lg lg:text-xl font-roboto text-center max-w-3xl mx-auto px-6 pb-6">Donnez nous carte blanche ou livrez nous un cahier des charges, nous mettrons tout en œuvre pour vous créer un événement sur mesure et clé en main.</p>
          <button className="px-6 py-3 text-white bg-red-800  hover:bg-red-700 mx-auto flex justify-center items-center font-poppins">Créons ensemble ces moments</button>
        </div>
    </main>
    </>
    );
  }