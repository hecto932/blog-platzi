import { FETCH_USERS } from '../types/usersTypes'

export const getUsers = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
    const data = await response.json()
    const users = data.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      website: u.website
    }))
  dispatch({
    type: FETCH_USERS,
    payload: users
  })
}