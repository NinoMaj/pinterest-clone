// @flow

export const homePage = (user: Object, projectsInitialState: Object) =>
  user ?
  {
    user: { logged: true },
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
