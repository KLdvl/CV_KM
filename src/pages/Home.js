import Navigation from "../components/Navigation";

export function Home() {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div>
                    <h1>Kevin Mas</h1>
                    <h2>Développeur web</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger le CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}