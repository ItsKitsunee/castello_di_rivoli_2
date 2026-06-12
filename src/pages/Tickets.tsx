import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageBiglietti from "../photos/pics/img_biglietterie.jpeg"

export default function Tickets() {
    const navigate = useNavigate();

    // Stati del form per la gestione dell'acquisto
    const [ticketType, setTicketType] = useState('intero');
    const [quantity, setQuantity] = useState(1);
    const [visitDate, setVisitDate] = useState('');
    const [visitTime, setVisitTime] = useState('09:00');

    // Calcolo dinamico del prezzo (Prezzi d'arte contemporanea / museale)
    const prices: { [key: string]: number } = {
        intero: 15,
        ridotto: 6.5,
        scuole: 0,
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logica futura di checkout / salvataggio nel global state
        alert(`Ordine Confermato!\nTipologia: ${ticketType}\nQuantità: ${quantity}\nData: ${visitDate} ore ${visitTime}\nTotale: ${prices[ticketType] * quantity}€`);
    };

    return (
        <div className="tickets-page-container">
            {/* Sezione Sinistra: Form Editoriale Rigoroso */}
            <div className="tickets-form-section">
                <div className="tickets-back-nav" onClick={() => navigate('/')}>
                    ← TORNA ALLA HOME
                </div>

                <div className="tickets-header-block">
                    <span className="tickets-subtitle">BIGLIETTERIA // PRENOTAZIONI</span>
                    <h1 className="tickets-main-title">Scegli il tipo di Biglietto</h1>
                </div>

                <form onSubmit={handleFormSubmit} className="editorial-form">
                    {/* SELEZIONE TIPOLOGIA */}
                    <div className="form-group">
                        <label className="form-label">1. Seleziona la Tariffa</label>
                        <div className="ticket-type-grid">
                            {[
                                { id: 'intero', label: 'Intero', desc: 'Accesso standard alle collezioni e mostre temporanee.', price: prices.intero },
                                { id: 'ridotto', label: 'Ridotto', desc: 'Studenti universitari, over 65 e convenzioni.', price: prices.ridotto },
                                { id: 'scuole', label: 'Gratuito', desc: 'Tariffa gratuita per minori di 11 anni, persone con disabilità e accompagnatori, guide turistiche, soci ICOM e CIMAM, possessori di Abbonamento Musei Piemonte e Valle d’Aosta, Torino + Piemonte Card, Royal Card e Contemporary Card.', price: prices.scuole },
                            ].map((type) => (
                                <div
                                    key={type.id}
                                    className={`ticket-selector-card ${ticketType === type.id ? 'active' : ''}`}
                                    onClick={() => setTicketType(type.id)}
                                >
                                    <div className="selector-header">
                                        <span className="selector-title">{type.label}</span>
                                        <span className="selector-price">{type.price}€</span>
                                    </div>
                                    <p className="selector-desc">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DATA E ORA */}
                    <div className="form-row-double">
                        <div className="form-group">
                            <label className="form-label" htmlFor="visit-date">2. Data di Visita</label>
                            <input
                                type="date"
                                id="visit-date"
                                className="editorial-input"
                                required
                                value={visitDate}
                                onChange={(e) => setVisitDate(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="visit-time">3. Orario d'Ingresso</label>
                            <select
                                id="visit-time"
                                className="editorial-input"
                                value={visitTime}
                                onChange={(e) => setVisitTime(e.target.value)}
                            >
                                <option value="10:00">09:00 (Apertura)</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00 (Ultimo slot)</option>
                            </select>
                        </div>
                    </div>

                    {/* QUANTITÀ */}
                    <div className="form-group quantity-wrapper">
                        <label className="form-label" htmlFor="ticket-quantity">4. Numero di Biglietti</label>
                        <div className="quantity-counter">
                            <button
                                type="button"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="qty-btn"
                            >-</button>
                            <span className="qty-value">{quantity}</span>
                            <button
                                type="button"
                                onClick={() => setQuantity(quantity + 1)}
                                className="qty-btn"
                            >+</button>
                        </div>
                    </div>

                    {/* RIEPILOGO MONUMENTALE E SUBMIT */}
                    <div className="form-summary-checkout">
                        <div className="summary-text-block">
                            <span className="summary-label">TOTALE DA CORRISPONDERE:</span>
                            <h2 className="summary-total-price">{prices[ticketType] * quantity}€</h2>
                        </div>
                        <button type="submit" className="tickets-submit-button">
                            PROCEDI AL PAGAMENTO VIA STRIPE →
                        </button>
                    </div>
                </form>
            </div>

            {/* Sezione Destra: Banner Espositivo/Informativo */}
            <div className="tickets-info-sidebar">
                <div className="sidebar-image-placeholder">
                    {/* Placeholder per l'immagine del museo reale */}
                    <img src={ImageBiglietti} alt="foto non inserita"/>
                </div>
                <div className="sidebar-content-overlay">
                    <span className="sidebar-tag">INFORMAZIONI IMPORTANTI</span>
                    <h3 className="sidebar-title">Dettagli di Accesso</h3>
                    <ul className="sidebar-info-list">
                        <li><strong>Validità:</strong> Il titolo di accesso è valido esclusivamente nella data e nella fascia oraria selezionata.</li>
                        <li><strong>Cambio data:</strong> Consentito online fino a 24 ore prima dell'evento.</li>
                        <li><strong>Sito protetto:</strong> Presentati all'ingresso 10 minuti prima dello slot prenotato provvisto di QR Code sul telefono.</li>
                    </ul>
                    <div className="sidebar-notice-amber">
                        <span className="amber-title">AVVISO CORRENTE</span>
                        <p>Il percorso "Overlook" prevede la visione zenitale dei soffitti barocchi tramite postazioni dedicate. Consigliato abbigliamento comodo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}