import React from 'react';
import ServiceCardItem from '../service-cards/ServiceCardItem';
import './ServicesCards.css';

function ServicesCard() {
  return (
    <section className="services-section">
      <div className="services-section-container">
        <h2 className="services-title">Services</h2>
        <div className="services-cards-container">
          <ul className="service-cards">
            <ServiceCardItem
              imagesrc='/images/residential.jpg' 
              iconsrc='/images/house.png' 
              title="Residential Electrical Services"
              text="We provide comprehensive electrical solutions for homes, including wiring, upgrades, and safety inspections. From new builds to renovations, our certified team ensures your home’s electrical system is safe and efficient."
            />
            <ServiceCardItem
              imagesrc='/images/commercial.jpg' 
              iconsrc='/images/commercial.png' 
              title="Commercial Electrical Solutions"
              text="Specializing in electrical installations and maintenance for businesses, we cater to offices, retail spaces, and industrial sites. Our expertise ensures minimal downtime and compliance with WA electrical standards."
            />
            <ServiceCardItem
              imagesrc='/images/emergency.jpg' 
              iconsrc='/images/emergency-call.png' 
              title="24/7 Emergency Electrical Services"
              text="Available around the clock for urgent electrical issues, including power outages, fault finding, and safety hazards. Contact us anytime for fast, reliable response across WA."
            />
            <ServiceCardItem
              imagesrc='/images/power-point.jpg' 
              iconsrc='/images/electrical-panel.png' 
              title="Power Installation and Upgrades"
              text="From new power point installations to full system upgrades, we design and implement robust electrical solutions tailored to your property’s needs, ensuring safety and future-proofing."
            />
            <ServiceCardItem
              imagesrc='/images/safety Inspection.jpg' 
              iconsrc='/images/safety.png' 
              title="Electrical Safety Inspections"
              text="Protect your property with thorough safety checks, identifying and resolving potential hazards. Compliant with WA regulations, our inspections provide peace of mind for homeowners and businesses."
            />
            <ServiceCardItem
              imagesrc='/images/light.jpg' 
              iconsrc='/images/electrician.png' 
              title="Lighting Design and Installation"
              text="Enhance your space with expert lighting solutions, including LED installations, outdoor lighting, and repairs. We create energy-efficient, tailored designs for homes and businesses."
            />
            <ServiceCardItem
              imagesrc='/images/switchboard.jpg' 
              iconsrc='/images/switch-board.png' 
              title="Switchboard Upgrades and Repairs"
              text="Upgrade or repair your switchboard for improved safety and performance. We handle installations and maintenance to meet current electrical codes across WA."
            />
            <ServiceCardItem
              imagesrc='/images/tesla-wall-charger.jpg'
              iconsrc='/images/car.jpg'
              title="EV Charging Station Installation"
              text="Stay ahead with electric vehicle charging solutions. We install and maintain EV chargers for residential and commercial properties, ensuring convenience and compliance with WA standards."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;