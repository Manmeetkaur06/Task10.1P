import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Make sure the path to App.js is correct
import 'semantic-ui-css/semantic.min.css'; // Ensures Semantic UI CSS is loaded

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
