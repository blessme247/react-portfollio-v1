import React from 'react'
import "./homepage.scss"
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import MobileProjects from './MobileProjects'

const Index = () => {
  return (
    <div className="pageWrapper">

        <Hero />
        <About />
        <Projects />
        <MobileProjects />
        <Contact />
    </div>
   
  )
}

export default Index