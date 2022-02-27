import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const [toggleMobile, setToggleMobile ] = useState(false)

    const handleIconClick = () => {
        setToggleMobile(!toggleMobile)
    }

    const hideMobileNav = () => {
        setToggleMobile(false)
    }

    return (
        <div className="navbar">
            <div className="left-nav">
                <Link to='/' className="logo-text"> TATTOO STUDIO </Link>
            </div>

            <div className="center-nav">
                <ul className={toggleMobile ? "mobile-nav" : "nav"}>
                    <li> <NavLink to='/book' className="link" onClick={hideMobileNav}> Book Appointment </NavLink> </li>
                    <li> <NavLink to='/aftercare' className="link" onClick={hideMobileNav}> Aftercare </NavLink> </li>
                    <li> <NavLink to='/artists' className="link" onClick={hideMobileNav}> Artists </NavLink> </li>
                    <li> <NavLink to='/contact' className="link" onClick={hideMobileNav}> Contact Us </NavLink> </li>
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