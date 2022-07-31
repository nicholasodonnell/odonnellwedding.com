import React from 'react'
import { Route, Routes } from 'react-router-dom'

import BackToHome from './components/backToHome'
import useScrollToTop from './hooks/useScrollToTop'
import Directions from './views/directions'
import Home from './views/home'
import Hotels from './views/hotels'

export default () => {
  useScrollToTop()

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/directions" element={<Directions />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="*" element={<BackToHome />} />
    </Routes>
  )
}
