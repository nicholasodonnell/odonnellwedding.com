import React from 'react'

import parkingImage from '../assets/parking.png'
import Address from '../components/address'
import Map from '../components/map'
import Page, { Header, Main } from '../components/page'
import { H1, H2 } from '../components/text'

export default () => (
  <Page theme="sage">
    <Header className="mb-8">
      <H1>Directions</H1>
    </Header>
    <Main>
      <div className="grid grid-cols-2 gap-2 mb-8">
        <div>
          <H2 className="mb-2">Venue</H2>
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
          <H2 className="mb-2">Parking</H2>
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
      <Map
        className="-mb-4"
        src={parkingImage}
      />
    </Main>
  </Page>
)
