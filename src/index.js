import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const API_SERVER = "http://localhost:4000"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
