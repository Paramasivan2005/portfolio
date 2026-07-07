import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='bg-amber-50 dark:bg-gray-900 transition-colors duration-300'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default LandingPage