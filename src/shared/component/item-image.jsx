import React from 'react'
import styled from 'styled-components'

import { STATIC_PATH } from '../config'

const ImgContainer = styled.div`
  position: relative;
`
const Img = styled.img`
  height: 250px;
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
	  Sdisplay: block;
	}
`
const PinText = styled.p`
  padding-top: 3px;
`

const ItemImage = () => (
  <ImgContainer>
    <Img src={this.props.source} alt="pin" />
    <PinButton>
      <PinText>SAVE <i className="fa fa-thumb-tack" aria-hidden="true" /></PinText>
    </PinButton>
  </ImgContainer>
)

export default ItemImage
