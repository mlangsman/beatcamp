import React from 'react'
import { css } from 'emotion';
import { spacing, backgroundColor } from '../../utils/globalStyles'
import Card from '../card/card.js'
import Typography from '../../utils/typography'

/* console.log(Typography.options.scaleRatio); */

const section = css`
  padding-top: ${spacing*2}px;
  background-color: ${backgroundColor};
`

const flourish = css`
  height: ${7*spacing}px;
  width: ${spacing/2}px;
  position: absolute;
  left:0;
  background: #e6487c; /* Old browsers */
  background: -moz-linear-gradient(-80deg, #e6487c 0%, #ff6761 100%);
  background: -webkit-linear-gradient(-80deg, #e6487c 0%,#ff6761 100%);
  background: linear-gradient(135deg, #e6487c 0%,#ff6761 100%);
`

const subheadline = css`
  font-family: ${Typography.options.headerFontFamily.toString()};
  width: 75%;
  margin-bottom: ${3*spacing}px;
`

const card1 = {
  heading: "Time to explore your ideas and get lost in\u00a0music",
  body: "At our unique collaborative production camps your time is your own and there are no disturbances from the outside\u00a0world.",
  image: './cardImage.jpg',
  icon: './icon1.jpg'
}

const card2 = {
  heading: "Experience your peak creative flow",
  body: "With a partner to bounce ideas off and a structured deadline you’ll breeze through challenges and go home with a finished\u00a0track",
  image: './cardImage2.jpg',
  icon: './icon2.jpg'
}

const card3 = {
  heading: "Get real life support and encouragement",
  body: "You’ll meet, work and party with producers at all different levels, receive feedback and coaching, and play your music to a crowd.",
  image: './cardImage3.jpg',
  icon: './icon3.jpg'
}

export default class Section extends React.Component {
  render() {
    return(
      <div className={section}>
      <div className={flourish}></div>
        <h1>Make music <br />together.</h1>
        <p className={subheadline}>BeatCamp helps producers like you to escape the distractions of the modern world and collaborate in inspiring locations.</p>
        <Card card={card1} />
        <Card card={card2} />
        <Card card={card3} />
      </div>

    );
  }
}
