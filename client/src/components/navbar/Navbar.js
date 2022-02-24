import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../images/tattoo-logo.png'

const Navbar = () => {

    const [toggleMobile, setToggleMobile ] = useState(false)

    const handleIconClick = () => {
        setToggleMobile(!toggleMobile)
    }

    return (
        <div className="navbar">
            <div className="left-nav">
                <img src={Logo} alt="logo" />
            </div>

            <div className="center-nav">
                <ul className={toggleMobile ? "mobile-nav" : "nav"}>
                    <li className="link"> Book Appointment </li>
                    <li className="link"> About </li>
                    <li className="link"> Artists </li>
                    <li className="link"> Contact Us </li>
                </ul>
            </div>

            <div className="right-nav">
                <button className="mobile-icon-btn" onClick={handleIconClick}> 
                    <i className={ toggleMobile ? "mobile-close fa-solid fa-xmark" : "mobile-bars fa-solid fa-bars"}/> 
                </button>
            </div>
        </div>
    )
}

export default Navbar