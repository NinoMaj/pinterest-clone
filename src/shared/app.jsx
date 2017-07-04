// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import injectTapEventPlugin from 'react-tap-event-plugin'
import styled from 'styled-components'

import { APP_NAME } from './config'
import Nav2 from './component/nav2'
import HomePage from './component/page/home'
import SignUpPage from './component/page/sign-up-page'
import LoginPage from './component/page/login-page'
import SettingsPage from './component/page/settings-page'
import LogoutPage from './component/page/logout-page'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  SIGN_UP_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  LOGOUT_PAGE_ROUTE,
} from './routes'

injectTapEventPlugin()

const Container = styled.div`
  padding-top: 54px;
`

const App = () => (
  <Container>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav2 />
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        render={() => <HomePage />}
      />
      <Route
        path={SIGN_UP_PAGE_ROUTE}
        render={history => <SignUpPage history={history.history} />}
      />
      <Route
        path={LOGIN_PAGE_ROUTE}
        render={history => <LoginPage history={history.history} />}
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

export default App
