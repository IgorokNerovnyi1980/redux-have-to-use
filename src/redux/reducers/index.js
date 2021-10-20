import { combineReducers } from 'redux'
import theme from './theme'
import navMenu from './navMenu'
import auth from './auth'
import user from './user'
import pokemons from './pokemons'

export default combineReducers({
  theme,
  navMenu,
  auth,
  user,
  pokemons,
})
