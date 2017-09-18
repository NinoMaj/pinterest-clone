// @flow

import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { GET_USER_ROUTE, USER_PAGE_ROUTE } from '../../routes'
import LoginModal from '../LoginModal/LoginModal'
import Gallery from '../../container/gallery'

const UserInfoDiv = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border: 2px solid green;
`

const Name = styled.div`
  font-size: 22px;
`

const LocationDiv = styled.div`
  font-size: 14px;
  color: #999;
  line-height: 10px;
`

const ProjectsTitle = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 25px auto 10px;
`

const ErrorMsg = styled.div`
  font-size: 32px;
  text-align: center;
`

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      error: '',
    }
  }

  componentDidMount() {
    fetch(GET_USER_ROUTE(this.props.showUser))
      .then(res => res.json())
      .then(json =>
        json.error ? this.setState({ error: json.error }) : this.setState({ user: json }),
      )
  }

  // Function to build location string depending on which of city, state and country
  // fields are available. If all fields are empty, return 'No location'
  setLocation() {
    const { city, state, country } = this.state.user
    const cityStr = city ? `${city}, ` : ''
    const stateStr = state ? `${state}, ` : ''
    const location = city || state || country
    return location ? `${cityStr}${stateStr}${country || ''}` : 'No location'
  }

  render() {
    const { userName, fullName } = this.state.user
    const title = this.state.error ? 'User not found' : `${userName}'s Profile`
    return (
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

            { this.state.error ?
              <ErrorMsg>{`Ooops! ${this.state.error}`}</ErrorMsg> :
              <div>
                <UserInfoDiv className="userInfo">
                  <Img src="/static/images/chingu-logo.png" alt="user avatar" />
                  <Name><b>{userName}</b> {fullName ? `(${fullName})` : ''}</Name>
                  <LocationDiv>
                    {this.setLocation()}
                  </LocationDiv>
                </UserInfoDiv>

                <LoginModal />
                <ProjectsTitle>Projects</ProjectsTitle>
                <Gallery page={USER_PAGE_ROUTE} profileUserName={this.props.showUser} />
              </div>
            }

          </div>
        </div>
      </div>
    )
  }
}

export default UserPage
