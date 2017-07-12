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

const Item = () => (
  <ItemContainer className="grid-item" >
    <ItemImage source={'https://source.unsplash.com/random/326x300'} />
    <ItemInfo desc={'Description'} pinsCount={Math.floor(Math.random() * 10)} author={'Name'} />
  </ItemContainer>
)
export default Item
