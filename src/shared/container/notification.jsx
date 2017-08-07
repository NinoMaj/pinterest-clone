import React, { Component } from 'react'
import { connect } from 'react-redux'

import NotificationDiv from '../component/notification'
// import { displayNotification } from '../actions/notificationActions'

class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  componentWillReceiveProps() {
    // const { notifType, title, message } = newProps
    // this.props.displayNotificationAction(notifType, title, message) // Dispatch action
    this.setState({ show: true }) // Show notification
    setTimeout(() => { this.setState({ show: false }) }, 5000) // Hide notification after 3 secs
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
  }
)

// const mapDispatchToProps = dispatch => ({
//   displayNotificationAction: (notifType, title, message) =>
//     dispatch(displayNotification(notifType, title, message)),
// })

export default connect(mapStateToProps)(Notification)
