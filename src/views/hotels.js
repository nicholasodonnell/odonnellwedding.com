import React from 'react'

import Page, { Header, Main } from '../components/page'
import { H1 } from '../components/text'

export default () => (
  <Page theme="blush">
    <Header className="mb-8">
      <H1>Hotels</H1>
    </Header>
    <Main>
      Hello World
    </Main>
  </Page>
)
