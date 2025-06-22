import React from 'react';
import './FooterMain.css';

const FooterMain = () => {
  return (
    <section className="site-footer">
      <div className="footer-branding">
        <img src="/assets/greylogo.svg" alt="PiggyVest Grey Logo" />
        <img src="/assets/compliance-378fe121550ceac55d0eeb8c5edac2e7.avif" alt="Compliance Badge" />
      </div>
      <div className="footer-links">
        <div className="links-group">
          <p>Products</p>
          <a href="#">Piggybank</a>
          <a href="#">Invest</a>
          <a href="#">Safelock</a>
          <a href="#">Target Savings</a>
          <a href="#">Flex Naira</a>
          <a href="#">Flex Dollar</a>
        </div>
        <div className="links-group">
          <p>Company</p>
          <a href="#">About</a>
          <a href="#">FAQs</a>
          <a href="#">Blog</a>
        </div>
        <div className="links-group">
          <p>Legal</p>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Security</a>
        </div>
      </div>
      <div className="footer-contact">
        <div className="social-icons">
          <img src="/assets/facebook.svg" alt="Facebook Icon" />
          <img src="/assets/instagram.svg" alt="Instagram Icon" />
          <img src="/assets/twitter.svg" alt="Twitter Icon" />
          <img src="/assets/titkok.svg" alt="TikTok Icon" />
          <img src="/assets/youtube.svg" alt="YouTube Icon" />
        </div>
        <div className="contact-address">
          <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
        </div>
        <div className="contact-info">
          <p>contact@piggyvest.com</p>
          <p>+234 700 933 9339</p>
        </div>
      </div>
    </section>
  );
};

export default FooterMain;