import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  background-color: lightgray;
  float: left;
  width: 236px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`
const Img = styled.img`
  height: ${() => ((Math.random() * (300 - 150)) + 150)}px;
  width: 226px;
  margin: 5px auto;
  display: block;
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
    <Img src={'https://unsplash.it/200/200?image=#{$id}'} alt="card" />
    <ItemInfo>
      <ItemText>Lorem Ipsum something something...</ItemText>
    </ItemInfo>
  </ItemContainer>
)

export default Item
