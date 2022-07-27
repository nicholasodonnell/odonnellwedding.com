import React from 'react'

import avatarImage from '../assets/avatar.png'
import Avatar from '../components/avatar'
import Linktree, { Link } from '../components/linktree'
import Page, { Header, Main } from '../components/page'
import Tag, { H1, H2 } from '../components/tag'

export default () => (
  <Page>
    <Header className="mb-4">
      <Avatar className="mb-4" src={avatarImage} />
      <Tag>
        <H1 className="mb-4">Megan & Nick</H1>
        <H2>
          October 1 4-9PM
          <br />
          Powel House &bull; Philadelphia
          <br />
          100 days
        </H2>
      </Tag>
    </Header>
    <Main>
      <Linktree>
        <Link to="/directions">Directions</Link>
        <Link to="/about">Parking</Link>
        <Link to="/hotels">Hotels</Link>
        <Link href="#">Amazon Registry</Link>
        <Link href="#">Pottery Barn Registry</Link>
        <Link to="/hotels">Our Favorite Philly Spots</Link>
      </Linktree>
    </Main>
  </Page>
)
