// @flow

import React from 'react'
import styled from 'styled-components'

import ItemImage from './item-image'
import ItemInfo from './item-info'

const ItemContainer = styled.div`
  background-color: #292b2c;
  color: #fff;
  width: 250px;
  margin: 5px;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`

type Props = {
  author: string,
  title: string,
  description: string,
  projectUrl: ?string,
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
  projectUrl,
  imgUrl,
  pinCount,
  allowPinning,
  allowDeleting,
  onClickProp,
}: Props) => (
  <ItemContainer className="grid-item" >
    <ItemImage
      description={description}
      source={imgUrl}
      height={'300px'}
      allowPinning={allowPinning}
      allowDeleting={allowDeleting}
      onClickProp={onClickProp}
    />
    <ItemInfo
      author={author}
      title={title}
      projectUrl={projectUrl}
      pinCount={pinCount}
    />
  </ItemContainer>
)
export default Item
