import { pokemonsList, singlePokemon } from '../../api/pokemons'

export const getPokemonList = () => async (dispatch) => {
  try {
    const { data, status } = await pokemonsList()

    if (status === 200) {
      dispatch({ type: 'SET_POKEMONS', payload: data.results })
    }
  } catch (e) {
    console.log('request failed: ', e)
  }
}

export const getPokemonByName = (name) => async (dispatch) => {
  try {
    const { data, status } = await singlePokemon(name)

    if (status === 200) {
      dispatch({ type: 'SET_SINGLE_POKEMON', payload: data })
    }
  } catch (e) {
    console.log('request failed: ', e)
  }
}
