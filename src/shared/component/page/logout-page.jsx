// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

const title = 'Logout'

type Props = {
  history: Object,
}

const LogoutPage = ({ history }: Props) => {
  setTimeout(() => {
    history.push('/')
  }, 2000)
  return (<div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Logout' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h2>Logging out...</h2>
      </div>
    </div>
  </div>)
}

export default LogoutPage
