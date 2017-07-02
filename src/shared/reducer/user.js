// @flow

// change this with actual action
const LOGIN_REQUEST = 'LOGIN_REQUEST'

const initialState = {
  loading: false,
  logged: false,
  email: '',
  name: '',
  error: '',
}

const userReducer = (
  state: { loading: boolean, logged: boolean, email: string, error: string } = initialState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, { loading: true })
    default:
      return state
  }
}

export default userReducer
