import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/style/commonClass.css';
import UsethemecontextProvider from './context/UsethemecontextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsethemecontextProvider>
      <App />
    </UsethemecontextProvider>
  </React.StrictMode>
);

reportWebVitals();
