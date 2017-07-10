import React from 'react'
import styled from 'styled-components'

import Item from './item'

const Container = styled.div`
  margin: 0 auto;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

const Gallery = () => {
  let childElements = null
  if (typeof window !== 'undefined') {
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    childElements = elements.map(element => (
      <Item key={element} />
    ))
  }

  return (
    <Container
      className="grid"
      data-masonry='{
        "itemSelector": ".grid-item",
        "gutter": 2,
        "columnWidth": 236,
        "fitWidth": true
      }'
    >
      {childElements}
    </Container>
  )
}

export default Gallery
