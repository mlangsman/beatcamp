import React from 'react'
import Link from 'gatsby-link'
import Typography from 'typography'
import { css } from 'emotion'
import { spacing, palette } from '../utils/globalStyles'

import Hero from '../components/hero/hero'
import Section from '../components/section/section'
import Divider from '../components/divider/divider'
import Nav from '../components/nav/nav'

const background = css`
  background-color: ${palette.backgroundLight};
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
    <Divider />
    <h1>I am a big poo</h1>
  </div>
)

export default IndexPage
