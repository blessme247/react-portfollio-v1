import React from 'react'
import "./homepage.scss"
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Index = () => {
  return (
    <div className="pageWrapper">

        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
   
  )
}

export default Index