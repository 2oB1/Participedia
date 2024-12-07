import React, { useState } from 'react';
import TopicCard from '../TopicCard/TopicCard';
import './Dashboard.css';

const topics = [
  {
    title: 'Participatory Budgeting',
    description: 'Community-driven budget allocation processes',
    researchers: 128,
    engagement: 85,
  },
  {
    title: 'Digital Democracy',
    description: 'Electronic participation in democratic processes',
    researchers: 96,
    engagement: 75,
  },
  {
    title: 'Citizen Assembly',
    description: 'Representative groups making policy recommendations',
    researchers: 84,
    engagement: 65,
  },
];

const regionalStats = [
  { label: 'Active Researchers', value: 128 },
  { label: 'Regional Engagement', value: '85%' },
  { label: 'Active Cases', value: 24 },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
  <h1>Explore & Research</h1>
  <div className="dashboard-subheading">
    <span className="subheading-icon">🌐</span>
    <span className="subheading-text">Discovering topics trending in Canada</span>
  </div>
  <input
    type="text"
    placeholder="Search topics..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>


      {/* Cards Section */}
      <div className="dashboard-content">
        {filteredTopics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>

      {/* Regional Activity Section */}
      <div className="dashboard-regional-activity">
        <h2>Regional Activity</h2>
        <div className="regional-cards">
          {regionalStats.map((stat, index) => (
            <div className="regional-card" key={index}>
              <span className="regional-value">{stat.value}</span>
              <span className="regional-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
