import { takeEvery, call, put } from 'redux-saga/effects'
import { pokemonsList } from '../../api/pokemons'

export function* worker() {
  try {
    const { data, status } = yield call(pokemonsList)

    if (status === 200) {
      yield put({ type: 'SET_POKEMONS', payload: data.results })
    }
  } catch (e) {
    console.log('request failed: ', e)
  }
}

export default function* getPokemons() {
  yield takeEvery('SAGA_GET_POKEMONS', worker)
}
