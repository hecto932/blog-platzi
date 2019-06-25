import { USERS_FETCH, USERS_LOADING, USERS_ERROR } from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case USERS_FETCH:
      return { ...state, users: action.payload, isLoading: false };
    case USERS_LOADING:
      return { ...state, isLoading: true };
    case USERS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
