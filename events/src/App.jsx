import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/home'
import Events from './pages/events'
import Suggestion from './pages/suggestion'
import Footer from './pages/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    <Events />
    <Suggestion />
    <Footer/>
    <div></div>
    </>
  )
}

export default App
