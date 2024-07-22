import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import VideoBackground from './components/background.jsx'
import PokemonComponent from './components/fetch.jsx'
function App() {

  return (
    <>
    <VideoBackground />
    <Header></Header>

    <main>
      <PokemonComponent/>
    </main>

    </>
  )
}

export default App
