import { useState } from 'react'
import './App.css'
import Navb from './components/Nav/Navb'
import Home from './components/Home/Home.jsx'
import Trending from './components/Trending/Trending.jsx'
import Community from './components/Community/Community.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'
import Explore from './components/Explore/Explore.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navb />
      <Home />
      <Explore />
      <Trending />
      <Community />
      <Contact />
      <Footer />
    </>
  )
}

export default App
