// @flow

import React from 'react'
import Helmet from 'react-helmet'
import LoginModal from '../LoginPanel/LoginModal'

const title = 'Login'

const LoginPage = () => (
  <div className="container mt-5">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A Login Page' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
          Launch modal
        </button>
        <LoginModal />
      </div>
    </div>
  </div>
)

export default LoginPage
