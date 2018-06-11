import React from 'react'
import Link from 'gatsby-link'
import Typography from 'typography'
import styled, { css } from 'react-emotion';
import { spacing, palette } from '../utils/globalStyles'

import Hero from '../components/hero/hero'
import Section from '../components/section/section'
import Divider from '../components/divider/divider'
import Nav from '../components/nav/nav'
import Container from '../components/container/container'
import Testimonial from '../components/testimonial/testimonial'

const background = css`
  background-color: ${palette.backgroundLight};
`

console.log(spacing);

const IndexPage = () => (
  <div className={background}>
    <Nav />
    <Hero />

    <Container style="light">
      <Section />
    </Container>

    <Divider />

    <Container style="dark">
      <Testimonial />
    </Container>

  </div>
)

export default IndexPage
