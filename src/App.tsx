import { Routes, Route, Link } from 'react-router-dom' // <-- Aggiunto Link qui
import NavBar from './components/NavBar'
import VideoComponent from "./components/VideoComponent"
import Hero from "./components/hero"
import InfoGrid from "./components/InfoGrid"
import NewsSection from "./components/NewsSection"
import OverlookBox from "./components/OverlookBox"
import Tickets from "./pages/Tickets"
import './App.css'
import CameraPage from './pages/Camera'

// Mini-componente per la Home
function Home() {
    return (
        <>
            <VideoComponent />

            {/* Contenitore unico per il video e i testi dell'Hero */}
            <div className="fullscreen-hero-wrapper">
                <Hero />
            </div>

            <OverlookBox />

            {/* Le sezioni sotto l'Hero */}
            <InfoGrid />
            <NewsSection />
        </>
    )
}

function App() {
    return (
        <>
            {/* La barra di navigazione rimane fissa in cima */}
            <NavBar />

            {/* PULSANTE DI TEST PER L'AR (Viene renderizzato subito sotto la NavBar) */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '1rem 0',
                backgroundColor: '#fff4a3',
                position: 'relative',
                zIndex: 1000
            }}>
                <Link
                    to="/AR"
                    style={{
                        padding: "0.6rem 1.8rem",
                        backgroundColor: "#0f2042",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: "bold",
                        borderRadius: "4px",
                        display: "inline-block",
                        fontSize: "0.9rem"
                    }}
                >
                    📸 PROVA FOTOCAMERA AR
                </Link>
            </div>

            {/* Il contenuto cambierà in base all'URL */}
            <Routes>
                {/* Pagina principale (Home) */}
                <Route path="/" element={<Home />} />

                {/* Pagina dei Biglietti */}
                <Route path="/tickets" element={<Tickets />} />

                {/* Pagina della Fotocamera */}
                <Route path="/AR" element={<CameraPage/>} />
            </Routes>
        </>
    )
}

export default App