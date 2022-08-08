import cx from 'classnames'
import React from 'react'

import { OutsideContainer } from './container'

export default ({ className, src }) => (
  <OutsideContainer>
    <figure className={cx('flex flex-col', className)}>
      <img className="w-full" src={src} alt="" />
    </figure>
  </OutsideContainer>
)
