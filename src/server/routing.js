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
  AUTH_TWITTER,
  AUTH_TWITTER_CALLBACK,
  AUTH_GOOGLE,
  AUTH_GOOGLE_CALLBACK,
  AUTH_GITHUB,
  AUTH_GITHUB_CALLBACK,
} from '../shared/routes'

import renderApp from './render-app'


export default (app: Object, passport) => {
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
    req.logout()
    res.send(renderApp(req.url, req, logoutPage()))
  })

  // Redirect the user to Twitter for authentication.
  // When completed, Twitter will redirect the user back to the app.
  app.get(AUTH_TWITTER, passport.authenticate('twitter'))

  // Twitter will redirect the user to registered URL after approval.
  // Auth process attempts to obtain an access token. If access is granted the user
  // will be logged in. Otherwise authentication has failed. Redirects in both cases.
  app.get(AUTH_TWITTER_CALLBACK,
    passport.authenticate('twitter', {
      successRedirect: HOME_PAGE_ROUTE,
      failureRedirect: LOGIN_PAGE_ROUTE,
    }),
  )

  // GOOGLE ROUTES
  app.get(AUTH_GOOGLE, passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))

  app.get(AUTH_GOOGLE_CALLBACK,
    passport.authenticate('google', {
      successRedirect: HOME_PAGE_ROUTE,
      failureRedirect: LOGIN_PAGE_ROUTE,
    }),
  )

  // GITHUB ROUTES
  app.get(AUTH_GITHUB, passport.authenticate('github', { scope: ['user:email'] }))

  app.get(AUTH_GITHUB_CALLBACK,
    passport.authenticate('github', {
      successRedirect: HOME_PAGE_ROUTE,
      failureRedirect: LOGIN_PAGE_ROUTE,
    }),
  )

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
