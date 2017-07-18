// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'
import LoginModal from '../LoginModal/LoginModal'
import Gallery from '../../container/gallery'
import Modal from '../modal'
import AddProjectModal from '../add-project-modal'

const HomePage = () => (
  <div className="mt-4">
    <Helmet
      meta={[
        { name: 'description', content: '{Pinerest clone app' },
        { property: 'og:title', content: APP_NAME },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]}
    />
    <LoginModal />
    <Gallery />
    <Modal>
      <AddProjectModal />
    </Modal>
  </div>
)

export default HomePage
