import React from 'react';
import './HeroImage.css';

// Import all images used in this component from the assets folder
import mainImage from '../../assets/pexels-ketut-subiyanto-4350099.avif';
import frame80 from '../../assets/Frame 80.png';
import frame79 from '../../assets/Frame 79.png';
import frame1020 from '../../assets/Frame 1020.png';
import frame78 from '../../assets/Frame 78.png';
import frame18 from '../../assets/Frame 18.png';
import frame82 from '../../assets/Frame 82.png';

const HeroImage = () => {
  return (
    <div className="hero-images">
      <img src={mainImage} className="main-image" alt="Hero Image" />
      <img src={frame80} alt="Small Left 1" className="overlay-image side-left position-1" />
      <img src={frame79} alt="Small Left 2" className="overlay-image side-left position-2" />
      <img src={frame1020} alt="Small Left 3" className="overlay-image side-left position-3" />
      <img src={frame78} alt="Small Right 1" className="overlay-image side-right position-4" />
      <img src={frame18} alt="Small Right 2" className="overlay-image side-right position-5" />
      <img src={frame82} alt="Small Right 3" className="overlay-image side-right position-6" />
    </div>
  );
};

export default HeroImage;