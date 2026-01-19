import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
    return (
        <div className="py-16 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête de section */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Votre <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">experte</span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Une passionnée à l&apos;écoute de vos besoins, garante d&apos;une 
                        <span className="font-semibold"> expérience unique et immersive</span>.
                    </p>
                </div>

                {/* Carte Cyrielle - mise en avant */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Photo de Cyrielle */}
                    <div className="relative">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-2">
                            <div className="relative h-[500px] overflow-hidden">
                                <Image
                                    src="/cyrielle.jpg"
                                    alt="Cyrielle Schepens - Fondatrice En Scènes Acting"
                                    fill
                                    className="object-cover transform transition-transform duration-700 hover:scale-105"
                                    style={{ objectPosition: "center 15%" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0">
                                    <div className="bg-black/70 backdrop-blur-sm p-6">
                                        <h3 className="text-3xl font-bold text-white">
                                            Cyrielle <span className="text-red-400">Schepens</span>
                                        </h3>
                                        <p className="text-white/90 mt-1 text-lg">Fondatrice & Directrice créative</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Décoration */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-2xl"></div>
                        <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Compétences de Cyrielle */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </span>
                                Expertise & Savoir-faire
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                                    <span className="text-red-600 text-xl mt-0.5">✦</span>
                                    <div>
                                        <span className="font-semibold text-gray-800">Scénariste</span>
                                        <p className="text-gray-600 text-sm mt-1">Création d&apos;histoires captivantes et immersives</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                                    <span className="text-red-600 text-xl mt-0.5">✦</span>
                                    <div>
                                        <span className="font-semibold text-gray-800">Metteuse en scène</span>
                                        <p className="text-gray-600 text-sm mt-1">Direction artistique et coordination des performances</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                                    <span className="text-red-600 text-xl mt-0.5">✦</span>
                                    <div>
                                        <span className="font-semibold text-gray-800">Créatrice de concepts originaux</span>
                                        <p className="text-gray-600 text-sm mt-1">Innovation et personnalisation de chaque expérience</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                                    <span className="text-red-600 text-xl mt-0.5">✦</span>
                                    <div>
                                        <span className="font-semibold text-gray-800">Coordinatrice des équipes</span>
                                        <p className="text-gray-600 text-sm mt-1">Management et formation des comédiens</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                                    <span className="text-red-600 text-xl mt-0.5">✦</span>
                                    <div>
                                        <span className="font-semibold text-gray-800">Comédienne</span>
                                        <p className="text-gray-600 text-sm mt-1">Performance et immersion totale dans chaque rôle</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <Link 
                            href="/contact"
                            className="group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-700 to-red-900 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Échanger avec Cyrielle
                            <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Citation */}
                <div className="mt-16 text-center">
                    <blockquote className="relative">
                        <svg className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 text-red-200" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="italic text-xl text-gray-700 max-w-3xl mx-auto pt-8">
                            &quot;Ma passion est de créer des expériences immersives uniques qui transforment votre événement en souvenirs inoubliables.&quot;
                        </p>
                        <cite className="block mt-4 text-red-700 font-semibold not-italic">— Cyrielle Schepens</cite>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}
