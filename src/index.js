import './styles/index.css'

import React from 'react'
import ReactDom from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './app'
import { TitleProvider } from './hooks/title'

const container = document.getElementById('root')

const root = ReactDom.createRoot(container)

root.render(
  <React.StrictMode>
    <HashRouter>
      <TitleProvider>
        <App />
      </TitleProvider>
    </HashRouter>
  </React.StrictMode>
)
