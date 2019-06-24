import { FETCH_USERS, LOADING, ERROR } from '../types/usersTypes';

export const getUsers = () => async dispatch => {
  try {
    dispatch({
      type: LOADING
    })
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    });
    const users = await response.json();
    dispatch({
      type: FETCH_USERS,
      payload: users
    });
  } catch (err) {
    console.error(err.message)
    dispatch({
      type: ERROR,
      payload: err.message
    })
  }
};
