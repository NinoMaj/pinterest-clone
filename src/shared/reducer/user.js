// @flow

import * as types from '../actions/actionsTypes'

const initialState = {
  logged: false,
  email: '',
  userName: '',
  fullName: '',
  country: '',
  city: '',
  state: '',
  error: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return Object.assign({}, state, { logged: true })

    case types.LOGOUT_USER:
      return Object.assign({}, state, { logged: false })

    case types.UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.email })

    case types.UPDATE_USERNAME:
      return Object.assign({}, state, { userName: action.username })

    case types.UPDATE_FULLNAME:
      return Object.assign({}, state, { fullName: action.fullname })

    case types.UPDATE_COUNTRY:
      return Object.assign({}, state, { country: action.country })

    case types.UPDATE_CITY:
      return Object.assign({}, state, { city: action.city })

    case types.UPDATE_STATE:
      return Object.assign({}, state, { state: action.state })

    // case types.ADD_PROJECT:
    //   return Object.assign({}, state, {
    //     projects: [...state.projects, action.projectObj],
    //   })

    // case types.REMOVE_PROJECT:
    //   return Object.assign({}, state, {
    //     projects: [
    //       ...state.projects.slice(0, action.index),
    //       ...state.projects.slice(action.index + 1),
    //     ],
    //   })

    case types.ADD_ERROR:
      return Object.assign({}, state, { error: action.error })

    default:
      return state
  }
}

export default userReducer
