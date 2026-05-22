export default function InfoGrid() {
    return (
        <section className="egizio-section-light info-grid-container">
            {/* Blocco Orari e Contatti */}
            <div className="info-card info-text-block">
                <div className="info-section">
                    <h3>Orari</h3>
                    <p>Aperto oggi dalle 09:00 alle 18:30</p>
                    <a href="#" className="egizio-link">TUTTE LE APERTURE &gt;</a>
                </div>
                <div className="info-section">
                    <h3>Dove siamo</h3>
                    <p>Via Accademia delle Scienze 6<br/>10123 Torino</p>
                    <a href="#" className="egizio-link">COME RAGGIUNGERCI &gt;</a>
                </div>
                <div className="info-section">
                    <h3>Prenotazioni</h3>
                    <p>011 44 06 903<br/>info@museitorino.it</p>
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
                <h2>Chiusura Sale Storiche</h2>
                <p className="sub">Dal 12 dicembre 2025</p>
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