// @flow

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { HOME_PAGE_ROUTE, MY_PROJECTS_ROUTE } from '../routes'
import Item from '../component/item'
import AddProject from '../component/add-project-button'
import { deleteProject, pinProject } from '../actions/projectActions'

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
  userId: string,
  isLogged: boolean,
  deleteProjectAction: Function,
  pinProjectAction: Function,
}

const Gallery = ({
  projects,
  page,
  userId,
  isLogged,
  deleteProjectAction,
  pinProjectAction,
}: Props) => {
  const handleDeletingProject = (projectId: string) => {
    deleteProjectAction(projectId)
  }

  const handlePinningProject = (projectId: string) => {
    pinProjectAction(projectId, userId)
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
          pinCount={myProject.pinnedBy.length}
          page={page}
          onClickProp={() => handleDeletingProject(myProject._id)}
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
          pinCount={project.pinnedBy.length}
          page={page}
          isLogged={isLogged}
          onClickProp={() => handlePinningProject(project._id)}
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
  userId: state.user.id,
  isLogged: state.user.logged,
})

const mapDispatchToProps = dispatch => ({
  deleteProjectAction: projectId => dispatch(deleteProject(projectId)),
  pinProjectAction: (projectId, user) => dispatch(pinProject(projectId, user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
