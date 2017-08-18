import React from 'react'
import ModalMain from './modal-main'
import AddProject from '../container/add-project'

const AddProjectModal = ({
  addProject,
  editProject,
  displayNotification,
  editingProjectInfo,
  userName }) => (
    <ModalMain id="addProjectModal">
      <AddProject
        addProject={addProject}
        editProject={editProject}
        displayNotification={displayNotification}
        editingProjectInfo={editingProjectInfo}
        userName={userName}
      />
    </ModalMain>
)

export default AddProjectModal
