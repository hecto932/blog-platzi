import {
  PUBLICATIONS_FETCH,
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
    case PUBLICATIONS_FETCH:
      return { ...state, publications: action.payload, isLoading: false }
    case PUBLICATIONS_LOADING:
      return { ...state, isLoading: true }
    case PUBLICATIONS_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
};
