import React from 'react'
import styled, { css } from 'react-emotion';
import { spacing, palette } from '../../utils/globalStyles'

const CalloutStyle = styled('div')`
  border: solid 15px white;
  background: ${palette.mediumGrey};
  padding: ${spacing*3}px;
`

const Title = styled('h3')`
  background: white;
  display: inline-block;
  font-style: italic;
  letter-spacing: -1px;
  padding: ${spacing*2/3}px ${spacing*2}px;
  position: relative;
  top: 80px;
  left: 90px;

`


export default class CalloutBox extends React.Component {
  render() {
    return(
      <div>
      <Title>{this.props.title}</Title>
      <CalloutStyle>
        {this.props.children}
      </CalloutStyle>
      </div>
    );
  }
}
