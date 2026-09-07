import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './AppServer';

export function render(url = '/', lang = 'en') {
  const appHtml = renderToString(
    <App initialPath={url} initialLang={lang} />
  );
  return { appHtml };
}
