import React from 'react'
import styled, { css } from 'react-emotion';
import { spacing, backgroundColor, backgroundColorDark } from '../../utils/globalStyles'

const AngledDivider = styled('div')`
  padding-top: ${spacing*5}px;
  height: 100px;
  background-color: ${backgroundColorDark};
  clip-path: polygon(
    0 9vw,
    100% 0%,
    100% 100%,
    0 100%
    );
`

export default class Divider extends React.Component {
  render() {
    return(
      <AngledDivider />
    );
  }
}
