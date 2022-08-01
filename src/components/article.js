import cx from 'classnames'
import React from 'react'

import { OutsideContainer } from '../components/container'

export const Figure = ({ className, src }) => (
  <OutsideContainer>
    <figure className={cx('flex flex-col items-center justify-center', className)}>
      <img className="w-full" src={src} alt="" />
    </figure>
  </OutsideContainer>
)

export default ({ children, className, image }) => (
  <article className={cx('flex flex-col', className)}>
    {image && <Figure className="mb-4" src={image} />}
    <div className="grid grid-cols-1 gap-1">
      {children}
    </div>
  </article>
)
