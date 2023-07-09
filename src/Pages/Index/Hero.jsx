import React, {useState} from 'react'
import CircularText from "../../assets/Abraham.svg"
import Blessme from "../../assets/blessme.png"

const Hero = () => {
    const [isHover, setHover] = useState(false)
  return (
    <section className='heroSection'>
        <div className="container">
            <div className="heroContent">
                <div className="top">
                <h3>
                    FRONTEND DEVELOPER
                </h3>

                <div className="circularTextWrapper"  >
                <img className='circularText' src={CircularText} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} alt="circular text" />
                <img className='avatarImg' style={ { filter: isHover ? "grayscale(0%)" : "grayscale(100%)"}} src={Blessme} alt="abraham" />
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