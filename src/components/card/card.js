import React from 'react'
import styled, { css } from 'react-emotion';
import Ratio from 'react-ratio';
import { spacing, backgroundColor } from '../../utils/globalStyles'
import cardImage from './cardImage.jpg'
import icon1 from './icon1.jpg'

const ContentCard = styled('div')`
  background-color: white;
  display: flex;
  margin-top: ${spacing}px;
  margin-bottom: ${spacing}px;
  -webkit-box-shadow: 0px 24px 29px 0px rgba(225,225,225,0.5);
  -moz-box-shadow: 0px 24px 29px 0px rgba(225,225,225,0.5);
  box-shadow: 0px 24px 29px 0px rgba(225,225,225,0.5);
`

const FlexItemText = styled('div')`
  float:left;
  max-width: 50%;
  text-align: center;
  padding: ${2.5*spacing}px;
`

const FlexItemImage = styled('div')`
  float:left;
  max-width: 50%;
`

const Clear = styled('div')`
  clear: both;
`

export default class Card extends React.Component {
  render() {
    return(
      <div>
        <Ratio ratio={ 1200 / 453 } css={`background-color:white; display:flex; margin-bottom:${spacing}`}>
          <FlexItemText>
          <img src={icon1} />
            <h3>{this.props.card.heading}</h3>
            <p>{this.props.card.body}</p>
          </FlexItemText>
          <FlexItemImage>
            <img src={require(this.props.card.image)} />
          </FlexItemImage>
          <Clear />
        </Ratio>
      </div>

    );
  }
}
