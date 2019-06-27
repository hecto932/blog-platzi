import {
  PUBLICATIONS_BY_USER,
  PUBLICATIONS_LOADING,
  PUBLICATIONS_ERROR,
  PUBLICATIONS_UPDATE,
  PUBLICATIONS_COMMENTS_LOADING,
  PUBLICATIONS_COMMENTS_ERROR
} from '../types/publicationsTypes';

const INITIAL_STATE = {
  publications: [],
  isLoading: false,
  error: null,
  isLoadingComments: false,
  error_comments: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUBLICATIONS_BY_USER:
      return { ...state, publications: action.payload, isLoading: false, error: null }
    case PUBLICATIONS_UPDATE:
      return { ...state, publications: action.payload, isLoading: false, error: null, isLoadingComments: false }
    case PUBLICATIONS_LOADING:
      return { ...state, isLoading: true }
    case PUBLICATIONS_ERROR:
      return { ...state, error: action.payload, isLoading: false }
    case PUBLICATIONS_COMMENTS_LOADING:
      return { ...state, isLoadingComments: true }
    case PUBLICATIONS_COMMENTS_ERROR:
        return { ...state, error_comments: action.payload, isLoadingComments: false }
    default:
      return state;
  }
};
