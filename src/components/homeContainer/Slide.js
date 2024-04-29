import React, { useState } from 'react';
import slideStyle from '../../css/slide.module.css';
import Images from '../dataContainer/Data';
const Slide = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={slideStyle.slide}>
      <div className={slideStyle.halfWidth}>
        {Images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt=''
            onClick={() => handleClick(image.image)}
            className={`${slideStyle.image} ${
              selectedImage  === image.image ? slideStyle.selectedImage : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;

