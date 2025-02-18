
"use client";
import CustomButton from '../components/CustomButton';
import GoogleReviews from '../components/GoogleReviews';
import Hero from '../components/Hero';


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
          En scènes acting® casse les codes pour vous faire vivre des <strong>expériences insolites</strong> et immersives en <strong>Haute-Savoie</strong>.Plongez dans nos univers vivants où les <b>interactions sociales</b> seront essentielles. Le temps de quelques heures, vivez une <b>aventure unique</b>, où le passé et le présent se mêlent pour une expérience hors du temps. Nos scénarios de jeu vous permette de suivre une histoire de l'intérieur en <b>fouillant, analysant</b> et <b>résolvant</b> des <b>énigmes</b> alors préparez vous à vous remuer les méninges ! Rejoignez nous vite pour vous créer des <b>souvenirs inoubliables</b> !
          <CustomButton text="Saurez-vous résoudre cette énigme ?" additionalClasses="mb-8 mt-4 text-lg" />
          </>
          
        }
        
      />
    <div>
      <GoogleReviews />
    </div>
    </>
  );
}