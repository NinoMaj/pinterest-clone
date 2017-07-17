// @flow

import React from 'react'

import AddProject from '../container/add-project'

const AddProjectModal = () => (
  <div className="modal fade mt-5" id="addProjectModal" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <AddProject />
        </div>
      </div>
    </div>
  </div>
)

export default AddProjectModal
