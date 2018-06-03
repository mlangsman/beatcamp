import React from 'react'
import Link from 'gatsby-link'
import Typography from 'typography'
import { css } from 'emotion'
import { spacing } from '../utils/globalStyles'

import Hero from '../components/hero/hero'
import Section from '../components/section/section'

const mainContainer = css`
  margin-left: ${spacing*4}px;
  margin-right: ${spacing*4}px;
`
console.log(spacing);

const IndexPage = () => (
  <div>
    <Hero />
    <div className={mainContainer}>
      <Section />
    </div>
  </div>
)

export default IndexPage
