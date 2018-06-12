import React from 'react'
import styled, { css } from 'react-emotion';
import { spacing, palette } from '../../utils/globalStyles'

const ContainerLight = styled('div')`
  padding-left: ${spacing*4}px;
  padding-right: ${spacing*4}px;
  padding-bottom: ${spacing*4}px;
  background-color: ${palette.backgroundLight};
  overflow:auto
`

const ContainerDark = styled('div')`
  padding-left: ${spacing*4}px;
  padding-right: ${spacing*4}px;
  padding-bottom: ${spacing*4}px;
  background-color: ${palette.backgroundDark};
  overflow:auto
`

export default class Container extends React.Component {
  render() {
    if (this.props.style === 'dark')
    {
      return(<ContainerDark>{this.props.children}</ContainerDark>);
    }
    else if (this.props.style === 'light')
    {
      return(<ContainerLight>{this.props.children}</ContainerLight>);
    }
  }
}
