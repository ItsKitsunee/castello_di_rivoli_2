import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NavBar from './components/NavBar'
import './App.css'
import {Footer} from "./components/contatti.tsx";
import VideoComponent from "./components/VideoComponent.tsx";
import  Hero from "./components/hero.tsx"

function App() {
  const [sideOverlook, setSideOverlook] = useState(false)

  return (
    <>
      <NavBar />

        <VideoComponent/>
        <Hero/>


    </>
  )
}

export default App
