import Image from 'next/image';
import Image4 from '../../assets/images/image4.png';
import Image5 from '../../assets/images/image5.png';

export default function ContentHome() {
    return (
        <>
      <section>
                <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 border-t-2 border-gray-900 bg-gradient-to-b from-gray-200 to-gray-400">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl font-poppins pb-4">
                                    Prêts à embarquer dans un <strong className="text-red-600">team building</strong> unique.
                                </h2>

                                <p className="mt-4 text-gray-700 lg:text-2xl font-roboto font-light">
                                    Permettez à vos collaborateurs de créer du lien de manière durable, de reconnaître leurs compétences respectives pour une <b>meilleure efficacité</b> tout en passant un moment ludique.
                                    <br /><br />
                                    On revient à l’essentiel du team building en <b>remobilisant vos équipes</b> autour d’une <b>activité fédératrice</b> où chacun trouvera sa place au sein du groupe pour révéler son potentiel.
                                    <br /><br />
                                    Nous créons des <b>scénarios sur mesure</b>, pour embarquer les participants dans un autre univers leur permettant d’oser et de trouver leur mode de fonctionnement pour atteindre une <b>victoire collective</b>.
                                </p>
                                <button className="mt-6 bg-red-800 text-white px-4 py-2 block mx-auto rounded hover:bg-gray-200 hover:text-gray-800 font-poppins">Je veux en apprendre plus</button>
                            </div>
                        </div>

                        <div>
                            <Image
                                src={Image4}
                                alt="Content illustration"
                                className="rounded hidden md:block"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
      {/* --------------------------------------------------------------------------------------------------- */}
      {/* 2e section */}
      {/* --------------------------------------------------------------------------------------------------- */}
         <section>
            
         <div className="mx-auto  px-4 py-8 sm:px-6 lg:px-8 border-t-2 border-gray-900 bg-gradient-to-t from-gray-200 to-gray-400">
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 ">
           <div>
           <Image
                                src={Image5}
                                alt="Content illustration"
                                className="rounded hidden md:block max-h-96 object-cover"
                                priority
                            />
             </div>
             <div>
               <div className="max-w-lg md:max-w-none ">
                 <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl font-poppins">
                 Vivez une <strong className="text-red-600">conférence</strong> dont vous vous souviendrez.
                 </h2>
   
                 <p className="mt-4 text-gray-700 lg:text-2xl font-roboto font-light">
                 <b>Engagez</b> vos collaborateurs avec un <b>format novateur de conférence</b>, vous souhaitez transmettre un message lors d'un <b>moment intéractif</b> conçu autour de temps d'<b>échange et de partage</b>. 
                 </p>
                 <button className="mt-6 bg-red-800 text-white px-4 py-2 block mx-auto rounded hover:bg-gray-200 hover:text-gray-800 font-poppins">Je souhaite en savoir davantage</button>
               </div>
             </div>
           </div>
         </div>
       </section>

         {/* --------------------------------------------------------------------------------------------------- */}
        {/* 3e section */}
        {/* --------------------------------------------------------------------------------------------------- */}

       <section>
        <div className="mx-auto  px-4 py-8 sm:px-6 lg:px-8 border-t-2 border-gray-900 bg-gradient-to-b from-gray-200 to-gray-400">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 ">
            <div>
              <div className="max-w-lg md:max-w-none ">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl font-poppins">
                Captez de nouveaux visiteurs avec un <strong className="text-red-600">concept ludique</strong>.
                </h2>
  
                <p className="mt-4 text-gray-700 lg:text-2xl font-roboto font-light">
                Nous offrons à nos spect'acteurs, une <b>immersion</b> au coeur de votre lieu ou de votre activité, pour découvrir ou re-découvrir de manière <b>ludique</b> ce qui les entourent.
<br /><br />
Nos <b>concepts de jeux</b> s'adaptent à votre environnement et les scénarios qui les accompagnent sont créés pour le mettre en valeur.
<br /><br />
Que vous nous donniez carte blanche ou un cahier des charges, nous nous adaptons pour vous offrir un <b>événement sur mesure et clef en main</b>.
                </p>
                <button className="mt-6 bg-red-800 text-white px-4 py-2 block mx-auto rounded hover:bg-gray-200 hover:text-gray-800 font-poppins">Découvez nos concepts</button>
              </div>
            </div>
  
            <div>
            <Image
                                src={Image4}
                                alt="Content illustration"
                                className="rounded"
                                priority
                            />
            </div>
          </div>
        </div>
      </section>
       </>
      
    );
  }