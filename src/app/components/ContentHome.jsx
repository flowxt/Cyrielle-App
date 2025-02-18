import Image from 'next/image';
import Image5 from '../../assets/images/image5.png';
import CustomButton from './CustomButton';

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
                                    team building en Haute-Savoie
                                </strong>{' '}
                                unique.
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

                            <CustomButton 
                                text="Je veux en apprendre plus" 
                                className="mt-4"
                            />
                        </div>

                        <div className="relative group h-[500px] hidden md:block">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-xl transform -rotate-1" />
                            <Image
                                src="/images/caroussel/img2.webp"
                                alt="Team building en Haute-Savoie"
                                className="rounded-xl shadow-lg object-cover h-full w-full transition-transform duration-300 hover:scale-103"
                                width={3142}
                                height={2086}
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
                        <div className="relative group h-[500px] order-last md:order-first hidden md:block">
                            <div className="absolute inset-0 bg-gradient-to-l from-red-500/10 to-red-500/5 rounded-xl transform rotate-1" />
                            <Image
                                src={Image5}
                                alt="Conférence interactive"
                                className="rounded-xl shadow-lg object-cover h-full w-full transition-transform duration-300 hover:scale-103"
                                priority
                            />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl font-poppins">
                                Vivez une{' '}
                                <strong className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                                    conférence
                                </strong>{' '}
                                dont vous vous souviendrez.
                            </h2>

                            <div className="space-y-6 text-gray-700 font-roboto">
                                <p className="text-lg leading-relaxed">
                                    <b>Engagez</b> vos collaborateurs avec un <b>format novateur de conférence</b>, vous souhaitez transmettre un message lors d'un <b>moment interactif</b> conçu autour de temps d'<b>échange et de partage</b>.
                                </p>
                            </div>

                            <CustomButton 
                                text="Je souhaite en savoir davantage"
                                className="mt-4"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section>
                <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl font-poppins">
                                Captez de nouveaux visiteurs avec un{' '}
                                <strong className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                                    concept ludique
                                </strong>
                                .
                            </h2>

                            <div className="space-y-6 text-gray-700 font-roboto">
                                <p className="text-lg leading-relaxed">
                                    Nous offrons à nos spect'acteurs, une <b>immersion</b> au coeur de votre lieu ou de votre activité, pour découvrir ou re-découvrir de manière <b>ludique</b> ce qui les entourent.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Nos <b>concepts de jeux</b> s'adaptent à votre environnement et les scénarios qui les accompagnent sont créés pour le mettre en valeur.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Que vous nous donniez carte blanche ou un cahier des charges, nous nous adaptons pour vous offrir un <b>événement sur mesure et clef en main</b>.
                                </p>
                            </div>

                            <CustomButton 
                                text="Découvrez nos concepts"
                                className="mt-4"
                            />
                        </div>

                        <div className="relative group h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-xl transform -rotate-1" />
                            <Image
                                src="/images/caroussel/img2.webp"
                                alt="Concepts ludiques"
                                className="rounded-xl shadow-lg object-cover h-full w-full transition-transform duration-300 hover:scale-103"
                                width={3142}
                                height={2086}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}