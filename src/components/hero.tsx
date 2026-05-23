import { useEffect, useRef } from "react"; // Importati useEffect e useRef
import OVERLOOKbutton from "./OVERLOOKbutton.tsx";
import { useOverlook } from "../global_state/OverlookContext.tsx";

export default function Hero() {
    const { overlookState } = useOverlook();

    // Riferimento per identificare il punto esatto dove scrollare
    const bottomHeroRef = useRef<HTMLDivElement>(null);

    // Effetto che scatta ogni volta che lo stato Overlook cambia
    useEffect(() => {
        if (overlookState) {
            // Un brevissimo timeout (100ms) assicura che il nuovo contenuto in basso
            // sia già renderizzato e visibile prima di calcolare lo scroll
            const timer = setTimeout(() => {
                bottomHeroRef.current?.scrollIntoView({
                    behavior: "smooth", // Scroll fluido e cinematico
                    block: "start",     // Allinea la cima della nuova sezione all'inizio dello schermo
                });
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [overlookState]);

    const gradienteScuro = "linear-gradient(180deg, #0f2042 0%, #000000 100%)";
    const gradienteChiaro = "linear-gradient(180deg, #fff4a3 0%, #ffffff 100%)";

    const textColor = overlookState ? "#ffffff" : "#0f2042";

    return (
        <>
            <div
                className="Hero-main"
                style={{
                    background: overlookState ? gradienteScuro : gradienteChiaro,
                    color: textColor,
                    transition: "background 0.5s ease, color 0.5s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "auto",
                    minHeight: "75vh",
                    padding: "4rem 1.5rem",
                    margin: "0",
                    boxSizing: "border-box",
                    fontFamily: "'Playfair Display', Georgia, serif"
                }}
            >
                {/* 1. BLOCCO PULSANTI IN ALTO */}
                <div
                    className="primaryButtons"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "0",
                        marginBottom: "3.5rem",
                        width: "auto",
                        backgroundColor: "transparent",
                        boxShadow: "none"
                    }}
                >
                    <button
                        className="Hero-button-primary"
                        style={{
                            padding: "0.6rem 1.8rem",
                            cursor: "pointer",
                            border: "none",
                            borderRadius: "0",
                            minWidth: "150px",
                            textAlign: "center",
                            margin: "0",
                            display: "inline-block"
                        }}
                    >
                        GLI EVENTI DEL MESE
                    </button>
                    <button
                        className="Hero-button-primary"
                        style={{
                            padding: "0.6rem 1.8rem",
                            cursor: "pointer",
                            border: "none",
                            borderRadius: "0",
                            minWidth: "150px",
                            textAlign: "center",
                            margin: "0",
                            display: "inline-block"
                        }}
                    >
                        SCOPRI LA MOSTRA
                    </button>
                </div>

                {/* 2. CONTENITORE CENTRALE */}
                <div
                    className="Hero-content"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        maxWidth: "800px",
                        gap: "1.2rem",
                        margin: "0 auto"
                    }}
                >
                    <h1 style={{
                        color: textColor,
                        fontSize: "3.2rem",
                        fontWeight: "400",
                        margin: "0",
                        padding: "0",
                        lineHeight: "1.15",
                        textTransform: "none"
                    }}>
                        Vivi la nuova esperienza <span style={{ fontWeight: "700" }}>OVERLOOK</span>
                    </h1>

                    <p style={{
                        color: textColor,
                        fontSize: "1.1rem",
                        margin: "0 0 0.5rem 0",
                        padding: "0",
                        opacity: 0.85,
                        fontWeight: "500",
                        lineHeight: "1.4"
                    }}>
                        Clicca qui sotto per attivare la modalità Overlook
                    </p>

                    <OVERLOOKbutton />
                </div>
            </div>

            {/* Ancora invisibile: segna la fine dell'Hero e l'inizio del blocco successivo */}
            <div ref={bottomHeroRef} style={{ height: "0", margin: "0", padding: "0" }} />
        </>
    );
}