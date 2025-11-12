import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import './App.css'
import HeroSlider from './components/HeroSlider'
import Story from './components/Story'
import AndromedaEdge from './components/AdEdge'
import Standards from './components/Standars'
import Trust from './components/Trust'
import Award from './components/Award'
import News from './components/News'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <Story />
              <AndromedaEdge />
              <Standards />
              <Trust />
              <Award />
              <News />
              <Contact/>
            </>
          }
        />
       
        {/* Home route */}
        <Route
          path="/about"
          element={
            <>
             <About />
              <Story />
              <AndromedaEdge />
              <Standards />
              <Trust />
              <Award />
              <News />
            </>
          }
        />
        {/* About page */}
        

        {/* Add more pages if needed */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
