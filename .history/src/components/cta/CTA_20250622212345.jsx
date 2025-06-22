import React from 'react';
import './CTA.css';
import phonetxtImg from '../../assets/phonetxtImg.png';
import appstoreIcon from '../../assets/appstore-icon.svg';
import googleplayIcon from '../../assets/googleplay-icon.svg';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-image">
        <img src={phonetxtImg} alt="Join PiggyVest Image" />
      </div>
      <div className="cta-text">
        <h1>Join 5+ million people who save and invest with us</h1>
        <div className="cta-buttons">
          <p>
            <img src={appstoreIcon} alt="AppStore Icon" /> Get on iPhone
          </p>
          <p>
            <img src={googleplayIcon} alt="GooglePlay Store Icon" /> Get on Android
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;