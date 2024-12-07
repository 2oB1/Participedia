import React from 'react';
import './TopicCard.css';

const TopicCard = ({ title, description, researchers, engagement }) => {
  return (
    <div className="topic-card">
      <h3 className="topic-card-title">{title}</h3>
      <p className="topic-card-description">{description}</p>
      <p className="topic-card-stat">
        <span>👩‍🔬 {researchers} researchers</span>
      </p>
      <p className="topic-card-stat">
        <span>📊 {engagement}% engagement</span>
      </p>
    </div>
  );
};

export default TopicCard;
