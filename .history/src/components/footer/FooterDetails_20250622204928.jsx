import React from 'react';
import './FooterDetails.css';

const FooterDetails = () => {
  return (
    <section className="footer-details">
      <div className="details-content">
        <p className="details-description">PiggyVest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 9 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
        <p className="details-regulatory">Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</p>
        <p className="details-copyright" style={{ color: 'blue' }}>2016-2025 PiggyTech Global Limited - RC 1405222</p>
      </div>
    </section>
  );
};

export default FooterDetails;