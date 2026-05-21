// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="site-footer"> {/* O usa i componenti di layout del tuo framework */}
            <div className="footer-container">

                {/* Sezione Contatti */}
                <div className="footer-section">
                    <p>
                        <a href="mailto:info@castellodirivoli.org">info@castellodirivoli.org</a><br />
                        <a href="tel:+390119565222">T +39 011.9565.222</a><br />
                        Piazza Mafalda di Savoia - 10098 Rivoli - Torino<br />
                        P.IVA e C.F. 04848010015
                    </p>
                </div>

                {/* Sezione Orari */}
                <div className="footer-section">
                    <h3>Castello di Rivoli</h3>
                    <p>Da mercoledì a venerdì: 10:00 - 17:00<br />Sabato e domenica: 11:00 - 18:00</p>
                </div>

                {/* Link Istituzionali */}
                <div className="footer-section">
                    <ul>
                        <li><a href="/amministrazione">Amministrazione trasparente</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};