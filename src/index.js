import React from 'react';
import ReactDOM from 'react-dom/client'; // ← React 18 usa isso!
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import process from 'process';

window.process = process; // ← resolve o erro "process is not defined"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
