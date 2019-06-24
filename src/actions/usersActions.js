import request from 'request-promise-native'
import { FETCH_USERS, LOADING, ERROR } from '../types/usersTypes';

export const getUsers = () => async dispatch => {
  try {
    dispatch({
      type: LOADING
    })
    const options = {
      method: 'GET',
      uri: `https://jsonplaceholder.typicode.com/users`,
      json: true
    }
    const response = await request(options);

    dispatch({
      type: FETCH_USERS,
      payload: response
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: `Request failed with statusCode ${err.statusCode}`,
    })
  }
};
