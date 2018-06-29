import React from 'react'
import styled, { css } from 'react-emotion';
import { spacing, palette } from '../../utils/globalStyles'
import backgroundImage from './containerBackground.jpg'

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
const ContainerBlack = styled('div')`
  position: relative;
  top: -400px;
  padding-top: ${spacing*14}px;
  padding-left: ${spacing*4}px;
  padding-right: ${spacing*4}px;
  padding-bottom: ${spacing*4}px;
  color: white;
  background-image: url('${backgroundImage}');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 1000px;
  overflow: auto;
  background-position: top left;
  overflow:auto;
  clip-path: polygon(
    0 0,
    100% 9vw,
    100% 100%,
    0 100%
    );
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
    else if (this.props.style === 'black')
    {
      return(<ContainerBlack>{this.props.children}</ContainerBlack>);
    }
  }
}
