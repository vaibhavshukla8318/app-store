// import React, {useEffect} from 'react'
// import slideStyle from '../../css/slide.module.css'
// import image1 from '../../images/image1.png' 
// import image2 from '../../images/image2.png'
// import image3 from '../../images/image3.png'
// import image4 from '../../images/image4.png'

// const Slide = () => {

 
//   return (
//     <div className={slideStyle.slide}>
//       <div className={slideStyle.fullWidth}>
//         <img src={image1} alt=''/>
//       </div>
//       <div className={slideStyle.halfWidth}>
//         <img src={image2} alt=''/>
//         <img src={image3} alt=''/>
//         <img src={image4} alt=''/>
//       </div>
//     </div>
//   )
// }

// export default Slide



import React, { useState } from 'react';
import slideStyle from '../../css/slide.module.css';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';

const Slide = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={slideStyle.slide}>
      <div className={slideStyle.fullWidth}>
        <img src={selectedImage || image1} alt='' />
      </div>
      <div className={slideStyle.halfWidth}>
        <img src={image2} alt='' className={slideStyle.enlarge} onClick={() => handleClick(image2)} />
        <img src={image3} alt='' onClick={() => handleClick(image3)} />
        <img src={image4} alt='' onClick={() => handleClick(image4)} />
      </div>
    </div>
  );
};

export default Slide;


