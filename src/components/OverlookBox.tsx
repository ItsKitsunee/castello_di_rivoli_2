import { useOverlook } from "../global_state/OverlookContext.tsx";
// Importiamo la mappa usando il percorso relativo corretto all'interno di src/
import mappaPercorso from "../photos/pics/map.png";

export default function OverlookBox() {
    const { overlookState } = useOverlook();

    // FILOSOFIA EDITORIALE: Fondiamo il gradiente scuro con una griglia di linee verticali millimetriche (1px)
    // Questo simula la blueprint o la griglia tipografica da studio d'arte contemporanea.
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

                // Effetto Tendina Fluido adattato alle nuove proporzioni spaziali di respiro
                overflow: "hidden",
                maxHeight: overlookState ? "2800px" : "0px",
                opacity: overlookState ? 1 : 0,
                transition: "all 1s cubic-bezier(0.25, 1, 0.5, 1)",

                // Applicazione del background a griglia esplicita
                background: backgroundEditoriale,
                backgroundBlendMode: "screen",
                color: "#ffffff",
                borderRadius: "16px",
                marginTop: overlookState ? "30px" : "0px",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)"
            }}
        >
            {/* Wrapper Interno con Padding generoso per dare il "Silenzio" visivo necessario */}
            <div style={{
                padding: "5rem 2.5rem",
                width: "100%",
                maxWidth: "1200px",
                boxSizing: "border-box",
                fontFamily: "system-ui, -apple-system, sans-serif"
            }}>

                {/* BLOCCO 1: COSA VOGLIAMO COMUNICARE - Layout Asimmetrico Introduttivo */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start", // Sganciato dal centro: allineamento brutalista a sinistra
                    marginBottom: "5rem",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
                    paddingLeft: "1.5rem"
                }}>
                    <span style={{ letterSpacing: "4px", fontSize: "0.8rem", opacity: 0.6, fontWeight: "600", color: "#fef08a" }}>
                        OVERLOOK // IL CASTELLO A TESTA IN SU
                    </span>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "3rem",
                        margin: "0.5rem 0 0 0",
                        fontWeight: "400",
                        color: "white",
                        lineHeight: "1.1"
                    }}>
                        Cosa vogliamo comunicare?
                    </h2>
                </div>

                {/* AREA CONTENUTO: SPLIT ASIMMETRICO (35% Testi rigorosi / 55% Media dominanti) */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "4rem",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "6rem"
                }}>

                    {/* COLONNA SINISTRA: L'essenzialità del testo, numerato e pulito */}
                    <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "2.5rem" }}>

                        {/* Punto 01 */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.5rem", color: "#fef08a", opacity: 0.5 }}>
                                01/
                            </span>
                            <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "600", letterSpacing: "0.5px" }}>
                                Identità artistica del Castello
                            </h3>
                            <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.7, lineHeight: "1.6" }}>
                                Valorizziamo la cifra artistica e simbolica del luogo, guidando lo sguardo verso la magnificenza dei soffitti.
                            </p>
                        </div>

                        {/* Punto 02 */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.5rem", color: "#fef08a", opacity: 0.5 }}>
                                02/
                            </span>
                            <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "600", letterSpacing: "0.5px" }}>
                                Connessione con la natura
                            </h3>
                            <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.7, lineHeight: "1.6" }}>
                                Raccontiamo il contesto naturale, la fauna locale e il magico rapporto che lega l'interno del Castello all'esterno.
                            </p>
                        </div>

                        {/* Punto 03 */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.5rem", color: "#fef08a", opacity: 0.5 }}>
                                03/
                            </span>
                            <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "600", letterSpacing: "0.5px" }}>
                                Esperienza attiva e creativa
                            </h3>
                            <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.7, lineHeight: "1.6" }}>
                                Incentiviamo la partecipazione e la creatività durante la visita. Segui la cinciarella e alza lo sguardo!
                            </p>
                        </div>
                    </div>

                    {/* COLONNA DESTRA: Spazio Media imponente con blocco Cinciarella fluttuante */}
                    <div style={{ flex: "1 1 520px", display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
                        <div style={{ width: "100%", position: "relative" }}>
                            <video
                                controls
                                style={{
                                    width: "100%",
                                    borderRadius: "8px", // Angoli leggermente più netti, più rigorosi
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                                    backgroundColor: "#000"
                                }}
                                aria-label="Video di presentazione Overlook"
                            >
                                <source src="" type="video/mp4" />
                            </video>
                        </div>

                        {/* Box Citazione: Diventa un elemento destrutturato, minimale, quasi trasparente */}
                        <div style={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            borderLeft: "2px solid #fef08a",
                            padding: "1.5rem 2rem",
                            borderRadius: "0 4px 4px 0",
                            backdropFilter: "blur(5px)"
                        }}>
                            <span style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", color: "#fef08a", letterSpacing: "2px", marginBottom: "0.5rem" }}>
                                NOTA DI PERCORSO // LA CINCIARELLA
                            </span>
                            <p style={{ margin: 0, fontSize: "1.05rem", fontStyle: "italic", opacity: 0.85, lineHeight: "1.6", fontWeight: "300" }}>
                                "Prenditi il tempo. I soffitti raccontano storie che aspettano solo i tuoi occhi."
                            </p>
                        </div>
                    </div>
                </div>

                {/* LINEA SEPARATRICE - Pulita, tagliente, integrata nella griglia */}
                <hr style={{ border: "none", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)", marginBottom: "5rem" }} />

                {/* BLOCCO 2: LA MAPPA DEL PERCORSO - Struttura espositiva */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "4rem",
                    alignItems: "center",
                    marginBottom: "6rem"
                }}>
                    <div style={{ flex: "1 1 350px", textAlign: "left" }}>
                        <span style={{ letterSpacing: "3px", fontSize: "0.8rem", color: "#fef08a", fontWeight: "600" }}>
                            THE MAP
                        </span>
                        <h2 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "2.5rem",
                            margin: "0.5rem 0 1.5rem 0",
                            fontWeight: "400",
                            color: "white",
                            lineHeight: "1.1"
                        }}>
                            Esplora le Sale suggerite
                        </h2>
                        <p style={{ fontSize: "1rem", opacity: 0.7, lineHeight: "1.6", margin: 0 }}>
                            Segui l'itinerario consigliato per non perdere nemmeno un dettaglio delle decorazioni
                            e delle storie custodite in ogni soffitto del Castello di Rivoli.
                            La pianta ti guiderà passo dopo passo in questa ascesa visiva.
                        </p>
                    </div>

                    {/* Contenitore Immagine Mappa Espositivo */}
                    <div style={{
                        flex: "1 1 600px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                        backgroundColor: "#f4f4f5",
                        padding: "12px",
                        boxSizing: "border-box"
                    }}>
                        <img
                            src={mappaPercorso}
                            alt="Pianta Primo Piano - Percorso Overlook"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                borderRadius: "4px"
                            }}
                        />
                    </div>
                </div>

                {/* LINEA SEPARATRICE PRIMA DELL'INSTALLAZIONE TIPOGRAFICA */}
                <hr style={{ border: "none", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)", marginBottom: "4rem" }} />

                {/* BLOCCO 3: CALL TO ACTION - L'impatto Monumentale dello Slogan */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start", // Allineato rigidamente a sinistra come la slide editoriale
                    textAlign: "left",
                    paddingTop: "2rem",
                    width: "100%"
                }}>
                    {/* Lo slogan diventa un elemento monumentale e isolato nello spazio vuoto */}
                    <h1 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "calc(2.5rem + 2vw)", // Grandezza fluida ed estrema che scala col browser
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
                        style={{
                            backgroundColor: "#fef08a",
                            color: "#0f2042",
                            border: "none",
                            padding: "1.2rem 3.5rem", // Pulsante più imponente
                            fontSize: "1rem",
                            fontWeight: "700",
                            letterSpacing: "2px",
                            borderRadius: "0px", // Angoli retti tagliati: puro stile editoriale/brutalista
                            cursor: "pointer",
                            boxShadow: "0 10px 25px rgba(254, 240, 138, 0.15)",
                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-4px)";
                            e.currentTarget.style.backgroundColor = "#ffffff"; // Diventa bianco puro all'hover per un contrasto estremo
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