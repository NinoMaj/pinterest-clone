// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import userReducer from '../shared/reducer/user'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.user) {
    // flow-disable-next-line
    preloadedState.user = Object.assign({}, userReducer(undefined, {}), plainPartialState.user)
  }

  return createStore(combineReducers({
    user: userReducer,
  }),
    preloadedState,
    applyMiddleware(thunkMiddleware))
}

export default initStore
