import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1>Frontend + Backend</h1>
      <p>JOKES: {jokes.length}</p>
    </>
  )
}

export default App
