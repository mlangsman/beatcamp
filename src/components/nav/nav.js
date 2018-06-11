import React from 'react';
import styled, { css } from 'react-emotion';
import { spacing, palette } from '../../utils/globalStyles'
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Logo = styled('img')`
  width: 200px;
  display: inline-block;
  margin:auto;
`

const floatRight = css`
  position: absolute;
  right: ${spacing}px;
  display: inline-block;
`
const scrollStyle = css`
  display:none;
`

export default class Nav extends React.Component {

  state = {
      isTop: true,
    };

    componentDidMount() {
      document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 500;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop })
        }
      });
    }


  render() {
    return(
      <Navbar >
        <Logo src={logo} css={this.state.isTop ? `` : scrollStyle } />
        <div className={floatRight}>
          <Button label="Join a Camp" />
        </div>
      </Navbar>
    );
  }
}
