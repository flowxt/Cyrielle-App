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

        <section className="border-t-2 border-red-700 bg-gradient-to-b from-white to-gray-100 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex justify-center items-center">
              <div className="flex justify-center text-center w-full">
                <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 transform hover:scale-[1.02] transition-transform duration-300">
                  <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                    <span className="whitespace-nowrap">
                      Envie de vivre une{' '}
                      <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                        expérience unique
                      </span>
                      &nbsp;?
                    </span>
                  </h2>

                  <div className="space-y-6">
                    <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
                      Rejoignez les entreprises qui nous font confiance et créez à votre tour des moments mémorables avec votre équipe.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                      <Link 
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-poppins px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                          />
                        </svg>
                        Commencez l'aventure
                        <svg 
                          className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>

                      <Link 
                        href="/galerie-scenarios"
                        className="group relative inline-flex items-center gap-2 text-gray-700 font-poppins px-6 py-4 rounded-xl text-lg hover:text-red-700 transition-all duration-300"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        Découvrir nos scénarios
                        <svg 
                          className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 