// @flow

import 'isomorphic-fetch'

import {
  ADD_PROJECT_ROUTE,
  GET_PROJECTS_ROUTE,
  // DELETE_PROJECT_ROUTE,
} from '../../shared/routes'

export const PROJECT_REQUEST = 'PROJECT_REQUEST'
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS'
export const PROJECT_FAILURE = 'PROJECT_FAILURE'

export const projectRequest = () => ({ type: PROJECT_REQUEST })
export const addProjectSuccess = (projectAdded: any) =>
  ({ type: ADD_PROJECT_SUCCESS, payload: projectAdded })
export const getProjectsSuccess = (projects: any) =>
  ({ type: GET_PROJECTS_SUCCESS, payload: projects })
export const deleteProjectSuccess = (projectId: number) =>
  ({ type: DELETE_PROJECT_SUCCESS, payload: projectId })
export const projectFailure = () => ({ type: PROJECT_FAILURE })

export const addProject = (
  author: string,
  title: string,
  description: string,
  imgUrl: string,
) => (dispatch: Function) => {
  dispatch(projectRequest())
  fetch(ADD_PROJECT_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author,
      title,
      description,
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
}

export const getProjects = () => (dispatch: Function) => {
  dispatch(projectRequest())
  return fetch(GET_PROJECTS_ROUTE, { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((projects) => {
      if (!projects) throw Error('No books received.')
      dispatch(getProjectsSuccess(projects))
    })
    .catch((err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error('Get projects error', JSON.stringify(err))
        dispatch(projectFailure(err))
      }
    })
}

// export const requestBook = (requestedBook: string, userEmail: string, userName: string) =>
//   (dispatch: Function) => {
//     dispatch(bookRequest())
//     return fetch(REQUEST_BOOK_ROUTE, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         requestedBook,
//         userEmail,
//         userName,
//       }),
//     })
//       .then((res) => {
//         if (!res.ok) throw Error(res.statusText)
//         return res.json()
//       })
//       .then((bookRequested) => {
//         if (!bookRequested) throw Error('No book requested.')
//         dispatch(updateBookSuccess(bookRequested))
//       })
//       .catch((err) => {
//         if (err) {
//           // eslint-disable-next-line no-console
//           console.error(err)
//           dispatch(bookFailure(err))
//         }
//         return true
//       })
//   }

// export const acceptRequest = (bookId: string, requestId: ?string, requestorEmail: ?string) =>
//   (dispatch: Function) => {
//     dispatch(bookRequest())
//     return fetch(ACCEPT_REQUEST_ROUTE, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         bookId,
//         requestId,
//         requestorEmail,
//       }),
//     })
//       .then((res) => {
//         if (!res.ok) throw Error(res.statusText)
//         return res.json()
//       })
//       .then((bookUpdated) => {
//         if (!bookUpdated) throw Error('No book was updated.')
//         dispatch(updateBookSuccess(bookUpdated))
//       })
//       .catch((err) => {
//         if (err) {
//           // eslint-disable-next-line no-console
//           console.error(err)
//           dispatch(bookFailure(err))
//         }
//         return true
//       })
//   }

// export const rejectRequest = (bookId: string, requestId: string) =>
//   (dispatch: Function) => {
//     dispatch(bookRequest())
//     return fetch(REJECT_REQUEST_ROUTE, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         bookId,
//         requestId,
//       }),
//     })
//       .then((res) => {
//         if (!res.ok) throw Error(res.statusText)
//         return res.json()
//       })
//       .then((bookUpdated) => {
//         if (!bookUpdated) throw Error('No book was updated.')
//         dispatch(updateBookSuccess(bookUpdated))
//       })
//       .catch((err) => {
//         if (err) {
//           // eslint-disable-next-line no-console
//           console.error(err)
//           dispatch(bookFailure(err))
//         }
//         return true
//       })
//   }

// export const deleteBook = (bookToDelete: string) => (dispatch: Function) => {
//   dispatch(bookRequest())
//   return fetch(`${DELETE_BOOK_ROUTE}/${bookToDelete}`, { method: 'DELETE' })
//     .then((res) => {
//       if (!res.ok) throw Error(res.statusText)
//       return res.json()
//     })
//     .then((bookDeleted) => {
//       if (!bookDeleted) throw Error('No book deleted.')
//       // eslint-disable-next-line
//       dispatch(deleteBookSuccess(bookDeleted._id))
//     })
//     .catch((err) => {
//       if (err) {
//         // eslint-disable-next-line no-console
//         console.error(err)
//         dispatch(bookFailure(err))
//       }
//       return true
//     })
// }
