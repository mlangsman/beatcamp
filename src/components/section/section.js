import React from 'react'
import { css } from 'emotion';
import { spacing, backgroundColor } from '../../utils/globalStyles'
import Card from '../card/card.js'

const section = css`
  padding-top: ${spacing*2}px;
  background-color: ${backgroundColor};
`

const flourish = css`
  height: ${7*spacing}px;
  width: ${spacing/2}px;
  position: absolute;
  left:0;
  background: #e6487c; /* Old browsers */
  background: -moz-linear-gradient(-80deg, #e6487c 0%, #ff6761 100%);
  background: -webkit-linear-gradient(-80deg, #e6487c 0%,#ff6761 100%);
  background: linear-gradient(135deg, #e6487c 0%,#ff6761 100%);

`

export default class Section extends React.Component {
  render() {
    return(
      <div className={section}>
      <div className={flourish}></div>
        <h1>Make music <br />together.</h1>
        <p>BeatCamp helps producers like you to escape the distractions of the modern world and collaborate in inspiring locations.</p>
        <Card />
      </div>

    );
  }
}
