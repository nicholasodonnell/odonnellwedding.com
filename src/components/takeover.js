import cx from 'classnames'
import React from 'react'

export const Hamburger = ({ active, className, onClick }) => (
  <button className={cx('w-10 h-10 p-4', className)} onClick={() => onClick()}>
    <span aria-hidden="true" className={cx('block absolute left-1/2 -translate-x-1/2 h-0.5 w-5 bg-black transform transition duration-500 ease-in-out', {
      'rotate-45': active,
      '-translate-y-1.5': !active,
    })} />
    <span aria-hidden="true" className={cx('block absolute left-1/2 -translate-x-1/2 h-0.5 w-5 bg-black transform transition duration-500 ease-in-out', {
      'opacity-0': active,
    })} />
    <span aria-hidden="true" className={cx('block absolute left-1/2 -translate-x-1/2 h-0.5 w-5 bg-black transform transition duration-500 ease-in-out', {
      '-rotate-45': active,
      ' translate-y-1.5': !active,
    })} />
  </button>
)

export default ({ active, children, className }) => (
  <div
    className={cx('bg-cream fixed inset-0 h-full w-full overflow-hidden transition-[max-height] ease-in-out duration-500', className, {
      'max-h-0 pointer-events-none': !active,
      'max-h-full': active,
    })}
    aria-hidden={!active}>
    {children}
  </div>
)
