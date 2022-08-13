const initialState = {
  fetching: false,
  payload: {},
  response: {}
}
const msg = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, response: action.response }
    case 'DECREASE':
      return { ...state, response: action.response }
    default:
      return { ...state }
  }
}

export default msg
