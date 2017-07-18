// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import injectTapEventPlugin from 'react-tap-event-plugin'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { APP_NAME } from './config'
import Nav from './component/nav'
import HomePage from './component/page/home'
import MyProjectsPage from './component/page/my-projects-page'
import SettingsPage from './component/page/settings-page'
import LogoutPage from './component/page/logout-page'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  MY_PROJECTS_ROUTE,
  SETTINGS_PAGE_ROUTE,
  LOGOUT_PAGE_ROUTE,
} from './routes'

injectTapEventPlugin()

const Container = styled.div`
  padding-top: 54px;
`

type Props = {
  user: boolean,
}

const App = ({ user }: Props) => (
  <Container>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav user={user} />
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
        path={SETTINGS_PAGE_ROUTE}
        render={history => <SettingsPage history={history.history} />}
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
  user: state.user.logged,
})

export default connect(mapStateToProps)(App)
