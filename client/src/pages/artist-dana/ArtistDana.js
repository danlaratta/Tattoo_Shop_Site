import React from 'react'
import Artists from '../../components/artists/Artists'
import DanaImg from '../../images/tattoo-artist-2.jpg'
import Tat1 from '../../images/tat1.jpeg'
import Tat2 from '../../images/tat3.jpeg'
import Tat3 from '../../images/tat7.jpeg'
import Tat4 from '../../images/tat8.jpeg'

const ArtistDana = () => {

    const name = 'Dana Johnson'
    const firstName = name.replace('Johnson', '')
    const desc = `has been tattooing for 4 years. She is known for her Neo Traditional style of tattooing, but will take on any style of tattoos. Before joining Tattoo Studio, ${firstName} apprenticed at a nearby tattoo shop for over a year. When she's not doodelying, you can catch her relaxing on the beach.`
    
    return (
        <div className="dana">
            <Artists 
                artist={name} 
                description={desc}
                artistImg={DanaImg} 
                img1={Tat1} 
                img2={Tat2} 
                img3={Tat3} 
                img4={Tat4} 
            />
        </div>
    )
}

export default ArtistDana