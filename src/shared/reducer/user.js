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
  dateCreated: '',
  projects: [],
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

    // case 'ADD_DATE_CREATED':     //can't use Date beacuse is unpure
    //   return Object.assign({}, state, { dateCreated: ???})

    case types.ADD_ERROR:
      return Object.assign({}, state, { error: action.error })

    default:
      return state
  }
}

// const userReducer = (
//   state: { loading: boolean, logged: boolean, email: string, error: string } = initialState,
//   action: { type: string, payload: any },
// ) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       return Object.assign({}, state, { loading: true })
//     default:
//       return state
//   }
// }

export default userReducer
