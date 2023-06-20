import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from "react-router-dom/server";
import { store } from './store'
import { Provider } from 'react-redux'

export function render(url) {
  const helmetContext = {};
  const context = {};

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={'/' + url} context={context}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  )

  const { helmet } = helmetContext;

  return { html, helmet }
}
