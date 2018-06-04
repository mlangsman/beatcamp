import React from 'react';
import { css } from 'emotion';
import heroImage from './hero@2x.jpg';

const heroStyle = css`
  background-image: url(${heroImage});
  background-attachment: fixed;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    0 calc(100% - 9vw)
    );
`


export default class Hero extends React.Component {
  render() {
    return(
      <div className={heroStyle}></div>
    );
  }
}
