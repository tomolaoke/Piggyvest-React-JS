import React from 'react';
import './Hero.css';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <section className="first-section">
      <div className="hero">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;