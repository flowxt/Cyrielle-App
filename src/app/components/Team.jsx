

export default function Team() {
    return (
        <>
            <div className="container-team text-center py-12 flex flex-col items-center gap-8">
                <h2 className="text-4xl font-poppins font-semibold pb-4">Notre équipe</h2>
                <p className="font-roboto text-lg font-light px-8">Un duo complémentaire et passionné à l'écoute de vos besoins, garants d'une expérience unique et immersive.</p>
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-8 py-8 items-center ">
                <div className="container-Cyrielle flex flex-col lg:flex-row-reverse items-center gap-8">
                        <img src='/cyrielle.jpg' alt="Cyrielle" className="border-2 border-red-700 rounded-xl shadow-2xl shadow-neutral-900 h-80"/>
                        <div className="content-cyrielle flex flex-col text-center lg:text-end">
                            <h3 className="text-xl font-poppins font-semibold">Cyrielle <span className="text-red-700">Schepens</span></h3>
                            <p className="font-roboto text-lg font-light">
                                Facilitatrice en communication<br /> par l'improvisation théâtrale
                                <br />
                                Coordinatrice des équipes <br /> Gestionnaire des projets
                                <br />
                                Créatrice de concepts originaux
                                <br />
                                Comédienne
                            </p>
                        </div>
                    </div>
                <div className="container-Matthieu flex flex-col lg:flex-row items-center justify-center gap-8 py-8 ">
                   <img src='/matthieu.jpg' alt="Matthieu" className="border-2 border-red-700 rounded-xl shadow-2xl shadow-neutral-900 h-80" />
                   <div className="content-matthieu flex flex-col lg:text-start items-center"> 
                   <h3 className="text-xl font-poppins font-semibold">Matthieu <span className="text-red-700">Vernisse</span> </h3>
               <p className="font-roboto text-lg font-light">

Architecte scénographe
<br />
Graphiste - Illustrateur
<br />
Concepteur d'environnements immersifs
<br />
Maître de l'esthétique et du storytelling
<br />
Comédien</p>
</div>
</div>
                </div>
            </div>
        </>
    );
}