import React from 'react'

import avatarImage from '../assets/avatar.png'
import Avatar from '../components/avatar'
import Linktree, { Link } from '../components/linktree'
import Page, { Header, Main } from '../components/page'
import { H1, P } from '../components/text'

export default () => (
  <Page theme="cream">
    <Header className="mb-4 text-center">
      <Avatar className="mb-4" src={avatarImage} />
      <H1 className="mb-4">Megan & Nick</H1>
      <P>
        October 1 4-9PM
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
        <Link to="/hotels">Our Philly Favorites</Link>
        <Link href="#">Wedding Playlist</Link>
      </Linktree>
    </Main>
  </Page>
)
