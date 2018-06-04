import React from 'react';
import styled, { css } from 'react-emotion';
import { spacing } from '../../utils/globalStyles'
import logo from './beatcampLogo.png'
import Button from '../button/button'

const Navbar = styled('div')`
  padding: ${spacing}px;
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  z-index: 1;
  text-align: center;
  color: white;
`

const Logo = styled('img')`
  width: 200px;
  display: inline-block;
`

const floatRight = css`
  position: absolute;
  right: ${spacing}px;
  display: inline-block;
`

export default class Nav extends React.Component {
  render() {
    return(
      <Navbar>
        <Logo src={logo} />
        <div className={floatRight}>
          <Button label="Join a Camp" />
        </div>
      </Navbar>
    );
  }
}
