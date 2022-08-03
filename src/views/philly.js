import { LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'

import secondStImage from '../assets/2nd-st.jpg'
import franklinFountainImage from '../assets/franklin-fountain.jpg'
import independenceHallImage from '../assets/independence-hall.jpg'
import ohBrotherImage from '../assets/oh-brother.jpg'
import paddysImage from '../assets/paddys.jpg'
import raceStreetPierImage from '../assets/race-street-pier.jpg'
import Address from '../components/address'
import Article from '../components/article'
import { H3, P } from '../components/text'
import { useTitle } from '../hooks/title'

export default () => {
  useTitle('Philly Favorites')

  return (
    <div className="grid grid-cols-1 gap-8">
      <Article image={independenceHallImage}>
        <H3>Independence Hall (Home of the Liberty Bell)</H3>
        <Address
          address="6th and Chestnut, Philadelphia, PA"
          label="6th &amp; Chestnut St."
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 10 min walk</P>
      </Article>
      <Article image={secondStImage}>
        <H3>2nd Street Bars (Check out Brownies Irish Pub!)</H3>
        <Address
          address="2nd and Chestnut St, Philadelphia, PA"
          label="2nd &amp; Chestnut St - 2nd &amp; Market St."
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 10 min walk</P>
      </Article>
      <Article image={franklinFountainImage}>
        <H3>Franklin Fountain</H3>
        <Address
          address="116 Market St, Philadelphia, PA 19106"
          label="2nd &amp; Market St."
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 10 min walk</P>
      </Article>
      <Article image={ohBrotherImage}>
        <H3>Oh Brother (Great Cheesesteak!)</H3>
        <Address
          address="206 Market St, Philadelphia, PA 19106"
          label="2nd &amp; Market St."
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 10 min walk</P>
      </Article>
      <Article image={raceStreetPierImage}>
        <H3>Race Street Pier</H3>
        <Address
          address="N Christopher Columbus Blvd, Philadelphia, PA 19106"
          label="North Christopher Columbus Blvd"
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 15 min walk</P>
      </Article>
      <Article image={paddysImage}>
        <H3>Paddy's Pub</H3>
        <Address
          address="228 Race St, Philadelphia, PA 19106"
          label="2nd &amp; Race St."
        />
        <P><LocationMarkerIcon className="h-5 w-5 inline-block" /> 15 min walk</P>
      </Article>
    </div>
  )
}
