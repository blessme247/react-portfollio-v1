import React from 'react'
import { Link } from 'react-router-dom'

const MobileProjects = () => {
  return (
    <section className='mobileProjectsSection'>

<div className="container">
    <div className="sectionHeading projectSectionHeading">Projects</div>
        <div className="projects">
            <Link className="project" target="blank" to="https://instantpay-blessme.netlify.app/"> 
            <p className='projectTitle'>Payment Integration</p>
            <p className="projectYear">2023</p>
            </Link>
            <Link className="project" target="blank" to="https://tiidelabcohort4.netlify.app/"> 
            <p className='projectTitle'>TiideLab</p>
            <p className="projectYear">2022</p>
            </Link>
            <Link className="project" target="blank" to="https://audiophile-ecommerce-247.vercel.app/"> 
            <p className='projectTitle'>E-Commerce Website</p>
            <p className="projectYear">2023</p>
            </Link>
        </div>

        </div>
    </section>
  )
}

export default MobileProjects