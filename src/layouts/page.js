import React from 'react'
import { Outlet } from 'react-router-dom'

import Container from '../components/container'
import useScrollToTop from '../hooks/useScrollToTop'

export default () => {
  useScrollToTop()

  return (
    <Container className="flex-col min-h-screen p-4 text-black">
      <Outlet />
    </Container>
  )
}
