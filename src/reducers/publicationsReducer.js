import {
  PUBLICATIONS_BY_USER,
  PUBLICATIONS_LOADING,
  PUBLICATIONS_ERROR
} from '../types/publicationsTypes';

const INITIAL_STATE = {
  publications: [],
  isLoading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUBLICATIONS_BY_USER:
      return { ...state, publications: action.payload, isLoading: false, error: null }
    case PUBLICATIONS_LOADING:
      return { ...state, isLoading: true }
    case PUBLICATIONS_ERROR:
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state;
  }
};
