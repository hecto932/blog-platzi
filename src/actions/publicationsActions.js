import request from 'request-promise-native';

import {
  PUBLICATIONS_FETCH,
  PUBLICATIONS_LOADING,
  PUBLICATIONS_ERROR
} from '../types/publicationsTypes';

export const getPublications = () => async dispatch => {
  try {
    dispatch({
      type: PUBLICATIONS_LOADING
    });
    const response = await request({
      method: 'GET',
      uri: `https://jsonplaceholder.typicode.com/posts`,
      json: true
    });
    dispatch({
      type: PUBLICATIONS_FETCH,
      payload: response
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
    dispatch({
      type: PUBLICATIONS_ERROR
    });
  }
};
