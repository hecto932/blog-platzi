import { TASKS_FETCH, TASKS_ERROR, TASKS_LOADING } from '../types/tasksTypes'

const INITIAL_STATE = {
  tasks: {},
  error: null,
  isLoading: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TASKS_FETCH:
      return { ...state, tasks: action.payload, isLoading: false, error: null }
    case TASKS_LOADING:
      return { ...state, isLoading: true }
    case TASKS_ERROR:
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state
  }
}
