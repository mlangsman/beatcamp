import React from 'react'
import Link from 'gatsby-link'
import Typography from '../utils/typography'
import styled, { css } from 'react-emotion';
import { spacing, palette } from '../utils/globalStyles'

import Hero from '../components/hero/hero'
import Section from '../components/section/section'
import Divider from '../components/divider/divider'
import Nav from '../components/nav/nav'
import Container from '../components/container/container'
import Testimonial from '../components/testimonial/testimonial'
import ResponsiveEmbed from 'react-responsive-embed'
import CalloutBox from '../components/calloutBox/calloutBox'

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
const ProcessList = styled('ol')`
  font-family: ${Typography.options.headerFontFamily.toString()};
  font-weight: 500;
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
      <CalloutBox title="How it works">
        <ProcessList>
          <li>We’ll match you with a partner in advance and make a personal introduction using our nifty Beatdating© process.</li>
          <li>Together you’ll develop a complete track over the course of a day long camp.</li>
          <li>You’ll be supported throughout your camp with constructive feedback and a group listening session. </li>
          <li>We wrap up with an after party so you can hang out, enjoy a cool beer and experience your music in a totally different setting.</li>
        </ProcessList>
      </CalloutBox>
    </Container>

  </div>
)

export default IndexPage
