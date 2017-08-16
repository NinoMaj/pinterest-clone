// @flow

import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 18px;
  height: 30px;
  margin: 2px auto;
  text-align: center;
  width: 94%;
`

const PinCount = styled.span`
  float: right;
`

const AuthorAndPinCount = styled.div`
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
  title: string,
  pinCount: number,
  author: string,
}

const ItemInfo = ({ author, title, pinCount }: Props) => (
  <div>
    <Title>
      {title}
    </Title>

    <AuthorAndPinCount>

      <AuthorLogo>
        <i className="fa fa-user" aria-hidden="true" />
      </AuthorLogo>

      <AuthorName>
        {author}
      </AuthorName>

      <PinCount>
        <i className="fa fa-thumb-tack" aria-hidden="true" /> {pinCount}
      </PinCount>

    </AuthorAndPinCount>
  </div>
)
export default ItemInfo
