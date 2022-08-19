import React, { useCallback, useEffect, useState } from 'react'
import { Outlet,useLocation } from 'react-router-dom'

import Container from '../components/container'
import { StickyHeader } from '../components/header'
import Main from '../components/main'
import Nav, { NavItem } from '../components/nav'
import Takeover, { Hamburger } from '../components/takeover'
import { H3 } from '../components/text'
import { withTitle } from '../hooks/title'

export default () => {
  const [ navOpen, setNavOpen ] = useState(false)
  const title = withTitle()
  const { pathname } = useLocation()

  const toggleNavOpen = useCallback(open => {
    setNavOpen(state => open != null ? open : !state)
  }, [])

  useEffect(() => {
    toggleNavOpen(false)
  }, [ pathname, toggleNavOpen ])

  return (
    <>
      <StickyHeader className="z-20">
        <H3 className="uppercase z-0">{title}</H3>
        <Hamburger
          className="absolute left-2 z-20"
          active={navOpen}
          onClick={toggleNavOpen}
        />
        <Takeover className="z-10" active={navOpen}>
          <Container className="pt-14 justify-center">
            <Nav className="text-center">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/directions">Directions / Parking</NavItem>
              <NavItem to="/hotels">Hotels</NavItem>
              <NavItem href="https://www.potterybarn.com/registry/d7rsbt658b/registry-list.html">Pottery Barn Registry</NavItem>
              <NavItem to="/philly">Our Philly Favorites</NavItem>
            </Nav>
          </Container>
        </Takeover>
      </StickyHeader>
      <Main className="pt-14 z-10">
        <Outlet />
      </Main>
    </>
  )
}
