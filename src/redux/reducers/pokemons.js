import types from '../types'

const initialState = {
  list: [],
  single: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POKEMONS:
      return {
        ...state,
        list: action.payload,
      }
    case types.SET_SINGLE_POKEMON:
      return {
        ...state,
        single: action.payload,
      }
    case types.CLEAR_POKEMONS:
      return {
        list: [],
        single: {},
      }

    default:
      return state
  }
}
