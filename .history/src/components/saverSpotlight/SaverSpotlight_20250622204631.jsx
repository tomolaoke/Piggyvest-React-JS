import React from 'react';
import './SaverSpotlight.css';

const SaverSpotlight = () => {
  return (
    <section className="saver-spotlight">
      <div className="spotlight-content">
        <h1>Meet Our Saver of the Month</h1>
        <p>Every month, we shine a spotlight on one saver, asking them about their savings culture and how PiggyVest has helped them.</p>
        <iframe
          width="790"
          height="444"
          src="https://www.youtube.com/embed/2EnGMGxKuII?si=FheL7xtBxdsvMS0h"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default SaverSpotlight;