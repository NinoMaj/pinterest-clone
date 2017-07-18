// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = 'My projects page'

const MyProjectsPage = () => (
  <div className="container mt-5">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'My projects Page' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <p>My projects page</p>
      </div>
    </div>
  </div>
)

export default MyProjectsPage
