// @flow

import React from 'react'
import styled from 'styled-components'

import ItemImage from './item-image'
import ItemInfo from './item-info'

const ItemContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 2px 1px rgba(25,25,25,0.2);
  color: #000;
  margin: 5px;
  width: 250px;
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
`

type Props = {
  author: string,
  title: string,
  description: string,
  projectUrl: ?string,
  imgUrl: string,
  pinCount: number,
  allowPinning: boolean,
  allowDeleting: boolean,
  // editProject: any, // As this changes depending of page, are not always required
  // deleteProject: any,
  // pinProject: any,
}

const Item = ({
  author,
  title,
  description,
  projectUrl,
  imgUrl,
  pinCount,
  allowPinning,
  allowDeleting,
  editProject,
  deleteProject,
  pinProject,
}: Props) => (
  <ItemContainer>
    <ItemImage
      description={description}
      source={imgUrl}
      height={'300px'}
      allowPinning={allowPinning}
      allowDeleting={allowDeleting}
      editProject={editProject}
      deleteProject={deleteProject}
      pinProject={pinProject}
    />
    <ItemInfo
      author={author}
      title={title}
      projectUrl={projectUrl}
      pinCount={pinCount}
    />
  </ItemContainer>
)
export default Item
