import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from "react-router-dom/server";

export function render(url) {
  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  )

  const { helmet } = helmetContext;

  return { html, helmet }
}
