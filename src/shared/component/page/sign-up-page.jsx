// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = 'Sign Up'

const SignUpPage = () => (
  <div className="container mt-5">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A Sign Up Page' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h2>{title}</h2>
      </div>
    </div>
  </div>
)

export default SignUpPage
