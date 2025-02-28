
"use client";

import GoogleReviews from '../components/GoogleReviews';
import Hero from '../components/Hero';
import TrustedPartners from '../components/TrustedPartners';
import Link from 'next/link';


export default function Agenda() {
  return (
    <>
    <Hero
        backgroundImageSrc="/images/test-cyrielle.png" // Image de fond pour cette page
        title="PARTAGEZ DES MOMENTS UNIQUES ET HORS DU TEMPS"
        subtitle={
          <>
            Embarquez dans nos <strong className='text-red-800'>univers captivants</strong> et <strong className='text-red-800'>immersif</strong>
          </>
        }
        description={
          <>
          En scènes acting® vous propose des <strong>expériences immersives</strong> en <strong>Haute-Savoie</strong>. 
          Plongez dans nos univers où <b>interactions</b>, <b>énigmes</b> et <b>aventures</b> se mêlent pour créer des 
          <strong> moments inoubliables</strong> !
          <div className="flex justify-center w-full">
      <Link 
        href="/enigme"
        className="inline-block mb-8 mt-4 text-lg bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-poppins px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        Saurez-vous résoudre cette énigme ?
      </Link>
    </div>
          </>
          
        }
        
      />
    <div className='bg-gradient-to-b from-gray-200 to-gray-400'>
      <GoogleReviews />
      <TrustedPartners />
    </div>
    </>
  );
}