// @flow

import React from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
`
const Img = styled.img`
  height: ${props => props.height};
  width: 250px;
  margin: 5px auto;
  display: block;

  ${ImgContainer}:hover & {
    filter: brightness(50%) blur(5px);
    transition: all 1s ease;
  }
`

const Button = styled.div`
  background-color: rgb(180, 11, 31);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: none;
  height: 30px;
  padding: 0 12px;
  position: absolute;
  right: 10px;
  text-align: center;
  top: 5px;
  z-index: 5;

  ${ImgContainer}:hover & {
    display: block;
  }
`

const Text = styled.p`
  padding-top: 3px;
`

const DescriptionOverlay = styled.div`
  position: absolute;
  bottom: -380px;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  transition: all 0.5s;
  text-align: center;
  font-size: 16px;
  color: #fff;

  ${ImgContainer}:hover & {
    bottom: 0;
  }
`
const DescriptionText = styled.p`
  padding: 35px 10px 10px;
`

type Props = {
  description: string,
  source: string,
  height: string,
  allowPinning: boolean,
  allowDeleting: boolean,
  onClickProp: Function,
}

const ItemImage = ({
  description,
  source,
  height,
  allowPinning,
  allowDeleting,
  onClickProp }: Props) => (
    <ImgContainer>
      {allowPinning &&
        <Button onClick={onClickProp}>
          <Text>SAVE <i className="fa fa-thumb-tack" aria-hidden="true" /></Text>
        </Button>
      }
      {allowDeleting &&
        <Button onClick={onClickProp}>
          <Text><i className="fa fa-trash" aria-hidden="true" /></Text>
        </Button>
      }

      <Img src={source} alt="project" height={height} />

      <DescriptionOverlay>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionOverlay>

    </ImgContainer>
)

export default ItemImage
