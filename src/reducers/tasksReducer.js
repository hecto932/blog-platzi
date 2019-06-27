import {
  TASKS_FETCH,
  TASKS_ERROR,
  TASKS_LOADING,
  TASKS_CHANGE_USER_ID,
  TASKS_CHANGE_TITLE
} from '../types/tasksTypes';

const INITIAL_STATE = {
  tasks: {},
  error: null,
  isLoading: false,
  user_id: 1,
  title: 'placeholder title'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASKS_FETCH:
      return { ...state, tasks: action.payload, isLoading: false, error: null };
    case TASKS_LOADING:
      return { ...state, isLoading: true };
    case TASKS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case TASKS_CHANGE_USER_ID:
      return { ...state, user_id: action.payload };
    case TASKS_CHANGE_TITLE:
      return { ...state, user_id: action.payload };
    default:
      return state;
  }
};
