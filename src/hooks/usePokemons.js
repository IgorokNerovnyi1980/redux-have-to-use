import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
  const dispatch = useDispatch()
  const list = useSelector((s) => s.pokemons.list)
  const pokemon = useSelector((s) => s.pokemons.single)

  const getSinglePokemon = (name) => {
    dispatch({ type: 'SAGA_GET_SINGLE_POKEMON', name })
  }

  useEffect(() => {
    dispatch({ type: 'SAGA_GET_POKEMONS' })
    return () => dispatch({ type: 'CLEAR_POKEMONS' })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return {
    list,
    pokemon,
    getSinglePokemon,
  }
}
