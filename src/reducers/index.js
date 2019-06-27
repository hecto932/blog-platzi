import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import publicationsReducer from './publicationsReducer'
import tasksReducer from './tasksReducer'

export default combineReducers({
  usersReducer,
  publicationsReducer,
  tasksReducer
})