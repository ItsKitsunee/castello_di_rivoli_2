import OVERLOOKbutton from "./OVERLOOKbutton.tsx";
import { useOverlook } from "../global_state/OverlookContext.tsx";

export default function Hero() {
    const { overlookState } = useOverlook();

    // Colori estratti dalla palette della tua immagine
    const bluScuro = "#0f2042";       // Primo rettangolo a sinistra
    const gialloChiaro = "#fef08a";   // Ultimo rettangolo a destra

    return (
        <div
            className="Hero-main"
            style={{
                backgroundColor: overlookState ? bluScuro : gialloChiaro,
                color: overlookState ? "#ffffff" : "#0f2042", // Testo bianco su scuro, scuro su chiaro
                transition: "background-color 0.3s ease, color 0.3s ease",
                justifyContent: "center",
                alignItems: "center",

            }}
        >
            <h1
                style = {{color: overlookState ? "#ffffff" : "#0f2042"}}
            >Le nostre offerte</h1>
            <div className="Hero-buttons"
                style = {{alignItems:"center", justifyContent:"center"}}>
                <div className="primaryButtons">
                    <button className="Hero-button-primary">
                        Gli eventi del mese
                    </button>

                    <button className="Hero-button-primary">
                        Scopri la mostra
                    </button>
                </div>
                <h2 style = {{color: overlookState ? "#ffffff" : "#0f2042"}}>Vivi la nuova esperienza OVERLOOK</h2>
                <h3 style = {{color: overlookState ? "#ffffff" : "#0f2042"}}>Clicca qui sotto per attivare la modalità Overlook</h3>
                <OVERLOOKbutton />
            </div>
        </div>
    );
}