import { takeEvery, call, put } from 'redux-saga/effects'
import { singlePokemon } from '../../api/pokemons'

export function* worker({ name }) {
  try {
    const { data, status } = yield call(singlePokemon, name)

    if (status === 200) {
      yield put({ type: 'SET_SINGLE_POKEMON', payload: data })
    }
  } catch (e) {
    console.log('request failed: ', e)
  }
}

export default function* getPokemons() {
  yield takeEvery('SAGA_GET_SINGLE_POKEMON', worker)
}
