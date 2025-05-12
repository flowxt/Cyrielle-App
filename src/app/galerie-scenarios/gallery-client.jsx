"use client";

import Hero from "../components/Hero";
import PhotoGallery from "../components/PhotoGallery";
import RetrospectivesSection from "../components/RetrospectivesSection";
import Link from "next/link";

// Composant client (avec les animations côté client)
export default function GalleryClient() {
  // Données pour les rétrospectives
  const retrospectives = [
    {
      imageSrc: "/teaser/toxique.jpg",
      title: "Toxique",
      link: "/toxique"
    },
    {
      imageSrc: "/teaser/nuptial.jpg",
      title: "Nuptial",
      link: "/nuptial"
    },
    {
      imageSrc: "/teaser/dragon.jpg",
      title: "Le dragon d'Elbevor et la princesse De Benevix",
      link: "/dragon"
    },
    {
      imageSrc: "/teaser/polyxene.jpg",
      title: "Polyxène et le mystérieux message",
      link: "/decryptage"
    },
    {
      imageSrc: "/teaser/jugement.jpg",
      title: "Le jugement de la comtesse",
      link: "/jeu-argumentation"
    },
    {
      imageSrc: "/teaser/disparition.jpg",
      title: "Disparition inquiétante",
      link: "/enquete"
    }
  ];

  return (
    <>
      <Hero
        backgroundImageSrc="/telescope.png"
        title="GALERIE"
        subtitle={
          <>
            <strong className="text-red-700">Coopérez</strong> | Analysez | <strong className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Résolvez</strong>
          </>
        }
        description={
          <>
            Plongez avec nous dans ces moments partagés avec nos spect'acteurs!
            <br />
            <br />
            De nos <strong>aventures immersives</strong> grandeur nature dans des lieux splendides en <strong>Haute-Savoie</strong>, à nos expériences au château, nos scénarios vous embarquent au cœur de l'histoire. Préparez-vous, vos missions n'auront rien d'ordinaire.
            <br />
            <br />
            Vous êtes prêts ?
          </>
        }
      />

      {/* Section "Un team building réussi" */}
      <section className="pt-8 pb-4 bg-gradient-to-b from-gray-200 to-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Un <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">team building</span> réussi
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Découvrez comment nos expériences immersives transforment vos équipes
            </p>
          </div>
          
       
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-300 to-gray-400">
        {/* Galerie de photos */}
        <PhotoGallery />

        {/* Section Rétrospectives */}
        <div id="retrospectives">
          <RetrospectivesSection retrospectives={retrospectives} />
        </div>
      </div>

      <section className="border-t-2 border-red-700 bg-gradient-to-b from-gray-200 to-gray-400 dark:text-gray-700">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex justify-center items-center">
            <div className="flex justify-center text-center w-full">
              <div className="max-w-2xl w-full">
                <h2 className="font-poppins text-xl md:text-2xl lg:text-4xl font-semibold mb-12">
                  Prêt pour une{' '}
                  <span className="text-gray-100 bg-gradient-to-r from-red-600 to-red-900 p-1 inline-block">
                    expérience
                  </span>{' '}
                  inoubliable <br />en{' '}
                  <span className="text-gray-100 bg-gradient-to-r from-red-600 to-red-900 p-1 inline-block">
                    Haute-Savoie
                  </span>{' '}
                  ?
                </h2>

                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-poppins px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Contactez-nous dès maintenant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 