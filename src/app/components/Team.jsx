import Image from 'next/image';

export default function Team() {
    return (
        <div className="py-16 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête de section */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Notre <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">équipe</span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Un duo passionné à l&apos;écoute de vos besoins, garant d&apos;une 
                        <span className="font-semibold"> expérience unique et immersive</span>.
                    </p>
                </div>

                {/* Membres de l'équipe */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Cyrielle */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="relative h-96 overflow-hidden">
                            <Image
                                src="/cyrielle.jpg"
                                alt="Cyrielle Schepens"
                                fill
                                className="object-cover transform transition-transform duration-700 hover:scale-105"
                                style={{ objectPosition: "center 15%" }}
                            />
                            <div className="absolute inset-0 "></div>
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className="bg-black/70 backdrop-blur-sm p-5">
                                    <h3 className="text-2xl font-bold text-white">
                                        Cyrielle <span className="text-red-400">Schepens</span>
                                    </h3>
                                    <p className="text-white/90 mt-1">Co-fondatrice & Directrice créative</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 text-gray-800">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Scénariste</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Coordinatrice des équipes</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Metteuse en scène</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Créatrice de concepts originaux</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Comédienne</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Matthieu */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="relative h-96 overflow-hidden">
                            <Image
                                src="/matthieu.jpg"
                                alt="Matthieu Vernisse"
                                fill
                                className="object-cover transform transition-transform duration-700 hover:scale-105"
                                style={{ objectPosition: "center 15%" }}
                            />
                            <div className="absolute inset-0"></div>
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className="bg-black/70 backdrop-blur-sm p-5">
                                    <h3 className="text-2xl font-bold text-white">
                                        Matthieu <span className="text-red-400">Vernisse</span>
                                    </h3>
                                    <p className="text-white/90 mt-1">Co-fondateur & Directeur artistique</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 text-gray-800">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Architecte scénographe</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Graphiste - Illustrateur</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Concepteur d&apos;environnements immersifs</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Maître de l&apos;esthétique et du storytelling</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-600 text-lg">⬦</span>
                                    <span>Comédien</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Citation d'équipe */}
                <div className="mt-16 text-center">
                    <blockquote className="italic text-lg text-gray-700 max-w-3xl mx-auto">
                        "Notre passion est de créer des expériences immersives uniques qui transforment votre événement en souvenirs inoubliables."
                    </blockquote>
                </div>
            </div>
        </div>
    );
}