import React from 'react'

import avatarImage from '../assets/avatar.png'
import Avatar from '../components/avatar'
import Header from '../components/header'
import Linktree, { Link } from '../components/linktree'
import Main from '../components/main'
import { H1, P } from '../components/text'
import { NAVIGATION } from '../constants'
import useDaysUntil from '../hooks/useDaysUntil'

export default () => {
  const daysUntil = useDaysUntil(new Date('Oct 01 2022 00:00:00 EST'))

  return (
    <>
      <Header className="mb-4 text-center">
        <Avatar className="mb-4" src={avatarImage} />
        <H1 className="mb-4">Megan & Nick</H1>
        <P>
          October 1 &bull; 4-9PM
          <br />
          Powel House &bull; Philadelphia
          <br />
          {daysUntil} day{daysUntil !== 1 ? 's' : ''}
        </P>
      </Header>
      <Main>
        <Linktree>
          {Object.entries(NAVIGATION).slice(1).map(([ label, href ]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </Linktree>
      </Main>
    </>
  )
}
