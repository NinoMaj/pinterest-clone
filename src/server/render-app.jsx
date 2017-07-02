// @flow

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { ServerStyleSheet } from 'styled-components'

import initStore from './init-store'
import App from './../shared/app'
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (
  location: string,
  req: Object,
  plainPartialState: ?Object,
  routerContext: ?Object = {},
  ) => {
  const store = initStore(plainPartialState)
  const sheet = new ServerStyleSheet()
  const appHtml = ReactDOMServer.renderToString(sheet.collectStyles(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: req.headers['user-agent'] })}>
        <StaticRouter location={location} context={routerContext}>
          <App />
        </StaticRouter>
      </MuiThemeProvider>
    </Provider>),
  )
  const head = Helmet.rewind()

  const css = sheet.getStyleTags()
  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="${STATIC_PATH}/images/favicons/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <link rel="stylesheet" href="${STATIC_PATH}/css/font-awesome.min.css">
        <link rel="apple-touch-icon" sizes="180x180" href="${STATIC_PATH}/images/favicons/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="144x144"  href="${STATIC_PATH}/images/favicons/android-icon-144x144.png">
        <link rel="icon" type="image/png" sizes="32x32" href="${STATIC_PATH}/images/favicons/favicon-32x32.png">
        <link rel="icon" href="${STATIC_PATH}/images/favicons/favicon.ico">
        ${css.toString()}
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  )
}

export default renderApp
