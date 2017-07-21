// @flow

import {
  homePage,
  myProjectsPage,
  settingsePage,
  logoutPage,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  MY_PROJECTS_ROUTE,
  PROFILE_PAGE_ROUTE,
  LOGOUT_PAGE_ROUTE,
  AUTH_TWITTER,
  AUTH_TWITTER_CALLBACK,
  AUTH_GOOGLE,
  AUTH_GOOGLE_CALLBACK,
  AUTH_GITHUB,
  AUTH_GITHUB_CALLBACK,
} from '../shared/routes'

import Project from './models/project'

import projects from './api/project'

import renderApp from './render-app'

// route middleware to make sure an user is logged in
function isLoggedIn(req, res, next) {
  return req.isAuthenticated() ? next() : res.redirect('/')
}

export default (app: Object, passport: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    const initialStatePromise = new Promise((resolve, reject) => {
      const promise = Project.find({}).exec()

      promise.then(projectsInitialState => (
        resolve(projectsInitialState)
      ))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error in get projects API:', err)
        reject(err)
      })
    })

    initialStatePromise.then((projectsInitialState) => {
      res.send(renderApp(req.url, req, homePage(req.user, projectsInitialState)))
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Get projects error', JSON.stringify(err))
    })
  })

  app.get(MY_PROJECTS_ROUTE, isLoggedIn, (req, res) => {
    res.send(renderApp(req.url, req, myProjectsPage()))
  })

  app.get(PROFILE_PAGE_ROUTE, isLoggedIn, (req, res) => {
    res.send(renderApp(req.url, req, settingsePage()))
  })

  app.get(LOGOUT_PAGE_ROUTE, isLoggedIn, (req, res) => {
    req.logout()
    res.send(renderApp(req.url, req, logoutPage()))
  })

  const redirectObj = {
    successRedirect: HOME_PAGE_ROUTE,
    failureRedirect: HOME_PAGE_ROUTE,
  }

  // Redirect the user to Twitter for authentication.
  // When completed, Twitter will redirect the user back to the app.
  app.get(AUTH_TWITTER, passport.authenticate('twitter'))

  // Twitter will redirect the user to registered URL after approval.
  // Auth process attempts to obtain an access token. If access is granted the user
  // will be logged in. Otherwise auth has failed. Redirects in both cases using redirectObj.
  app.get(AUTH_TWITTER_CALLBACK, passport.authenticate('twitter', redirectObj))

  // GOOGLE ROUTES
  app.get(AUTH_GOOGLE, passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))

  app.get(AUTH_GOOGLE_CALLBACK, passport.authenticate('google', redirectObj))

  // GITHUB ROUTES
  app.get(AUTH_GITHUB, passport.authenticate('github', { scope: ['user:email'] }))

  app.get(AUTH_GITHUB_CALLBACK, passport.authenticate('github', redirectObj))


  // UNLINK ACCOUNTS
  // Used to unlink accounts just removing the token.
  // User account will stay active in case they want to reconnect in the future
  app.get('/unlink/:service', (req, res) => {
    const [user, service] = [req.user, req.params.service] // get user and service from req
    user[service].token = undefined
    user.save((err) => {
      if (err) throw err
      res.redirect(PROFILE_PAGE_ROUTE)
    })
  })

  app.use('/api/projects', projects)

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
