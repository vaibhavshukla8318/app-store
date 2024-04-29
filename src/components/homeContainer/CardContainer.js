import React from 'react'
import cardContainerStyle from '../../css/cardContainer.module.css'
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'

const CardContainer = () => {
  return (
    <div className={cardContainerStyle.cardContainer}>
      <section className={cardContainerStyle.section1}>
          <div>
            <img src={image1} alt=''/>
            <h4>CINEmate Movies</h4>
            <a href='https://cinemate8318.netlify.app/'></a>
          </div>
        <div>
          <img src={image2} alt=''/>
          <h4>Tooltip</h4>
          <a href='https://vaibhavshukla8318.github.io/Tooltip'></a>
        </div>
        <div>
          <img src={image3} alt=''/>
          <h4>Music Player</h4>
          <a href='/'></a>
        </div>
        <div>
          <img src={image4} alt=''/>
          <h4>Music Player</h4>
          <a href='/'></a>
        </div>
        <div>
          <img src={image3} alt=''/>
          <h4>Music Player</h4>
          <a href='/'></a>
        </div>
        <div>
          <img src={image2} alt=''/>
          <h4>Music Player</h4>
          <a href='/'></a>
        </div>
      </section>
      <section className={cardContainerStyle.section2}>
        <div>
          <img src={image1} alt=''></img>
        </div>
        <div>
          <img src={image2} alt=''></img>
        </div>
        <div>
          <img src={image3} alt=''></img>
        </div>
        <div>
          <img src={image4} alt=''></img>
        </div>
        <div>
          <img src={image3} alt=''></img>
        </div>
        <div>
          <img src={image2} alt=''></img>
        </div>
      </section>
    </div>
  )
}

export default CardContainer