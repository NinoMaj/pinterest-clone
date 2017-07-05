import React from 'react'
import styled from 'styled-components'

const style = {
  socialButtonsDiv: {
    width: '80%',
    margin: 'auto',
  },

  btnGithub: {
    backgroundColor: '#444444',
  },

  btnTwitter: {
    backgroundColor: '#55acee',
  },

  btnGoogle: {
    backgroundColor: '#dd4b39',
  },
}

const Button = styled.a`
  color: #fff;
  display: block;
  margin: 3px 0;
`

const SocialButtons = () => (
  <div className="social-buttons" style={style.socialButtonsDiv}>
    <Button className="btn" href="/auth/github" style={style.btnGithub}>
      <i className="fa fa-github" /> Sign in with Github
    </Button>
    <Button className="btn" href="/auth/twitter" style={style.btnTwitter}>
      <i className="fa fa-twitter" /> Sign in with Twitter
    </Button>
    <Button className="btn" href="/auth/google" style={style.btnGoogle}>
      <i className="fa fa-google-plus" /> Sign in with Google
    </Button>
  </div>
)

export default SocialButtons
