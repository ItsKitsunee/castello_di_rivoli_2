export default function InfoGrid() {
    return (
        <section className="egizio-section-light info-grid-container">
            {/* Blocco Orari e Contatti */}
            <div className="info-card info-text-block">
                <div className="info-section">
                    <h3>Orari</h3>
                    <p>Aperto da mercoledì a venerdì <br/>10:00 - 17:00<br/> sabato e domenica<br/>11:00 -18:00</p>
                    <a href="#" className="egizio-link">TUTTE LE APERTURE &gt;</a>
                </div>
                <div className="info-section">
                    <h3>Dove siamo</h3>
                    <p>Piazza Mafalda di Savoia <br/>10098 Rivoli - Torino</p>
                    <a href="#" className="egizio-link">COME RAGGIUNGERCI &gt;</a>
                </div>
                <div className="info-section">
                    <h3>Prenotazioni</h3>
                    <p>011 9565 222<br/>info@castellodirivoli.org</p>
                </div>
            </div>

            {/* Card Biglietto */}
            <div className="info-card avviso">
                <span className="badge">AVVISI</span>
                <h2>Acquista il biglietto</h2>
                <p className="sub">solo online</p>
            </div>

            {/* Card Chiusura Sale */}
            <div className="info-card evento">
                <span className="badge">AVVISI</span>
                <h2>Riallestimenti di Collezione che includono: Senza titolo, 1967-1969, di Gino de Dominicis, Da dove….. (1983-7-), 1983, Da dove… (1984-1), 1984, Di umano ’85 – II –, 1985, di Emilio Vedova, Persone nere, 1984, di Michelangelo Pistoletto, Senza titolo, 1985, di Marisa Merz.</h2>
                <p className="sub">Primavera 2026</p>
            </div>

            {/* Card Evento Oltre il Visibile */}
            <div className="info-card evento">
                <span className="badge">APPUNTAMENTI</span>
                <h2>Evento gratuito: Tra primavera ed estate, il Programma Pubblico del Castello di Rivoli mette in scena musica, performance, pratiche condivise, coreografiche ed editoriali in relazione al Museo e la sua architettura. </h2>
                <p className="sub">Lunedì 18 maggio 2026</p>
            </div>
        </section>
    );
}