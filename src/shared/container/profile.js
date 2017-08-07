import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ADD_PROFILE_ROUTE } from '../routes'
import { displayNotification } from '../actions/notificationActions'
import {
  updateEmail,
  updateUsername,
  updateFullname,
  updateCountry,
  updateCity,
  updateState,
} from '../actions/userActions'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
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
      <div className={`form-group row input-${field}`}>
        <label htmlFor="text-input" className="col-3 col-form-label">{text}</label>
        <div className="col-9">
          <input
            className="form-control"
            type="text"
            autoComplete="on"
            placeholder={placeholder}
            defaultValue={this.props[field] ? this.props[field] : ''}
            onChange={event => this.setState({ [field]: event.target.value })}
          />
        </div>
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
      // If error throw error and siaply error notification
      if (!res.ok) {
        this.props.displayNotification(
          'danger',
          'Profile not saved',
          'An error as ocurred and your profile could not be saved',
        )
        throw Error(res.statusText)
      }
      this.props.displayNotification(
        'success',
        'Profile saved!',
        'Your profile has been successfully updated',
      )
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
        this.props.displayNotification(
          'danger',
          'Profile not saved',
          'An error as ocurred and your profile could not be saved',
        )
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
        <h4
          className="mb-4"
          style={{ textAlign: 'center' }}
        >Complete your profile details:
        </h4>

        <div>
          {this.infoInput('Username:', 'John', 'username')}
          {this.infoInput('Full name:', 'John Doe', 'fullname')}
          {this.infoInput('Email adress:', 'user@gmail.com', 'email')}
          {this.infoInput('Location:', 'United States', 'country')}
          {this.infoInput('City:', 'Los Angeles', 'city')}
          {this.infoInput('State:', 'California', 'state')}

          <button
            className="btn btn-primary btn-block"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => this.handleProfileUpdate()}
          >Save Changes
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.user.id,
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
    displayNotification,
    updateEmail,
    updateUsername,
    updateFullname,
    updateCountry,
    updateCity,
    updateState,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
