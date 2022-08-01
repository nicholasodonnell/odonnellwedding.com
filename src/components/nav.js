import cx from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = ({ children, className, href, to }) => {
  const navClassName = cx('text-black text-xl', className)

  return (
    <>
      {to ? (
        <NavLink
          to={to}
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
