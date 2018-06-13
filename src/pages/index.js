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
import ResponsiveEmbed from 'react-responsive-embed'

const background = css`
  background-color: ${palette.backgroundLight};
`
const border = css`
  border: 50px solid red;
`
const video = css`
  margin: ${3*spacing}px 5% ${3*spacing}px 5%;
  border: none;
  -webkit-box-shadow: 0px 20px 78px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 20px 78px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 20px 78px 0px rgba(0,0,0,0.3);
`
const flex = css`
  display: flex;
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
      <div className={video}>
        <ResponsiveEmbed src='https://www.youtube.com/embed/hNV3NvNDFDM' allowfullscreen />
      </div>
    </Container>

  </div>
)

export default IndexPage
