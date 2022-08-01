import cx from 'classnames'
import React from 'react'

export default ({ className, src }) => (
  <div className={cx('relative flex-1', className)}>
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${src})` }}
    />
  </div>
)
