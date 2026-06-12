import { Routes, Route } from 'react-router-dom' // <-- Importa i componenti per il routing
import NavBar from './components/NavBar'
import VideoComponent from "./components/VideoComponent.tsx"
import Hero from "./components/hero.tsx"
import InfoGrid from "./components/InfoGrid.tsx"
import NewsSection from "./components/NewsSection.tsx"
import OverlookBox from "./components/OverlookBox.tsx"
import Tickets from "./pages/Tickets.tsx" // <-- Importa la tua nuova pagina Tickets
import './App.css'

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
            </Routes>
        </>
    )
}

export default App