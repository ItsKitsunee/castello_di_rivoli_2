import { useOverlook } from "../global_state/OverlookContext.tsx";
import { useNavigate } from "react-router-dom"; // <-- 1. Importa l'hook useNavigate
// Importiamo la mappa usando il percorso relativo corretto all'interno di src/
import mappaPercorso from "../photos/pics/map.png";

export default function OverlookBox() {
    const { overlookState } = useOverlook();
    const navigate = useNavigate(); // <-- 2. Inizializza la funzione di navigazione

    // Funzione onClick per il reindirizzamento
    const handleTicketsNavigation = () => {
        navigate("/tickets"); // <-- Sposta l'utente sulla rotta definita in App.tsx
    };

    // FILOSOFIA EDITORIALE: Fondiamo il gradiente scuro con una griglia di linee verticali millimetriche (1px)
    const backgroundEditoriale = `
        linear-gradient(to bottom, #0f2042 0%, #000000 100%),
        repeating-linear-gradient(to right, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 150px)
    `;

    return (
        <div
            className="MainOverlookBox"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                overflow: "hidden",
                maxHeight: overlookState ? "2800px" : "0px",
                opacity: overlookState ? 1 : 0,
                transition: "all 1s cubic-bezier(0.25, 1, 0.5, 1)",
                background: backgroundEditoriale,
                backgroundBlendMode: "screen",
                color: "#ffffff",
                borderRadius: "16px",
                marginTop: overlookState ? "30px" : "0px",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)"
            }}
        >
            {/* Wrapper Interno */}
            <div style={{
                padding: "5rem 2.5rem",
                width: "100%",
                maxWidth: "1200px",
                boxSizing: "border-box",
                fontFamily: "system-ui, -apple-system, sans-serif"
            }}>

                {/* ... (tutto il resto del tuo codice rimane invariato) ... */}
                {/* BLOCCO 1, AREA CONTENUTO e BLOCCO 2 omessi per brevità */}

                {/* LINEA SEPARATRICE PRIMA DELL'INSTALLAZIONE TIPOGRAFICA */}
                <hr style={{ border: "none", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)", marginBottom: "4rem" }} />

                {/* BLOCCO 3: CALL TO ACTION - L'impatto Monumentale dello Slogan */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
                    paddingTop: "2rem",
                    width: "100%"
                }}>
                    <h1 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "calc(2.5rem + 2vw)",
                        fontWeight: "700",
                        color: "#fef08a",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        opacity: 1,
                        margin: "0 0 3rem 0",
                        lineHeight: "1.0",
                        maxWidth: "800px"
                    }}>
                        Alza lo sguardo.
                    </h1>

                    <button
                        onClick={handleTicketsNavigation} // <-- 3. Assegna la funzione qui
                        style={{
                            backgroundColor: "#fef08a",
                            color: "#0f2042",
                            border: "none",
                            padding: "1.2rem 3.5rem",
                            fontSize: "1rem",
                            fontWeight: "700",
                            letterSpacing: "2px",
                            borderRadius: "0px",
                            cursor: "pointer",
                            boxShadow: "0 10px 25px rgba(254, 240, 138, 0.15)",
                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-4px)";
                            e.currentTarget.style.backgroundColor = "#ffffff";
                            e.currentTarget.style.boxShadow = "0 15px 30px rgba(255, 255, 255, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0px)";
                            e.currentTarget.style.backgroundColor = "#fef08a";
                            e.currentTarget.style.boxShadow = "0 10px 25px rgba(254, 240, 138, 0.15)";
                        }}
                    >
                        ACQUISTA I BIGLIETTI →
                    </button>
                </div>

            </div>
        </div>
    );
}