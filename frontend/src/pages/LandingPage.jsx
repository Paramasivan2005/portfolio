import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'

const LandingPage = () => {
  return (
    <div className='bg-amber-50/50'>
        <Navbar />
        <Home />
        <About />
        <Skills />
    </div>
  )
}

export default LandingPage