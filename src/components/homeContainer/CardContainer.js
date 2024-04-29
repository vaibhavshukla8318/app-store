import React from 'react'
import cardContainerStyle from '../../css/cardContainer.module.css'
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'
import Images from '../dataContainer/Data'

const CardContainer = () => {
  return (
    <div className={cardContainerStyle.cardContainer}>
      <section className={cardContainerStyle.section1}>
        {Images.map((images, index)=>(
          <div>
            <img src={images.image} alt=''/>
            <h4>{images.title}</h4>
            <a href={images.link}></a>
          </div>
        ))} 
      </section>
      <section className={cardContainerStyle.section2}>
        {Images.map((images, index) => (
          <div key={index}>
            <img src={images.image} alt=''/>
            <a href={images.link}></a>
          </div>
        ))}
      </section>
    </div>
  )
}

export default CardContainer