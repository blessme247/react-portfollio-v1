
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";


import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Tools = () => {

  return (


 <section className='mobileProjectsSection'>

<div className="container">
    <div className="sectionHeading projectSectionHeading text__reveal">Tools</div>
  
  
        <div className="projects">
            <Link className="project" target="blank" to="https://github.com/blessme247/email-verify/"> 
            <p className='projectTitle'>Email Verify</p>
            <p className="projectYear">2025</p>
            </Link>

           <Link className="project" target="blank" to="https://svg-shape-to-path-converter.vercel.app/"> 
            <p className='projectTitle'>Svg shape to path converter</p>
            <p className="projectYear">2025</p>
            </Link>
            
        </div>

        </div>
    </section>
  )
}

export default Tools
