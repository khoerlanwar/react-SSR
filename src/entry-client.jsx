import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.hydrateRoot(document.getElementById('root'),
  <Provider store={store}>
    <Router>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </Provider>
)
