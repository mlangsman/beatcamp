import React from 'react'
import Link from 'gatsby-link'
import Typography from 'typography'
import { css } from 'emotion'
import { spacing, backgroundColor } from '../utils/globalStyles'

import Hero from '../components/hero/hero'
import Section from '../components/section/section'
import Nav from '../components/nav/nav'

const background = css`
  background-color: ${backgroundColor};
`

const mainContainer = css`
  margin-left: ${spacing*4}px;
  margin-right: ${spacing*4}px;
`
console.log(spacing);

const IndexPage = () => (
  <div className={background}>
    <Nav />
    <Hero />
    <div className={mainContainer}>
      <Section />
    </div>
  </div>
)

export default IndexPage
