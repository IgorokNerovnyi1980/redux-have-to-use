import { all } from 'redux-saga/effects'
import getPokemons from './getPokemonsList'
import getPokemon from './getPokemon'

export default function* rootSaga() {
  yield all([getPokemons(), getPokemon()])
}
