// @flow

import React from 'react'
import styled from 'styled-components'

import ItemImage from './item-image'
import ItemInfo from './item-info'

const ItemContainer = styled.div`
  background-color: lightgray;
  float: left;
  width: 236px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`

type Props = {
  author: string,
  title: string,
  description: string,
  imgUrl: string,
  pinCount: number,
  allowPinning: boolean,
  allowDeleting: boolean,
  onClickProp: any,
}

const Item = ({
  author,
  title,
  description,
  imgUrl,
  pinCount,
  allowPinning,
  allowDeleting,
  onClickProp,
}: Props) => (
  <ItemContainer className="grid-item" >
    <ItemImage
      source={imgUrl}
      height={`${((description.length % 10) * 10) + 250}px`}
      allowPinning={allowPinning}
      allowDeleting={allowDeleting}
      onClickProp={onClickProp}
    />
    <ItemInfo
      author={author}
      title={title}
      description={description}
      pinCount={pinCount}
    />
  </ItemContainer>
)
export default Item
