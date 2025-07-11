import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

// Set base URL for all axios requests
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'https://agri-connect-1-1ubj.onrender.com';

// Get the root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
