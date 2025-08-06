
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

// Images Import
// import project1 from "../../assets/1.png"
// import project2 from "../../assets/2.png"
// import project3 from "../../assets/3.png"
// import Project from "../../Components/Project/Project";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  return (
//   <section className="projectsSection" >

//     <div className="container">
//     <div className="sectionHeading projectSectionHeading">Projects</div>
//     </div>
//     <div className="projects">
//   <Project image={project3} projectTitle="Zinary Website" projectLink="https://www.zinary.com/"/>
//   <Project image={project1} projectTitle="Automedsys Website" projectLink="https://automedsys-clone.vercel.app/"/>
//   <div className="divider" />

//   <Project image={project2} projectTitle="E-commerce Website" projectLink="https://audiophile-ecommerce-247.vercel.app/"/>
//   <div className="divider" />

//   <div className="divider" />
// </div>

// </section>

 <section className='mobileProjectsSection '>

<div className="container">
    <div className="sectionHeading projectSectionHeading text__reveal">Projects</div>
        <div className="projects">
                      <Link className="project" target="blank" to="https://karashijewelers.com.com"> 
            <p className='projectTitle'>Karashi Jewelers</p>
            <p className="projectYear">2025</p>
            </Link>
            <Link className="project" target="blank" to="https://www.zinary.com"> 
            <p className='projectTitle'>Zinary Website</p>
            <p className="projectYear">2025</p>
            </Link>
            <Link className="project" target="blank" to="https://automedsys-clone.vercel.app/"> 
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

export default Projects
