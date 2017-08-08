import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import userReducer from '../shared/reducer/user'
import notificationReducer from '../shared/reducer/notificationReducer'
import projectsReducer from '../shared/reducer/projects'
import { isProd } from '../shared/util'

/* eslint-disable no-underscore-dangle */
let storeTemp = {}

if (typeof (window) !== 'undefined') {
  const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const preloadedState = window.__PRELOADED_STATE__

  /* eslint-enable no-underscore-dangle */
  storeTemp = createStore(combineReducers(
    {
      user: userReducer,
      notification: notificationReducer,
      projects: projectsReducer,
    }),
    {
      user: preloadedState.user,
      notification: preloadedState.notification,
      projects: preloadedState.projects,
    },
    composeEnhancers(applyMiddleware(thunkMiddleware)))
} else {
  /* eslint-enable no-underscore-dangle */
  storeTemp = createStore(combineReducers(
    {
      user: userReducer,
      notification: notificationReducer,
      projects: projectsReducer,
    }),
    compose(applyMiddleware(thunkMiddleware)))
}

const store = storeTemp

export default store
