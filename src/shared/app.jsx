// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route, withRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import injectTapEventPlugin from 'react-tap-event-plugin'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { APP_NAME } from './config'
import Nav from './component/nav'
import Notification, { handleShow } from './container/notification'
import HomePage from './component/page/home'
import MyProjectsPage from './component/page/my-projects-page'
import ProfilePage from './component/page/profile-page'
import LogoutPage from './component/page/logout-page'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  MY_PROJECTS_ROUTE,
  PROFILE_PAGE_ROUTE,
  LOGOUT_PAGE_ROUTE,
} from './routes'

injectTapEventPlugin()

const Container = styled.div`
  padding-top: 54px;
`

type Props = {
  user: object,
}

const App = ({ user }: Props) => (
  <Container>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav user={user.logged} />
    <Notification />
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        render={() => <HomePage />}
      />
      <Route
        path={MY_PROJECTS_ROUTE}
        render={history => <MyProjectsPage history={history.history} />}
      />
      <Route
        path={PROFILE_PAGE_ROUTE}
        render={history => <ProfilePage user={user} history={history.history} />}
      />
      <Route
        path={LOGOUT_PAGE_ROUTE}
        render={history => <LogoutPage history={history.history} />}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </Container>
)

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(App))
