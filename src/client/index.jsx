// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import $ from 'jquery'
import Tether from 'tether'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from '../shared/app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import store from './store'

window.jQuery = $
window.Tether = Tether
require('bootstrap')

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

