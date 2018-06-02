import React from 'react';
import { css } from 'emotion';
import heroImage from './hero@2x.jpg';

const heroStyle = css`
  background-image: url(${heroImage});
  background-attachment: fixed;
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
`

export default class Hero extends React.Component {
  render() {
    return(<div className={heroStyle}></div>);
  }
}
