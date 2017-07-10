// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'
import LoginModal from '../LoginPanel/LoginModal'
import Gallery from '../gallery'

const HomePage = () => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]}
    />
    <h2>This is homepage</h2>
    <LoginModal />
    <Gallery />
  </div>
)

export default HomePage
