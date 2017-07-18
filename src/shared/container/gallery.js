// @flow

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Item from '../component/item'
import AddProject from '../component/add-project-button'

const Container = styled.div`
  margin: 0 auto;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`
type Props = {
  projects: any[]
}

const Gallery = ({ projects }: Props) => {
  let childElements = null
  if (typeof window !== 'undefined' && projects.length > 0) {
    childElements = projects.map(project => (
      <Item
        key={project._id}
        author={project.author}
        title={project.title}
        description={project.description}
        imgUrl={project.imgUrl}
      />
    ))
  }

  return (
    <div>
      <Container
        className="grid"
        data-masonry='{
        "itemSelector": ".grid-item",
        "gutter": 15,
        "columnWidth": 236,
        "fitWidth": true
      }'
      >
        {childElements}
      </Container>
      <AddProject />
    </div>
  )
}

// export default Gallery

const mapStateToProps = state => ({
  projects: state.projects.projects,
})

export default connect(mapStateToProps)(Gallery)
