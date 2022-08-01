import cx from 'classnames'
import React from 'react'

export default ({ children, className }) => (
  <main className={cx('flex flex-col flex-1', className)}>
    {children}
  </main>
)
