import { FETCH_USERS, LOADING, ERROR } from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload, isLoading: false };
    case LOADING:
      return { ...state, isLoading: true };
    case ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
