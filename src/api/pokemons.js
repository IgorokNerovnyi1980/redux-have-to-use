import axios from 'axios'

const routs = {
  list: '/pokemon?limit=10&offset=10',
  single: '/pokemon/',
}

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export const pokemonsList = () => {
  return api.get(routs.list)
}

export const singlePokemon = (name) => {
  return api.get(`${routs.single}${name}`)
}
