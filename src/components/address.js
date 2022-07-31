import React from 'react'

import { A, P } from './text'

export default ({ address, children, className, label }) => (
  <address className={className}>
    <A href={`https://maps.google.com/?q=${address}`}>
      <P className="font-bold not-italic">{label}</P>
      {children}
    </A>
  </address>
)
