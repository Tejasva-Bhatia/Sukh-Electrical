import React from 'react';
import './JobCards.css';
import JobCardItem from './JobCardItem';

function JobCards() {
  return (
    <div className="jobs-section-container">
      <div className="job-cards-container">
        <ul className="job-cards">
          <JobCardItem text="Get Your Lights Installed" />
          <JobCardItem text="Fix Electrical Issues Fast" />
          <JobCardItem text="Ensure Safe Home Checks" />
          <JobCardItem text="24/7 Emergency Help" />
          <JobCardItem text="Set Up Data & Phone Lines" />
          <JobCardItem text="Outdoor Lighting & Power" />
          <JobCardItem text="Upgrade Your Power Supply" />
          <JobCardItem text="AC & Security Installation" />
        </ul>
      </div>
    </div>
  );
}

export default JobCards;