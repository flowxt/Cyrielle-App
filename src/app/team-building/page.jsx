'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CardTBComplete from '../components/CardTBComplete';
import CustomButton from '../components/CustomButton';
import Hero from '../components/Hero';



export default function TeamBuilding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const firstImageOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [1, 0.5, 0]
  );

  const secondImageOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 1],
    [0, 1, 1]
  );

  const firstImageY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0%", "-50%"]
  );
  
  const secondImageY = useTransform(
    scrollYProgress,
    [0.3, 1],
    ["50%", "0%"]
  );
  
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    },
  };


  return (
    <>
<Hero
        backgroundImageSrc="/tb1.png" // Image de fond pour cette page
        title="ACTIVITÉS DE COHÉSION UNE ÉQUIPE PRÊTE À RELEVER DES DÉFIS"
        subtitle={
          <>
            Découvrez nos activités stimulantes et{" "}
            <span className="text-red-700">fédératrice</span>
          </>
        }
        description={
          <>
           À la recherche de solutions innovantes pour renforcer la cohésion, le partage et l'engagement tout en vivant des expériences inoubliables ?
<br /><br />
Transmettez des <b>valeurs d'équipe</b> en participant à des <b>activités insolites</b> qui favorise la <b>réflexion collective</b>.

A chaque besoin, un format adapté pour une expérience inédite de <b>team building</b>.

          </>
        }
      />
    
      <main className="flex flex-col">
   <section className='max-w-7xl mx-auto px-4 py-8 '>
    <CardTBComplete />
    <CustomButton text="Découvrez nos différents concepts" additionalClasses="mx-auto mt-8 bg-black hover:bg-gray-900 text-xl " />
    {/* A crrer un bouton avec un bg black ici plutot que de prendre */}
    </section>

        <section ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 p-6 relative min-h-[200vh]">
          <div className="md:h-screen text-center py-6 sticky top-0 bg-gradient-to-t from-gray-200 to-gray-400 flex flex-col justify-center rounded-lg">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-semibold">
        Réinventons <span className="text-red-700">votre équipe</span>
      </h2>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto px-4">
            <p className="text-lg">
              Chez En Scènes Acting, nous sommes dévoués à <b>transformer votre équipe</b> en une force unifiée, prête à relever tous les <b>défis</b>.
              <br /><br />
              Nos concepts de team building innovants vous offrent des <b>expériences uniques</b> conçues pour <b>stimuler la collaboration</b>, <b>renforcer les liens</b> et favoriser la croissance collective.
              <br /><br />
              Nos <b>activités ludiques</b> sont conçues pour engager pleinement votre équipe, les plongeant dans des <b>scénarios interactifs</b> où chaque membre joue un rôle crucial.
              <br /><br />
              Improvisations théâtrales, jeux de rôle stratégiques et des défis de résolution de problèmes, nous encourageons la <b>communication</b>, la <b>créativité</b> et le <b>leadership</b>.
              <br /><br />
              Nous croyons fermement que le succès d'une équipe repose sur la force de ses <b>liens</b>, et nous sommes là pour vous aider à les renforcer.
              <br /><br />
              Nous pouvons transformer votre équipe en une <b>véritable force sur la scène professionnelle</b>.
            </p>
            </div>
            <button className="mt-6 px-6 py-3 text-white bg-red-800 hover:bg-red-700 mx-auto flex justify-center items-center font-poppins">
        Créons ensemble votre team building
      </button>
    </div>
    <div className="relative h-screen sticky top-0 overflow-hidden">
            <motion.div
              style={{ 
                opacity: firstImageOpacity,
                y: firstImageY
              }}
              className="absolute inset-0"
            >
              <Image
                src="/cohesion.png"
                alt="Team Building"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </motion.div>
            
            <motion.div
              style={{ 
                opacity: secondImageOpacity,
                y: secondImageY
              }}
              className="absolute inset-0"
            >
              <Image
                src="/carte2.png"
                alt="Team Building"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </motion.div>
            
          </div>
        </section>
      </main>
    </>
  );
}