import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from './views/index'

export default () => (
  <Routes>
    <Route index element={<Home />} />
    <Route
      path="*"
      element={<Navigate to={{ pathname: '' }} />}
    />
  </Routes>
)
