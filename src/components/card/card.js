import React from 'react'
import styled, { css } from 'react-emotion';
import Ratio from 'react-ratio';
import { spacing, backgroundColor } from '../../utils/globalStyles'
import cardImage from './cardImage.jpg'
import icon1 from './icon1.jpg'
import Typography from '../../utils/typography'


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
  padding: ${2*spacing}px;
  @media (max-width: 1350px) {
    font-size: 16px ;

    h3 {
      font-size: 1.3rem;
    }
  }


`

const FlexItemImage = styled('div')`
  float:left;
  max-width: 50%;
`

const Icon = css`
  width: 60px;
  padding-bottom: ${spacing}px;
  @media (max-width: 1350px) {
    width: 40px;
    }
  }
`

const Clear = styled('div')`
  clear: both;
`

export default class Card extends React.Component {
  render() {
    return(
      <div>
        <Ratio ratio={ 1200 / 453 } css={`background-color:white; display:flex; margin-bottom: ${spacing}px; overflow: hidden; max-width: 1200px; margin-left: auto; margin-right: auto;`}>
          <FlexItemText>
          <img src={require(this.props.card.icon)} className={Icon}/>
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
