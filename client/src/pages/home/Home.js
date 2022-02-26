import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import MobileLandingImg from '../../images/mobile-landing.jpg'
import Logo from '../../images/logo-white.png'
import Img1 from '../../images/home-img1.jpg'
import Img2 from '../../images/home-img2.jpg'
import Img3 from '../../images/home-img3.jpg'
import Tat1 from '../../images/tat1.jpeg'
import Tat2 from '../../images/tat2.jpeg'
import Tat3 from '../../images/tat3.jpeg'
import Tat4 from '../../images/tat4.jpeg'
const Home = () => {
    return (
        <div className="home">
            <img src={MobileLandingImg} className="mobile-landing" alt="Mobile Landing Img" />
            
            <div className="overlay">
                <img src={Logo} className="logo" alt="logo" />
                <Link to='/book' className="book-link"> Book Now </Link>
            </div>

            <div className="covid">
                <p className="covid-msg">
                Due to Covid-19 resctrictions, our artists are currently appointment only until further notice.
                </p>
            </div>

            <div className="content">
                <div className="content-items">
                    <div className="content-overlay1">
                        <Link to='/about' className="content-link"> About </Link>
                    </div>

                    <img src={Img1} className="home-imgs" alt="img 1" />
                </div>

                <div className="content-items">
                    <div className="content-overlay2">
                        <Link to='/artists' className="content-link"> Artists </Link>
                    </div>

                    <img src={Img2} className="home-imgs" alt="img 2" />
                </div>

                <div className="content-items">
                    <div className="content-overlay3">
                        <Link to='/contact' className="content-link"> Contact  </Link>
                    </div>

                    <img src={Img3} className="home-imgs" alt="img 3" />
                </div>

            </div>

            <div className="recent-work">
                <div className="recent-item">
                    <h1 className="recent-title"> Recent Work </h1>
                </div>

                <div className="recent-item">
                    <img src={Tat1} className="home-imgs" alt="tat 1" />
                </div>

                <div className="recent-item">
                    <img src={Tat2} className="home-imgs" alt="tat 2" />
                </div>

                <div className="recent-item">
                    <img src={Tat3} className="home-imgs" alt="tat 3" />
                </div>

                <div className="recent-item">
                    <img src={Tat4} className="home-imgs" alt="tat 4" />
                </div>
            </div>
        </div>
    )
}

export default Home