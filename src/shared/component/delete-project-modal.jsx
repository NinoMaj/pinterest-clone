import React from 'react'
import $ from 'jquery'
import styled from 'styled-components'

import ModalMain from './modal-main'

const MainDiv = styled.div`
  text-align: center;
`

const HeaderText = styled.h5`
  margin-top: 10px;
`

const Button = styled.button`
  margin: 10px 2px;
  cursor: pointer;
`

const DeleteProjectModal = ({ handleDeletingProject }) =>
  (
    <ModalMain id="confirmationPromptModal">

      <MainDiv>
        <HeaderText>Are you sure you want to delete this project?</HeaderText>

        <div>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDeletingProject()}
          >Yes, delete
          </Button>

          <Button
            type="button"
            className="btn btn-success"
            onClick={() => $('#confirmationPromptModal').modal('hide')}
          >Oh no!
          </Button>

        </div>
      </MainDiv>

    </ModalMain>
  )

export default DeleteProjectModal
