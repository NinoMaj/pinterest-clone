// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Profile from '../../container/profile'

const title = 'Profile'

const ProfilePage = () =>
  (
    <div className="container mt-4">
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Profile' },
          { property: 'og:title', content: title },
        ]}
      />
      <div className="row">
        <div className="col-12">
          <Profile />
        </div>
      </div>
    </div>
  )

export default ProfilePage
