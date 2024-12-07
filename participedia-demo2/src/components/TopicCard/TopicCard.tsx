import React from 'react';
import './TopicCard.css';

interface TopicCardProps {
  title: string;
  description: string;
  researchers: number;
  engagement: number;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description, researchers, engagement }) => {
  return (
    <div className="topic-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="topic-metrics">
        <span>👩‍🔬 {researchers} Researchers</span>
        <span>📊 {engagement}% Engagement</span>
      </div>
      <button className="topic-details">View Details</button>
    </div>
  );
};

export default TopicCard;
