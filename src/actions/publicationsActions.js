import request from 'request-promise-native';

import {
  PUBLICATIONS_FETCH,
  PUBLICATIONS_LOADING,
  PUBLICATIONS_ERROR,
  PUBLICATIONS_BY_USER
} from '../types/publicationsTypes';
import { USERS_FETCH } from '../types/usersTypes'


export const getPublicationsByUser = (userIndex) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PUBLICATIONS_LOADING
    })
    const { users } = getState().usersReducer
    const { publications } = getState().publicationsReducer
    const userId = users[userIndex].id

    const response = await request({
      url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      method: 'GET',
      json: true
    });

    console.log(`publications`, publications)
    console.log(`response`, response)
    const newPublications = [
      ...publications,
      response
    ]

    const lastPublicationKey = newPublications.length - 1
    const usersUpdates = [...users]
    usersUpdates[userIndex] = {
      ...users[userIndex],
      lastPublicationKey
    }

    dispatch({
      type: USERS_FETCH,
      payload: usersUpdates
    })

    dispatch({
      type: PUBLICATIONS_BY_USER,
      payload: newPublications
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
    dispatch({
      type: PUBLICATIONS_ERROR
    });
  }
};
