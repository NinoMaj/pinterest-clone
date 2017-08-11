// @flow

import { DISPLAY_NOTIFICATION } from '../actions/actionsTypes'
// eslint-disable-next-line
export const displayNotification = (notifType: string, title: string, message: string) => (
  { type: DISPLAY_NOTIFICATION, id: Date.now(), notifType, title, message }
)
