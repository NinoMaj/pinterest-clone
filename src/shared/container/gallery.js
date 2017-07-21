// @flow

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { MY_PROJECTS_ROUTE } from '../routes'
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
  projects: any[],
  page: string,
}

const Gallery = ({ projects, page }: Props) => {
  let childElements = null
  if (projects.length > 0) {
    if (page === MY_PROJECTS_ROUTE) {
      childElements = projects.filter(project => project.author === 'author').map(myProject => (
        <Item
          key={myProject._id}
          author={'me'}
          title={myProject.title}
          description={myProject.description}
          imgUrl={myProject.imgUrl}
        />
      ))
    } else {
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

const mapStateToProps = state => ({
  projects: state.projects.projects,
})

export default connect(mapStateToProps)(Gallery)
