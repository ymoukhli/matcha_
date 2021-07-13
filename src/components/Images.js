import image0 from '../images/bahobali.jpeg'
import image1 from '../images/yami1.jpg'
import image2 from '../images/yami2.jpg'
import image3 from '../images/yami3.png'
import image4 from '../images/yami4.jpg'
import image5 from '../images/yami5.jpg'

import images from '../styles/Images.module.css'

export const Images = (props) => {

    return (
        <div className={images.root}>
            <img className={images.main} src={image0} alt="placeholder"></img>
            <div className={images.normalRoot}>
                <img className={images.normal} src={image1} alt="placeholder"></img>
                <img className={images.normal} src={image2} alt="placeholder"></img>
                <img className={images.normal} src={image3} alt="placeholder"></img>
                <img className={images.normal} src={image4} alt="placeholder"></img>
                <img className={images.normal} src={image5} alt="placeholder"></img>
            </div>
        </div>
    )
}

export default Images;