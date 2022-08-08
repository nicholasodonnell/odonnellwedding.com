import React from 'react'

import parkingImage from '../assets/parking.png'
import Address from '../components/address'
import Figure from '../components/figure'
import { H3 } from '../components/text'
import { useTitle } from '../hooks/title'

export default () => {
  useTitle('Directions')

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div>
          <H3 className="mb-2">Venue</H3>
          <Address
            address="244 South 3rd Street, Philadelphia, PA 19106"
            label="The Powel House"
          >
            244 S 3RD ST
            <br />
            Philadelphia
          </Address>
        </div>
        <div>
          <H3 className="mb-2">Parking</H3>
          <Address
            address="125 South 2nd Street, Philadelphia, PA 19106"
            label="Auto Park Olde City"
          >
            125 S 2ND ST
            <br />
            Philadelphia
          </Address>
        </div>
      </div>
      <Figure
        className="-mb-4"
        src={parkingImage}
      />
    </>
  )
}
