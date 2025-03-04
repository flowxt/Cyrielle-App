import Image from 'next/image';
import Image5 from '../../assets/images/image5.png';
import CustomButton from './CustomButton';
import Link from 'next/link';

export default function ContentHome() {
    return (
        <>
            {/* Section 1 */}
            <section className="relative overflow-hidden">
                <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl font-poppins">
                                Prêts à embarquer dans un{' '}
                                <strong className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                                    team building unique en Haute-Savoie.
                                </strong>{' '}
                               
                            </h2>

                            <div className="space-y-6 text-gray-700 font-roboto">
                                <p className="text-lg leading-relaxed">
                                    Permettez à vos collaborateurs de créer du lien de manière durable, de reconnaître leurs <strong>compétences</strong> respectives pour une <b>meilleure efficacité</b> tout en passant un moment ludique en <strong>Haute-Savoie</strong>.
                                </p>
                                
                                <p className="text-lg leading-relaxed">
                                    On revient à l’essentiel du <strong>team building</strong> en <b>remobilisant vos équipes</b> autour d’une <b>activité fédératrice</b> où chacun trouvera sa place au sein du groupe pour révéler son potentiel.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Nous créons des <strong>scénarios sur mesure</strong>, pour embarquer les participants dans un autre univers leur permettant d’oser et de trouver leur mode de fonctionnement pour atteindre une <b>victoire collective</b>.
                                </p>
                            </div>

                            <Link 
  href="/team-building"
  className="inline-block mt-4 px-6 py-3 bg-gradient-to-b from-red-700 to-red-900 text-white font-poppins rounded-lg shadow-lg  hover:bg-red-950 hover:scale-105 hover:shadow-xl transition-all text-center"
>
  Je veux en apprendre plus
</Link>
                        </div>

                        <div className="relative group h-[500px] hidden md:block">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-xl transform -rotate-1" />
                            <Image
                                
                                src={Image5}
                                alt="Team building en Haute-Savoie"
                                className="rounded-xl shadow-lg object-cover h-full w-full transition-transform duration-300 hover:scale-103"
                                
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section>
                <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                        <div className="relative group h-[500px] order-last md:order-first ">
                            <div className="absolute inset-0 bg-gradient-to-l from-red-500/10 to-red-500/5 rounded-xl transform rotate-1" />
                            <Image
                                src="/images/caroussel/img2.webp"
                                alt="Conférence interactive"
                                className="rounded-xl shadow-lg object-cover h-full w-full transition-transform duration-300 hover:scale-103"
                                width={3142}
                                height={2086}
                                priority
                            />
                        </div>

                        <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl font-poppins">
                                Vous captivez grâce à nos{' '}
                                <strong className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                                    concepts ludiques
                                </strong> où vous devenez «spect’acteurs»
                            </h2>

                            <div className="space-y-6 text-gray-700 font-roboto">
                            <p className="text-lg leading-relaxed">
                                    Nous vous offrons une <b>immersion</b> au coeur de lieu splendide pour découvrir ou redécouvrir ce et ceux qui nous entourent. 
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Que vous nous donniez carte blanche ou un cahier des charges, nous nous adaptions pour vous offrir un <strong>événement sur mesure et clé en main</strong>.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Nous concevons des scénarios de jeux théâtralisés grandeur nature mis en scène par nos équipes de comédiens qui vous embarquerons dans une <strong>expérience intéractive </strong>créatrice de souvenirs.
                                </p>
                            </div>

                            <Link 
  href="/nos-concepts"
  className="inline-block mt-4 px-6 py-3 bg-gradient-to-b from-red-700 to-red-900 text-white font-poppins rounded-lg shadow-lg  hover:bg-red-950 hover:scale-105 hover:shadow-xl transition-all text-center"
>

  Découvrez nos concepts
</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            
        </>
    );
}