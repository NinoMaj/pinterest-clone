import { DISPLAY_NOTIFICATION } from '../actions/actionsTypes'

const initialState = {
  id: '',
  notifType: '',
  title: '',
  message: '',
}

const notificationReducer = (state = initialState, action) => {
  const { id, notifType, title, message } = action

  switch (action.type) {
    case DISPLAY_NOTIFICATION:
      return Object.assign({}, state, { id, notifType, title, message })

    default:
      return state
  }
}

export default notificationReducer
