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

  updateEmail() {
    this.props.updateEmail(this.state.email)
  }

  updateUsername() {
    this.props.updateUsername(this.state.username)
  }

  updateFullname() {
    this.props.updateFullname(this.state.fullname)
  }

  updateCountry() {
    this.props.updateCountry(this.state.country)
  }

  updateCity() {
    this.props.updateCity(this.state.city)
  }

  updateState() {
    this.props.updateState(this.state.state)
  }

  infoInput(text, field) {
    const method = `update${field[0].toUpperCase()}${field.slice(1, field.length)}`

    return (
      <div>{text}
        <input
          className={`input-${field}`}
          placeholder={this.state[field]}
          onChange={event => this.setState({ [field]: event.target.value })}
        />
        <span
          className="confirm-button"
          onClick={() => this[method]()}
          role="button"
          tabIndex={0}
        >
          <i className="fa fa-check fa-lg" title="Confirm" />
        </span>
      </div>
    )
  }

  render() {
    return (
      <div>
        <MainDiv>
          <Img src="https://source.unsplash.com/random/326x300" alt="user avatar" />

          {this.infoInput('', 'username')}
        </MainDiv>

        {/* <div>
            Full name:
            <span>
          {this.state.fullname} <i className="fa fa-pencil" />
            </span>
            <span>
          {this.infoInput('Full name: ', 'fullname')}
            </span>
        </div> */}
        {this.infoInput('Full name: ', 'fullname')}
        {this.infoInput('Email adress: ', 'email')}
        {this.infoInput('Location: ', 'country')}
        {this.infoInput('City: ', 'city')}, {this.infoInput('State: ', 'state')}

        <button className="btn btn-primary btn-lg">Save Changes</button>

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
