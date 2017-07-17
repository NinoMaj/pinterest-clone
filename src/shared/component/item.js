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
  imgUrl: string
}

// https://source.unsplash.com/random/326x300

const Item = ({ author, title, description, imgUrl }: Props) => (
  <ItemContainer className="grid-item" >
    <ItemImage source={imgUrl} />
    <ItemInfo
      author={author}
      title={title}
      description={description}
      pinsCount={Math.floor(Math.random() * 10)}
    />
  </ItemContainer>
)
export default Item
