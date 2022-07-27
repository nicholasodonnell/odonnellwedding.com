import cx from 'classnames'
import React from 'react'

export default ({ className, src }) => (
  <img
    className={cx('lg:w-28 md:w-24 w-1/3 rounded-full', className)}
    src={src}
  />
)
