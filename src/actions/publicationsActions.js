import request from 'request-promise-native';

import {
  PUBLICATIONS_LOADING,
  PUBLICATIONS_ERROR,
  PUBLICATIONS_BY_USER,
  PUBLICATIONS_UPDATE
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

export const openClose = (pub_key, com_key) => (dispatch, getState) => {
  console.log(`publicationsActions: ${pub_key} ${com_key}`)
  const { publications } = getState().publicationsReducer
  const selectedPublication = publications[pub_key][com_key]

  const updated = {
    ...selectedPublication,
    open: !selectedPublication.open
  }

  const publicationsUpdate = [...publications]
  publicationsUpdate[pub_key] = [
    ...publications[pub_key]
  ]
  publicationsUpdate[pub_key][com_key] = updated

  dispatch({
    type: PUBLICATIONS_UPDATE,
    payload: publicationsUpdate
  })
}

export const getComments = (pub_key, com_key) => async (dispatch, getState) => {
  const { publications } = getState().publicationsReducer
  const selectedPublication = publications[pub_key][com_key]

  try {
    const response = await request({
      url: `https://jsonplaceholder.typicode.com/comments?postId=${selectedPublication.id}`,
      method: 'GET',
      json: true
    });

    const updated = {
      ...selectedPublication,
      comments: response
    }

    const publicationsUpdate = [...publications]
    publicationsUpdate[pub_key] = [
      ...publications[pub_key]
    ]
    publicationsUpdate[pub_key][com_key] = updated

    dispatch({
      type: PUBLICATIONS_UPDATE,
      payload: publicationsUpdate
    })

  } catch (err) {
    console.log(`Error: ${err.message}`);
    dispatch({
      type: PUBLICATIONS_ERROR,
      payload: `Comments no available`
    });
  }
}