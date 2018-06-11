import React from 'react'
import styled, { css } from 'react-emotion';
import { spacing, palette } from '../../utils/globalStyles'

const AngledDivider = styled('div')`
  padding-top: ${spacing*5}px;
  background-color: ${palette.backgroundDark};
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
