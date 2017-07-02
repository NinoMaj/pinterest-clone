// @flow

import compression from 'compression'
import express from 'express'
import bodyParser from 'body-parser'

import routing from './routing'
import { WEB_PORT, STATIC_PATH, LOCAL_MONGODB_URI } from '../shared/config'
import { isProd } from '../shared/util'
import db from './models'

const app = express()

// connect to the database and load models
if (isProd) {
  db(process.env.MONGODB_URI)
} else {
  db(LOCAL_MONGODB_URI)
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "npm run dev:wds" running in an other terminal'}.`)
})
