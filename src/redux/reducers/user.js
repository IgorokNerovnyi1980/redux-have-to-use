import types from '../types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PROFILE:
      return {
        ...action.profile,
      }

    default:
      return state
  }
}
