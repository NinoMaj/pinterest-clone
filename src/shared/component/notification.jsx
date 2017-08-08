import React from 'react'
import styled from 'styled-components'


const NotifDiv = styled.div`
  position: absolute;
  right: 10px;
  z-index: 5;
  box-shadow: 0 0 15px rgba(0,0,0,.35);
  opacity: .9;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 15px 3px rgba(0,0,0,.70);
  }
`

const Notification = ({ notifType, title, message }) => (
  <NotifDiv
    className={`alert alert-${notifType} mt-3`}
    role="alert"
  >
    <h4 className="alert-heading">{title}</h4>
    <p>{message}</p>
  </NotifDiv>
)

export default Notification
