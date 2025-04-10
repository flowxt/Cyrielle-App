export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Immersion complète : les nouvelles tendances du team building en 2024",
      date: "12 juin 2024",
      image: "/team-building-1.jpg",
      category: "Team Building",
      excerpt: "Découvrez comment les expériences immersives transforment la cohésion d'équipe et renforcent la culture d'entreprise.",
      author: "Cyrielle Schepens"
    },
    {
      id: 2,
      title: "L'art du storytelling dans les événements d'entreprise",
      date: "5 mai 2024",
      image: "/storytelling.jpg", 
      category: "Événementiel",
      excerpt: "Comment une histoire bien ficelée peut transformer votre événement professionnel en expérience mémorable.",
      author: "Matthieu Vernisse"
    },
    {
      id: 3,
      title: "Escape games sur mesure : notre processus créatif",
      date: "18 avril 2024",
      image: "/escape-game.jpg",
      category: "Création",
      excerpt: "Les coulisses de nos créations d'escape games personnalisés pour les entreprises de Haute-Savoie.",
      author: "Cyrielle Schepens"
    },
    {
      id: 4,
      title: "Le pouvoir de l'immersion dans la formation professionnelle",
      date: "27 mars 2024",
      image: "/formation.jpg",
      category: "Formation",
      excerpt: "Comment les méthodes immersives révolutionnent l'apprentissage et la montée en compétences.",
      author: "Matthieu Vernisse"
    },
    {
      id: 5,
      title: "Retour sur notre Murder Party au Château de l'Échelle",
      date: "2 mars 2024",
      image: "/murder-party.jpg",
      category: "Événement",
      excerpt: "Moments forts et témoignages de notre récente expérience immersive dans un cadre historique exceptionnel.",
      author: "Cyrielle Schepens"
    },
    {
      id: 6,
      title: "5 raisons de choisir un team building immersif pour votre entreprise",
      date: "15 février 2024",
      image: "/team-building-2.jpg",
      category: "Team Building",
      excerpt: "Les bénéfices concrets des activités immersives sur la communication et la productivité de vos équipes.",
      author: "Matthieu Vernisse"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-28 pb-16">
      {/* Bannière "en construction" */}
      <div className="fixed top-20 inset-x-0 z-50 bg-yellow-50 border-b border-yellow-200 py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 bg-yellow-400 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-yellow-800">
                Blog en cours de construction
              </p>
              <p className="text-sm text-yellow-700">
                Cette section est une prévisualisation et n'est pas encore active. Notre blog sera bientôt disponible !
              </p>
            </div>
          </div>
          <div className="animate-pulse bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Bientôt disponible
          </div>
        </div>
      </div>

      {/* Bannière du blog */}
      <div className="relative bg-black text-white py-16 mb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/blog-header.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Le Blog d'En Scènes</h1>
            <p className="text-xl text-white/90 mb-8">
              Découvrez nos articles, conseils et retours d'expérience sur le monde du team building et des événements immersifs
            </p>
            <div className="inline-flex space-x-3">
              <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">Team Building</span>
              <span className="px-3 py-1 bg-gray-700 text-white text-sm font-medium rounded-full">Formations</span>
              <span className="px-3 py-1 bg-gray-700 text-white text-sm font-medium rounded-full">Événements</span>
            </div>
          </div>
        </div>
      </div>

      {/* Articles de blog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Nos <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">derniers articles</span>
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Restez informés des dernières tendances, événements et conseils du monde du team building
            et des expériences immersives.
          </p>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${article.image})` }}
                ></div>
                <div className="absolute top-0 right-0 m-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">{article.category}</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                <button className="text-red-600 text-sm font-medium flex items-center hover:text-red-800 transition-colors group mt-auto">
                  Lire la suite
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className="mt-12 text-center">
          <button className="px-5 py-2.5 bg-gradient-to-b from-red-600 to-red-900 text-white font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2">
            Voir plus d'articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-red-900 rounded-xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:px-12 sm:py-16 grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-white mb-2">Restez informés</h3>
              <p className="text-white/80">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et actualités directement dans votre boîte mail.
              </p>
            </div>
            <div className="lg:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
                />
                <button type="submit" className="px-5 py-3 bg-white text-red-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}