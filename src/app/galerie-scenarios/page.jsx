// pages/Gallery.jsx
"use client";

import Hero from "../components/Hero";
import PhotoGallery from "../components/PhotoGallery";
import StoryGameSection from "../components/StoryGame";
import ChateauVideoSection from "../components/ChateauVideoSection";
import Link from "next/link";

const Gallery = () => {
  // Données pour les vidéos
  const storyGameVideos = [
    {
      src: "/videos/aventure2.mp4",
      title: "Toxique",
      buttonText: "Que se passe-t-il ?",
    },
    {
      src: "/videos/aventure1.mp4",
      title: "Nuptial",
      buttonText: "Découvrir l'histoire",
    },
  ];

  const chateauVideos = [
    {
      src: "/videos/aventure4.mp4",
      title: "Le dragon d'Elbevor et la princesse De Benevix",
      buttonText: "Que va t il se passer ?",
    },
    {
      src: "/videos/aventure1.mp4",
      title: "Polyxène et le mystérieux message",
      buttonText: "Que cache ce message ?",
    },
    {
      src: "/videos/aventure5.mp4",
      title: "Le jugement de la comtesse",
      buttonText: "De quoi est-elle accusée ?",
    },
    {
      src: "/videos/aventure4.mp4",
      title: "Disparition inquiétante",
      buttonText: "Qui a bien pu disparaître ?",
    },
  ];

  return (
    <>
      <Hero
        backgroundImageSrc="/images/caroussel/img2.webp"
        title="VIVEZ L'AVENTURE DE L'INTÉRIEUR"
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
            De nos <strong>aventures Story Game, jeu de rôle</strong> grandeur nature dans des lieux splendides en <strong>Haute-Savoie</strong>, à nos aventures au château, nos scénarios vous embarquent au cœur de l'histoire. Préparez-vous, vos missions n'auront rien d'ordinaire.
            <br />
            <br />
            Vous êtes prêts ?
          </>
        }
      />
      {/* Galerie de photos */}
      <PhotoGallery />


       {/* Section STORY GAME */}
       <StoryGameSection videos={storyGameVideos} />
       <ChateauVideoSection videos={chateauVideos} />
       <section className="border-t-2 border-red-700 bg-gradient-to-b from-gray-100 to-gray-300">
  <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
    <div className="flex justify-center items-center">
      <div className="flex justify-center text-center w-full">
        <div className="max-w-2xl w-full">
          <h2 className="font-poppins text-4xl font-semibold mb-12">
            Prêt pour une{' '}
            <span className="text-gray-100 bg-gradient-to-r from-red-600 to-red-900 p-2 inline-block -rotate-3">
              expérience
            </span>{' '}
            inoubliable <br />en{' '}
            <span className="text-gray-100 bg-gradient-to-r from-red-600 to-red-900 p-2 inline-block">
              Haute-Savoie
            </span>{' '}
            ?
          </h2>

          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-poppins px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contactez-nous dès maintenant !
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Gallery;