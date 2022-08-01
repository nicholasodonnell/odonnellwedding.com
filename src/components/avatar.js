import cx from 'classnames'
import React from 'react'

export default ({ className, src }) => (
  <img
    className={cx('w-1/3 rounded-full', className)}
    src={src}
  />
)
