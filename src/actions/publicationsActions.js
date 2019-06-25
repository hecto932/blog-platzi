import request from 'request-promise-native'

export const getPublications = () => async (dispatch) => {
  try {
    const response = await request({
      method: 'GET',
      uri: `https://jsonplaceholder.typicode.com/posts`,
      json: true
    })
    dispatch({
      type: 'FETCH_PUBLICATIONS',
      payload: response
    })
  } catch(err) {
    
  }
}