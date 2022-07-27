import cx from 'classnames'
import React from 'react'
import { Link as ReactRouterDomLink } from 'react-router-dom'

export const Link = ({ children, className, href, to }) => {
  const linkClassName = cx('bg-sage color-white p-4 text-white text-xl rounded-xl', className)

  return (
    <>
      {to ? (
        <ReactRouterDomLink className={linkClassName} to={to}>
          {children}
        </ReactRouterDomLink>
      ) : (
        <a className={linkClassName} href={href}>
          {children}
        </a>
      )}
    </>
  )
}

export default ({ children, className }) => (
  <nav className={cx('flex flex-col grid-cols-1 gap-4', className)}>
    {children}
  </nav>
)
