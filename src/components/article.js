import cx from 'classnames'
import React from 'react'

export const Figure = ({ className, src }) => (
  <figure className={cx('flex flex-col items-center justify-center', className)}>
    <img className="w-full" src={src} alt="" />
  </figure>
)

export default ({ children, className, image }) => (
  <article className={cx('flex flex-col', className)}>
    {image && <Figure className="mb-4" src={image} />}
    <div className="grid grid-cols-1 gap-1">
      {children}
    </div>
  </article>
)
