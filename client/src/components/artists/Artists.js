import React from 'react'
import './artists.css'



const Artists = ({ artist, description, artistImg, img1, img2, img3, img4 }) => {
    return (
        <div className="artists">
            <div className="artist-info">

                <img src={ artistImg } className="artists-landing" alt="artists Img" />
            
                <div className="artists-overlay">
                    <h1 className="page-title"> { artist } </h1> 
                </div>

                <p className="artist-desc">
                    <strong> { artist } </strong> { description }
                </p>

                <div className="portfolio-images">
                    <img src={img1} className="artists-img" alt="artists Img" />
                    <img src={img2} className="artists-img" alt="artists Img" />
                    <img src={img3} className="artists-img" alt="artists Img" />
                    <img src={img4} className="artists-img" alt="artists Img" />
                    <img src={img1} className="artists-img" alt="artists Img" />
                    <img src={img2} className="artists-img" alt="artists Img" />
                    <img src={img3} className="artists-img" alt="artists Img" />
                    <img src={img4} className="artists-img" alt="artists Img" />
                </div>

                
            </div>
        </div>
    )
}

export default Artists