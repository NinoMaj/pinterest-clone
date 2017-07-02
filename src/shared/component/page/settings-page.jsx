// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = 'Settings'

const SettingsPage = () => {
  return (
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Settings' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h2>{title}</h2>
      </div>
    </div>
  </div>)
}

export default SettingsPage
