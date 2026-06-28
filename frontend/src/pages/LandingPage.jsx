import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const LandingPage = () => {
  return (
    <div className='bg-amber-50'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
    </div>
  )
}

export default LandingPage