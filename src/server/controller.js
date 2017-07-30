// @flow

export const homePage = (user: Object, projectsInitialState: Object) =>
  user ?
  {
    user: {
      logged: true,
      id: user._id,
      userName: user.userName,
      fullName: user.fullName,
      email: user.email,
      country: user.country,
      city: user.city,
      state: user.state,
    },
    projects: {
      projects: projectsInitialState,
    },
  }
  :
  {
    user: { logged: false },
    projects: {
      projects: projectsInitialState,
    },
  }

export const myProjectsPage = () => null
export const signUpPage = () => null
export const loginPage = () => null
export const settingsePage = () => null
export const logoutPage = () => null
