import React from 'react';
import ReactDOM from 'react-dom'
import styled, { css } from 'react-emotion';
import { spacing } from '../../utils/globalStyles'

const CTAButton = styled('button')`
  display: inline-block;
  color: white;
  border: none;
  border-radius: 40px;
  padding: ${spacing/7}px ${spacing}px;
  background: #e6487c; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #e6487c 0%, #ff6761 100%);
  background: -webkit-linear-gradient(-45deg, #e6487c 0%,#ff6761 100%);
  background: linear-gradient(135deg, #e6487c 0%,#ff6761 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e6487c', endColorstr='#ff6761',GradientType=1 );
`

export default class Button extends React.Component {
  render() {
    return(
        <CTAButton>{this.props.label}</CTAButton>
    );
  }
}
