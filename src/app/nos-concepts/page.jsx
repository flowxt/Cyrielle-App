"use client";
import Image from "next/image";
import Carousel from "../components/Carousel";

import Hero from '../components/Hero';
import CustomButton from "../components/CustomButton";
import CardConcept from "../components/CardConcept";


export default function Concepts() {
  const cardsData = [
    {
      imageSrc: '/carte2.png',
      title: 'Story Game',
      content: 'Préparez vous à devenir acteurs de l’histoire qui se déroulent sous vos yeux. <br /><br />Observer, fouillez et tentez de résoudre des énigmes qui vous mèneront à découvrir de mystérieux secrets.<br /><br />',
      tags: ['Fashion', 'Products'],
      listItems: ['Par équipe de 4 à 6 personnes', 'Jusqu\'à 60 personnes ', 'Durée: 1h30']
    },
    {
      imageSrc: '/carte2.png',
      title: 'Story Game',
      content: 'Préparez vous à devenir acteurs de l’histoire qui se déroulent sous vos yeux. <br /><br />Observer, fouillez et tentez de résoudre des énigmes qui vous mèneront à découvrir de mystérieux secrets.<br /><br />',
      tags: ['Fashion', 'Products'],
      listItems: ['Par équipe de 4 à 6 personnes', 'Jusqu\'à 60 personnes ', 'Durée: 1h30']
    },
    {
      imageSrc: '/carte2.png',
      title: 'Story Game',
      content: 'Préparez vous à devenir acteurs de l’histoire qui se déroulent sous vos yeux. <br /><br />Observer, fouillez et tentez de résoudre des énigmes qui vous mèneront à découvrir de mystérieux secrets.<br /><br />',
      tags: ['Fashion', 'Products'],
      listItems: ['Par équipe de 4 à 6 personnes', 'Jusqu\'à 60 personnes ', 'Durée: 1h30']
    },
    {
      imageSrc: '/carte2.png',
      title: 'Story Game',
      content: 'Préparez vous à devenir acteurs de l’histoire qui se déroulent sous vos yeux. <br /><br />Observer, fouillez et tentez de résoudre des énigmes qui vous mèneront à découvrir de mystérieux secrets.<br /><br />',
      tags: ['Fashion', 'Products'],
      listItems: ['Par équipe de 4 à 6 personnes', 'Jusqu\'à 60 personnes ', 'Durée: 1h30']
    },
    {
      imageSrc: '/carte2.png',
      title: 'Story Game',
      content: 'Préparez vous à devenir acteurs de l’histoire qui se déroulent sous vos yeux. <br /><br />Observer, fouillez et tentez de résoudre des énigmes qui vous mèneront à découvrir de mystérieux secrets.<br /><br />',
      tags: ['Fashion', 'Products'],
      listItems: ['Par équipe de 4 à 6 personnes', 'Jusqu\'à 60 personnes ', 'Durée: 1h30']
    }
    // Ajoutez plus de cartes ici
  ];
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
            <b>Plongez les spect'acteurs</b> au cœur d'<b>aventures ludiques et immersives</b>, c'est notre métier.

Que ce soit pour <b>découvrir ou redécouvrir ce et/ou ceux qui nous entourent</b>, nos jeux s'adaptent à chaque environnement pour offrir une <b>expérience authentique et enrichissante</b>.
          </>
        }
      />
    <main>
<section>
  <h2>Nos concepts</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-auto">
      {cardsData.map((card, index) => (
        <CardConcept
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          content={card.content}
          tags={card.tags}
          listItems={card.listItems}
        />
      ))}
    </div>
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
          <CustomButton text="Je vous explique ce que je veux" />
        </div>
      
    </main>
    </>
    );
  }