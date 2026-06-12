import { useState } from 'react';
import { useOverlook } from '../global_state/OverlookContext';
import logoRivoli from "../photos/logos/Logo_Rivoli.png";
import logoRivoliNegativo from "../photos/logos/logo_Rivoli_negativo.png";

export default function OVERLOOKbutton() {
    const { overlookState, setOverlookState } = useOverlook();
    const [isHovered, setIsHovered] = useState(false);

    const handleToggleOverlook = () => {
        setOverlookState(!overlookState);
    };

    // CONTENITORE PRINCIPALE (Il binario dello Switch)
    const switchContainerStyle = {
        position: "relative" as const,
        display: "flex",
        alignItems: "center",

        // LA SOLUZIONE AL BUG DI SBORDAMENTO: Gestiamo il movimento con Flexbox nativo
        // Se attivo spinge il toggle a destra (flex-end), se spento a sinistra (flex-start)
        justifyContent: overlookState ? "flex-end" : "flex-start",

        // Struttura fluida e responsive per smartphone e desktop
        width: "90%",
        maxWidth: "360px",
        height: "clamp(6rem, 22vw, 7.5rem)",

        // Cambia colore di sfondo in base allo stato
        backgroundColor: overlookState ? "#fef08a" : "#0f2042",

        // Modifica richiesta: Angoli smussati moderni per il grande rettangolo
        borderRadius: "16px",
        border: overlookState ? "2px solid #fef08a" : "2px solid rgba(255, 255, 255, 0.2)",
        cursor: "pointer",
        padding: "6px", // Spazio di rispetto interno entro cui si muove il cerchio
        boxSizing: "border-box" as const,

        // Animazioni e ombre cinematiche
        boxShadow: isHovered
            ? "0 20px 40px rgba(0, 0, 0, 0.25)"
            : "0 8px 20px rgba(0, 0, 0, 0.12)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    };

    // IL TOGGLE INTERNO (Il cursore animato con il logo)
    const toggleHandleStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        // Mantiene proporzioni perfette 1:1 basandosi sull'altezza interna disponibile
        height: "100%",
        aspectRatio: "1 / 1",

        // Colori invertiti rispetto allo sfondo del binario
        backgroundColor: overlookState ? "#0f2042" : "#ffffff",

        // Modifica richiesta: Trasformato in un cerchio perfetto
        borderRadius: "50%",

        // Transizione fluida e pulita gestita interamente dal motore di layout nativo
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 2
    };

    return (
        <div
            onClick={handleToggleOverlook}
            style={switchContainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="switch"
            aria-checked={overlookState}
        >
            {/* ETICHETTE DI SFONDO DI UX TECNICA */}
            <span style={{
                position: "absolute",
                right: "2rem",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#ffffff",
                opacity: overlookState ? 0 : 0.3,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
                display: "block",
                fontFamily: "system-ui, sans-serif"
            }}>
                ATTIVA
            </span>
            <span style={{
                position: "absolute",
                left: "2rem",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#0f2042",
                opacity: overlookState ? 0.4 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
                display: "block",
                fontFamily: "system-ui, sans-serif"
            }}>
                OVERLOOK ON
            </span>

            {/* Il Cursore Circolare dello Switch */}
            <div style={toggleHandleStyle}>
                <img
                    src={overlookState ? logoRivoliNegativo : logoRivoli}
                    alt="Logo Castello di Rivoli"
                    style={{
                        height: '65%', // Leggermente rimpicciolito per stare d'incanto dentro la forma sferica
                        width: 'auto',
                        objectFit: 'contain' as const,
                        transition: "transform 0.4s ease",
                        transform: isHovered ? "scale(1.05)" : "scale(1)"
                    }}
                />
            </div>
        </div>
    );
}