import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import publicationsReducer from './publicationsReducer'

export default combineReducers({
  usersReducer,
  publicationsReducer
})