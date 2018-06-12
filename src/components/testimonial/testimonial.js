import React from 'react'
import styled, { css } from 'react-emotion';
import { spacing, palette } from '../../utils/globalStyles'
import Typography from '../../utils/typography'
import mugshotImage from './mugshot_phil.png'


const Mugshot = styled('img')`
  border-radius: 50%;
  width: 188px;
  display: block;
  margin: ${spacing}px auto;
  -webkit-box-shadow: 0px 23px 48px 0px rgba(139,139,139,0.5);
  -moz-box-shadow: 0px 23px 48px 0px rgba(139,139,139,0.5);
  box-shadow: 0px 23px 48px 0px rgba(139,139,139,0.5);
`

const Quote = styled('p')`
  text-align: center;
  margin: auto auto;
  font-family: ${Typography.options.headerFontFamily.toString()};
  width : 70%;
  font-style: italic;
`

const Dropcap = styled('span')`
  font-size: 80px;
  color: red;
  line-height:0px;
  color: ${palette.nearBlack};
  opacity: 0.2;
  


`



export default class Testimonial extends React.Component {
  render() {
    return(
      <div>
        <Mugshot src={mugshotImage} />
        <Quote>
          <Dropcap>&ldquo;</Dropcap>
          I&#39;ve learned so much more sitting beside another producer making music together than watching countless tutorials, interviews and talks. The network of producers and experts on hand makes BeatCamp very special indeed.</Quote>
      </div>
    );
  }
}
