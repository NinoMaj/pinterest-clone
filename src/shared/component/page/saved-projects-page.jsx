// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { SAVED_PROJECTS_ROUTE } from '../../routes'
import Gallery from '../../container/gallery'

const title = 'Saved projects page'

const SavedProjectsPage = () => (
  <div className="container mt-5">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Saved projects Page' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h3>Saved projects:</h3>
        <Gallery page={SAVED_PROJECTS_ROUTE} />
      </div>
    </div>
  </div>
)

export default SavedProjectsPage
