// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = 'Profile'

const ProfilePage = ({ email, username, fullName, country, state, city }) =>
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
          <div>
            <div>This will be user image/avatar</div>
            <div>{username}</div>
          </div>
          <div>
            <div>Full Name: {fullName}</div>
            <div>Email: {email}</div>
            <div>Location: {country}</div>
            <div>City/State: {city}, {state}</div>
          </div>
        </div>
      </div>
    </div>
  )

export default ProfilePage
