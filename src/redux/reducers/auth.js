import types from '../types'

const initialState = {
  isAuth: false,
  login: '',
  password: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      }
    case types.CHANGE_AUTH_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      }
    case types.CLEAR_INPUT:
      return {
        ...state,
        login: '',
        password: '',
      }

    default:
      return state
  }
}
