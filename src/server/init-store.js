// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import userReducer from '../shared/reducer/user'
import projectsReducer from '../shared/reducer/projects'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined
  if (plainPartialState) {
    // flow-disable-next-line
    preloadedState.user = Object.assign({}, userReducer(undefined, {}), plainPartialState.user)
    preloadedState.projects = Object.assign(
      {},
      projectsReducer(undefined, {}), plainPartialState.projects,
    )
  }

  return createStore(combineReducers({
    user: userReducer,
    projects: projectsReducer,
  }),
    preloadedState,
    applyMiddleware(thunkMiddleware))
}

export default initStore
