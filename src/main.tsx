import './index.css';
import './responsive.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GeneralContextProvider from './context/GeneralContext/GeneralContextProvider.tsx';

alert("main.tsx")

try {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <GeneralContextProvider>
        <App />
      </GeneralContextProvider >
    </React.StrictMode>,
  );
} catch (error: any) {
  alert(error.message);
}