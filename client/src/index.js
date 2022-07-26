import './styles/index.css'

import React from 'react'
import ReactDom from 'react-dom/client'

import App from './app'

const container = document.getElementById('root')

const root = ReactDom.createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
