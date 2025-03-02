"use client";
import Image from "next/image";
import CardConceptFull from "../components/CardConceptFull";
import Hero from '../components/Hero';

import Link from 'next/link';

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
          <b>Plongez les spect’acteurs</b> au cœur d’<strong>aventures immersives en Haute-Savoie</strong>.  
          <br /><br />
          Découvrez ou redécouvrez votre entourage autrement grâce à des jeux adaptés à chaque environnement.  
          Une approche ludique et sur mesure pour une <strong>expérience authentique et enrichissante</strong>.
      </>
        }
      />
    <main className="bg-gradient-to-b from-gray-200 to-gray-400">
  <CardConceptFull />


  <section className="relative overflow-hidden dark:text-gray-800">
  <div className="mx-auto px-4 sm:py-11 md:py-16 sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold sm:text-4xl font-poppins">
          Fabriquons{' '}
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
            des souvenirs
          </span>
        </h2>

        <p className="text-lg leading-relaxed font-roboto font-light">
          En scènes acting® casse les codes pour vous faire vivre des expériences insolites et immersives. 
          Plongez dans nos univers vivants où les interactions sociales seront essentielles. 
          Le temps de quelques heures, vivez une aventure unique, où le passé et le présent se mêlent 
          pour une <strong>expérience insolite</strong>. Rejoignez nous pour vous créer 
          des <strong>souvenirs inoubliables</strong> !
        </p>

        <Link 
    href="/contact"
    className="inline-block px-6 py-3 bg-gradient-to-b from-red-700 to-red-900 hover:bg-red-950 hover:scale-105 text-white font-poppins rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
  >
    Créons ensemble ces moments
  </Link>
      </div>

      <div className="relative">
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
          <Image
            src="/images/fabriquons.webp"
            alt="Team Building"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5" />
        </div>
      </div>
    </div>
  </div>
</section>
          <section className="border-t-2 border-red-700 bg-gradient-to-b from-gray-200 to-gray-400 dark:text-gray-700">
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
  <Link 
    href="/contact"
    className="inline-block px-6 py-3 bg-gradient-to-b from-red-700 to-red-900 hover:bg-red-950 hover:scale-105 text-white font-poppins rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
  >
    Je vous explique ce que je veux
  </Link>
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