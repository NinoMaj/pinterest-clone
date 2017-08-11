import React, { Component } from 'react'
import { connect } from 'react-redux'

import NotificationDiv from '../component/notification'

class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.notifType === nextProps.notifType &&
      this.props.title === nextProps.title &&
      this.props.message === nextProps.message &&
      this.props.id === nextProps.id) {
      return
    }
    this.setState({ show: true }) // Show notification
    setTimeout(() => { this.setState({ show: false }) }, 5000) // Hide notification after 5s
  }

  render() {
    return (
      <div>
        {this.state.show &&
          <NotificationDiv
            notifType={this.props.notifType}
            title={this.props.title}
            message={this.props.message}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    notifType: state.notification.notifType,
    title: state.notification.title,
    message: state.notification.message,
    id: state.notification.id,
  }
)

export default connect(mapStateToProps)(Notification)
