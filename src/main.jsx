import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const path = typeof window !== 'undefined' ? window.location.pathname : '/';
const isEn = path === '/en' || path.startsWith('/en/');
const initialLang = isEn ? 'en' : 'fa';

const container = document.getElementById('root');

if (container && container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <App initialPath={path} initialLang={initialLang} />
    </React.StrictMode>
  );
} else if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App initialPath={path} initialLang={initialLang} />
    </React.StrictMode>
  );
}
