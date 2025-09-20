
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

     const projects = [
    {title: "HR Management dashboard", url: "https://humanline-dashboard-app.vercel.app/", year: "2025"},
    {title: "Karashi Jewelers Blog", url: "https://karashijewelers.com", year: "2025"},
    {title: "Zinary Website", url: "https://www.zinary.com", year: "2025"},
    {title: "Automedsys Website", url: "https://automedsys-clone.vercel.app/", year: "2025"},
    {title: "Audiophile E-commerce", url: "https://audiophile-ecommerce-247.vercel.app/", year: "2023"},
    ]

  return (

 <section className='mobileProjectsSection '>

<div className="container">
    <div className="sectionHeading projectSectionHeading text__reveal">Projects</div>
        <div className="projects">
          {projects.map((project, i)=>{
            return (
              <Link key={i} className="project" target="blank" to={project.url}> 
              <p className='projectTitle'>{project.title}</p>
              <p className="projectYear">{project.year}</p>
              </Link>
                  )
          })}
           
            
        </div>

        </div>
    </section>
  )
}

export default Projects
