export default function NewsSection() {
    return (
        <section className="egizio-section-light news-section-container">
            <h2 className="main-news-title">Scopri gli <span className="blue-text">appuntamenti</span> e le <span className="blue-text">notizie</span></h2>

            <div className="news-main-layout-two-columns">

                {/* COLONNA APPUNTAMENTI (SINISTRA) */}
                <div className="news-column">
                    <h3 className="column-tab-title">APPUNTAMENTI</h3>

                    <div className="news-grid-squares">
                        <div className="news-item-square">
                            <div className="amber-bar">05 giugno 2026</div>
                            <div className="item-content-square">
                                <span className="category">EVENTI SPECIALI</span>
                                <p>Frammenti di Nubia negli archivi del Museo Egizio</p>
                            </div>
                            <span className="arrow-right">&gt;</span>
                        </div>

                        <div className="news-item-square">
                            <div className="amber-bar">28 maggio 2026</div>
                            <div className="item-content-square">
                                <span className="category">CONFERENZE</span>
                                <p>Plasmare la devozione nella statuaria del Nuovo Regno - Alessandro Girardi</p>
                            </div>
                            <span className="arrow-right">&gt;</span>
                        </div>

                        <div className="news-item-square">
                            <div className="amber-bar">24 maggio 2026</div>
                            <div className="item-content-square">
                                <span className="category">EVENTI SPECIALI</span>
                                <p>ONDE – 24 maggio 2026 - "Percussions Trasformer"</p>
                            </div>
                            <span className="arrow-right">&gt;</span>
                        </div>
                    </div>

                    <button className="news-footer-btn-blue">SCOPRI TUTTI GLI APPUNTAMENTI</button>
                </div>

                {/* COLONNA NOTIZIE (DESTRA) */}
                <div className="news-column">
                    <h3 className="column-tab-title">NOTIZIE</h3>

                    <div className="news-grid-squares">
                        <div className="news-item-square">
                            <div className="amber-bar">Ultime notizie</div>
                            <div className="item-content-square">
                                <p className="no-category">Prende avvio l'iniziativa "Museo Sospeso" per la fruizione gratuita della cultura</p>
                            </div>
                            <span className="arrow-right">&gt;</span>
                        </div>

                        <div className="news-item-square">
                            <div className="amber-bar">Avvisi</div>
                            <div className="item-content-square">
                                <p className="no-category">Chiusura temporanea Gallerie della Cultura materiale al primo piano - 13 maggio 2026</p>
                            </div>
                            <span className="arrow-right">&gt;</span>
                        </div>

                        <div className="news-item-square">
                            <div className="amber-bar">Ultime notizie</div>
                            <div className="item-content-square">
                                <p className="no-category">Festa della Mamma - 10 maggio 2026</p>
                            </div>
                            <span className="arrow-right">&gt;</span>
                        </div>
                    </div>

                    <button className="news-footer-btn-blue">LEGGI TUTTE LE NOTIZIE</button>
                </div>

            </div>
        </section>
    );
}