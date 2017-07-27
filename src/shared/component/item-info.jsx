// @flow

import React from 'react'
import styled from 'styled-components'

const DescriptionAndPinCount = styled.div`
  display: flex;
  height: 30px;
  width: 94%;
  margin: 2px auto;
`
const Description = styled.p`
  flex-grow: 4;
`

const PinCount = styled.p`
  flex-grow: 1;
  text-align: right;
  padding-top: 6px;
  font-size: 0.8em;
`

const Author = styled.div`
  height: 30px;
  width: 94%;
  margin: 2px auto;
`

const AuthorLogo = styled.div`
  display: inline-block;
`

const AuthorName = styled.span`
  margin-left: 5px;
`

type Props = {
  description: string,
  pinCount: number,
  author: string,
}

const ItemInfo = ({ author, description, pinCount }: Props) => (
  <div>
    <DescriptionAndPinCount>
      <Description>
        {description}
      </Description>
      <PinCount>
        <i className="fa fa-thumb-tack" aria-hidden="true" /> {pinCount}
      </PinCount>
    </DescriptionAndPinCount>
    <Author>
      <AuthorLogo>
        <i className="fa fa-user" aria-hidden="true" />
      </AuthorLogo>
      <AuthorName>
        {author}
      </AuthorName>
    </Author>
  </div>
)
export default ItemInfo
