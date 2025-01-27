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
        backgroundImageSrc="/carte2.png"
        title="SPECTACLE INTERACTIF & ESCAPE GAME ITINERANT"
        subtitle={
          <>
            <span className="text-red-700">Ressentir</span> | Partagez | <span className="text-red-700">Se souvenir</span>
          </>
        }
        description={
          <>
            <b>Plongez les spect'acteurs</b> au cœur d'<b>aventures ludiques et immersives</b>, c'est notre métier. Que ce soit pour <b>découvrir ou redécouvrir ce et/ou ceux qui nous entourent</b>, nos jeux s'adaptent à chaque environnement pour offrir une <b>expérience authentique et enrichissante</b>.
          </>
        }
      />
    <main>
  <CardConceptFull />
<Carousel />

   <section className="grid grid-cols-1 bg-gradient-to-t from-gray-200 to-gray-400  md:grid-cols-5 py-12">
            <div className="md:col-span-3 px-12 text-center py-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:pb-6 lg:pt-6 font-semibold">Fabriquons <span className="text-red-700">des souvenirs</span></h2>
              <p className="text-lg font-roboto font-thin">
              En scènes acting® casse les codes pour vous faire vivre des expériences insolites et immersives. Plongez dans nos univers vivants où les interactions sociales seront essentielles. Le temps de quelques heures, vivez une aventure unique, où le passé et le présent se mêlent pour une expérience insolite. Rejoignez nous pour vous créer des souvenirs inoubliables !
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
          <h3 className="text-2xl md:text-3xl  lg:text-4xl p-12 text-center max-w-3xl mx-auto font-roboto">
          Une idée précise de <span className="text-red-700">l'événement</span> que vous aimeriez créer ?
          </h3>
          <p className="text-lg lg:text-xl font-roboto text-center max-w-3xl mx-auto px-6 pb-6 font-roboto font-thin">Donnez nous carte blanche ou livrez nous un cahier des charges, nous mettrons tout en œuvre pour vous créer un événement sur mesure et clé en main.</p>
          <CustomButton text="Je vous explique ce que je veux" />
        </div>
      
    </main>
    </>
    );
  }