import React, { useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const [toggleMobile, setToggleMobile ] = useState(false)

    const handleIconClick = () => {
        setToggleMobile(!toggleMobile)
    }

    return (
        <div className="navbar">
            <div className="left-nav">
                <h1 className="logo-text"> TATTOO STUDIO </h1>
            </div>

            <div className="center-nav">
                <ul className={toggleMobile ? "mobile-nav" : "nav"}>
                    <li> <NavLink to='/' className="link"> Book Appointment </NavLink> </li>
                    <li> <NavLink to='/' className="link"> About </NavLink> </li>
                    <li> <NavLink to='/' className="link"> Artists </NavLink> </li>
                    <li> <NavLink to='/' className="link"> Contact Us </NavLink> </li>
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