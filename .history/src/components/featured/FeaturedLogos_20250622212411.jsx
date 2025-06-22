import React from 'react';
import './FeaturedLogos.css';
import techcabal from '../../assets/techcabal.png';
import cnbc from '../../assets/cnbc.png';
import techcrunch from '../../assets/techcrunch.png';
import pymnts from '../../assets/pymnts.svg';
import fastcomp from '../../assets/fastcomp.svg';
import cio from '../../assets/cio.svg';

const FeaturedLogos = () => {
  return (
    <section className="featured-logos-section">
      <div className="featured-logos">
        <img src={techcabal} alt="TechCabal Logo" />
        <img src={cnbc} alt="CNBC Logo" />
        <img src={techcrunch} alt="TechCrunch Logo" />
        <img src={pymnts} alt="Pymnts Logo" />
        <img src={fastcomp} alt="Fast Company Logo" />
        <img src={cio} alt="CIO Logo" />
      </div>
    </section>
  );
};

export default FeaturedLogos;