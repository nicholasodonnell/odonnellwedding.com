import cx from 'classnames'
import React from 'react'

export const A = ({ children, className, href }) => (
  <a
    className={cx('underline decoration-dotted', className)}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export const H1 = ({ children, className }) => (
  <h1 className={cx('font-parisienne text-5xl', className)}>
    {children}
  </h1>
)

export const H2 = ({ children, className }) => (
  <h2 className={cx('text-2xl', className)}>
    {children}
  </h2>
)

export const P = ({ children, className }) => (
  <p className={cx('', className)}>
    {children}
  </p>
)
