// @flow

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-top: 1px #f2f2f2 solid;
`

const Title = styled.div`
  height: 30px;
  margin: 2px auto;
  font-weight: 600;
  text-align: center;
  padding-top: 3px;
`

const Link = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #0DBD53;
  }
`

const AuthorAndPinCount = styled.div`
  height: 30px;
  width: 94%;
  margin: 2px auto;
  font-size: 14px;
`

const AuthorLogo = styled.div`
  display: inline-block;
  color: #999;
`

const AuthorName = styled.span`
  margin-left: 5px;
`

const PinCount = styled.span`
  float: right;
`

const PinIcon = styled.i`
  color: #999;
`

type Props = {
  title: string,
  pinCount: number,
  author: string,
}

const ItemInfo = ({ author, title, projectUrl, pinCount }: Props) => (
  <Container>
    <Title>
      <Link href={projectUrl}>{title}</Link>
    </Title>

    <AuthorAndPinCount>

      <AuthorLogo>
        <i className="fa fa-user" aria-hidden="true" />
      </AuthorLogo>

      <AuthorName>
        {author}
      </AuthorName>

      <PinCount>
        <PinIcon className="fa fa-thumb-tack" aria-hidden="true" /> {pinCount}
      </PinCount>

    </AuthorAndPinCount>
  </Container>
)
export default ItemInfo
