import React from 'react'

import avatarImage from '../assets/avatar.png'
import Avatar from '../components/avatar'
import Header from '../components/header'
import Linktree, { Link } from '../components/linktree'
import Main from '../components/main'
import { H1, P } from '../components/text'

export default () => (
  <>
    <Header className="mb-4 text-center">
      <Avatar className="mb-4" src={avatarImage} />
      <H1 className="mb-4">Megan & Nick</H1>
      <P>
          October 1 &bull; 4-9PM
        <br />
          Powel House &bull; Philadelphia
        <br />
          100 days
      </P>
    </Header>
    <Main>
      <Linktree>
        <Link to="/directions">Directions / Parking</Link>
        <Link to="/hotels">Hotels</Link>
        <Link href="#">Amazon Registry</Link>
        <Link href="#">Pottery Barn Registry</Link>
        <Link to="/philly">Our Philly Favorites</Link>
        <Link href="#">Wedding Playlist</Link>
      </Linktree>
    </Main>
  </>
)
