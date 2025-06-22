import React from 'react';
import './SavingsGrid.css';

const SavingsGrid = () => {
  return (
    <div className="savings-grid">
      <div className="grid-item item-1">
        <div className="item-content">
          <span className="item-text">
            <h1>Automated Savings</h1>
            <p>Build a dedicated savings faster on your terms, automatically or manually.</p>
            <h5>Piggybank</h5>
          </span>
          <div className="item-overlay">
            <img src="/assets/PB 18 Small.png" alt="Automated Savings Image" />
            <div className="overlay-text">
              <h1>Automated Savings</h1>
              <p>Build a dedicated savings faster on your terms, automatically or manually.</p>
              <h5>Piggybank</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item item-2">
        <div className="item-content">
          <span className="item-text">
            <h1>Fixed Savings</h1>
            <p>Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.</p>
            <h5>Safelock</h5>
          </span>
          <div className="item-overlay">
            <img src="/assets/SL 22 Small.png" alt="Fixed Savings Image" />
            <div className="overlay-text">
              <h1>Fixed Savings</h1>
              <p>Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.</p>
              <h5>Safelock</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item item-3">
        <div className="item-content">
          <span className="item-text">
            <h1>Goal-Oriented Savings</h1>
            <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
            <h5>Target Savings</h5>
          </span>
          <div className="item-overlay">
            <img src="/assets/iphonw.avif" alt="Goal-Oriented Savings Image" />
            <div className="overlay-text">
              <h1>Goal-Oriented Savings</h1>
              <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
              <h5>Target Savings</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item item-4">
        <div className="item-content">
          <span className="item-text">
            <h1>Flex Naira</h1>
            <p>Save, transfer, manage, organise, and withdraw your money at any time.</p>
            <h5>Flex Naira</h5>
          </span>
          <div className="item-overlay">
            <img src="/assets/iPhone 14.avif" alt="Flex Naira Image" />
            <div className="overlay-text">
              <h1>Flex Naira</h1>
              <p>Save, transfer, manage, organise, and withdraw your money at any time.</p>
              <h5>Flex Naira</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item item-5">
        <div className="item-content">
          <span className="item-text">
            <h1>Flex Dollar</h1>
            <p>Save and grow your money in foreign currencies such as Dollars.</p>
            <h5>Flex Dollar</h5>
          </span>
          <div className="item-overlay">
            <img src="/assets/iphone12.avif" alt="Flex Dollar Image" />
            <div className="overlay-text">
              <h1>Flex Dollar</h1>
              <p>Save and grow your money in foreign currencies such as Dollars.</p>
              <h5>Flex Dollar</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item item-6">
        <div className="item-content">
          <span className="item-text">
            <h1>HouseMoney</h1>
            <p>Plan for your rent and household expenses</p>
            <h5>HouseMoney</h5>
          </span>
          <div className="item-overlay">
            <img src="/assets/iPhone 14 - 1.png" alt="HouseMoney Image" />
            <div className="overlay-text">
              <h1>HouseMoney</h1>
              <p>Plan for your rent and household expenses</p>
              <h5>HouseMoney</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsGrid;