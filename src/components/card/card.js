import React from 'react'
import styled, { css } from 'react-emotion';
import { spacing, backgroundColor } from '../../utils/globalStyles'
import cardImage from './cardImage.jpg'

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
  flex: 0 1 50%;
  max-width: 50%;
  text-align: center;
  padding: ${2.5*spacing}px;
`

const FlexItemImage = styled('div')`
  flex: 0 1 50%;
  max-width: 50%;
`

export default class Card extends React.Component {
  render() {
    return(
      <ContentCard>
        <FlexItemText>
          <h3>Time to explore your ideas and get lost in music</h3>
          <p>At our unique collaborative production camps your time is your own and there are no disturbances from the outside world. </p>
        </FlexItemText>
        <FlexItemImage>
          <img src={cardImage} />
        </FlexItemImage>
      </ContentCard>
    );
  }
}
