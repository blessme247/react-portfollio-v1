import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

// Images Import
import project1 from "../../assets/1.png"
import project2 from "../../assets/2.png"
import project3 from "../../assets/3.png"
import Project from "../../Components/Project/Project";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  //   const component = useRef(null);
  // const slider = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let projectLinks = gsap.utils.toArray(".projectLink");
  //     gsap.to(projectLinks, {
  //       xPercent: -100 * (projectLinks.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: component.current,
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (projectLinks.length - 2),
  //         end: () => "+=" + slider.current.offsetWidth
  //       }
  //     });
  //   }, component);
  //   return () => ctx.revert();
  // });


  return (
  <section className="projectsSection" >

    <div className="container">
    <div className="sectionHeading projectSectionHeading">Projects</div>
    </div>
    <div className="projects">
  <Project image={project1} projectTitle="Tiidelab Fellows" projectLink="https://tiidelabcohort4.netlify.app/"/>
  <div className="divider" />

  <Project image={project2} projectTitle="Payment Integration App" projectLink="https://instantpay-blessme.netlify.app/"/>
  <div className="divider" />

  <Project image={project3} projectTitle="Fullstack Todo App" projectLink="https://blessmetodowithreact.netlify.app/"/>
  <div className="divider" />
</div>

</section>
  )
}

export default Projects