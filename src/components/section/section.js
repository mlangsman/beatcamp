import React from 'react'
import { css } from 'emotion';
import { spacing } from '../../utils/globalStyles'

const section = css`
  padding-top: ${spacing*2}px;
`

export default class Section extends React.Component {
  render() {
    return(
      <div className={section}>
        <h1>Make music <br />together.</h1>
        <p>BeatCamp helps producers like you to escape the distractions of the modern world and collaborate in inspiring locations.</p>
      </div>
    );
  }
}
