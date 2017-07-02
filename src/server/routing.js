// @flow

import {
  homePage,
  signUpPage,
  loginPage,
  settingsePage,
  logoutPage,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  SIGN_UP_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  LOGOUT_PAGE_ROUTE,
} from '../shared/routes'

import renderApp from './render-app'


export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, req, homePage()))
  })

  app.get(SIGN_UP_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, req, signUpPage()))
  })

  app.get(LOGIN_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, req, loginPage()))
  })

  app.get(SETTINGS_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, req, settingsePage()))
  })

  app.get(LOGOUT_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, req, logoutPage()))
  })


  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url, req, null))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
