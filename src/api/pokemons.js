import axios from 'axios'

const routs = {
  pokemon: '/pokemon/',
}

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export const pokemonsList = (limit = 10, offset = 10) => {
  return api.get(routs.pokemon, {
    params: {
      limit,
      offset,
    },
  })
}

export const singlePokemon = (name) => {
  return api.get(`${routs.pokemon}${name}`)
}
