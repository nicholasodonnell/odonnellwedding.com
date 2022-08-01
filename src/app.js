import React from 'react'
import { Route, Routes } from 'react-router-dom'

import BackToHome from './components/backToHome'
import Interior from './layouts/interor'
import Page from './layouts/page'
import Directions from './views/directions'
import Home from './views/home'
import Hotels from './views/hotels'
import Philly from './views/philly'

export default () => (
  <Routes>
    <Route element={<Page />}>
      <Route index element={<Home />} />
      <Route element={<Interior />}>
        <Route path="/directions" element={<Directions />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/philly" element={<Philly />} />
      </Route>
    </Route>
    <Route path="*" element={<BackToHome />} />
  </Routes>
)
