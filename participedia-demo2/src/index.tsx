import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals';

// Create the root element
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals();
