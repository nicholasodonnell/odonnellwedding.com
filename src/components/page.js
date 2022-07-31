import cx from 'classnames'
import React from 'react'

import useTheme from '../hooks/useTheme'

export const Header = ({ children, className }) => (
  <header className={cx('flex flex-col items-center', className)}>
    {children}
  </header>
)

export const Main = ({ children, className }) => (
  <main className={cx('flex flex-col flex-1', className)}>
    {children}
  </main>
)

export default ({ children, className, theme }) => {
  useTheme(theme)

  return (
    <div className={cx('flex flex-col min-h-screen min-w-full p-4', {
      'text-black': theme === 'cream' || theme === 'blush',
      'text-white': theme === 'sage',
    }, className)}>
      {children}
    </div>
  )
}
