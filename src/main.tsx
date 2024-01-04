import './index.css';
import './responsive.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GeneralContextProvider from './context/GeneralContext/GeneralContextProvider.tsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <GeneralContextProvider>
        <App />
      </GeneralContextProvider >
    </HashRouter>
  </React.StrictMode>,
);