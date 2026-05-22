import OVERLOOKbutton from "./OVERLOOKbutton.tsx"; // Importa il nuovo componente

export default function Hero() {
    return(
        <div className="Hero-main">
            <h1>Le nostre offerte</h1>
            <div className="Hero-buttons">
                <div className="primary-buttons">
                    <button className="Hero-button-primary">
                        Gli eventi del mese
                    </button>

                    <button className="Hero-button-primary">
                        Scopri la mostra
                    </button>
                </div>
                <h2>Vivi la nuova esperienza OVERLOOK</h2>
                <h3>Clicca qui sotto per attivare la modalità Overlook</h3>
                <OVERLOOKbutton /> {/* Usa il componente OVERLOOKbutton */}
            </div>
        </div>
    );
}
