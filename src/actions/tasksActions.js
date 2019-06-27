import request from 'request-promise-native'
import { TASKS_FETCH, TASKS_LOADING, TASKS_ERROR } from '../types/tasksTypes'

export const getTasks = () => async (dispatch) => {
  dispatch({
    type: TASKS_LOADING
  })

  try {
    const response = await request({
      method: 'GET',
      uri: `https://jsonplaceholder.typicode.com/todos`,
      json: true
    })

    dispatch({
      type: TASKS_FETCH,
      payload: response
    })
  } catch (err) {
    console.log(`Error - ${err.message}`)
    dispatch({
      type: TASKS_ERROR,
      payload: `Tasks information unavailable`
    })
  }
}

