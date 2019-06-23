const INITIAL_STATE = {
  users: []
};

export default (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload }
    default:
      return state
  }
}