// @flow

import compression from 'compression'
import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import session from 'express-session'

import routing from './routing'
import { WEB_PORT, STATIC_PATH, LOCAL_MONGODB_URI } from '../shared/config'
import { isProd } from '../shared/util'
import db from './models'

require('dotenv').config() // Load .env variables
require('./passport')(passport)

const app = express()

// connect to the database and load models
if (isProd) {
  db(process.env.MONGODB_URI)
} else {
  db(LOCAL_MONGODB_URI)
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser()) // read cookies (needed for auth)

// required for passport
app.use(session({
  secret: process.env.PASSPORT_SECRET,  // session secret
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app, passport)

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "npm run dev:wds" running in an other terminal'}.`)
})
