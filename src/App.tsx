import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import VideoComponent from "./components/VideoComponent"
import Hero from "./components/hero"
import InfoGrid from "./components/InfoGrid"
import NewsSection from "./components/NewsSection"
import OverlookBox from "./components/OverlookBox"
import Tickets from "./pages/Tickets"
import './App.css'
import CameraPage from './pages/Camera.tsx';

// Creiamo un mini-componente per la Home per tenere pulito il router,
// oppure puoi dichiararlo direttamente nella Route.
function Home() {
    return (
        <>
            <VideoComponent />

            {/* Contenitore unico per contenere sia il video che i testi dell'Hero */}
            <div className="fullscreen-hero-wrapper">
                <Hero />
            </div>

            <OverlookBox />

            {/* Le nuove sezioni sotto l'Hero */}
            <InfoGrid />
            <NewsSection />
        </>
    )
}

function App() {
    return (
        <>
            {/* La barra di navigazione rimane fissa in cima a tutte le pagine */}
            <NavBar />

            {/* Il contenuto qui sotto cambierà in base all'URL */}
            <Routes>
                {/* Pagina principale (Home) */}
                <Route path="/" element={<Home />} />

                {/* Pagina dei Biglietti */}
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/AR" element={<CameraPage/>} />
            </Routes>
        </>
    )
}

export default App