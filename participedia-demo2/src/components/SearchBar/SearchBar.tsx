import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleSearch = () => {
    if (searchQuery) {
      setRecentSearches((prev) => [searchQuery, ...prev.slice(0, 4)]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search cases, methods, and organizations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      <div className="search-recent">
        <h4>Recent Searches</h4>
        <ul>
          {recentSearches.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
