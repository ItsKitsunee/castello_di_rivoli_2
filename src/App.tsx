import { useState } from 'react'
import NavBar from './components/NavBar'
import VideoComponent from "./components/VideoComponent.tsx"
import Hero from "./components/hero.tsx"
import InfoGrid from "./components/InfoGrid.tsx"
import NewsSection from "./components/NewsSection.tsx"
import './App.css'
import OverlookBox from "./components/OverlookBox.tsx";

function App() {
    return (
        <>
            <NavBar />

            {/* Contenitore unico per contenere sia il video che i testi dell'Hero */}
            <div className="fullscreen-hero-wrapper">

                <Hero />
            </div>
            <OverlookBox/>

            {/* Le nuove sezioni sotto l'Hero (Immagine 1 e Immagine 2) */}
            <InfoGrid />
            <NewsSection />
        </>
    )
}

export default App