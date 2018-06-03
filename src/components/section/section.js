import React from 'react'
import { css } from 'emotion';

const raised = css`
  position: relative;
  padding-top: 50px;
  top: 0px;
`

export default class Section extends React.Component {
  render() {
    return(
      <div className={raised}>
        <h1>Make music <br />together.</h1>
        <p>BeatCamp helps producers like you to escape the distractions of the modern world and collaborate in inspiring locations.</p>
      </div>
    );
  }
}
