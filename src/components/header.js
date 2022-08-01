import cx from 'classnames'
import React from 'react'

import Container from './container'

const Header = ({ children, className }) => (
  <header className={cx('flex flex-col items-center justify-center', className)}>
    {children}
  </header>
)

export const StickyHeader = ({ children, className }) => (
  <Header className={cx('w-full top-0 fixed bg-cream text-black inset-x-0 h-14 shadow-md', className)}>
    <Container className="items-center justify-center">
      {children}
    </Container>
  </Header>
)

export default Header
