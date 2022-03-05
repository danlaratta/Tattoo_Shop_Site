import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const [toggleMobile, setToggleMobile] = useState(false)
    const [showArtistLinks, setShowArtistLinks] = useState(false)
    const [showNavShadow, setShowNavShadow ] = useState(false)

    const handleIconClick = () => {
        setToggleMobile(!toggleMobile)
        setShowArtistLinks(false)
    }

    const hideMobileNav = () => {
        setToggleMobile(false)
        setShowArtistLinks(false)
    }

    const handleArtistLinkClick = () => {
        setShowArtistLinks(!showArtistLinks)
    }
    
    // add navbar box shadow when scrolling past the landing img 
    const toggleNavBoxShadow = () => {
        if(window.scrollY >= 715){
            setShowNavShadow(true)
        }
        else{
            setShowNavShadow(false)
        }
    }

    window.addEventListener('scroll', toggleNavBoxShadow)



    return (
        <div className={showNavShadow ? "shadow-navbar" : "navbar"}>
            <div className="left-nav">
                <Link to='/' className="logo-text" onClick={hideMobileNav}> TATTOO STUDIO </Link>
            </div>
            
            <div className="center-nav">
                <ul className={toggleMobile ? "mobile-nav" : "nav"}>
                    <li> <NavLink to='/book-appointment' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Book Tattoo </NavLink> </li>
                    <li className="link" onClick={handleArtistLinkClick}> 
                        Artists <i className={showArtistLinks ? "caret-icon fa-solid fa-caret-up" : "caret-icon fa-solid fa-caret-down"}/>
                    </li>
                    
                    <ul className={showArtistLinks ? "artists" : "hide-artists"}>
                        <li> <NavLink to='/artists/Dan' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Dan Smith </NavLink> </li>
                        <li> <NavLink to='/artists/Dana' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Dana Johnson </NavLink> </li>
                        <li> <NavLink to='/artists/Mark' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Mark Williams </NavLink> </li>
                    </ul>

                    <li> <NavLink to='/aftercare' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Aftercare </NavLink> </li>
                    <li> <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Contact Us </NavLink> </li>
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