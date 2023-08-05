import React, { useState, useEffect } from "react";
import CircularText from "../../assets/Abraham.svg";
import Blessme from "../../assets/blessme.png";
import { gsap, Power3 } from "gsap";

const Hero = () => {
 
    // useEffect(() => {
    //     let tl = gsap.timeline();
    
    //     tl.from(".heroSection", {
    //       opacity: 0,
    //     })
    //       .to(".heroSection", {
    //         opacity: 1,
    //         delay: 0.3,
    //         duration: 1.5,
    //         ease: Power3.bounce,
    //         transformStyle: "preserve-3d",
    //       }).set(".circularTextWrapper img", {
    //         scale: 1.5
    //       }).to(".circularTextWrapper img", {
    //         scale: 1,
    //         duration: 0.5,
    //         // ease: Power3.bounce
    //       })
    
    //     // Cleanup function
    //     return () => {
    //       tl.kill(); // Optional: Kill the timeline on component unmount
    //     };
    //   }, []);

  const [isHover, setHover] = useState(false);
  return (
    <section className="heroSection">
      <div className="container">
        <div className="heroContent">
          <div className="top" >
            <h3 data-animation="headerDelayed">FRONTEND DEVELOPER</h3>

            <div className="circularTextWrapper">
              <img
                className="circularText"
                src={CircularText}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                alt="circular text"
              />
              <img
                className="avatarImg"
                style={{
                  filter: isHover ? "grayscale(0%)" : "grayscale(100%)",
                }}
                src={Blessme}
                alt="abraham"
              />
            </div>
          </div>

          <div className="bottom">
            <p>Available for Frontend Development Works</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
