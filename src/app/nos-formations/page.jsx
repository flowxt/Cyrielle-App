"use client";
import Hero from '../components/Hero';
import Section from '../components/Section';
import Image4 from '/public/test.png';
import CustomButton from '../components/CustomButton';


export default function Formation() {
    return (
      <>
      <Hero
        backgroundImageSrc="/test.png" // Image de fond pour cette page
        title="DEVELOPPER LA COHESION ET VOUS DONNER LES CLEFS POUR L'ENTRETENIR"
        subtitle={
          <>
            Et si nous tirions avantage de <span className='text-red-700'>l'art de créer et jouer ensemble</span>
          </>
        }
        description={
          <>
           Découvrir l'autre sous un autre angle, <b>se découvrir</b> de nouveaux talents, <b>prendre confiance</b> en soi, trouver sa place au sein d'un groupe, comprendre la <b>complémentarité</b> des personnalités. 
           <br /><br />
           Nos formations son conçues pour prendre le temps de découvrir ou redécouvrir ce et/ou ceux qui nous entourent <b>autrement</b>.
          </>
        }
      />
      <Section 
  title="Fabriquons "
  textHighlight="des souvenirs."
  paragraphs={[
    <>
      En scènes acting® casse les codes pour vous faire vivre des expériences <b>insolites et immersives</b>. Plongez dans nos <b>univers vivants</b> où les interactions sociales seront essentielles. 
      <br /><br />
      Le temps de quelques heures, vivez une <b>aventure unique</b>, où le passé et le présent se mêlent pour une expérience <b>insolite</b>. 
      <br /><br />
      Rejoignez-nous pour vous créer des <b>souvenirs inoubliables</b> !
    </>
  ]}
  buttonText="Créons ensemble ces moments"
  imageSrc={Image4}
  imageAlt="Cohésion de groupe"
/>
<div className="bg-gradient-to-b from-gray-200 to-gray-300 border-t-2 border-gray-900 pb-6">
          <h3 className="md:text-2xl  lg:text-4xl p-12 text-center max-w-3xl mx-auto font-roboto">
          Vous souhaitez aborder une <span className='text-red-700'>thématique</span> précise qui n'apparaît pas dans nos formations ?
          </h3>
          <p className="md:text-lg lg:text-xl font-roboto text-center max-w-3xl mx-auto px-6 pb-6">Dites nous en plus, donnez nous votre cahier des charges et nous vous proposerons un programme sur mesure.</p>
          <CustomButton text="Je vous explique ce que je veux" />
        </div>
      </>
    );
  }