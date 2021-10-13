import { combineReducers } from 'redux'
import app from './app'
import auth from './auth'
import user from './user'
import pokemons from './pokemons'

export default combineReducers({
  app,
  auth,
  user,
  pokemons,
})
