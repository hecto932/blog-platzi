import request from 'request-promise-native';
import { USERS_FETCH, USERS_LOADING, USERS_ERROR } from '../types/usersTypes';

export const getUsers = () => async dispatch => {
  try {
    dispatch({
      type: USERS_LOADING
    });
    const options = {
      method: 'GET',
      uri: `https://jsonplaceholder.typicode.com/users`,
      json: true
    };
    const response = await request(options);

    dispatch({
      type: USERS_FETCH,
      payload: response
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: `User information no available`
    });
  }
};
