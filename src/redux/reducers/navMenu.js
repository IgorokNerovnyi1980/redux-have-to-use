const initialState = [
  { title: 'home', id: '1', path: '/home' },
  { title: 'themes', id: '2', path: '/themes-example' },
  { title: 'profile', id: '3', path: '/user' },
  { title: 'api', id: '4', path: '/poke-api' },
]

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
