// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import userReducer from '../shared/reducer/user'
import projectsReducer from '../shared/reducer/projects'
import notificationReducer from '../shared/reducer/notificationReducer'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined
  if (plainPartialState) {
    // flow-disable-next-line
    preloadedState.user = Object.assign(
      {},
      userReducer(undefined, {}),
      plainPartialState.user,
    )

    preloadedState.notification = Object.assign(
      {},
      notificationReducer(undefined, {}),
      plainPartialState.notification,
    )

    preloadedState.projects = Object.assign(
      {},
      projectsReducer(undefined, {}),
      plainPartialState.projects,
    )
  }

  return createStore(combineReducers({
    user: userReducer,
    notification: notificationReducer,
    projects: projectsReducer,
  }),
    preloadedState,
    applyMiddleware(thunkMiddleware))
}

export default initStore
