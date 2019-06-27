import request from 'request-promise-native';
import {
  TASKS_FETCH,
  TASKS_LOADING,
  TASKS_ERROR,
  TASKS_CHANGE_USER_ID,
  TASKS_CHANGE_TITLE
} from '../types/tasksTypes';

export const getTasks = () => async dispatch => {
  dispatch({
    type: TASKS_LOADING
  });

  try {
    const response = await request({
      method: 'GET',
      uri: `https://jsonplaceholder.typicode.com/todos`,
      json: true
    });

    const tasks = {};
    response.map(
      task =>
        (tasks[task.userId] = {
          ...tasks[task.userId],
          [task.id]: {
            ...task
          }
        })
    );

    dispatch({
      type: TASKS_FETCH,
      payload: tasks
    });
  } catch (err) {
    console.log(`Error - ${err.message}`);
    dispatch({
      type: TASKS_ERROR,
      payload: `Tasks information unavailable`
    });
  }
};

export const changeUserId = userId => dispatch => {
  console.log(`changeUserId`);
  dispatch({
    type: TASKS_CHANGE_USER_ID,
    payload: userId
  });
};

export const changeTitle = title => dispatch => {
  console.log(`changeTitle`);
  dispatch({
    type: TASKS_CHANGE_TITLE,
    payload: title
  });
};
