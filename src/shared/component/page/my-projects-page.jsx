// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { MY_PROJECTS_ROUTE } from '../../routes'
import Gallery from '../../container/gallery'

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
        <h3>My projects:</h3>
        <Gallery page={MY_PROJECTS_ROUTE} />
      </div>
    </div>
  </div>
)

export default MyProjectsPage
