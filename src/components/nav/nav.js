import React from 'react';
import styled, { css } from 'react-emotion';
import { spacing } from '../../utils/globalStyles'
import logo from './beatcampLogo.png'

const Navbar = styled('div')`
  padding-top: ${spacing}px;
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  z-index: 1;
  color: white;
`

const Logo = styled('img')`
  width: 242px;
  margin: auto;
  display: block;
`


export default class Nav extends React.Component {
  render() {
    return(
      <Navbar>
        <Logo src={logo} />
      </Navbar>
    );
  }
}
