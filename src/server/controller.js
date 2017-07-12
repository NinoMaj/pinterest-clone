// @flow

export const homePage = user =>
  user ? { user: { logged: true } } : { user: { logged: false } }
export const signUpPage = () => null
export const loginPage = () => null
export const settingsePage = () => null
export const logoutPage = () => null
