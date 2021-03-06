import * as types from './actionsTypes'

export const loginUser = () => ({ type: types.LOGIN_USER })
export const logoutUser = () => ({ type: types.LOGOUT_USER })
export const loadId = id => ({ type: types.LOAD_ID, id })
export const updateEmail = email => ({ type: types.UPDATE_EMAIL, email })
export const updateUsername = username => ({ type: types.UPDATE_USERNAME, username })
export const updateFullname = fullname => ({ type: types.UPDATE_FULLNAME, fullname })
export const updateCountry = country => ({ type: types.UPDATE_COUNTRY, country })
export const updateCity = city => ({ type: types.UPDATE_CITY, city })
export const updateState = state => ({ type: types.UPDATE_STATE, state })
export const addError = error => ({ type: types.ADD_ERROR, error })
