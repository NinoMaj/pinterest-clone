import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { ADD_PROFILE_ROUTE } from '../routes'
import {
  updateEmail,
  updateUsername,
  updateFullname,
  updateCountry,
  updateCity,
  updateState,
} from '../actions/userActions'

const Input = styled.input`
  margin: 5px 10px;
`

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.email,
      username: this.props.username,
      fullname: this.props.fullname,
      country: this.props.country,
      city: this.props.city,
      state: this.props.state,
    }
  }

  didFieldChanged(field) {
    return this.props[field] !== this.state[field]
  }

  updateAllStateFields() {
    if (this.didFieldChanged('email')) this.props.updateEmail(this.state.email)
    if (this.didFieldChanged('username')) this.props.updateUsername(this.state.username)
    if (this.didFieldChanged('fullname')) this.props.updateFullname(this.state.fullname)
    if (this.didFieldChanged('country')) this.props.updateCountry(this.state.country)
    if (this.didFieldChanged('city')) this.props.updateCity(this.state.city)
    if (this.didFieldChanged('state')) this.props.updateState(this.state.state)
  }

  infoInput(text, placeholder, field) {
    return (
      <div>{text}
        <Input
          className={`input-${field}`}
          type="text"
          autocomplete="on"
          placeholder={placeholder}
          defaultValue={this.props[field] ? this.props[field] : ''}
          onChange={event => this.setState({ [field]: event.target.value })}
        />
      </div>
    )
  }

  submitProfile() {
    fetch(ADD_PROFILE_ROUTE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    // .then((profileSaved) => {
    //   if (!profileSaved) throw Error('Profile not saved.')
    //   dispatch(addProfileSuccess(profileSaved))
    // })
    .catch((err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Add profile error', JSON.stringify(err))
      }
    })
  }

  handleProfileUpdate() {
    this.updateAllStateFields()
    this.submitProfile()
  }

  render() {
    return (
      <div>
        {this.infoInput('Username:', 'Enter your Username', 'username')}
        {this.infoInput('Full name:', 'Enter your full name', 'fullname')}
        {this.infoInput('Email adress:', 'Enter your email adress', 'email')}
        {this.infoInput('Location:', 'Enter your country', 'country')}
        {this.infoInput('City:', 'Enter your city', 'city')}
        {this.infoInput('State:', 'The state where you live', 'state')}

        <button
          className="btn btn-primary btn-lg"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => this.handleProfileUpdate()}
        >Save Changes
        </button>

      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    username: state.user.userName,
    fullname: state.user.fullName,
    country: state.user.country,
    city: state.user.city,
    state: state.user.state,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateEmail,
    updateUsername,
    updateFullname,
    updateCountry,
    updateCity,
    updateState,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
