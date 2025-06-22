import React from 'react';
import './HeroImage.css';

const HeroImage = () => {
  return (
    <div className="hero-images">
      <img src="/assets/pexels-ketut-subiyanto-4350099.avif" className="main-image" alt="Hero Image" />
      <img src="/assets/Frame 80.png" alt="Small Left 1" className="overlay-image side-left position-1" />
      <img src="/assets/Frame 79.png" alt="Small Left 2" className="overlay-image side-left position-2" />
      <img src="/assets/Frame 1020.png" alt="Small Left 3" className="overlay-image side-left position-3" />
      <img src="/assets/Frame 78.png" alt="Small Right 1" className="overlay-image side-right position-4" />
      <img src="/assets/Frame 18.png" alt="Small Right 2" className="overlay-image side-right position-5" />
      <img src="/assets/Frame 82.png" alt="Small Right 3" className="overlay-image side-right position-6" />
    </div>
  );
};

export default HeroImage;