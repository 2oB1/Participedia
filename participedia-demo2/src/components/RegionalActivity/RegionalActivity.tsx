import React from 'react';
import './RegionalActivity.css';

const RegionalActivity: React.FC = () => {
  return (
    <div className="regional-activity">
      <h2>Regional Activity</h2>
      <div className="regional-trends">
        <div className="trend-item">
          <span>128 Active Researchers</span>
          <span className="trend-up">▲ +15%</span>
        </div>
        <div className="trend-item">
          <span>85% Engagement</span>
          <span className="trend-down">▼ -5%</span>
        </div>
      </div>
    </div>
  );
};

export default RegionalActivity;
