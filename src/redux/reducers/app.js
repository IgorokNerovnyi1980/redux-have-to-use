import types from '../types'

const initialState = {
  navMenu: [
    { title: 'home', id: '1', path: '/' },
    { title: 'themes', id: '2', path: '/themes-example' },
    { title: 'profile', id: '3', path: '/user' },
  ],
  activeTab: '1',
  theme: 'base',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      }
    case types.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      }

    default:
      return state
  }
}
