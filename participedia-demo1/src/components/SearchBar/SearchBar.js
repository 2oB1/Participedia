import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ marginBottom: '20px', position: 'relative' }}>
      <input
        type="text"
        placeholder="Search cases, methods, organizations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #b3b3b3',
          borderRadius: '5px',
        }}
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#808080',
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};


export default SearchBar;
