// @flow

import 'isomorphic-fetch'

import { STATIC_PATH, WDS_PORT } from '../config'
import { isProd } from '../util'

import {
  ADD_PROJECT_ROUTE,
  GET_PROJECTS_ROUTE,
  EDIT_PROJECT_ROUTE,
  PIN_PROJECT_ROUTE,
  DELETE_PROJECT_ROUTE,
} from '../../shared/routes'

export const PROJECT_REQUEST = 'PROJECT_REQUEST'
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS'
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS'
export const PROJECT_FAILURE = 'PROJECT_FAILURE'

export const projectRequest = () => ({ type: PROJECT_REQUEST })

export const addProjectSuccess = (projectAdded: any) =>
  ({ type: ADD_PROJECT_SUCCESS, payload: projectAdded })

export const getProjectsSuccess = (projects: any) =>
  ({ type: GET_PROJECTS_SUCCESS, payload: projects })

export const updateProjectSuccess = (project: any) =>
  ({ type: UPDATE_PROJECT_SUCCESS, payload: project })

export const deleteProjectSuccess = (projectId: number) =>
  ({ type: DELETE_PROJECT_SUCCESS, payload: projectId })

export const projectFailure = (err: any) =>
  ({ type: PROJECT_FAILURE, payload: err })

export const addProject = (
  author: string,
  title: string,
  description: string,
  projectUrl: string,
  imgUrlNotValidated: string,
) => (dispatch: Function) => {
  dispatch(projectRequest())

  function imageExists(url, callback) {
    const img = new Image()
    img.onload = () => { callback(true) }
    img.onerror = () => { callback(false) }
    img.src = url
  }

  function validateImageURL(imageUrl) {
    imageExists(imageUrl, (exists) => {
      // Assign placeholder picture if URL is not valid
      const placeholderImage = isProd ?
      `${STATIC_PATH}/images/chingu-logo.png` :
      `http://localhost:${WDS_PORT}/public/images/chingu-logo.png`

      const imgUrl = exists ? imgUrlNotValidated : placeholderImage
      fetch(ADD_PROJECT_ROUTE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author,
          title,
          description,
          projectUrl,
          imgUrl,
        }),
      })
        .then((res) => {
          if (!res.ok) throw Error(res.statusText)
          return res.json()
        })
        .then((projectSaved) => {
          if (!projectSaved) throw Error('Project not saved.')
          dispatch(addProjectSuccess(projectSaved))
        })
        .catch((err) => {
          if (err) {
            // eslint-disable-next-line no-console
            console.log('Add project error', JSON.stringify(err))
            dispatch(projectFailure(err))
          }
        })
    })
  }

  validateImageURL(imgUrlNotValidated)
}

export const getProjects = () => (dispatch: Function) => {
  dispatch(projectRequest())
  return fetch(GET_PROJECTS_ROUTE, { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((projects) => {
      if (!projects) throw Error('No projects received.')
      dispatch(getProjectsSuccess(projects))
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Get projects error', JSON.stringify(err))
      dispatch(projectFailure(err))
    })
}

// TODO: Add ImageURL
export const editProject = (
  projectToEdit: String,
  title: string,
  description: string,
  projectUrl: string,
) => (dispatch: Function) => {
  dispatch(projectRequest())

  fetch(EDIT_PROJECT_ROUTE(projectToEdit), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
      projectUrl,
    }),
  })
  .then((res) => {
    if (!res.ok) throw Error(res.statusText)
    return res.json()
  })
  .then((projectEdited) => {
    if (!projectEdited) throw Error('Project not saved.')
    dispatch(updateProjectSuccess(projectEdited))
  })
  .catch((err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Edit project error', JSON.stringify(err))
      dispatch(projectFailure(err))
    }
  })
}


export const pinProject = (projectToPin: string, pinnedBy: string) => (dispatch: Function) => {
  dispatch(projectRequest())
  return fetch(PIN_PROJECT_ROUTE(projectToPin, pinnedBy), { method: 'PUT' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((pinnedProject) => {
      if (!pinnedProject) throw Error('No projects received.')
      dispatch(updateProjectSuccess(pinnedProject))
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Get projects error', JSON.stringify(err))
      dispatch(projectFailure(err))
    })
}

export const deleteProject = (projectToDelete: string) => (dispatch: Function) => {
  dispatch(projectRequest())
  return fetch(DELETE_PROJECT_ROUTE(projectToDelete), { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((projectDeleted) => {
      if (!projectDeleted) throw Error('No project deleted.')
      // eslint-disable-next-line
      dispatch(deleteProjectSuccess(projectDeleted._id))
    })
    .catch((err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err)
        dispatch(projectFailure(err))
      }
      return true
    })
}
