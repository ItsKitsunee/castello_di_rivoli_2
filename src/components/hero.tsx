
import { useOverlook } from '../global_state/OverlookContext'; // Importa l'hook

export default function Hero() {
    const { overlookState, setOverlookState } = useOverlook(); // Usa l'hook per accedere allo stato e al dispatcher

    const handleToggleOverlook = () => {
        setOverlookState(!overlookState);
    };

    // Determina la classe CSS in base allo stato overlookState
    const buttonClassName = `Special-button-overlook ${overlookState ? 'Hero-button-white' : 'Hero-button-blue'}`;

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
                <button
                    className={buttonClassName}
                    onClick={handleToggleOverlook}
                >
                    {overlookState ? 'Overlook ON' : 'Overlook OFF'}
                </button>
            </div>
        </div>
    );
}