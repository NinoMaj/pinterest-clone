// @flow

const userInfo = user =>
  ({
    logged: true,
    id: user._id,
    userName: user.userName,
    fullName: user.fullName,
    email: user.email,
    country: user.country,
    city: user.city,
    state: user.state,
    twitter: {
      displayName: user.twitter.displayName,
      token: user.twitter.token,
    },
    google: {
      displayName: user.google.displayName,
      token: user.google.token,
    },
    github: {
      displayName: user.github.displayName,
      token: user.github.token,
    },
  })

const setData = (user: Object, projectsInitialState: Object) =>
  user ?
  {
    user: userInfo(user),
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

export const homePage = (user: Object, projectsInitialState: Object) =>
  setData(user: Object, projectsInitialState: Object)

export const myProjectsPage = (user: Object, projectsInitialState: Object) =>
  setData(user: Object, projectsInitialState: Object)

export const userPage = (user: Object, projectsInitialState: Object) =>
  setData(user: Object, projectsInitialState: Object)

export const profilePage = (user: Object) =>
  user ? { user: userInfo(user) } : { user: { logged: false } }

export const logoutPage = () => null
