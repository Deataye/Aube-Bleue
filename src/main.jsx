import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx'; // Ensure this is the correct path to your App component
import './index.css'; 
import { BrowserRouter as Router } from 'react-router-dom'; // Correctly import BrowserRouter

// Ensure the `root` element exists in your `index.html`
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found in the DOM. Check your index.html file.");
}

// Use createRoot for rendering the app
createRoot(rootElement).render(
  <React.StrictMode> {/* Add StrictMode for better error detection */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
