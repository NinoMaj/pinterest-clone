import React from 'react'
import ModalMain from '../modal-main'
import SocialButtons from './SocialButtons'

const style = {
  text: {
    textAlign: 'center',
    padding: '10px',
  },
}

const LoginModal = () => (
  <ModalMain id="loginModal">
    <h5 style={style.text}>Sign in with one of this services</h5>
    <SocialButtons />
  </ModalMain>
)

export default LoginModal
