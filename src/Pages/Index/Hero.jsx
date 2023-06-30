import React from 'react'
import CircularText from "../../assets/Abraham.svg"
import Blessme from "../../assets/blessme.png"

const Hero = () => {
  return (
    <section className='heroSection'>
        <div className="container">
            <div className="heroContent">
                <div className="top">
                <h3>
                    FRONTEND DEVELOPER
                </h3>

                <div className="circularTextWrapper">
                <img className='circularText' src={CircularText} alt="circular text" />
                <img className='avatarImg' src={Blessme} alt="abraham" />
                </div>
                </div>

                <div className="bottom">
                    <p>Available for Frontend Development Works</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero