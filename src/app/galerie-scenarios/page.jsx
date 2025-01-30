"use client";

import Hero from '../components/Hero';
import PhotoGallery from '../components/PhotoGallery';

export default function Galerie() {
  return (
    <>
    <Hero
    backgroundImageSrc="/images/caroussel/img2.webp" // Image de fond pour cette page
    title="VIVEZ L'AVENTURE DE L'INTERIEUR"
    subtitle={
      <>
       <span className='text-red-700'>Coopérez</span>| Analyser | Résoudre
      </>
    }
    description={
      <>
       Plongez avec nous dans ces moments partagés avec nos spect'acteurs!<br /><br /> De nos aventures Story Game, jeu de rôle grandeur nature dans des lieux splendides à nos aventures au château;  nos scénarios vous embarquent au cœur de l'histoire, préparez vous vos missions n'auront rien d'ordinaire.<br /><br />Vous êtes prêts ?
      </>
    }
  />
  <PhotoGallery />
  
  </>
  );
}