import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalContextProvider } from './context/GlobalContext.jsx';
import { StudentProvider } from './context/StudentContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <StudentProvider>
        <App />
      </StudentProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
