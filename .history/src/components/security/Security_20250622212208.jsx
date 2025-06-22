import React from 'react';
import './Security.css';
import securityLock from '../../assets/securitylock.svg';

const Security = () => {
  return (
    <section className="security-section">
      <div className="security-content">
        <img src={securityLock} alt="Security Lock Icon" />
        <div className="security-details">
          <h1>Your security is our priority</h1>
          <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.</p>
          <h4>More on our security measures</h4>
        </div>
      </div>
    </section>
  );
};

export default Security;