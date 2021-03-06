import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the top-level BrowserRouter component
import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
