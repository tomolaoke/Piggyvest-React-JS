import React from 'react';
import './FeaturedLogos.css';

const FeaturedLogos = () => {
  return (
    <section className="featured-logos-section">
      <div className="featured-logos">
        <img src="/assets/techcabal.png" alt="TechCabal Logo" />
        <img src="/assets/cnbc.png" alt="CNBC Logo" />
        <img src="/assets/techcrunch.png" alt="TechCrunch Logo" />
        <img src="/assets/pymnts.svg" alt="Pymnts Logo" />
        <img src="/assets/fastcomp.svg" alt="Fast Company Logo" />
        <img src="/assets/cio.svg" alt="CIO Logo" />
      </div>
    </section>
  );
};

export default FeaturedLogos;