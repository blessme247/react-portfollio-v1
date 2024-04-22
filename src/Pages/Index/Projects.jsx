import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

// Images Import
import project1 from "../../assets/1.png"
import project2 from "../../assets/2.png"
import project3 from "../../assets/3.png"
import Project from "../../Components/Project/Project";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  return (
  <section className="projectsSection" >

    <div className="container">
    <div className="sectionHeading projectSectionHeading">Projects</div>
    </div>
    <div className="projects">
  <Project image={project3} projectTitle="E-Commerce Website" projectLink="https://audiophile-ecommerce-247.vercel.app/"/>
  <Project image={project1} projectTitle="Tiidelab Fellows" projectLink="https://tiidelabcohort4.netlify.app/"/>
  <div className="divider" />

  <Project image={project2} projectTitle="Payment Integration App" projectLink="https://instantpay-blessme.netlify.app/"/>
  <div className="divider" />

  <div className="divider" />
</div>

</section>
  )
}

export default Projects
