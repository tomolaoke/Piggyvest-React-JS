import React from 'react';
import './HeaderNav1.css';

// Import all images used in this component from the assets folder
import piggyvestLogo from '../../assets/piggvestlogo.svg';
import dropdownArrow from '../../assets/dropdown-arrow.svg';

const HeaderNav1 = () => {
  return (
    <div className="header-logo">
      {/* Logo image, imported above for correct path resolution */}
      <img src={piggyvestLogo} alt="PiggyVest Logo" />
      <div className="header-links">
        <a href="#">Save<span><img src={dropdownArrow} alt="Dropdown Arrow" style={{ width: '18px', margin: '0', verticalAlign: 'middle' }} /></span></a>
        <a href="#">Invest</a>
        <a href="#">Stories</a>
        <a href="#">FAQs</a>
        <a href="#">Resources<span><img src={dropdownArrow} alt="Dropdown Arrow" style={{ width: '18px', margin: '0', verticalAlign: 'middle' }} /></span></a>
      </div>
    </div>
  );
};

export default HeaderNav1;