
import { Link } from 'react-router-dom'

const MobileProjects = () => {
  return (
    <section className='mobileProjectsSection'>

<div className="container">
    <div className="sectionHeading projectSectionHeading text__reveal">Projects</div>
        <div className="projects">
            <Link className="project" target="blank" to="https://audiophile-ecommerce-247.vercel.app/"> 
            <p className='projectTitle'>Zinary Website</p>
            <p className="projectYear">2025</p>
            </Link>
            <Link className="project" target="blank" to="https://instantpay-blessme.netlify.app/"> 
            <p className='projectTitle'>Automedsys Website</p>
            <p className="projectYear">2025</p>
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