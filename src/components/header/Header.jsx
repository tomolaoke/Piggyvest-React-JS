import React from 'react';
import './Header.css';
import HeaderNav1 from '../headerNav/HeaderNav1';
import HeaderNav2 from '../headerNav/HeaderNav2';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <HeaderNav1 />
        <HeaderNav2 />
        <div className="mobile-menu">☰</div>
      </div>
    </div>
  );
};

export default Header;