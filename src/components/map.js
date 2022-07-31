import cx from 'classnames'
import React from 'react'

export default ({ className, src }) => (
  <div className={cx('relative flex-1 -mx-4 md:-mx-32 max-h-[40rem]', className)}>
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${src})` }}
    />
  </div>
)
