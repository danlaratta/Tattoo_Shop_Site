import React from 'react'
import './home.css'
import MobileLandingImg from '../../images/mobile-landing.jpg'

const Home = () => {
    return (
        <div className="home">
            <img src={MobileLandingImg} className="mobile-landing" alt="Mobile Landing Img" />
        </div>
    )
}

export default Home