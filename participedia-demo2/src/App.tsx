import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import TopicCard from './components/TopicCard/TopicCard';
import RegionalActivity from './components/RegionalActivity/RegionalActivity';
import './App.css';

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

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="app-main">
        {/* Search Bar */}
        <SearchBar />

        {/* Topic Cards Section */}
        <div className="topic-cards-container">
          {topics.map((topic, index) => (
            <TopicCard key={index} {...topic} />
          ))}
        </div>

        {/* Regional Activity Section */}
        <RegionalActivity />
      </div>
    </div>
  );
};

export default App;
