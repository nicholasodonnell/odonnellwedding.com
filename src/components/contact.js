import { GlobeIcon, PhoneIcon } from '@heroicons/react/solid'
import React from 'react'

import { A, P } from './text'

export default ({ className, phone, website }) => {
  const phoneRaw = phone.replace(/\D/g, '')
  const phoneFormatted = `(${phoneRaw.slice(0, 3)}) ${phoneRaw.slice(3, 6)}-${phoneRaw.slice(6, 10)}`

  return (
    <P className={className}>
      <A className="mr-2" href={`tel:${phoneRaw}`}>
        <PhoneIcon className="h-5 w-5 inline-block" /> {phoneFormatted}
      </A>
      <A className={className} href={website}>
        <GlobeIcon className="h-5 w-5 inline-block" /> Visit Website
      </A>
    </P>
  )
}
