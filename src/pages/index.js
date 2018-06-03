import React from 'react'
import Link from 'gatsby-link'
import Typography from 'typography'
import { css } from 'emotion'

import Hero from '../components/hero/hero.js'
import Section from '../components/section/section.js'

const mainContainer = css`
  margin-left: 120px;
  margin-right: 120px;
`

const IndexPage = () => (
  <div>
    <Hero />
    <div className={mainContainer}>
      <Section />
    </div>
  </div>
)

export default IndexPage
