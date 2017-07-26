// @flow

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import ProfileModal from '../profile-modal'

const title = 'Profile'

const Img = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  border: 3px solid green;
  margin-right: 25px;
`
const MainDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
`

type Props = {
  user: object,
}

const ProfilePage = ({ user }: Props) => (
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Profile' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <MainDiv>
          <Img src="https://source.unsplash.com/random/326x300" alt="user avatar" />
          <div>{user.userName}</div>
        </MainDiv>
        <div>Full name: {user.fullName}</div>
        <div>Email: {user.email}</div>
        <div>Location: {user.country}</div>
        <div>City: {user.city}</div>
        <div>State: {user.state}</div>

        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#profileModal"
        >Edit profile
        </button>

        <ProfileModal />
      </div>
    </div>
  </div>
)

export default ProfilePage
