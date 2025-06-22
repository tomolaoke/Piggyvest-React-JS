import React from 'react';
import './HeaderNav1.css';

const HeaderNav1 = () => {
  return (
    <div className="header-logo">
      <img src="/assets/piggvestlogo.svg" alt="PiggyVest Logo" />
      <div className="header-links">
        <a href="#">Save<span><img src="/assets/dropdown-arrow.svg" alt="Dropdown Arrow" style={{ width: '18px', margin: '0', verticalAlign: 'middle' }} /></span></a>
        <a href="#">Invest</a>
        <a href="#">Stories</a>
        <a href="#">FAQs</a>
        <a href="#">Resources<span><img src="/assets/dropdown-arrow.svg" alt="Dropdown Arrow" style={{ width: '18px', margin: '0', verticalAlign: 'middle' }} /></span></a>
      </div>
    </div>
  );
};

export default HeaderNav1;