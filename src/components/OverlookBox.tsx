import { useOverlook } from "../global_state/OverlookContext.tsx";
// Importiamo la mappa usando il percorso relativo corretto all'interno di src/
import mappaPercorso from "../photos/pics/map.png";

export default function OverlookBox() {
    const { overlookState } = useOverlook();

    // Definiamo lo stesso identico gradiente dell'Hero per dare continuità
    const gradienteScuro = "linear-gradient(180deg, #0f2042 0%, #000000 100%)";

    return (
        <div
            className="MainOverlookBox"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",

                // Effetto Tendina Fluido
                overflow: "hidden",
                maxHeight: overlookState ? "2400px" : "0px",
                opacity: overlookState ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.25, 1, 0.5, 1)",

                // Estetica coerente: applicato il gradiente al posto del colore piatto
                background: gradienteScuro,
                color: "#ffffff",
                borderRadius: "16px",
                marginTop: overlookState ? "30px" : "0px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" // Ombra leggermente accentuata per dare profondità sul nero
            }}
        >
            {/* Wrapper Interno */}
            <div style={{
                padding: "3.5rem 2rem",
                width: "100%",
                maxWidth: "1100px",
                boxSizing: "border-box",
                fontFamily: "system-ui, -apple-system, sans-serif"
            }}>

                {/* BLOCCO 1: COSA VOGLIAMO COMUNICARE */}
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <span style={{ letterSpacing: "3px", fontSize: "0.9rem", opacity: 0.7, fontWeight: "600" }}>
                        OVERLOOK • IL CASTELLO A TESTA IN SU
                    </span>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "2.4rem",
                        margin: "0.5rem 0 0 0",
                        fontWeight: "400",
                        color: "white"
                    }}>
                        Cosa vogliamo comunicare?
                    </h2>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "3rem",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    marginBottom: "5rem"
                }}>

                    {/* COLONNA SINISTRA */}
                    <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "2rem" }}>🏰</div>
                            <div>
                                <h3 style={{ margin: "0 0 0.3rem 0", fontSize: "1.2rem", fontWeight: "600", color: "#fef08a" }}>
                                    Identità artistica del Castello
                                </h3>
                                <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.5" }}>
                                    Valorizziamo la cifra artistica e simbolica del luogo, guidando lo sguardo verso la magnificenza dei soffitti.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "2rem" }}>🍃</div>
                            <div>
                                <h3 style={{ margin: "0 0 0.3rem 0", fontSize: "1.2rem", fontWeight: "600", color: "#fef08a" }}>
                                    Connessione con la natura
                                </h3>
                                <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.5" }}>
                                    Raccontiamo il contesto naturale, la fauna locale e il magico rapporto che lega l'interno del Castello all'esterno.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "2rem" }}>👥</div>
                            <div>
                                <h3 style={{ margin: "0 0 0.3rem 0", fontSize: "1.2rem", fontWeight: "600", color: "#fef08a" }}>
                                    Esperienza attiva e creativa
                                </h3>
                                <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.5" }}>
                                    Incentiviamo la partecipazione e la creatività durante la visita. Segui la cinciarella e alza lo sguardo!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* COLONNA DESTRA */}
                    <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", gap: "1.8rem", width: "100%" }}>
                        <div style={{ width: "100%", position: "relative" }}>
                            <video
                                controls
                                style={{
                                    width: "100%",
                                    borderRadius: "12px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                                    backgroundColor: "#000"
                                }}
                                aria-label="Video di presentazione Overlook"
                            >
                                <source src="" type="video/mp4" />
                            </video>
                        </div>

                        <div style={{
                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                            borderLeft: "4px solid #fef08a",
                            padding: "1.2rem 1.5rem",
                            borderRadius: "0 12px 12px 0",
                        }}>
                            <span style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#fef08a", letterSpacing: "1px", marginBottom: "0.4rem" }}>
                                🐦 IL CONSIGLIO DELLA CINCIARELLA
                            </span>
                            <p style={{ margin: 0, fontSize: "1rem", fontStyle: "italic", opacity: 0.9, lineHeight: "1.5" }}>
                                "Prenditi il tempo. I soffitti raccontano storie che aspettano solo i tuoi occhi."
                            </p>
                        </div>
                    </div>
                </div>

                {/* LINEA SEPARATRICE ELEGANTE */}
                <hr style={{ border: "none", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.1)", marginBottom: "4rem" }} />

                {/* BLOCCO 2: LA MAPPA DEL PERCORSO */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "2rem",
                    marginBottom: "4rem"
                }}>
                    <div style={{ maxWidth: "700px" }}>
                        <span style={{ letterSpacing: "2px", fontSize: "0.85rem", color: "#fef08a", fontWeight: "600" }}>
                            IL PERCORSO ESCLUSIVO
                        </span>
                        <h2 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "2.2rem",
                            margin: "0.5rem 0 1rem 0",
                            fontWeight: "400",
                            color: "white"
                        }}>
                            Esplora le Sale suggerite dalla Cinciarella
                        </h2>
                        <p style={{ fontSize: "1.05rem", opacity: 0.85, lineHeight: "1.6", margin: 0 }}>
                            Segui l'itinerario consigliato per non perdere nemmeno un dettaglio delle decorazioni
                            e delle storie custodite in ogni soffitto del Castello di Rivoli.
                            La mappa ti accompagnerà passo dopo passo.
                        </p>
                    </div>

                    {/* Contenitore Immagine Mappa */}
                    <div style={{
                        width: "100%",
                        maxWidth: "900px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                        backgroundColor: "#f7f7f7",
                        padding: "10px"
                    }}>
                        <img
                            src={mappaPercorso}
                            alt="Pianta Primo Piano - Percorso Overlook"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                borderRadius: "8px"
                            }}
                        />
                    </div>
                </div>

                {/* BLOCCO 3: CALL TO ACTION FINALE (Acquista Biglietti) */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "2rem 0 1rem 0"
                }}>
                    <p style={{
                        fontFamily: "'Playfair Display', Georgia, serif", // Usa lo stesso font elegante dell'Hero
                        fontSize: "2rem",                                 // Dimensione raddoppiata per dare forte impatto visivo
                        fontWeight: "700",                                // Grassetto deciso
                        color: "#fef08a",                                 // Giallo oro per farlo saltare all'occhio sullo sfondo scuro
                        letterSpacing: "2px",                             // Lettere più traspiranti e cinematiche
                        textTransform: "uppercase",                       // Tutto maiuscolo per dare autorevolezza al comando
                        opacity: 1,                                       // Opacità massima, niente dissolvenze per lo slogan
                        marginBottom: "1.5rem",
                        maxWidth: "600px",                                // Leggermente allargato per contenere il testo su schermi medi
                        lineHeight: "1.3"
                    }}>
                        Alza lo sguardo.
                    </p>

                    <button
                        style={{
                            backgroundColor: "#fef08a",
                            color: "#0f2042",
                            border: "none",
                            padding: "1rem 2.5rem",
                            fontSize: "1.1rem",
                            fontWeight: "700",
                            letterSpacing: "1px",
                            borderRadius: "30px",
                            cursor: "pointer",
                            boxShadow: "0 8px 20px rgba(254, 240, 138, 0.2)",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 12px 25px rgba(254, 240, 138, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(254, 240, 138, 0.2)";
                        }}
                    >
                        ACQUISTA I BIGLIETTI
                    </button>
                </div>

            </div>
        </div>
    );
}