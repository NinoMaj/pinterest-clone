import React from 'react'
import styled from 'styled-components'

import ItemImage from './item-image'

const ItemContainer = styled.div`
  background-color: lightgray;
  float: left;
  width: 236px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`

const ItemInfo = styled.div`
  text-align: center;
  display: flex;
  height: 80px;
`
const ItemText = styled.p`
  height: 50px;
  width: 236px;
  margin: auto;
`

const Item = () => (
  <ItemContainer className="grid-item" >
    <ItemImage source={'https://source.unsplash.com/random/326x300'} />
    <ItemInfo>
      <ItemText>Lorem Ipsum something something...</ItemText>
    </ItemInfo>
  </ItemContainer>
)
export default Item
