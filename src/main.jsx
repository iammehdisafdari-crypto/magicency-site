import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let savedLang = null;
try {
  savedLang = localStorage.getItem('magicency_lang');
} catch (_) {}

const container = document.getElementById('root');

if (container && container.hasChildNodes()) {
  if (savedLang === 'en') {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <App initialLang="en" />
      </React.StrictMode>
    );
  } else {
    ReactDOM.hydrateRoot(
      container,
      <React.StrictMode>
        <App initialLang="fa" />
      </React.StrictMode>
    );
  }
} else if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App initialLang={savedLang === 'en' ? 'en' : 'fa'} />
    </React.StrictMode>
  );
}
