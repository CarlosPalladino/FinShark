import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SearchCompanies from './Pages/apis';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(SearchCompanies("tsla"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
