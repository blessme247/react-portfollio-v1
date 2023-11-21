import React, { useState, useEffect } from "react";
import CircularText from "../../assets/Abraham.svg";
import Blessme from "../../assets/blessme.png";
import { gsap, Power3 } from "gsap";

const Hero = () => {
  useEffect(() => {
    
    let tl = gsap.timeline();

    tl.fromTo(".heroContent", {
      opacity: 0,
      duration: 1,
    },{
      opacity: 1,
      duration: 1,
      ease: Power3.bounce,
    })
      .from(
        ".top h3",
        {
          duration: 0.7,
          yPercent: 100,
          stagger: {
            amount: 0.05,
          },
          opacity: 0, 
          ease: "power4.out",
        }
        )
      .from(
        ".circularTextWrapper",
        {
          opacity: 0,
          scale: 1.2,
          ease: "power4.out" 
        }
      )
      .to(
        ".circularTextWrapper",
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power4.out" 
        },
        "<"
      ).from(".bottom p", {
        y: -5,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out"
      },)

    // Cleanup function
    return () => {
      tl.kill(); // Optional: Kill the timeline on component unmount
    };
  }, []);

  const [isHover, setHover] = useState(false);
  return (
    <section className="heroSection">
      <div className="container">
        <div className="heroContent">
          <div className="top">
            <h3 data-splitting="words">FRONTEND DEVELOPER</h3>

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
