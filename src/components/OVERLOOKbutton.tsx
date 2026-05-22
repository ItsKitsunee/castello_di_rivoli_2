import { useOverlook } from '../global_state/OverlookContext'; // Importa l'hook
import logoRivoli from "../photos/logos/Logo_Rivoli.png.png"; // Importa il logo positivo
import logoRivoliNegativo from "../photos/logos/Logo_Rivoli_negativo.png"; // Importa il logo negativo

export default function OVERLOOKbutton() {
    const { overlookState, setOverlookState } = useOverlook(); // Usa l'hook per accedere allo stato e al dispatcher

    const handleToggleOverlook = () => {
        setOverlookState(!overlookState);
    };

    // Determina la classe CSS in base allsto stato overlookState
    const buttonClassName = `Special-button-overlook ${overlookState ? 'Hero-button-white' : 'Hero-button-blue'}`;

    return (
        <button
            className={buttonClassName}
            onClick={handleToggleOverlook}
            style ={{justifyContent:"center", alignItems:"center", width: "20rem"}}
        >
            {overlookState ? (
                        <img src={logoRivoli} alt="Overlook ON" style={{ height: '10rem'}} />
            ) : (
                <img src={logoRivoliNegativo} alt="Overlook OFF" style={{ height: '10rem' }} />
            )}
        </button>
    );
}
