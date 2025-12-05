import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import './App.css'
import HeroSlider from './components/HeroSlider'

import Standards from './components/Standars'
import Trust from './components/Trust'

import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import HomeLoan from './Pages/HomeLoan'
import BusinessLoan from './Pages/BusinessLoan'
import MachineLoan from './Pages/MachineLoan'
import LoanAgainstProperty from './Pages/LoanAgainstProperty'
import EMICalculator from './components/EMICalculator'
import ScrollToTop from './components/ScrollToTop'
import Careers from './Pages/Careers'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <Standards />
              <Trust />
              <EMICalculator/>
              <Contact/>
            </>
          }
        />
       
        {/* Other routes */}
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/HomeLoan" element={<HomeLoan />} />
        <Route path="/BusinessLoan" element={<BusinessLoan />} />
        <Route path="/MachineLoan" element={<MachineLoan />} />
        <Route path="/LoanAgainstProperty" element={<LoanAgainstProperty />} />
        <Route path="/EMICalculator" element={<EMICalculator />} />
        <Route path="/Careers" element={<Careers/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>

      </Routes>

      <Footer />
    </Router>
  )
}

export default App;