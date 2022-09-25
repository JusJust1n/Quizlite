import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StudysetContextProvider } from "./context/StudysetContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudysetContextProvider>
      <App />
    </StudysetContextProvider>
  </React.StrictMode>
);

