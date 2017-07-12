// import action types and reducer
import userReducer from './user'
import * as actions from '../actions/userActions'

describe('User reducer tests', () => {
  test('Update logged boolean when user logs in', () => {
    const stateBefore = { logged: false }
    const stateAfter = { logged: true }
    const action = actions.loginUser()
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Update logged boolean when user logs out', () => {
    const stateBefore = { logged: true }
    const stateAfter = { logged: false }
    const action = actions.logoutUser()
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Updates email', () => {
    const stateBefore = { email: '' }
    const stateAfter = { email: 'amazinguser@emailservice.com' }
    const action = actions.updateEmail('amazinguser@emailservice.com')
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Updates username', () => {
    const stateBefore = { userName: 'ChuckNorris17' }
    const stateAfter = { userName: 'DirtyPeasant' }
    const action = actions.updateUsername('DirtyPeasant')
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Updates user\'s full name', () => {
    const stateBefore = { fullName: '' }
    const stateAfter = { fullName: 'Michael Scott' }
    const action = actions.updateFullname('Michael Scott')
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Updates user\'s country', () => {
    const stateBefore = { country: 'Burkina Faso' }
    const stateAfter = { country: 'Canada' }
    const action = actions.updateCountry('Canada')
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Updates user\'s state', () => {
    const stateBefore = { state: '' }
    const stateAfter = { state: 'British Columbia' }
    const action = actions.updateState('British Columbia')
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Updates user\'s city', () => {
    const stateBefore = { city: 'Montreal', state: 'Quebec' }
    const stateAfter = { city: 'Vancouver', state: 'Quebec' }
    const action = actions.updateCity('Vancouver')
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Adds project object to projects array', () => {
    const stateBefore = {
      userName: 'MichaelScottDF',
      projects: [
        { projectName: 'Dunder Mifflin Chat', Author: 'Michael Scott' },
      ],
    }
    const stateAfter = {
      userName: 'MichaelScottDF',
      projects: [
        { projectName: 'Dunder Mifflin Chat', Author: 'Michael Scott' },
        { projectName: 'Twitter Clone', Author: 'Michael Scott' },
      ],
    }
    const action = actions.addProject(
      { projectName: 'Twitter Clone', Author: 'Michael Scott' },
    )
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Removes project object from projects array', () => {
    const stateBefore = {
      userName: 'MichaelScottDF',
      projects: [
        { projectName: 'Twitter Clone', Author: 'Michael Scott' },
        { projectName: 'Dunder Mifflin Chat', Author: 'Michael Scott' },
      ],
    }
    const stateAfter = {
      userName: 'MichaelScottDF',
      projects: [
        { projectName: 'Dunder Mifflin Chat', Author: 'Michael Scott' },
      ],
    }
    const action = actions.removeProject(0)
    expect(userReducer(stateBefore, action)).toEqual(stateAfter)
  })

  test('Unknown action returns state', () => {
    const stateBefore = { logged: false, userName: 'ChuckNorris17', country: 'Canada' }
    const action = 'NON_EXISTENT_ACTION'
    expect(userReducer(stateBefore, action)).toEqual(stateBefore)
  })
})
