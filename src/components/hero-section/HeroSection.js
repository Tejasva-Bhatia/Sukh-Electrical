import React from 'react';
import './HeroSection.css';
import JobCards from '../job-cards/JobCards';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="image-container">
          <img className="cta-image" src="/images/cta-image.jpg" alt="" />
          <div className="main-text-cont">
            <h2 className="main-title">NICEIC Accredited Electrician</h2>
            <h3 className="strapline">Welcome to AG Electrical Services Website</h3>
          </div>
          <img className="nic-logo" src="/images/nic-logo.jpg" alt="" />
        </div>
        <div className="areas-list-container">
          <div className="intro">
            <h2 className="black-heading">About Sukh Electricals</h2>
            <p className="areas-text">Sukh Electricals is a trusted provider of residential and commercial electrical solutions. Backed by years of experience and fully certified professionals, we deliver reliable, safe, and honest service—tailored to suit your needs and schedule.
            </p>
          </div>
          <div className="areas">
            <h2 className="black-heading">Our Promise</h2>
            <p className="areas-text">
              We focus on quality workmanship, transparent pricing, and customer satisfaction from start to finish. Whether it’s a quick fix or a full installation, we treat your space with care and respect—because trust is built on every wire we connect.
            </p>
            <h4 className="sub-heading">Why Customers Choose Us:</h4>

            <ul className="brand-highlights">
              <li className="highlight-item">✅ Fully Certified & Insured</li>
              <li className="highlight-item">⚡ Emergency Callouts Available</li>
              <li className="highlight-item">🕒 Quick Response Times</li>
              <li className="highlight-item">💬 Free Quotes & Clear Pricing</li>
            </ul>
            

          </div>
          
        </div>
        < JobCards />
      </div>
    </section>
  );
}

export default HeroSection;
