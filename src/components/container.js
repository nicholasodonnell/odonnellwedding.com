import cx from 'classnames'
import React from 'react'

export default ({ children, className }) => (
  <div className={cx('flex relative p-4 max-w-2xl mx-auto w-full', className)}>
    {children}
  </div>
)

export const OutsideContainer = ({ children, className }) => (
  <div className={cx('flex -mx-4', className)}>
    {children}
  </div>
)
