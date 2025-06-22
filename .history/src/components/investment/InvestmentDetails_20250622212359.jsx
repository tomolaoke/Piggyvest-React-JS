import React from 'react';
import './InvestmentDetails.css';
import iphoneInvest from '../../assets/iphoneInvest.avif';

const InvestmentDetails = () => {
  return (
    <section className="investment-details">
      <div className="investment-card">
        <div className="investment-card-text">
          <h1>Earn Up to 35% returns</h1>
          <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
          <h5>Learn about Investments</h5>
        </div>
        <div className="investment-card-image">
          <img src={iphoneInvest} alt="Investment Image" />
        </div>
      </div>
    </section>
  );
};

export default InvestmentDetails;