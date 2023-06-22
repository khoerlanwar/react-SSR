import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter } from "react-router-dom/server";
import './index.css';
import { getDataMeta } from './components/data/MetaConfiguration';
import { HelmetProvider } from 'react-helmet-async';

export async function render(url) {
  const context = {};
  const helmetContext = {};
  const currentURL = `/${url}`;

  const { status, result } = await getDataMeta({ path: currentURL });

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={currentURL} context={context}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </StaticRouter>
    </React.StrictMode>
  )

  const head = status ? `
      <title>${result.title}</title>
      <meta name="description" content="${result.description}" />
      <meta name="twitter:title" content="${result.title}" />
      <meta name="twitter:description" content="${result.description}" />
      <meta name="twitter:image" content="${result.image}" />
      <meta property="og:title" content="${result.title}" />
      <meta property="og:description" content="${result.description}" />
      <meta property="og:image" content="${result.image}" />
      <meta property="og:url" content="${result.url}" />
      <meta property="og:type" content="website" />
    `
    :
    `
      <title>NMW Clinic</title>
      <meta name="description" content="Belanja produk di nmw clinic jadi lebih mudah di NMW Clinic Marketplace" />
      <meta name="twitter:title" content=">NMW Clinic" />
      <meta name="twitter:description" content="Belanja produk di nmw clinic jadi lebih mudah di NMW Clinic Marketplace" />
      <meta name="twitter:image" content="https://dummyimage.com/300.png/09f/fff" />
      <meta property="og:title" content="NMW Clinic" />
      <meta property="og:description" content="Belanja produk di nmw clinic jadi lebih mudah di NMW Clinic Marketplace" />
      <meta property="og:image" content="https://dummyimage.com/300.png/09f/fff" />
      <meta property="og:url" content="https://nmwclinic.co.id" />
      <meta property="og:type" content="website" />
    `

  return { html, helmet, head }
}
