// @flow

import React from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
  position: relative;
`
const Img = styled.img`
  height: ${props => props.height};
  width: 226px;
  margin: 5px auto;
  display: block;

  ${ImgContainer}:hover & {
    filter: brightness(50%);
    transition: all 1s ease;
  }
`
const PinButton = styled.div`
  text-align: center;
  width: 30%;
  height: 30px;
  color: white;
  background-color: rgb(180, 11, 31);
  border-radius: 4px;
  position: absolute;
  top: 5px;
  right: 10px;
  display: none;
  cursor: pointer;

  ${ImgContainer}:hover & {
	  display: block;
	}
`
const PinText = styled.p`
  padding-top: 3px;
`

type Props = {
  source: string,
  height: string,
}

const ItemImage = ({ source, height }: Props) => (
  <ImgContainer>
    <Img src={source} alt="project" height={height} />
    <PinButton>
      <PinText>SAVE <i className="fa fa-thumb-tack" aria-hidden="true" /></PinText>
    </PinButton>
  </ImgContainer>
)

export default ItemImage
