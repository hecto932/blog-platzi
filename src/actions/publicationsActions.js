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
      payload: response,
      error: null
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
    dispatch({
      type: PUBLICATIONS_ERROR
    });
  }
};

export const getPublicationsByUser = (userIndex) => async (dispatch, getState) => {
  try {
    const { users } = getState().usersReducer
    const userId = users[userIndex].id
    const response = await request({
      url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      method: 'GET',
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
