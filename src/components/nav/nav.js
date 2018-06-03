import React from 'react';
import styled, { css } from 'react-emotion';

const Navbar = styled('div')`
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  z-index: 1;
  color: white;
`

export default class Nav extends React.Component {
  render() {
    return(
      <Navbar>BeatCamp</Navbar>
    );
  }
}
