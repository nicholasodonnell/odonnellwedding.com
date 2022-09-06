import React, { useCallback, useEffect, useState } from 'react'
import { Outlet,useLocation } from 'react-router-dom'

import Container from '../components/container'
import { StickyHeader } from '../components/header'
import Main from '../components/main'
import Nav, { NavItem } from '../components/nav'
import Takeover, { Hamburger } from '../components/takeover'
import { H3 } from '../components/text'
import { NAVIGATION } from '../constants'
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
              {Object.entries(NAVIGATION).map(([ label, href ]) => (
                <NavItem key={label} href={href}>{label}</NavItem>
              ))}
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
