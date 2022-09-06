import { LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'

import hiltonImage from '../assets/hilton.jpg'
import holidayInnImage from '../assets/holiday-inn.jpg'
import kimptonImage from '../assets/Kimpton.jpg'
import marriottOldCityImage from '../assets/marriott-old-city.jpg'
import renaissanceImage from '../assets/renaissance.jpg'
import thomasBondHouseImage from '../assets/thomas-bond-house.jpg'
import wyndhamImage from '../assets/wyndham.jpg'
import Address from '../components/address'
import Article from '../components/article'
import Contact from '../components/contact'
import { H3, P } from '../components/text'
import { useTitle } from '../hooks/title'

export default () => {
  useTitle('Hotels')

  return (
    <div className="grid grid-cols-1 gap-8">
      <Article image={marriottOldCityImage}>
        <H3>Philadelphia Marriott Old City</H3>
        <Address
          address="100 N Christopher Columbus Blvd, PA 19106"
          label="One Dock St. Philadelphia, PA 19106"
        />
        <Contact
          phone="2152386000"
          website="https://www.marriott.com/en-us/hotels/phlmo-philadelphia-marriott-old-city/overview/"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 5 min walk</P>
      </Article>
      <Article image={thomasBondHouseImage}>
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
      <Article image={renaissanceImage}>
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
      <Article image={wyndhamImage}>
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
      <Article image={kimptonImage}>
        <H3>Kimpton Hotel Monaco Philadelphia</H3>
        <Address
          address="433 Chestnut St, PA 19106"
          label="433 Chestnut St. PA 19106"
        />
        <Contact
          phone="2159252111"
          website="https://www.monaco-philadelphia.com/?&utm_source=Google%20My%20Business&utm_medium=organic&utm_campaign=GMB&utm_term=monaco%20philadelphia"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 10 min walk</P>
      </Article>
      <Article image={hiltonImage}>
        <H3>Hilton Philadelphia at Penn's Landing</H3>
        <Address
          address="201 S Christopher Columbus Blvd, PA 19106"
          label="201 S Christopher Columbus Blvd, PA 19106"
        />
        <Contact
          phone="2155216500"
          website="https://www.hilton.com/en/hotels/phlpnhh-hilton-philadelphia-at-penns-landing/?SEO_id=GMB-AMER-HH-PHLPNHH&y_source=1_MjMyNDk3MS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 10 min walk</P>
      </Article>
      <Article image={holidayInnImage}>
        <H3>Holiday Inn Express Philadelphia - Penns Landing</H3>
        <Address
          address="100 N Christopher Columbus Blvd, PA 19106"
          label="100 N Christopher Columbus Blvd, PA 19106"
        />
        <Contact
          phone="2156277900"
          website="https://www.ihg.com/holidayinnexpress/hotels/us/en/philadelphia/phlpl/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-PHLPL"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 15 min walk</P>
      </Article>
    </div>
  )
}
