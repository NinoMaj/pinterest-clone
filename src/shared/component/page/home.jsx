// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'
import { HOME_PAGE_ROUTE } from '../../routes'
import LoginModal from '../LoginModal/LoginModal'
import Gallery from '../../container/gallery'

const HomePage = () => (
  <div className="container col-12 mt-5">
    <Helmet
      meta={[
        { name: 'description', content: 'Chingu Showcase' },
        { property: 'og:title', content: APP_NAME },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <LoginModal />
        <Gallery page={HOME_PAGE_ROUTE} />
      </div>
    </div>
  </div>
)

export default HomePage
