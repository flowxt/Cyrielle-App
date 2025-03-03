"use client";
import GoogleReviews from '../components/GoogleReviews';
import Hero from '../components/Hero';
import TrustedPartners from '../components/TrustedPartners';
import Link from 'next/link';

export default function Agenda() {
  return (
    <>
      <Hero
        backgroundImageSrc="/images/test-cyrielle.png"
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
            
            <Link 
              href="/enigme"
              className="block mx-auto mb-8 mt-4 text-sm md:text-lg bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-poppins px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all w-fit "
            >
              Saurez-vous résoudre cette énigme ?
            </Link>
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