import { FETCH_USERS } from '../types/usersTypes';

export const getUsers = () => async dispatch => {
  try {
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
  }
};
