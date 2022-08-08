import cx from 'classnames'
import React from 'react'

import Figure from './figure'

export default ({ children, className, image }) => (
  <article className={cx('flex flex-col', className)}>
    {image && <Figure className="mb-4" src={image} />}
    <div className="grid grid-cols-1 gap-1">
      {children}
    </div>
  </article>
)
