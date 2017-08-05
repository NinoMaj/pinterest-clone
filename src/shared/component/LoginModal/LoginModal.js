import React from 'react'
import ModalMain from '../modal-main'
import SocialButton from './SocialButton'

const style = {
  text: {
    textAlign: 'center',
    padding: '10px',
  },
}

const LoginModal = () => (
  <ModalMain id="loginModal">
    <h5 style={style.text}>Want to join Chingu Showcase?</h5>
    <h6 style={style.text}>Just sign in with one of this!</h6>
    <div style={{ width: '80%', margin: 'auto' }}>
      <SocialButton service="twitter" />
      <SocialButton service="google" />
      <SocialButton service="github" />
    </div>
  </ModalMain>
)

export default LoginModal
