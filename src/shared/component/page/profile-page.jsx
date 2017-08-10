// @flow

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import ProfileModal from '../profile-modal'
import SocialAccount from '../social-account'

const title = 'Profile'

const Img = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  border: 3px solid green;
  margin-right: 25px;
`

const MainDiv = styled.div`
text-align: center;
font-size: 24px;
`

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
`

const InfoDiv = styled.div`
text-align: left;
`

const AccountsDiv = styled.div`
display: flex;
justify-content: space-around;
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

          <HeaderDiv>
            <Img src="/static/images/chingu-logo.png" alt="user avatar" />
            <div>{user.userName}</div>
          </HeaderDiv>

          <InfoDiv>
            <i className="fa fa-id-card-o fa-fw" aria-hidden="true" />
            Full name: {user.fullName}
          </InfoDiv>

          <InfoDiv>
            <i className="fa fa-envelope-o fa-fw" aria-hidden="true" />
            Email: {user.email}
          </InfoDiv>

          <InfoDiv>
            <i className="fa fa-map-marker fa-fw" aria-hidden="true" />
            Location: {user.city}, {user.state} - {user.country}
          </InfoDiv>

          <button
            type="button"
            style={{ margin: '15px 0' }}
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#profileModal"
          >Edit profile
          </button>

          <div>
            <h4>Linked accounts: </h4>

            <AccountsDiv>

              <SocialAccount
                service="twitter"
                username={user.twitter.displayName}
                linked={user.twitter.token}
              />

              <SocialAccount
                service="google"
                username={user.google.displayName}
                linked={user.google.token}
              />

              <SocialAccount
                service="github"
                username={user.github.displayName}
                linked={user.github.token}
              />
            </AccountsDiv>
          </div>
        </MainDiv>
        <ProfileModal />
      </div>
    </div>
  </div>
)

export default ProfilePage
