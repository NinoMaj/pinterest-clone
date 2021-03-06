// @flow

import React from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
  border-radius: 5px 5px 0 0;
  position: relative;
  overflow: hidden;
  height: ${props => props.height}
`
const ImgDiv = styled.div`
  background: url(${props => props.source}) no-repeat center;
  background-size: cover;
  height: 100%;

  ${ImgContainer}:hover & {
    filter: brightness(50%) blur(5px);
    transition: all 1s ease;
  }
`

const Button = styled.div`
  color: white;
  cursor: pointer;
  display: none;
  font-size: 13px;
  padding: 3px 8px;
  position: absolute;
  right: 10px;
  text-align: center;
  top: 5px;
  z-index: 5;

  ${ImgContainer}:hover & {
    display: block;
  }
`

const EditButton = Button.extend`
  right: 45px;
`

const DescriptionOverlay = styled.div`
  position: absolute;
  bottom: -380px;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  transition: all 0.5s;
  text-align: center;
  font-size: 14px;
  color: #fff;

  ${ImgContainer}:hover & {
    bottom: 0;
  }
`
const DescriptionText = styled.p`
  padding: 35px 10px 10px;
`

type Props = {
  description: string,
  source: string,
  height: string,
  allowPinning: boolean,
  allowDeleting: boolean,
  editProject: ?Function,
  setDeleteProject: ?Function,
  pinProject: ?Function,
}

const ItemImage = ({
  description,
  source,
  height,
  allowPinning,
  allowDeleting,
  editProject,
  setDeleteProject,
  pinProject }: Props) => (
    <ImgContainer height={height}>
      {allowPinning &&
        <Button type="button" className="btn btn-success" onClick={pinProject}>
          Save <i className="fa fa-thumb-tack fa-lg" aria-hidden="true" />
        </Button>
      }
      {allowDeleting &&
        <div>
          <EditButton
            type="button"
            className="btn btn-primary"
            onClick={editProject}
            data-toggle="modal"
            data-target="#addProjectModal"
          >
            <i className="fa fa-pencil-square-o fa-lg" aria-hidden="true" />
          </EditButton>

          <Button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#confirmationPromptModal"
            onClick={setDeleteProject}
          >
            <i className="fa fa-trash fa-lg" aria-hidden="true" />
          </Button>
        </div>
      }

      <ImgDiv source={source} />

      <DescriptionOverlay>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionOverlay>

    </ImgContainer>
)

export default ItemImage
