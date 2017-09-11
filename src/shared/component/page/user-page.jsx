// @flow

import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { GET_USER_ROUTE, USER_PAGE_ROUTE } from '../../routes'
import Gallery from '../../container/gallery'

const Img = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  border: 3px solid green;
  margin-right: 25px;
`

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    fetch(GET_USER_ROUTE(this.props.showUser))
      .then(res => res.json())
      .then(json => this.setState({ user: json }))
  }

  render() {
    const title = `${this.state.user.userName}'s Profile`
    const { user } = this.state
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

            {
              <div className="userInfo">
                <Img src="/static/images/chingu-logo.png" alt="user avatar" />
                <div>{user.userName}</div>
                <div>{user.fullName}</div>
                <div>{user.city}, {user.state} - {user.country}</div>
              </div>
            }

            <Gallery page={USER_PAGE_ROUTE} profileUserName={this.props.showUser} />

          </div>
        </div>
      </div>
    )
  }
}

export default UserPage
