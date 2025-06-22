import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-image">
        <img src="/assets/phonetxtImg.png" alt="Join PiggyVest Image" />
      </div>
      <div className="cta-text">
        <h1>Join 5+ million people who save and invest with us</h1>
        <div className="cta-buttons">
          <p>
            <img src="/assets/appstore-icon.svg" alt="AppStore Icon" /> Get on iPhone
          </p>
          <p>
            <img src="/assets/googleplay-icon.svg" alt="GooglePlay Store Icon" /> Get on Android
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;