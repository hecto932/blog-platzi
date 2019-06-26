import request from 'request-promise-native';

import {
  PUBLICATIONS_LOADING,
  PUBLICATIONS_ERROR,
  PUBLICATIONS_BY_USER,
  PUBLICATIONS_OPEN_CLOSE
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

    const newReponse = response.map((publication) => ({
      ...publication,
      comments: [],
      open: false
    }))

    const newPublications = [
      ...publications,
      newReponse
    ]

    dispatch({
      type: PUBLICATIONS_BY_USER,
      payload: newPublications
    });

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
  } catch (err) {
    console.log(`Error: ${err.message}`);
    dispatch({
      type: PUBLICATIONS_ERROR,
      payload: `Publications no available`
    });
  }
};

export const openClose = (pub_key, com_key) => (dispatch) => {
  console.log(pub_key, com_key)
}