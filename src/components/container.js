import cx from 'classnames'
import React from 'react'

export default ({ children, className }) => (
  <div className={cx('flex relative max-w-lg mx-auto w-full', className)}>
    {children}
  </div>
)

export const OutsideContainer = ({ children, className }) => (
  <div className={cx('flex -mx-4 md:-mx-32', className)}>
    {children}
  </div>
)
