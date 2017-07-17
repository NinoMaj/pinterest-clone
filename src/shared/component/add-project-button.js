import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 2;
  font-size: 1.2em;
`

const AddProject = () => (
  <Button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#addProjectModal">
    +
  </Button>
)

export default AddProject
