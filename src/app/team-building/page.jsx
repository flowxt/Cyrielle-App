import Image from 'next/image';

export default function TeamBuilding() {
    return (
      <>
      <header>
      <section className="relative">
        <img src="/tb-img.png" alt="Team Building" className="absolute inset-0 w-full h-full object-cover"
        />
        {/* bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l */}
        <div className="absolute inset-0 "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:justify-end lg:px-8">
          <div className="absolute top-10 left-0 p-4">
            <img
              src="/logo-blanc.png"
              alt="Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right lg:ml-auto">
            <h1 className="text-3xl font-extrabold text-white lg:text-4xl bg-neutral-900/50 font-poppins uppercase font-semibold">
            ACTIVITÉS DE COHÉSION<br />
            UNE ÉQUIPE PRÊTE À RELEVER DES DÉFIS
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-200 to-gray-300">
        <h3 className="text-2xl md:text-3xl  lg:text-4xl p-6 text-center max-w-3xl mx-auto font-roboto font-semibold">
        Découvrez nos activités stimulantes et <span className="text-red-700">fédératrice</span>.
        </h3>
        <p className="md:text-lg lg:text-xl font-roboto text-center max-w-3xl mx-auto px-6">À la recherche de solutions innovantes pour renforcer la cohésion, le partage et l'engagement tout en vivant des expériences inoubliables ?</p>
        <p className="md:text-lg lg:text-xl font-roboto text-center max-w-3xl mx-auto pb-6">Transmettez des valeurs d'équipe en participant à des activités insolites qui favorise la réflexion collective.
<br /><br />
A chaque besoin, un format adapté pour une expérience inédite de team building.</p>
      </div>
    </header>
    <main>
      <section>
        <h2 className="border-b-2 border-red-600 bg-gradient-to-b from-gray-200 to-gray-400 pb-12 border-t-2 border-neutral-600">Ici mes 3 cartes</h2>
      </section>
        <section className="grid grid-cols-1 bg-gradient-to-t from-gray-200 to-gray-400  md:grid-cols-5 pb-12">
          <div className="md:col-span-3 px-12 text-center py-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:pb-12 font-semibold">Réinventons <span className="text-red-700">votre équipe</span></h2>
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
            <button className="mt-12 px-6 py-3 text-white bg-red-800  hover:bg-red-700 mx-auto flex justify-center items-center font-poppins">Créons ensemble votre team building</button>
          </div>
          <div className="md:col-span-2 grid grid-rows-2 md:gap-4 lg:pt-6 mr-6">
            <div className="relative w-full h-full hidden md:block">
              <Image
                src="/tb-img.png"
                alt="Team Building"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-full h-full ">
              <Image
                src="/tb-img.png"
                alt="Team Building"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
    );
  }