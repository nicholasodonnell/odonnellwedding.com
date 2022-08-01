import { LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'

import marriottOldCityImage from '../assets/marriott-old-city.jpg'
import renaissanceImage from '../assets/renaissance.jpg'
import thomasBondHouseImage from '../assets/thomas-bond-house.jpg'
import wyndhamImage from '../assets/wyndham.jpg'
import Address from '../components/address'
import Article from '../components/article'
import Contact from '../components/Contact'
import { H3, P } from '../components/text'
import { useTitle } from '../hooks/title'

export default () => {
  useTitle('Hotels')

  return (
    <>
      <Article
        className="mb-8 pb-8 border-b border-gray"
        image={marriottOldCityImage}
      >
        <H3>Philadelphia Marriott Old City</H3>
        <Address
          address="One Dock St, Philadelphia, PA 19106"
          label="One Dock St. Philadelphia, PA 19106"
        />
        <Contact
          phone="2152386000"
          website="https://www.marriott.com/en-us/hotels/phlmo-philadelphia-marriott-old-city/overview/"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 5 min walk</P>
      </Article>
      <Article
        className="mb-8 pb-8 border-b border-gray"
        image={thomasBondHouseImage}
      >
        <H3>Thomas Bond House</H3>
        <Address
          address="129 S 2nd St, Philadelphia, PA 19106"
          label="129 S 2nd St. Philadelphia, PA 19106"
        />
        <Contact
          phone="2159238523"
          website="https://thomasbondhousebandb.com/"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 5 min walk</P>
      </Article>
      <Article
        className="mb-8 pb-8 border-b border-gray"
        image={renaissanceImage}
      >
        <H3>Renaissance Philadelphia Downtown Hotel</H3>
        <Address
          address="401 Chestnut St, Philadelphia, PA 19106"
          label="401 Chestnut St. Philadelphia, PA 19106"
        />
        <Contact
          phone="2159250000"
          website="https://www.marriott.com/en-us/hotels/phlpr-renaissance-philadelphia-downtown-hotel/overview/"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 6 min walk</P>
      </Article>
      <Article
        image={wyndhamImage}
      >
        <H3>Wyndham Philadelphia Historic District</H3>
        <Address
          address="401 Chestnut St, Philadelphia, PA 19106"
          label="401 Chestnut St. Philadelphia, PA 19106"
        />
        <Contact
          phone="2159238660"
          website="https://www.wyndhamhotels.com/wyndham/philadelphia-pennsylvania/wyndham-philadelphia-historic-district/overview"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 10 min walk</P>
      </Article>
    </>
  )
}
