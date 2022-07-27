import cx from 'classnames'
import React from 'react'

export const H1 = ({ children, className }) => (
  <h1 className={cx('text-black font-parisienne text-4xl text-center', className)}>
    {children}
  </h1>
)

export const H2 = ({ children, className }) => (
  <h2 className={cx('text-black text-center', className)}>
    {children}
  </h2>
)

export default ({ children, className }) => (
  <div className={cx('', className)}>
    {children}
  </div>
)
