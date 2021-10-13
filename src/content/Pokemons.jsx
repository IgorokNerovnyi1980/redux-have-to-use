import React from 'react'
import styled from 'styled-components'
import usePokemons from '../hooks/usePokemons'
import Button from '../components/Button'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  .pokemon--description {
    margin-top: 1rem;
    :first-child {
      margin-top: none;
    }
  }
`
const FlexWrp = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`
const Title = styled.p`
  font-size: ${(p) => p.theme.h2};
`
const Avatar = styled.img`
  width: 10rem;
  margin-right: ${(p) => p.theme.basePad};
  border-radius: 50%;
`

const Pokemons = () => {
  const { list, pokemon, getSinglePokemon } = usePokemons()

  return (
    <Wrapper>
      {list?.length > 0 ? (
        <>
          <Title>Pokemons</Title>
          <FlexWrp>
            {list.map((item) => (
              <Button
                key={item.name}
                title={item.name}
                width="20%"
                onClick={() => getSinglePokemon(item.name)}
              />
            ))}
          </FlexWrp>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {pokemon?.hasOwnProperty('name') && (
        <div style={{ marginTop: '2rem' }}>
          <Title>{pokemon.name}</Title>
          <FlexWrp>
            <Avatar
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name}_front`}
            />
            <div>
              <p className="pokemon--description">
                base_experience: <strong>{pokemon.base_experience}</strong>
              </p>
              <p className="pokemon--description">
                height: <strong>{pokemon.height}</strong>
              </p>
              <p className="pokemon--description">
                weight: <strong>{pokemon.weight}</strong>
              </p>
            </div>
          </FlexWrp>
        </div>
      )}
    </Wrapper>
  )
}

export default Pokemons
