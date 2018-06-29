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
import Button from '../components/Button/button'

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
  list-style: none;
`

const listItem = css`
  counter-increment: item;
  margin-bottom: 5px;

  :before {
    font-family: ${Typography.options.headerFontFamily.toString()};
    font-style: italic;
    font-weight: 700;
    margin-right: 20px;
    content: counter(item);
    background: ${palette.nearBlack};
    padding-top: 0.2em;
    border-radius: 100%;
    color: white;
    width: 2em;
    height: 2em;
    text-align: center;
    display: inline-block;
  }
`

const Title = styled('h3')`
  color: white;
  font-style: italic;
  letter-spacing: -1px;
  text-align: center;
  padding-left: ${3*spacing}px;
  padding-right: ${3*spacing}px;
  line-height: ${1.4*spacing}px;
`

const Flourish = styled('div')`
  height: ${spacing/3}px;
  width: ${3*spacing}px;
  margin: auto auto;
  background: #e6487c; /* Old browsers */
  background: -moz-linear-gradient(-80deg, #e6487c 0%, #ff6761 100%);
  background: -webkit-linear-gradient(-80deg, #e6487c 0%,#ff6761 100%);
  background: linear-gradient(135deg, #e6487c 0%,#ff6761 100%);
`

const subheadline = css`
  font-family: ${Typography.options.headerFontFamily.toString()};
  margin-bottom: ${3*spacing}px;
  padding-left: ${3*spacing}px;
  padding-right: ${3*spacing}px;
  margin-top: ${spacing}px;
  margin-bottom: ${3*spacing}px;
  text-align: center;
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
        { /* <ResponsiveEmbed src='https://www.youtube.com/embed/hNV3NvNDFDM' allowFullScreen /> */ }
      </div>
      <CalloutBox title="How it works">
      <div className={css`counter-reset: item;`}>
        <ProcessList>
          <li className={listItem}>We’ll match you with a partner in advance and make a personal introduction using our nifty Beatdating© process.</li>
          <li className={listItem}>Together you’ll develop a complete track over the course of a day long camp.</li>
          <li className={listItem}>You’ll be supported throughout your camp with constructive feedback and a group listening session. </li>
          <li className={listItem}>We wrap up with an after party so you can hang out, enjoy a cool beer and experience your music in a totally different setting.</li>
        </ProcessList>
        </div>
      </CalloutBox>
    </Container>

    <Container style="black">
      <Title>Fancy escaping the everyday and joining a real life network of music producers? </Title>
      <Flourish />
      <p className={subheadline}>Pop your email in the box below and we’ll send you details of upcoming camps as well as exclusive content from our events.</p>

      <form>
        <input type='text' />
        <Button label="Find out more" />
      </form>

    </Container>
  </div>
)

export default IndexPage
