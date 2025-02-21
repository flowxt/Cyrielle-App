"use client";
import Image from "next/image";
import Carousel from "../components/Carousel";
import CardConceptFull from "../components/CardConceptFull";
import Hero from '../components/Hero';
import CustomButton from "../components/CustomButton";


export default function Concepts() {
    return (
      <>
     <Hero
        backgroundImageSrc="/carte2.webp"
        title="SPECTACLE INTERACTIF & ESCAPE GAME ITINERANT"
        subtitle={
          <>
            <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Ressentir</span> | Partagez | <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Se souvenir</span>
          </>
        }
        description={
          <>
            <b>Plongez les spect'acteurs</b> au cœur d'<strong>aventures ludiques et immersives en Haute-Savoie</strong>, c'est notre métier. Que ce soit pour <b>découvrir ou redécouvrir ce et/ou ceux qui nous entourent</b>, nos jeux s'adaptent à chaque environnement pour offrir une <strong>expérience authentique et enrichissante</strong>.
          </>
        }
      />
    <main>
  <CardConceptFull />


   <section className="grid grid-cols-1 bg-gradient-to-t from-gray-200 to-gray-400  md:grid-cols-5 py-12">
            <div className="md:col-span-3 px-12 text-center py-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:pb-6 lg:pt-6 font-semibold">Fabriquons <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">des souvenirs</span></h2>
              <p className="text-lg font-roboto font-thin">
              En scènes acting® casse les codes pour vous faire vivre des expériences insolites et immersives. Plongez dans nos univers vivants où les interactions sociales seront essentielles. Le temps de quelques heures, vivez une aventure unique, où le passé et le présent se mêlent pour une <strong>expérience insolite</strong>. Rejoignez nous pour vous créer des <strong>souvenirs inoubliables</strong> !
              </p>
              <button className="mt-12 px-6 py-3 text-white bg-red-800  hover:bg-red-700 mx-auto flex justify-center items-center font-poppins">Créons ensemble ces moments</button>
            </div>
            <div className="md:col-span-2 grid grid-rows-2 md:gap-4 lg:pt-6 mr-6">
              <div className="relative w-full h-full hidden md:block">
                <Image
                  src="/tb1.webp"
                  alt="Team Building"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative w-full h-full ">
                <Image
                  src="/tb1.webp"
                  alt="Team Building"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>
          <section className="border-t-2 border-red-700 bg-gradient-to-b from-gray-200 to-gray-400">
  <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
    <div className="flex justify-center items-center">
      {/* Partie Texte */}
      <div className="flex justify-center text-center w-full">
        <div className="max-w-2xl w-full">
          <h2 className="font-poppins text-4xl font-semibold mb-12">
            Une idée précise de votre{' '}
            <span className="text-gray-100 bg-gradient-to-r from-red-600 to-red-900 p-2 inline-block -rotate-3">
              événement
            </span>{' '}
            ?
          </h2>

          <p className="font-roboto mt-6 text-lg font-light mb-12">
            Donnez nous{' '}
            <strong>
              carte blanche
            </strong>{' '}
            ou livrez nous un{' '}
            <strong>
              cahier des charges
            </strong>
            , nous mettrons tout en œuvre pour vous créer un événement{' '}
            <strong className="text-gray-100 bg-gradient-to-r from-red-700 to-red-900 p-1">
              sur mesure
            </strong>{' '}
            et clé en main.
          </p>

          <div className="mt-8">
            <CustomButton 
              text="Je vous explique ce que je veux"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-poppins px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
      
    </main>
    </>
    );
  }