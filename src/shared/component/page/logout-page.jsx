// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/userActions'

const title = 'Logout'

type Props = {
  history: Object,
  logoutAction: Function,
}

const LogoutPage = ({ history, logoutAction }: Props) => {
  document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;'
  setTimeout(() => {
    logoutAction()
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

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(logoutUser()),
})

export default connect(null, mapDispatchToProps)(LogoutPage)
