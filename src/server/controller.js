// @flow

export const homePage = (user) => {
  if (user) {
    return ({
      user: { logged: true },
    })
  }
  return ({
    user: { logged: false },
  })
}
export const signUpPage = () => null
export const loginPage = () => null
export const settingsePage = () => null
export const logoutPage = () => null
