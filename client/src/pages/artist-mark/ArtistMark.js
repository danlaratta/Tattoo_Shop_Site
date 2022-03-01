import React from 'react'
import Artists from '../../components/artists/Artists'
import DanaImg from '../../images/tattoo-artist-3.jpg'
import Tat1 from '../../images/tat9.jpeg'
import Tat2 from '../../images/tat10.jpeg'
import Tat3 from '../../images/tat11.jpeg'
import Tat4 from '../../images/tat12.jpeg'

const ArtistMark = () => {

    const name = 'Mark Williams'
    const firstName = name.replace('Williams', '')
    const desc = `has been tattooing for 9 years. Although his favorite style of tattoing is Realism, he enjoys challenging himself with with other tattoo styles. He strives to exceed the expectations of his clients so they will walk away from their tattoo experience with truly unique work of art. ${firstName} spends his free time playing his guitar and performing at local venues with his band.`

    return (
        <div className="mark">
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

export default ArtistMark