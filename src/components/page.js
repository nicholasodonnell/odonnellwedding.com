import cx from 'classnames'
import React from 'react'

export const Header = ({ children, className }) => (
  <header className={cx('flex flex-col items-center', className)}>
    {children}
  </header>
)

export const Main = ({ children, className }) => (
  <main className={cx('', className)}>
    {children}
  </main>
)

export default ({ children, className }) => (
  <div className={cx('flex flex-col p-4 pb-8', className)}>
    {children}
  </div>
)
