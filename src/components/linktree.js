import cx from 'classnames'
import React from 'react'
import { Link as ReactRouterDomLink } from 'react-router-dom'

export const Link = ({ children, className, href }) => {
  const linkClassName = cx('bg-sage color-white p-4 text-white text-xl rounded-xl', className)
  const isExternal = href.startsWith('http')

  return (
    <>
      {!isExternal ? (
        <ReactRouterDomLink className={linkClassName} to={href}>
          {children}
        </ReactRouterDomLink>
      ) : (
        <a
          className={linkClassName}
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
  <nav className={cx('flex flex-col grid-cols-1 gap-4', className)}>
    {children}
  </nav>
)
