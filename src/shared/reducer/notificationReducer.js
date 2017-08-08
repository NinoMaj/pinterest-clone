import { DISPLAY_NOTIFICATION } from '../actions/actionsTypes'

// const initialState = {
//   notifType: 'success',
//   title: 'Project added',
//   message: 'Your project has been successfully added',
// }

const initialState = {
  notifType: '',
  title: '',
  message: '',
}

const notificationReducer = (state = initialState, action) => {
  const { notifType, title, message } = action

  switch (action.type) {
    case DISPLAY_NOTIFICATION:
      return Object.assign({}, state, { notifType, title, message })

    default:
      return state
  }
}

export default notificationReducer
