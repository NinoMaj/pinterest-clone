// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import $ from 'jquery'
import Tether from 'tether'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from '../shared/app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import userReducer from '../shared/reducer/user'
import projectsReducer from '../shared/reducer/projects'
import { isProd } from '../shared/util'

window.jQuery = $
window.Tether = Tether
require('bootstrap')

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__

/* eslint-enable no-underscore-dangle */
const store = createStore(combineReducers(
  {
    user: userReducer,
    projects: projectsReducer,
  }),
  {
    user: preloadedState.user,
    projects: preloadedState.projects,
  },
  composeEnhancers(applyMiddleware(thunkMiddleware)))

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)
const wrapApp = (AppComponent, reduxStore) =>
  (<Provider store={reduxStore}>
    <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: navigator.userAgent })}>
      <BrowserRouter>
        <AppContainer>
          <AppComponent />
        </AppContainer>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>)

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
