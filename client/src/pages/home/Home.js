import React from 'react'
import './home.css'
import MobileLandingImg from '../../images/mobile-landing.jpg'
import MobileLandingImg2 from '../../images/mobile-landing2.jpg'

const Home = () => {
    return (
        <div className="home">
            <img src={MobileLandingImg2} className="mobile-landing" alt="Mobile Landing Img" />
            
            <div className="overlay">
                <h2 className="small-title"> Welcome to </h2>
                <h1 className="large-title"> Tattoo Shop </h1>
                <button></button>
            </div>
        </div>
    )
}

export default Home