// pages/Gallery.jsx
"use client";

import Hero from "../components/Hero";
import PhotoGallery from "../components/PhotoGallery";
import StoryGameSection from "../components/StoryGame";
import ChateauVideoSection from "../components/ChateauVideoSection";

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
            <span className="text-red-700">Coopérez</span> | Analysez | Résolvez
          </>
        }
        description={
          <>
            Plongez avec nous dans ces moments partagés avec nos spect'acteurs!
            <br />
            <br />
            De nos aventures Story Game, jeu de rôle grandeur nature dans des lieux splendides, à nos
            aventures au château, nos scénarios vous embarquent au cœur de l'histoire. Préparez-vous,
            vos missions n'auront rien d'ordinaire.
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
    </>
  );
};

export default Gallery;