// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { HOME_PAGE_ROUTE, MY_PROJECTS_ROUTE, USER_PAGE_ROUTE } from '../routes'
import Item from '../component/item'
import AddProjectModal from '..//component/add-project-modal'
import AddProjectButton from '../component/add-project-button'
import { addProject, deleteProject, pinProject, editProject } from '../actions/projectActions'
import { displayNotification } from '../actions/notificationActions'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`
// type Props = {
//   projects: any[],
//   page: string,
//   userId: any,
//   userName: string,
//   profileUserName: string,
//   isLogged: boolean,
//   addProjectAction: Function,
//   deleteProjectAction: Function,
//   pinProjectAction: Function,
//   editProjectAction: Function,
//   displayNotificationAction: Function,
// }

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectEdit: { title: '', description: '', projectUrl: '', projectId: '' },
    }
  }

//   {projects,
//   page,
//   userId,
//   userName,
//   profileUserName,
//   isLogged,
//   addProjectAction,
//   deleteProjectAction,
//   pinProjectAction,
//   editProjectAction,
//   displayNotificationAction,
// } = this.props
// : Props) {

  setChildElements() {
    const { projects, page, userName, userId, isLogged, profileUserName } = this.props
    let childElements = null
    if (projects.length > 0) {
      if (page === MY_PROJECTS_ROUTE) {
        childElements = projects.filter(project => project.author === userName).map(myProject => (
          <Item
            key={myProject._id}
            author={'me'}
            title={myProject.title}
            description={myProject.description}
            projectUrl={myProject.projectUrl}
            imgUrl={myProject.imgUrl}
            pinCount={myProject.pinnedBy.length}
            allowPinning={false}
            allowDeleting
            deleteProject={() => this.handleDeletingProject(myProject._id)}
            editProject={() =>
              this.handleEditingProject(
                myProject._id,
                myProject.title,
                myProject.description,
                myProject.projectUrl,
              )
            }
          />
        ))
      } else if (page === HOME_PAGE_ROUTE) {
        childElements = projects.map(project => (
          <Item
            key={project._id}
            author={project.author}
            title={project.title}
            description={project.description}
            projectUrl={project.projectUrl}
            imgUrl={project.imgUrl}
            pinCount={project.pinnedBy.length}
            allowPinning={
              !project.pinnedBy.includes(userId) &&
              project.author !== userName &&
              isLogged
            }
            allowDeleting={false}
            pinProject={() => this.handlePinningProject(project._id)}
          />
        ))
      } else if (page === USER_PAGE_ROUTE) {
        childElements = projects.filter(
          project => project.author === profileUserName).map(project => (
            <Item
              key={project._id}
              author={project.author}
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              imgUrl={project.imgUrl}
              pinCount={project.pinnedBy.length}
              allowPinning={
                !project.pinnedBy.includes(userId) &&
                project.author !== profileUserName &&
                isLogged
              }
              allowDeleting={false}
              pinProject={() => this.handlePinningProject(project._id)}
            />
        ))
      }
    }
    return childElements
  }

  handlePinningProject(projectId: string) {
    this.props.pinProjectAction(projectId, this.props.userId)
    this.props.displayNotificationAction(
      'success',
      'Project pinned!',
      'This project was added to your pinned list',
    )
  }

  handleDeletingProject(projectId: string) {
    this.props.deleteProjectAction(projectId)
    this.props.displayNotificationAction(
      'info',
      'Project deleted',
      'The project has been successfully deleted',
    )
  }

  handleEditingProject(projectId, title, description, projectUrl) {
    this.setState({
      projectEdit: { projectId, title, description, projectUrl },
    })
  }

  resetEditingProject() {
    this.setState({
      projectEdit: { title: '', description: '', projectUrl: '', projectId: '' },
    })
  }


  render() {
    const childElements = this.setChildElements()
    return (
      <div>
        {this.props.page === MY_PROJECTS_ROUTE &&
          <div>
            <AddProjectButton />
            <AddProjectModal
              addProject={this.props.addProjectAction}
              editProject={this.props.editProjectAction}
              displayNotification={this.props.displayNotificationAction}
              editingProjectInfo={this.state.projectEdit}
              resetEditingProject={() => this.resetEditingProject()}
              userName={this.props.userName}
            />
          </div>
        }
        <Container>
          {childElements}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
  userId: state.user.id,
  userName: state.user.userName,
  isLogged: state.user.logged,
})

const mapDispatchToProps = dispatch => ({
  addProjectAction: (author, title, description, projectUrl, imgUrl) =>
    dispatch(addProject(author, title, description, projectUrl, imgUrl)),

  deleteProjectAction: projectId => dispatch(deleteProject(projectId)),

  pinProjectAction: (projectId, user) => dispatch(pinProject(projectId, user)),

  editProjectAction: (title, description, projectUrl, projectToEdit) =>
    dispatch(editProject(title, description, projectUrl, projectToEdit)),

  displayNotificationAction: (notifType, title, message) =>
    dispatch(displayNotification(notifType, title, message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
