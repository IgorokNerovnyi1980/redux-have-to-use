import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPokemonList,
  getPokemonByName,
} from '../redux/actions/pokemon.action'

export default () => {
  const dispatch = useDispatch()
  const list = useSelector((s) => s.pokemons.list)
  const pokemon = useSelector((s) => s.pokemons.single)

  const getSinglePokemon = (name) => {
    getPokemonByName(name)(dispatch)
  }

  useEffect(() => {
    getPokemonList()(dispatch)
    return () => dispatch({ type: 'CLEAR_POKEMONS' })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return {
    list,
    pokemon,
    getSinglePokemon,
  }
}
