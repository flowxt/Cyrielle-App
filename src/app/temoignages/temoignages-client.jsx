"use client";
import GoogleReviews from '../components/GoogleReviews';
import Hero from '../components/Hero';
import TrustedPartners from '../components/TrustedPartners';
import Link from 'next/link';

export default function TemoignagesClient() {
  return (
    <>
      <Hero
        backgroundImageSrc="/temoignage.png"
        title="TÉMOIGNAGES"
        subtitle={
          <>
            Embarquez dans nos <strong className='text-red-800'>univers captivants</strong> et <strong className='text-red-800'>immersifs</strong>
          </>
        }
        description={
          <>
            En scènes acting® vous propose des <strong>expériences immersives</strong> en <strong>Haute-Savoie</strong>. 
            Plongez dans nos univers où <b>interactions</b>, <b>énigmes</b> et <b>aventures</b> se mêlent pour créer des 
            <strong> moments inoubliables</strong> !
            
            
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