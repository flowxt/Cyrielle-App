import Image from 'next/image';
import Image5 from '../../assets/images/image5.png';
import Link from 'next/link';

export default function ContentHome() {
    return (
        <div className="space-y-20">
            {/* Section 1 - Team Building en Haute-Savoie */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Des activités uniques en{' '}
                        <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                            Haute-Savoie
                        </span>
                    </h2>

                    <div className="space-y-4 text-gray-700">
                        <p className="text-lg">
                            Permettez à vos collaborateurs de créer des liens durables en reconnaissant leurs <span className="font-semibold">compétences</span> respectives pour une <span className="font-semibold">meilleure efficacité</span> collective.
                        </p>
                        
                        <p className="text-lg">
                            Nous revenons à l&apos;essentiel du <span className="font-semibold">team building</span> en remobilisant vos équipes autour d&apos;une activité fédératrice où chacun trouve sa place.
                        </p>

                        <p className="text-lg">
                            Nos <span className="font-semibold">scénarios sur mesure</span> embarquent les participants dans un univers qui leur permet d&apos;oser et d&apos;atteindre ensemble une <span className="font-semibold">victoire collective</span>.
                        </p>
                    </div>

                    <Link 
                        href="/team-building"
                        className="inline-block mt-4 px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        En savoir plus
                    </Link>
                </div>

                <div className="relative h-[450px] hidden md:block overflow-hidden rounded-xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-xl transform -rotate-1 transition-transform group-hover:rotate-0 duration-300" />
                    <Image
                        src={Image5}
                        alt="Team building en Haute-Savoie"
                        className="rounded-xl shadow-lg object-cover h-full w-full transition-all duration-500 group-hover:scale-105"
                        priority
                        fill
                    />
                </div>
            </div>

            {/* Section 2 - Concepts ludiques */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                <div className="relative h-[450px] order-last md:order-first overflow-hidden rounded-xl group">
                    <div className="absolute inset-0 bg-gradient-to-l from-red-500/10 to-red-500/5 rounded-xl transform rotate-1 transition-transform group-hover:rotate-0 duration-300" />
                    <Image
                        src="/images/caroussel/img2.webp"
                        alt="Conférence interactive"
                        className="rounded-xl shadow-lg object-cover h-full w-full transition-all duration-500 group-hover:scale-105"
                        fill
                        priority
                    />
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Des concepts ludiques où vous devenez{' '}
                        <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                            spect&apos;acteurs
                        </span>
                    </h2>

                    <div className="space-y-4 text-gray-700">
                        <p className="text-lg">
                            Nous vous offrons une <span className="font-semibold">immersion</span> au cœur d&apos;environnements splendides pour redécouvrir ce qui vous entoure.
                        </p>

                        <p className="text-lg">
                            Que vous nous donniez carte blanche ou un cahier des charges précis, nous vous créons un <span className="font-semibold">événement sur mesure et clé en main</span>.
                        </p>

                        <p className="text-lg">
                            Nos scénarios de jeux théâtralisés mis en scène par nos comédiens vous font vivre une <span className="font-semibold">expérience interactive</span> créatrice de souvenirs.
                        </p>
                    </div>

                    <Link 
                        href="/nos-concepts"
                        className="inline-block mt-4 px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        Découvrir nos concepts
                    </Link>
                </div>
            </div>
        </div>
    );
}