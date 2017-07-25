import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

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
      email: 'Enter your email adress...',
      username: 'TestName',
      fullname: 'Enter your full name...',
      country: 'Enter your country...',
      state: 'The state where you live...',
      city: 'Your city...',
    }
  }

  updateAllStateFields() {
    this.props.updateEmail(this.state.email)
    this.props.updateUsername(this.state.username)
    this.props.updateFullname(this.state.fullname)
    this.props.updateCountry(this.state.country)
    this.props.updateCity(this.state.city)
    this.props.updateState(this.state.state)
  }

  infoInput(text, field) {
    return (
      <div>{text}
        <Input
          className={`input-${field}`}
          type="text"
          placeholder={this.state[field]}
          onChange={event => this.setState({ [field]: event.target.value })}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.infoInput('Username:', 'username')}
        {this.infoInput('Full name:', 'fullname')}
        {this.infoInput('Email adress:', 'email')}
        {this.infoInput('Location:', 'country')}
        {this.infoInput('City:', 'city')}
        {this.infoInput('State:', 'state')}

        <button
          className="btn btn-primary btn-lg"
          onClick={() => this.updateAllStateFields()}
        >Save Changes
        </button>

      </div>

    )
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

// function mapStateToProps(state) {
//   return {
//     }
// }

export default connect(null, mapDispatchToProps)(Profile)
