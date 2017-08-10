import React from 'react'
import styled from 'styled-components'


const NotifDiv = styled.div`
  box-shadow: 0 0 15px rgba(0,0,0,.35);
  display: inline-flex;
  opacity: .9;
  padding-left: 10px;
  position: absolute;
  right: 10px;
  z-index: 5;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 15px 3px rgba(0,0,0,.70);
  }
`

const Message = styled.p`
  margin-bottom: 0;
`

const Icon = styled.i`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const setIcon = (notifType) => {
  switch (notifType) {
    case 'success':
      return 'check'
    case 'info':
      return 'info'
    case 'danger':
      return 'times'
    case 'warning':
      return 'exclamation-triangle'
    default:
    // eslint-disable-next-line
      return console.error('setIcon Error: invalid string provided')
  }
}

const Notification = ({ notifType, title, message }) => (
  <NotifDiv
    className={`alert alert-${notifType} mt-3`}
    role="alert"
  >
    <div>
      <Icon className={`fa fa-${setIcon(notifType)} fa-3x fa-fw`} />
    </div>
    <div>
      <h4 className="alert-heading">{title}</h4>
      <Message>{message}</Message>
    </div>
  </NotifDiv>
)

export default Notification
