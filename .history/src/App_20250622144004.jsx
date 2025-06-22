import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Security from './components/security/Security';
import SavingsIntro from './components/savings/SavingsIntro';
import SavingsGrid from './components/savings/SavingsGrid';
import InvestmentIntro from './components/investment/InvestmentIntro';
import InvestmentDetails from './components/investment/InvestmentDetails';
import SaverSpotlight from './components/saverSpotlight/SaverSpotlight';
import CTA from './components/cta/CTA';
import FeaturedHeading from './components/featured/FeaturedHeading';
import FeaturedLogos from './components/featured/FeaturedLogos';
import FooterMain from './components/footer/FooterMain';
import FooterDetails from './components/footer/FooterDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Security />
      <SavingsIntro />
      <SavingsGrid />
      <InvestmentIntro />
      <InvestmentDetails />
      <SaverSpotlight />
      <CTA />
      <FeaturedHeading />
      <FeaturedLogos />
      <FooterMain />
      <FooterDetails />
    </div>
  );
}

export default App;