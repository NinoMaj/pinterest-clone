import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: fixed;
  right: 15px;
  top: 70px;
  z-index: 2;
  font-size: 1.2em;
  cursor: pointer;
`

const AddProject = () => (
  <Button
    type="button"
    className="btn btn-info"
    data-toggle="modal"
    data-target="#addProjectModal"
  ><i className="fa fa-plus fa-lg fa-fw" />Add project
  </Button>
)

export default AddProject
