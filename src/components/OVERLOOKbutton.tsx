import { useState } from 'react'; // 1. Aggiunto useState per l'hover
import { useOverlook } from '../global_state/OverlookContext';
import logoRivoli from "../photos/logos/Logo_Rivoli.png.png";
import logoRivoliNegativo from "../photos/logos/Logo_Rivoli_negativo.png";

export default function OVERLOOKbutton() {
    const { overlookState, setOverlookState } = useOverlook();
    const [isHovered, setIsHovered] = useState(false); // Stato per gestire l'hover

    const handleToggleOverlook = () => {
        setOverlookState(!overlookState);
    };

    const buttonClassName = `Special-button-overlook ${overlookState ? 'Hero-button-white' : 'Hero-button-blue'}`;

    // 2. Stile dinamico per renderlo accattivante
    const baseButtonStyle = {
        display: "flex", // Assicura che justify e align funzionino perfettamente
        justifyContent: "center",
        alignItems: "center",
        width: "25rem", // Leggermente più largo per dare respiro al logo
        height: "14rem",
        border: "none",
        cursor: "pointer",
        borderRadius: "12px", // Angoli smussati per un look moderno e pulito
        boxShadow: isHovered
            ? "0 12px 24px rgba(0, 0, 0, 0.15)" // Ombra profonda all'hover
            : "0 4px 12px rgba(0, 0, 0, 0.08)", // Ombra soft di base
        transform: isHovered ? "scale(1.03)" : "scale(1)", // Micro-ingrandimento cinematico
        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)", // Transizione fluida ed elegante
    };

    return (
        <button
            className={buttonClassName}
            onClick={handleToggleOverlook}
            style={baseButtonStyle}
            onMouseEnter={() => setIsHovered(true)}  // Attiva hover
            onMouseLeave={() => setIsHovered(false)} // Disattiva hover
        >
            <img
                src={overlookState ? logoRivoli : logoRivoliNegativo}
                alt={overlookState ? "Overlook ON" : "Overlook OFF"}
                style={{
                    height: '10rem',
                    transition: "transform 0.3s ease",
                    transform: isHovered ? "scale(1.05)" : "scale(1)" // Il logo si ingrandisce un pelo più del bottone
                }}
            />
        </button>
    );
}