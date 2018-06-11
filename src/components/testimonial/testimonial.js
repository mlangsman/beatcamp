import React from 'react'
import styled, { css } from 'react-emotion';
import { spacing } from '../../utils/globalStyles'
import Typography from '../../utils/typography'
import mugshotImage from './mugshot_phil.png'




const Mugshot = styled('img')`
  border-radius: 50%;
  width: 188px;
  display: block;
  margin: auto auto;
`

const Quote = styled('p')`
  text-align: center;
  margin: auto auto;
  font-family: ${Typography.options.headerFontFamily.toString()};
`

const Dropcap = styled('span')`
  font-size: 80px;
  color: red;
  line-height:0px;


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
