import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NavBar from './components/NavBar'
import './App.css'
import {Footer} from "./components/contatti.tsx";
import VideoComponent from "./components/VideoComponent.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
        <main>
        </main>
        <VideoComponent/>

    </>
  )
}

export default App
