// @flow

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { HOME_PAGE_ROUTE, MY_PROJECTS_ROUTE } from '../routes'
import Item from '../component/item'
import AddProject from '../component/add-project-button'
import { deleteProject } from '../actions/projectActions'

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
  deleteProjectAction: func,
}

const Gallery = ({ projects, page, deleteProjectAction }: Props) => {
  const handleOnClickProp = (projectId: string) => {
    deleteProjectAction(projectId)
  }
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
          page={page}
          onClickProp={() => handleOnClickProp(myProject._id)}
        />
      ))
    } else if (page === HOME_PAGE_ROUTE) {
      childElements = projects.map(project => (
        <Item
          key={project._id}
          author={project.author}
          title={project.title}
          description={project.description}
          imgUrl={project.imgUrl}
          page={page}
          onClickProp={() => handleOnClickProp(project._id)}
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
      {page === MY_PROJECTS_ROUTE &&
        <AddProject />
      }
    </div>
  )
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
})

const mapDispatchToProps = dispatch => ({
  deleteProjectAction: projectId => dispatch(deleteProject(projectId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
