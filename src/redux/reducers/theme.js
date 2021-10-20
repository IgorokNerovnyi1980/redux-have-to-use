import types from '../types'

const initialState = 'base'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_THEME:
      return action.theme

    default:
      return state
  }
}
