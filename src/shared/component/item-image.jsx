// @flow

import React from 'react'
import styled from 'styled-components'

import { HOME_PAGE_ROUTE, MY_PROJECTS_ROUTE } from '../routes'

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

const DeleteButton = styled.div`
  text-align: center;
  width: 15%;
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

const DeleteText = styled.p`
  padding-top: 3px;
`

type Props = {
  source: string,
  height: string,
  page: string,
  onClickProp: Function,
}

const ItemImage = ({ source, height, page, onClickProp }: Props) => (
  <ImgContainer>
    <Img src={source} alt="project" height={height} />
    {page === HOME_PAGE_ROUTE &&
      <PinButton onClick={onClickProp}>
        <PinText>SAVE <i className="fa fa-thumb-tack" aria-hidden="true" /></PinText>
      </PinButton>
    }
    {page === MY_PROJECTS_ROUTE &&
      <DeleteButton onClick={onClickProp}>
        <DeleteText><i className="fa fa-trash" aria-hidden="true" /></DeleteText>
      </DeleteButton>
    }
  </ImgContainer>
)

export default ItemImage
