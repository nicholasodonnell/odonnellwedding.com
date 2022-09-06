import cx from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = ({ children, className, href }) => {
  const navClassName = cx('text-black text-xl', className)
  const isExternal = href.startsWith('http')

  return (
    <>
      {!isExternal ? (
        <NavLink
          to={href}
          className={({ isActive }) => cx(navClassName, {
            'underline underline-offset-8': isActive,
          })}
        >
          {children}
        </NavLink>
      ) : (
        <a
          className={navClassName}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  )
}

export default ({ children, className }) => (
  <nav className={cx('flex flex-col grid-cols-1 gap-6', className)}>
    {children}
  </nav>
)
